#!/usr/bin/env node
import { mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import { build } from "vite";

const mode = process.argv[2] || "production";
const projectRoot = resolve(".");
const distIndexPath = resolve("dist/index.html");
const serverOutDir = await mkdtemp(join(tmpdir(), "pcds-tracker-prerender-"));

try {
  await build({
    root: projectRoot,
    mode,
    ssr: {
      noExternal: ["react", "react-dom"],
    },
    build: {
      ssr: resolve("src/entry-server.jsx"),
      outDir: serverOutDir,
      emptyOutDir: true,
    },
  });

  const outputFiles = await readdir(serverOutDir);
  const serverEntry = outputFiles.find((file) => file.endsWith(".js"));

  if (!serverEntry) {
    throw new Error("Prerender server entry was not generated.");
  }

  const { render } = await import(pathToFileURL(join(serverOutDir, serverEntry)).href);
  const appHtml = render();
  const template = await readFile(distIndexPath, "utf8");
  const rootMarker = '<div id="root"></div>';

  if (!template.includes(rootMarker)) {
    throw new Error(`Could not find ${rootMarker} in ${distIndexPath}.`);
  }

  const output = template.replace(rootMarker, `<div id="root">${appHtml}</div>`);
  await writeFile(distIndexPath, output);

  console.log(`Prerendered ${mode} HTML into ${distIndexPath}.`);
} finally {
  await rm(serverOutDir, { recursive: true, force: true });
}
