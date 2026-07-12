# PCDS 2030 Project Tracker

A Vite and React tracker for Sarawak PCDS 2030 projects.

The site is an independent, public, scan-first tracker for major Sarawak development projects, their current status, next visible milestone, and public evidence.

## Documentation

- [Product notes](docs/product.md)
- [Design notes](docs/design.md)
- [Backlog](docs/backlog.md)
- [Agent instructions](AGENTS.md)

These docs are the project memory. Keeping project context in files instead of relying on old chat history is recommended because future Codex sessions can read the same source of truth. This is common in professional software projects.

## Current Structure

```txt
src/
  App.jsx              Main React app and most UI components
  entry-server.jsx     Server-render entry used to pre-render the initial HTML
  environment.js      Development, Preview, and Production detection
  trackerData.js      Hand-maintained tracker data
  main.jsx            React entry point
  index.css           Minimal global CSS
scripts/
  write-cname.mjs                 Writes the correct custom domain into dist/CNAME
  prerender.mjs                   Pre-renders the React app into dist/index.html
  local-preview.mjs               Starts, stops, and checks a local preview server
  generate-environment-favicons.mjs
public/
  favicon and touch-icon assets
docs/
  product, design, and backlog documentation
.github/workflows/
  deploy.yml          GitHub Pages production deployment
```

The app is intentionally simple: one Vite app, no backend, no database, and no unnecessary runtime dependencies.

Production and Preview builds pre-render the initial React view into `dist/index.html`, then
hydrate it in the browser. This keeps the existing interactions while making headings, project
content, and explanatory copy available in the initial HTML.

## Run Locally

Install dependencies:

```bash
npm install
```

Start Development:

```bash
npm run dev
```

Development runs on localhost. It shows an orange favicon and a small `DEV` badge.

Run lint:

```bash
npm run lint
```

Build Production:

```bash
npm run build
```

Build Preview:

```bash
npm run build:preview
```

Serve a built site locally:

```bash
npm run preview
```

## Development -> Preview -> Production Workflow

This project uses three environments so it is always clear where you are working.

This practice exists to stop unfinished work from going straight to the public website. It is recommended, not just optional, for this project because the site is public. It is very common in modern web development.

### Development

Purpose: local development only. This is the safe place to experiment and break things.

Environment:

```txt
localhost
```

Indicators:

- Orange favicon
- `DEV` badge

### Preview

Purpose: review changes after pushing them, before production release.

Environment:

```txt
https://preview.pcds2030.com
```

Indicators:

- Purple favicon
- `PREVIEW` badge

Preview deploys from the `preview` branch through Vercel.

### Production

Purpose: public website.

Environment:

```txt
https://pcds2030.com
```

Indicators:

- Brand favicon
- No environment badge

Production deploys from the `main` branch through GitHub Pages.

## Branch Workflow

Normal work should happen on:

```txt
preview
```

Public release happens from:

```txt
main
```

Recommended solo-developer loop:

1. Start a focused Codex chat for one task.
2. Work locally on the `preview` branch.
3. Run `npm run lint`.
4. Build with `npm run build:preview`.
5. Push to `preview`.
6. Review `https://preview.pcds2030.com`.
7. Merge or promote to `main` only after approval.
8. Confirm `https://pcds2030.com`.

This workflow prevents accidental public releases. It is recommended and common.

## Environment Detection

Vite provides `import.meta.env.DEV` and `import.meta.env.MODE`.

The app keeps environment logic in `src/environment.js`:

- `npm run dev` uses Development.
- `npm run build:preview` uses Vite `preview` mode.
- `npm run build` uses Production.

Keeping this logic in one file prevents inconsistent environment checks across the app. This is recommended and common in web apps.

## Favicons

`index.html` uses Vite HTML replacement:

```html
/favicon-%MODE%.png
```

Vite replaces `%MODE%` with `development`, `preview`, or `production`.

Favicon colors:

- Development: orange
- Preview: purple
- Production: brand color

Regenerate environment favicons after changing the source favicon:

```bash
npm run icons:generate
```

## Badges

The badge is rendered by `EnvironmentBadge` in `src/App.jsx`.

- Development shows `DEV`.
- Preview shows `PREVIEW`.
- Production shows no badge.

Badges exist to make the current environment immediately recognizable. This prevents testing or reviewing the wrong site. This is recommended and common for staging and preview environments.

## Custom Domains

The build scripts write the correct custom domain into `dist/CNAME`:

- `npm run build:preview` writes `preview.pcds2030.com`.
- `npm run build` writes `pcds2030.com`.

This prevents a preview build from accidentally carrying the production custom domain.

## Current Design Direction

The current design is a compact civic-data tracker:

- Scan-first layout.
- White background.
- Two-column project cards on desktop.
- One-column project cards on mobile.
- Strong status labels.
- Sector colors used as accents.
- Expandable cards with milestones and source links.

Do not redesign this direction without explicit user approval. See [Design notes](docs/design.md).

## Known Issues

Current known issues are tracked in [Backlog](docs/backlog.md).

Important current risks:

- Data freshness is manual.
- Source links are not automatically checked.
- `LAST_UPDATED` exists in data but is not displayed.
- Most UI and styling live in one large `src/App.jsx` file.
- There are no automated data-shape tests yet.

## Data Notes

Project data is currently hand-maintained in `src/trackerData.js`.

The site includes source links inside each project card. The footer states that milestone statuses are best-effort based on available public information.
