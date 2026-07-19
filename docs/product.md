# Product Notes

## Product

PCDS 2030 Project Tracker is an independent public tracker for major Sarawak Post COVID-19 Development Strategy 2030 projects.

The site presents a scan-first view of major projects, their current status, next visible milestone,
and links to publicly available sources.

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
- A compact `EN | BM` control that translates the interface, project summaries, facts, and milestones into Malaysian Bahasa Melayu while keeping the site identity and project titles in English and preserving canonical project identities and source links.
- An icon theme control that defaults to the reader's system preference, supports explicit light or dark selection, and remembers that selection locally.
- Expandable project cards with lead parties, reported value, summary, milestones, and source links.
- Two short introductory paragraphs explaining the strategy, its central economic target, and
  the project tracker purpose without adding a separate promotional About section.
- Restrained emphasis on the 10-year strategy, 8% annual-growth target, RM282 billion 2030 target,
  and project-tracker purpose so readers can scan the key points quickly.
- Plain-language source wording that promises links to publicly available sources rather than
  referring abstractly to "supporting public evidence".
- Footer attribution identifying hafiy.my as the builder and stating that the tracker is not affiliated with the Sarawak Government; the English version additionally describes it as independent.

The initial dashboard view is pre-rendered during the build and hydrated by React in the browser.
This keeps the current interactions while making the public content available in the initial HTML.
The pre-rendered document remains English. A saved BM preference is restored after hydration, and
the document language is then updated to `ms`; theme preference is applied before paint to avoid a
light-theme flash.

## Search Visibility

Production at `https://pcds2030.com` is the canonical, indexable public site. Its SEO foundation
includes canonical and social metadata, `WebSite` structured data, `robots.txt`, and a sitemap.
The pre-rendered dashboard gives search engines meaningful content before client-side React runs.

Preview at `https://preview.pcds2030.com` is for development review only. Vercel sends
`X-Robots-Tag: noindex, nofollow` for every Preview route. Pre-rendering Preview improves review
fidelity but does not make Preview eligible for Google indexing.

## Current Data Model

Project data lives in `src/trackerData.js`.

English tracker data remains the canonical editorial source. `src/localization.js` contains the
explicit BM presentation layer for category names, project facts, summaries, and milestones.
Project titles stay in English; URLs, compact date values, completion flags, and canonical project
names are shared between both languages.

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

For reader clarity, a card displays as `Completed` only when every delivery milestone shown on that card is complete. Recurring operational activities such as monitoring, annual reporting, conservation, or routine service delivery belong in the summary rather than remaining permanently open delivery milestones. Umbrella programmes and mixed-scope cards remain `Ongoing` while a genuine delivery milestone is still open.

## Environment Workflow

The product now has three environments:

- Development: local machine, orange favicon, `DEV` badge.
- Preview: Vercel preview site, purple favicon, `PREVIEW` badge.
- Production: GitHub Pages public site, brand favicon, no badge.

All three environments use the same project-card behavior. Environment differences are limited to
deployment, domain, indexing policy, favicon, and the Development or Preview badge.

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
- Keep public card claims tied to visible, project-specific public webpage links.
- Use PCDS PDFs to confirm inclusion and guide research, not as the sole evidence for a live card claim.
- Avoid turning the site into a marketing landing page.
- Preserve the independent-tracker disclaimer.
- Keep Production indexable and Preview explicitly noindexed.
