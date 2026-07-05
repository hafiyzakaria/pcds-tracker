# PCDS 2030 Project Tracker

A Vite and React tracker for Sarawak PCDS 2030 projects.

## Development -> Preview -> Production Workflow

This project uses three environments so it is always clear where you are working.
This is a recommended and common modern web development practice. It prevents
mistaking a review build for the public website, and it gives you a safe place to
test changes before releasing them.

## Environments

### Development

Purpose: local development only. This is the safe place to experiment and break
things.

Run it with:

```bash
npm run dev
```

Development runs on localhost through the Vite dev server. It shows an orange
favicon and a small `DEV` badge.

### Preview

Purpose: review changes after pushing them, before production release.

Build it with:

```bash
npm run build:preview
```

Then serve the generated build locally with:

```bash
npm run preview
```

Preview uses a purple favicon, a small `PREVIEW` badge, and the preview card
layout. For a hosted preview deployment, configure the hosting provider's
preview build command to use `npm run build:preview`.

Recommended preview URL: use a separate preview deployment URL, such as
`https://preview.tracker.hafiy.my` or the hosting provider's generated preview
URL. Avoid using `https://tracker.hafiy.my/preview` for the preview environment
unless the hosting platform explicitly routes that path to a separate preview
build. Keeping preview separate from the production domain prevents accidental
public access, caching confusion, and search indexing mistakes.

For this project, `preview.tracker.hafiy.my` is the preview domain. The preview
build writes that domain into `dist/CNAME`.

### Production

Purpose: the public website.

Build it with:

```bash
npm run build
```

Production uses the brand favicon and does not show any environment badge.
The production build writes `tracker.hafiy.my` into `dist/CNAME`.

## How Environment Detection Works

Vite provides `import.meta.env.MODE` and `import.meta.env.DEV`.

- `npm run dev` starts Vite in `development` mode.
- `npm run build:preview` runs `vite build --mode preview`, so the app detects
  `preview` mode.
- `npm run build` runs Vite's normal production build, so the app detects
  `production` mode.

The app keeps this logic in `src/environment.js`. Keeping environment logic in
one small file is recommended because future changes only need to happen in one
place. This is common in modern web apps and prevents inconsistent environment
checks across different components.

## How Favicons Are Selected

`index.html` uses Vite's HTML replacement syntax:

```html
/favicon-%MODE%.png
```

At build or dev-server time, Vite replaces `%MODE%` with `development`,
`preview`, or `production`.

The favicon design stays the same in every environment. Only the logo color
changes:

- Development: orange
- Preview: purple
- Production: brand color

Regenerate the environment favicons with:

```bash
npm run icons:generate
```

The generator recolors the existing logo assets and writes the environment
favicon files into `public/`. This is optional day to day, but recommended if
the source favicon ever changes.

## How Custom Domains Are Selected

The project writes the correct custom domain into `dist/CNAME` after each build:

- `npm run build:preview` writes `preview.tracker.hafiy.my`.
- `npm run build` writes `tracker.hafiy.my`.

This is recommended when one codebase can be deployed to more than one public
URL. It prevents a preview deployment from accidentally carrying the production
domain setting.

## How Badges Are Enabled

The badge is rendered by the React app using the environment returned from
`src/environment.js`.

- Development shows `DEV`.
- Preview shows `PREVIEW`.
- Production returns no badge.

This practice is recommended for solo AI-assisted development because it makes
the current environment immediately visible. It prevents reviewing or testing in
the wrong place. Environment badges are common in internal tools, dashboards,
and pre-production web apps.

## Future Developer Workflow

This project uses a branch-based release workflow:

- `preview` branch: review site at `https://preview.tracker.hafiy.my`
- `main` branch: public production site at `https://tracker.hafiy.my`

This is a recommended and common modern web development practice. It keeps
unfinished work away from the public website, gives you a real deployed site to
review first, and makes it clear when a change is only being tested versus when
it has been released.

Use this loop for safer releases:

1. Work locally with `npm run dev`.
2. Check linting with `npm run lint`.
3. Build a preview with `npm run build:preview`.
4. Commit your changes and push them to the `preview` branch.
5. Review the preview deployment and confirm the purple favicon and `PREVIEW`
   badge are visible.
6. After approving the preview site, merge the `preview` branch into `main`.
7. Confirm the production site has the brand favicon and no badge.

No source files should be manually edited to switch environments. Use the npm
scripts and hosting build commands instead.

For a solo AI-assisted developer, the practical Codex workflow is:

1. Start a new Codex chat for one meaningful task.
2. Ask Codex to work locally and preserve the existing design.
3. Push the completed task to the `preview` branch.
4. Review `https://preview.tracker.hafiy.my`.
5. Only after you approve it, promote the same change to `main`.

Starting a fresh Codex chat per task is recommended. It prevents old chat
context from accidentally influencing a new change, and it makes each task
easier to review later. The repository, commits, and this README should be the
project's long-term memory.

## Current Hosting Setup

Production deploys from this repository to GitHub Pages:

```txt
tracker.hafiy.my
```

Production should deploy from the `main` branch.

Preview deploys from this same repository to Vercel:

```txt
preview.tracker.hafiy.my
```

Preview should deploy from the `preview` branch.

The preview DNS record is a CNAME:

```txt
preview.tracker -> a9f27710c89f4a47.vercel-dns-017.com
```

With GitHub Pages, do not deploy preview to this same repository's Pages site,
because that would replace the production site. Use a separate Pages site,
Cloudflare Pages, Vercel, Netlify, or another separate static hosting target for
preview.
