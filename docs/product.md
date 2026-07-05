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
- Status filters for all, ongoing, planning, and completed projects.
- Expandable project cards with lead parties, reported value, summary, milestones, and source links.
- Footer disclaimer stating that the tracker is independent and not affiliated with the Sarawak Government.

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
- `LAST_UPDATED` exists in `src/trackerData.js` but is not currently displayed in the UI.
- Project facts are embedded in code rather than stored in a separate content file or CMS.

## Product Principles

- Keep the tracker scan-first.
- Prioritize clarity over visual novelty.
- Keep public claims tied to visible source links.
- Avoid turning the site into a marketing landing page.
- Preserve the independent-tracker disclaimer.
