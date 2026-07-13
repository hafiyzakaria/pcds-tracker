# Backlog

This backlog documents known issues and recommended next tasks for the next development phase. It is not a promise that every item must be done immediately.

## Completed

### Display data freshness

- Completed: The UI shows `LAST_UPDATED` from `src/trackerData.js` near the page description so readers can see how fresh the tracker is.

### Add the Production SEO foundation

- Completed on Production: `https://pcds2030.com` has canonical, Open Graph, Twitter, and
  `WebSite` structured-data metadata, plus `robots.txt` and `sitemap.xml` using the canonical
  Production domain.

### Pre-render the initial dashboard content

- Completed on Production: Production and Preview build commands now pre-render the React
  dashboard before browser hydration. The initial HTML includes the H1, introductory copy, project
  headings, statuses, milestones, and source content. Preview remains protected by Vercel's
  `noindex, nofollow` response header.

### Consolidate the PCDS explanation into the introduction

- Completed on Production: The separate About section was removed. Two concise paragraphs beneath
  the title now explain the strategy, economic target, dashboard purpose, and independent scope.
- Final treatment: The copy uses a narrower editorial measure, selective emphasis for the main
  strategy facts, quieter last-updated metadata, and the plain-language phrase "links to publicly
  available sources".

### Stabilize collapsed project-card sizing

- Completed on Production: Collapsed desktop cards once again use the established shared minimum
  height, while one-column mobile cards remain content-driven.
- QA completed: All 26 desktop cards align at one height; status filters preserve the alignment;
  multiple cards can remain expanded; and narrow mobile cards have no clipping, overlap, or
  horizontal overflow.

### Align card behavior across environments

- Completed on Production: Development, Preview, and Production now use the same neutral card
  border, milestone formatting, completed-milestone rows, and expanded-card content.
- Environment differences are limited to deployment, domain, indexing policy, favicon, and the
  Development or Preview badge.

## 1. Must Fix Before Production

### Add a production data review checklist

- What needs to be done: Document a repeatable checklist for reviewing project data before promoting Preview to Production.
- Why it matters: The tracker is manually curated, so a simple checklist helps prevent stale dates, broken source links, missing source context, or accidental unsourced claims.
- Estimated difficulty: low
- Risk level: low
- Suggested first task: Add a checklist section to project documentation covering source URL, source date, milestone status, `LAST_UPDATED`, Preview review, and Production promotion.

## 2. Should Improve Soon

### Verify indexing after the SEO release

- What needs to be done: After the pre-rendering and introduction reach Production, inspect the
  live URL in Google Search Console and request indexing again if appropriate.
- Why it matters: Repository changes make the page crawlable and understandable, but Google still
  controls when it recrawls and reranks the site.
- Estimated difficulty: low
- Risk level: low
- Suggested first task: Confirm the live HTML and canonical URL, then use URL Inspection for
  `https://pcds2030.com/` and monitor the submitted sitemap.

### Add basic data-shape tests

- What needs to be done: Add a small automated check that every project has required fields such as `status`, `summary`, `milestones`, and `sources`.
- Why it matters: A missing or malformed data field can break the UI or make a project card less trustworthy, and these mistakes are easy to miss in hand-maintained data.
- Estimated difficulty: medium
- Risk level: low
- Suggested first task: Create a lightweight script that imports `src/trackerData.js` and validates required fields without adding a heavy test framework.

### Add automated source-link checking

- What needs to be done: Add a script or release check that verifies public source links still resolve.
- Why it matters: Source links are central to the tracker's credibility, and manual link checking is easy to forget.
- Estimated difficulty: medium
- Risk level: medium
- Suggested first task: Start with a simple script that extracts project source URLs and reports non-2xx or timeout responses without failing deployments yet.

### Add content source notes

- What needs to be done: Explain how official PCDS PDFs, public announcements, and news sources relate to the tracker content.
- Why it matters: Future maintenance will be easier if official strategy sources and ongoing project-status sources are clearly distinguished.
- Estimated difficulty: low
- Risk level: low
- Suggested first task: Draft `docs/data-sources.md` with a short distinction between official framework sources and project progress sources.

## 3. Nice To Have

### Add an automated visual regression check

- What needs to be done: Add a lightweight way to catch obvious visual layout regressions before release.
- Why it matters: Most UI is in one React file, so a small change can accidentally affect layout across cards, filters, or mobile views.
- Estimated difficulty: medium
- Risk level: medium
- Suggested first task: Document a manual screenshot checklist first, then consider a simple automated screenshot check only if layout churn increases.

### Represent empty sectors or enablers later if needed

- What needs to be done: Decide whether sectors and enablers with no current project records should appear anywhere in the UI.
- Why it matters: The data model includes sectors and enablers without projects, but the current scan-first UI intentionally shows only project records.
- Estimated difficulty: medium
- Risk level: medium
- Suggested first task: Leave the current UI unchanged and note one or two real user questions that would justify showing empty categories.

## 4. Design Polish

### Extract design tokens when styling changes become repetitive

- What needs to be done: Move shared colors, font choices, and spacing values into a small design-token module when future styling work requires it.
- Why it matters: Inline styling is workable for the current app, but repeated values make small visual maintenance easier to get wrong over time.
- Estimated difficulty: medium
- Risk level: low
- Suggested first task: Start with shared colors and the font stack only; avoid broad restyling.

## 5. Technical Cleanup

### Split the large app file when related work makes it worthwhile

- What needs to be done: Gradually move stable components out of `src/App.jsx` during related edits.
- Why it matters: Smaller files are easier for humans and AI agents to edit safely, especially as project-card, filter, and summary behavior evolves.
- Estimated difficulty: medium
- Risk level: medium
- Suggested first task: When touching one of these areas anyway, extract one component such as `ProjectCard`, `SummaryMetrics`, `FilterBar`, or `EnvironmentBadge`.

### Keep data maintenance dependency-light

- What needs to be done: Prefer small scripts and existing tooling for data validation, link checks, and release checks.
- Why it matters: This is a solo-maintained static site, so maintenance tooling should stay understandable and cheap to run.
- Estimated difficulty: low
- Risk level: low
- Suggested first task: Before adding any dependency, try a plain Node script that can run through `npm` scripts.
