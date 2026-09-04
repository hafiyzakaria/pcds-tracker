#!/usr/bin/env node
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const UNKNOWN_VALUES = new Set(["Not disclosed"]);
const THIN_MILESTONE_THRESHOLD = 4;
const LIMITED_SOURCE_THRESHOLD = 3;
const OVERVIEW_ID = "overview";

const OFFICIAL_HOST_SUFFIXES = [
  ".gov.my",
  ".sarawak.gov.my",
  "sarawakenergy.com",
  "petros.com.my",
  "mysarawakmetro.com",
  "recoda.com.my",
  "bintuluport.com.my",
  "besarawak.com",
  "businesseventssarawak.com",
  "unesco.org",
  "besra.com",
  "bioverde.com.my",
  "ptkhn.com",
  "samsungena.com",
  "sbc.org.my",
  "ysiss.edu.my",
  "zecon.com.my",
  "petronas.com",
  "chitose-bio.com",
];

const FLAG_LABELS = {
  unknownValue: "unknown value",
  thinMilestones: "thin milestones",
  limitedSources: "limited sources",
  noPrimaryLikeSource: "no primary-like source",
  planning: "Planning",
};

function printUsage() {
  console.log(`Usage: node scripts/audit-inventory.mjs [repoRoot] [options]

Rank live (non-overview) PCDS 2030 tracker cards by audit need.

Options:
  --limit <n>       Show only the first n ranked rows
  --status <label>  Restrict to an exact dashboard status, e.g. Planning
  --json            Print JSON instead of a markdown table
  --help            Show this help

Scoring (one point each): unknown value, thin milestones (<${THIN_MILESTONE_THRESHOLD}),
limited sources (<${LIMITED_SOURCE_THRESHOLD}), no primary-like source, Planning.
`);
}

function parseArgs(argv) {
  const options = {
    repoRoot: ".",
    limit: null,
    status: null,
    json: false,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--help" || arg === "-h") {
      options.help = true;
      continue;
    }
    if (arg === "--json") {
      options.json = true;
      continue;
    }
    if (arg === "--limit" || arg === "--status") {
      const value = argv[index + 1];
      if (value === undefined || value.startsWith("--")) {
        throw new Error(`${arg} requires a value.`);
      }
      index += 1;
      if (arg === "--limit") {
        const parsed = Number(value);
        if (!Number.isInteger(parsed) || parsed < 1) {
          throw new Error("--limit must be a positive integer.");
        }
        options.limit = parsed;
      } else {
        options.status = value;
      }
      continue;
    }
    if (arg.startsWith("--")) {
      throw new Error(`Unknown option: ${arg}`);
    }
    options.repoRoot = arg;
  }

  return options;
}

function hostnameFromUrl(url) {
  try {
    return new URL(url).hostname.toLowerCase();
  } catch {
    return "";
  }
}

function isPrimaryLikeHost(hostname) {
  if (!hostname) return false;
  return OFFICIAL_HOST_SUFFIXES.some((suffix) => {
    const needle = suffix.startsWith(".") ? suffix.slice(1) : suffix;
    return hostname === needle || hostname.endsWith(`.${needle}`);
  });
}

function flattenLiveProjects(sectors) {
  return sectors.flatMap((sector) => {
    if (!sector || sector.isOverview || sector.id === OVERVIEW_ID) return [];
    if (!Array.isArray(sector.projects)) return [];
    return sector.projects.map((project) => ({
      categoryId: sector.id,
      categoryName: sector.name,
      project,
    }));
  });
}

function scoreProject(entry) {
  const { project, categoryId, categoryName } = entry;
  const milestones = Array.isArray(project.milestones) ? project.milestones : [];
  const sources = Array.isArray(project.sources) ? project.sources : [];
  const value = typeof project.value === "string" ? project.value.trim() : "";
  const hasPrimaryLikeSource = sources.some((source) =>
    isPrimaryLikeHost(hostnameFromUrl(source?.url))
  );

  const flags = {
    unknownValue: UNKNOWN_VALUES.has(value),
    thinMilestones: milestones.length < THIN_MILESTONE_THRESHOLD,
    limitedSources: sources.length < LIMITED_SOURCE_THRESHOLD,
    noPrimaryLikeSource: !hasPrimaryLikeSource,
    planning: project.status === "Planning",
  };

  const flagList = Object.entries(flags)
    .filter(([, active]) => active)
    .map(([key]) => FLAG_LABELS[key]);

  return {
    name: project.name,
    displayName: project.displayName || null,
    categoryId,
    categoryName,
    status: project.status,
    value,
    milestoneCount: milestones.length,
    sourceCount: sources.length,
    hasPrimaryLikeSource,
    flags: flagList,
    score: flagList.length,
  };
}

function compareRows(left, right) {
  if (right.score !== left.score) return right.score - left.score;
  return left.name.localeCompare(right.name);
}

function escapeMarkdownCell(value) {
  return String(value ?? "").replace(/\|/g, "\\|");
}

function markdownRow(cells) {
  return `| ${cells.map((cell) => escapeMarkdownCell(cell)).join(" | ")} |`;
}

function printMarkdown(rows, { liveCount, filteredCount, limit, status }) {
  const shown = rows.length;
  const scope = status ? `status ${status}` : "all live projects";
  console.log("# PCDS 2030 audit inventory");
  console.log("");
  console.log(
    `Live projects: ${liveCount}. Ranked ${filteredCount} in scope (${scope}). Showing ${shown}${limit ? ` (limit ${limit})` : ""}.`
  );
  console.log("");
  console.log(
    markdownRow([
      "Score",
      "Project",
      "Category",
      "Status",
      "Value",
      "Milestones",
      "Sources",
      "Primary-like",
      "Flags",
    ])
  );
  console.log("| ---: | --- | --- | --- | --- | ---: | ---: | --- | --- |");

  if (rows.length === 0) {
    console.log(
      markdownRow(["", "_No matching live projects._", "", "", "", "", "", "", ""])
    );
    return;
  }

  for (const row of rows) {
    console.log(
      markdownRow([
        row.score,
        row.name,
        row.categoryName,
        row.status,
        row.value,
        row.milestoneCount,
        row.sourceCount,
        row.hasPrimaryLikeSource ? "yes" : "no",
        row.flags.join(", ") || "—",
      ])
    );
  }
}

async function loadSectors(repoRoot) {
  const trackerDataPath = resolve(repoRoot, "src/trackerData.js");
  if (!existsSync(trackerDataPath)) {
    throw new Error(`Could not find src/trackerData.js under ${resolve(repoRoot)}.`);
  }
  const module = await import(pathToFileURL(trackerDataPath).href);
  if (!Array.isArray(module.SECTORS)) {
    throw new Error("src/trackerData.js did not export a SECTORS array.");
  }
  return module.SECTORS;
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printUsage();
    return;
  }

  const sectors = await loadSectors(options.repoRoot);
  const liveRows = flattenLiveProjects(sectors).map(scoreProject);
  const scopedRows = options.status
    ? liveRows.filter((row) => row.status === options.status)
    : liveRows;
  const ranked = [...scopedRows].sort(compareRows);
  const rows = options.limit ? ranked.slice(0, options.limit) : ranked;

  if (options.json) {
    console.log(
      JSON.stringify(
        {
          liveCount: liveRows.length,
          filteredCount: scopedRows.length,
          shownCount: rows.length,
          limit: options.limit,
          status: options.status,
          officialHostSuffixes: OFFICIAL_HOST_SUFFIXES,
          projects: rows,
        },
        null,
        2
      )
    );
    return;
  }

  printMarkdown(rows, {
    liveCount: liveRows.length,
    filteredCount: scopedRows.length,
    limit: options.limit,
    status: options.status,
  });
}

main().catch((caught) => {
  console.error(`Audit inventory could not run: ${caught.message}`);
  process.exitCode = 1;
});
