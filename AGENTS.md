# Agent Instructions

This repository is the PCDS 2030 Project Tracker, a Vite and React static site.

## Working Rules

- Do not redesign the website unless the user explicitly asks for a redesign.
- Preserve existing functionality unless a requested workflow or bug fix requires a change.
- Keep changes small, reviewable, and scoped to the requested task.
- Prefer the existing Vite and React conventions already used in the project.
- Do not introduce new dependencies unless there is a clear maintenance benefit.
- Treat `README.md`, `docs/product.md`, `docs/design.md`, and `docs/backlog.md` as the project memory.

## Branch Workflow

- `preview` is the normal development branch.
- `main` is the production branch.
- Preview deploys to `https://preview.pcds2030.com` through Vercel.
- Production deploys to `https://pcds2030.com` through GitHub Pages.
- Push work to `preview` first.
- Merge or promote to `main` only after the preview site has been reviewed and approved.

## Local Commands

- Install dependencies with `npm install` or `npm ci`.
- Run local development with `npm run dev`.
- Run lint checks with `npm run lint`.
- Build production with `npm run build`.
- Build preview with `npm run build:preview`.
- Serve a built site with `npm run preview`.

## Documentation Expectations

- Update docs when changing product behavior, design direction, deployment workflow, or data structure.
- Put product intent and audience changes in `docs/product.md`.
- Put visual and interaction guidance in `docs/design.md`.
- Put known issues and recommended next tasks in `docs/backlog.md`.
- Keep README focused on setup, workflow, and links to deeper docs.

## Current Architecture Notes

- Most UI is currently implemented in `src/App.jsx`.
- Project data is currently hand-maintained in `src/trackerData.js`.
- Environment detection lives in `src/environment.js`.
- Favicon and custom-domain build helpers live in `scripts/`.

## Safety Notes

- Do not edit generated `dist/` output directly.
- Do not edit DNS, Vercel, or GitHub Pages settings unless the user explicitly asks.
- Do not remove PCDS source PDFs or public assets without user approval.
