# Product Notes

## Product

PCDS 2030 Project Tracker is an independent public tracker for major Sarawak Post COVID-19 Development Strategy 2030 projects.

The site presents a scan-first view of major projects, their current status, next visible milestone, and public evidence.

## Audience

Primary users:

- People who want a quick public-status view of Sarawak development projects.
- The site owner, who maintains the tracker as a solo AI-assisted developer.
- Readers who need source links before trusting a project status.

Secondary users:

- Researchers, journalists, policy watchers, or civic-minded readers comparing project progress.

## Current User Experience

The current app is a single-page React site with:

- Header: "Sarawak Development Monitor" and "PCDS 2030 Project Tracker".
- Summary metrics for tracked projects, ongoing projects, planning projects, completed projects, and milestones.
- Last updated indicator beneath the page description, sourced from `LAST_UPDATED` in `src/trackerData.js`.
- Status filters for all, planning, ongoing, and completed projects.
- Expandable project cards with lead parties, reported value, summary, milestones, and source links.
- Two short introductory paragraphs explaining the strategy, its central economic target, and
  the independent tracker purpose without adding a separate promotional About section.
- Footer disclaimer stating that the tracker is independent and not affiliated with the Sarawak Government.

The initial dashboard view is pre-rendered during the build and hydrated by React in the browser.
This keeps the current interactions while making the public content available in the initial HTML.

## Search Visibility

Production at `https://pcds2030.com` is the canonical, indexable public site. Its SEO foundation
includes canonical and social metadata, `WebSite` structured data, `robots.txt`, and a sitemap.
The pre-rendered dashboard gives search engines meaningful content before client-side React runs.

Preview at `https://preview.pcds2030.com` is for development review only. Vercel sends
`X-Robots-Tag: noindex, nofollow` for every Preview route. Pre-rendering Preview improves review
fidelity but does not make Preview eligible for Google indexing.

## Current Data Model

Project data lives in `src/trackerData.js`.

The data currently includes:

- PCDS overview framework data.
- 6 economic sectors.
- 7 enablers.
- Project records nested under sectors and enablers.
- Per-project status, lead, value, summary, milestones, and sources.

Some sectors or enablers are intentionally present but have no projects yet. They do not currently render as empty cards because the UI flattens project records rather than rendering every sector.

## Current Status Model

The UI maps detailed statuses into simpler user-facing labels:

- `Awaiting Decision` and `In Progress` display as `Ongoing`.
- `Planning` displays as `Planning`.
- `Operational`, `Designated`, and `Enacted` display as `Completed`.

This keeps the public interface simple while preserving more specific source-data states in the data file.

## Environment Workflow

The product now has three environments:

- Development: local machine, orange favicon, `DEV` badge.
- Preview: Vercel preview site, purple favicon, `PREVIEW` badge.
- Production: GitHub Pages public site, brand favicon, no badge.

This workflow exists to prevent unfinished changes from reaching the public site. It is recommended and common in modern web development.

## Content Maintenance Notes

The data is manually curated from public reports and announcements. The footer already states that milestone statuses are best-effort based on available information.

Current content risks:

- Data freshness is manual.
- Source links are not automatically checked.
- `LAST_UPDATED` is displayed in the UI but still depends on manual maintenance when tracker data changes.
- Project facts are embedded in code rather than stored in a separate content file or CMS.

## Product Principles

- Keep the tracker scan-first.
- Prioritize clarity over visual novelty.
- Keep public claims tied to visible source links.
- Avoid turning the site into a marketing landing page.
- Preserve the independent-tracker disclaimer.
- Keep Production indexable and Preview explicitly noindexed.
