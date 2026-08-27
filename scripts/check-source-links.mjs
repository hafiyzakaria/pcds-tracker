#!/usr/bin/env node
import { SECTORS } from "../src/trackerData.js";
import { getUpdateHistory } from "../src/updateHistory.js";

const DEFAULT_CONCURRENCY = 8;
const DEFAULT_TIMEOUT_MS = 12_000;
const USER_AGENT = "PCDS2030SourceChecker/1.0 (+https://pcds2030.com)";

function readPositiveInteger(name, fallback, { maximum } = {}) {
  const rawValue = process.env[name];
  if (rawValue === undefined) return fallback;

  const value = Number(rawValue);
  if (!Number.isInteger(value) || value < 1 || (maximum && value > maximum)) {
    const range = maximum ? ` between 1 and ${maximum}` : " greater than zero";
    throw new Error(`${name} must be an integer${range}.`);
  }

  return value;
}

function addSource(sourceMap, source, reference) {
  if (!source || typeof source.url !== "string") {
    throw new Error(`Missing source URL for ${reference}.`);
  }

  const url = new URL(source.url);
  if (url.protocol !== "https:") {
    throw new Error(`Source URL must use HTTPS for ${reference}: ${source.url}`);
  }

  const existing = sourceMap.get(url.href);
  if (existing) {
    existing.references.add(reference);
    return;
  }

  sourceMap.set(url.href, {
    url: url.href,
    references: new Set([reference]),
  });
}

function collectSourceLinks() {
  const sourceMap = new Map();
  let projectCount = 0;

  for (const sector of SECTORS) {
    for (const project of sector.projects || []) {
      projectCount += 1;
      for (const source of project.sources || []) {
        addSource(sourceMap, source, `Project: ${project.name}`);
      }
    }
  }

  const updates = getUpdateHistory("en");
  for (const update of updates) {
    addSource(
      sourceMap,
      update.source,
      `Update: ${update.date} · ${update.projectName}`
    );
  }

  return {
    links: [...sourceMap.values()]
      .map((entry) => ({
        ...entry,
        references: [...entry.references].sort(),
      }))
      .sort((first, second) => first.url.localeCompare(second.url)),
    projectCount,
    updateCount: updates.length,
  };
}

async function checkSourceLink(entry, timeoutMs) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  const startedAt = Date.now();

  try {
    const response = await fetch(entry.url, {
      headers: {
        accept: "text/html,application/xhtml+xml,application/json;q=0.8,*/*;q=0.5",
        "user-agent": USER_AGENT,
      },
      redirect: "follow",
      signal: controller.signal,
    });

    if (response.body) {
      await response.body.cancel().catch(() => {});
    }

    return {
      ...entry,
      durationMs: Date.now() - startedAt,
      finalUrl: response.url,
      ok: response.status >= 200 && response.status < 400,
      status: response.status,
      type: "http",
    };
  } catch (caught) {
    const timedOut = caught?.name === "AbortError";
    const causeCode = caught?.cause?.code;
    const causeMessage = caught?.cause?.message;
    const networkMessage = [
      caught?.message || String(caught),
      causeCode ? `(${causeCode})` : "",
      causeMessage && causeMessage !== caught?.message ? causeMessage : "",
    ]
      .filter(Boolean)
      .join(" ");
    return {
      ...entry,
      durationMs: Date.now() - startedAt,
      error: timedOut ? `Timed out after ${timeoutMs}ms` : networkMessage,
      ok: false,
      type: timedOut ? "timeout" : "network",
    };
  } finally {
    clearTimeout(timeoutId);
  }
}

async function checkInParallel(links, concurrency, timeoutMs) {
  const results = new Array(links.length);
  let nextIndex = 0;
  let completed = 0;

  async function worker() {
    while (nextIndex < links.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await checkSourceLink(links[index], timeoutMs);
      completed += 1;

      if (completed % 25 === 0 || completed === links.length) {
        console.log(`Checked ${completed}/${links.length} links...`);
      }
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, links.length) }, () => worker())
  );
  return results;
}

function formatReferences(references) {
  const visible = references.slice(0, 3);
  const remaining = references.length - visible.length;
  return remaining > 0 ? `${visible.join("; ")} (+${remaining} more)` : visible.join("; ");
}

function printFinding(result) {
  const outcome =
    result.type === "http" ? `HTTP ${result.status}` : result.error;
  console.log(`- [${outcome}] ${result.url}`);
  if (result.finalUrl && result.finalUrl !== result.url) {
    console.log(`  Final URL: ${result.finalUrl}`);
  }
  console.log(`  Referenced by: ${formatReferences(result.references)}`);
}

function printRedirect(result) {
  console.log(`- ${result.url}`);
  console.log(`  Final URL: ${result.finalUrl}`);
  console.log(`  Referenced by: ${formatReferences(result.references)}`);
}

async function main() {
  const concurrency = readPositiveInteger(
    "SOURCE_LINK_CHECK_CONCURRENCY",
    DEFAULT_CONCURRENCY,
    { maximum: 20 }
  );
  const timeoutMs = readPositiveInteger(
    "SOURCE_LINK_CHECK_TIMEOUT_MS",
    DEFAULT_TIMEOUT_MS,
    { maximum: 60_000 }
  );
  const { links, projectCount, updateCount } = collectSourceLinks();
  if (links.length === 0) {
    throw new Error("No public source links were found to check.");
  }

  console.log(
    `Checking ${links.length} unique source links across ${projectCount} projects and ${updateCount} updates.`
  );
  console.log(
    `Report-only mode: ${concurrency} concurrent requests, ${timeoutMs}ms timeout per link.`
  );

  const results = await checkInParallel(links, concurrency, timeoutMs);
  const reachable = results.filter((result) => result.ok);
  const findings = results.filter((result) => !result.ok);
  const redirects = reachable.filter(
    (result) => result.finalUrl && result.finalUrl !== result.url
  );
  const httpFindings = findings.filter((result) => result.type === "http");
  const timeoutFindings = findings.filter((result) => result.type === "timeout");
  const networkFindings = findings.filter((result) => result.type === "network");

  console.log("\nSource-link summary:");
  console.log(`- Reachable (HTTP 2xx/3xx): ${reachable.length}`);
  console.log(`- Redirected to a different final URL: ${redirects.length}`);
  console.log(`- HTTP responses needing review: ${httpFindings.length}`);
  console.log(`- Timeouts needing review: ${timeoutFindings.length}`);
  console.log(`- Network errors needing review: ${networkFindings.length}`);

  if (redirects.length > 0) {
    console.log("\nRedirects observed:");
    redirects.forEach(printRedirect);
  }

  if (findings.length > 0) {
    console.log("\nReview these links manually before changing or removing a source:");
    findings.forEach(printFinding);
  } else {
    console.log("\nNo source links need review.");
  }

  console.log(
    "\nReport-only check complete. Link findings do not fail this command or a release."
  );
}

main().catch((caught) => {
  console.error(`Source-link checker could not run: ${caught.message}`);
  process.exitCode = 1;
});
