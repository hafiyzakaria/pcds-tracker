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

Preview uses a purple favicon and a small `PREVIEW` badge. For a hosted preview
deployment, configure the hosting provider's preview build command to use
`npm run build:preview`.

The preview environment defaults to the `neutral-cards` variant. This preserves
the old review URL behavior from `https://tracker.hafiy.my/?variant=neutral-cards`
while moving it to a cleaner preview domain:
`https://preview.tracker.hafiy.my`.

Recommended preview URL: use a separate preview deployment URL, such as
`https://preview.tracker.hafiy.my` or the hosting provider's generated preview
URL. Avoid using `https://tracker.hafiy.my/preview` for the preview environment
unless the hosting platform explicitly routes that path to a separate preview
build. Keeping preview separate from the production domain prevents accidental
public access, caching confusion, and search indexing mistakes.

For this project, `preview.tracker.hafiy.my` is prepared as the recommended
preview domain. The preview build writes that domain into `dist/CNAME`.

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

Use this loop for safer releases:

1. Work locally with `npm run dev`.
2. Check linting with `npm run lint`.
3. Build a preview with `npm run build:preview`.
4. Review the preview deployment and confirm the purple favicon and `PREVIEW`
   badge are visible.
5. Release production with `npm run build`.
6. Confirm the production site has the brand favicon and no badge.

No source files should be manually edited to switch environments. Use the npm
scripts and hosting build commands instead.

## Manual Setup Still Needed

The code can prepare the correct build, badge, favicon, and `CNAME` file, but it
cannot create DNS records or GitHub/hosting settings from inside the project.

For production, this repository is already set up to deploy GitHub Pages from
`.github/workflows/deploy.yml` using `npm run build`.

For preview, create a separate preview deployment target and point the subdomain
at it:

1. Create a DNS `CNAME` record for `preview.tracker.hafiy.my`.
2. Point that DNS record to the preview hosting target.
3. Configure that preview target to build with `npm run build:preview`.
4. Confirm the preview site shows the purple favicon and `PREVIEW` badge.

With GitHub Pages, do not deploy preview to this same repository's Pages site,
because that would replace the production site. Use a separate Pages site,
Cloudflare Pages, Vercel, Netlify, or another separate static hosting target for
preview.
