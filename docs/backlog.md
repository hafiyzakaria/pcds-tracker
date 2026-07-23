# Backlog

This backlog documents known issues and recommended next tasks for the next development phase. It is not a promise that every item must be done immediately.

## Completed

### Add dark mode and a Bahasa Melayu presentation

- Completed on Preview: A compact icon control now supports light and dark modes,
  defaults to the reader's system preference, applies the theme before paint, and remembers an
  explicit selection.
- Completed on Preview: The `EN | BM` control translates the interface, facts, summaries,
  and 115 rendered milestone statements across all 30 project cards. The site identity and project
  titles remain in English, while canonical project identities, evidence URLs, date tokens, and
  completion flags remain shared with the English source data.
- Completed on Preview: BM mode retains the quoted English phrase `'Project tracker'` in the
  introduction and footer, and both language versions keep the English site identity and project titles.
- Release gate: Review both themes and languages on the deployed Preview site before any
  Production promotion.

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
  the title now explain the strategy, economic target, and project tracker purpose. Independence and
  government non-affiliation remain stated in the footer.
- Final treatment: The copy uses a narrower editorial measure, selective emphasis for the main
  strategy facts, quieter last-updated metadata, and the plain-language phrase "links to publicly
  available sources".

### Stabilize collapsed project-card sizing

- Completed on Production: Collapsed desktop cards once again use the established shared minimum
  height, while one-column mobile cards remain content-driven.
- QA completed: Current desktop cards align at one height; category filters preserve the
  alignment; multiple cards can remain expanded; and narrow mobile cards have no clipping,
  overlap, or horizontal overflow.

### Align card behavior across environments

- Completed on Production: Development, Preview, and Production now use the same neutral card
  border, milestone formatting, completed-milestone rows, and expanded-card content.
- Environment differences are limited to deployment, domain, indexing policy, favicon, and the
  Development or Preview badge.

### Standardize card titles, statuses, and milestones

- Completed on Preview: Public card titles now use project-first naming, acronyms in parentheses,
  and optional `displayName` values while retaining canonical names for stable identity.
- Completed on Preview: Milestone dates now use consistent reader-facing formats, with dates
  separated from milestone descriptions in collapsed cards.
- Completed on Preview: Badges, filters, sorting, and summary counts now follow one public-status
  rule: a card is `Completed` only when every delivery milestone displayed on it is complete.
- Completed on Preview: Routine operational work was removed from completion milestones, and the
  expanded milestone list no longer repeats the milestone shown in the next-or-completed callout.
- Completed on Preview: Future milestone wording now states the outcome directly and avoids a
  redundant `planned` qualifier when the date and open state already communicate future delivery.
- Data refresh completed: The Sarawak Cancer Centre procurement milestone and Bintulu-Samalaju
  Gas Pipeline timeline were updated from July and May 2026 public reporting. The Greenhouse Gas
  Emission Ordinance entry now includes the March 2026 NREB implementation update reported by the
  Borneo Post.
- Evidence correction completed: The provisional combined Semenggoh and Piasau discovery-centre
  card was split into two PCDS-backed projects with separate RM30 million values, scope, milestones,
  and current public sources. Semenggoh Phase 1 completion remains unconfirmed.
- Data refresh completed: Sungai Baji Agropark now reflects RM180 million reported state funding,
  completed infrastructure and agricultural components, LCDA's anchor-company appointment, and
  the still-unconfirmed operations and commercial-production milestones reported for 2026.

### Clarify the live-card source policy

- Completed on Preview: PCDS PDFs are documented as confirmation and research references, while
  claims displayed on live project cards require visible, project-specific public webpage evidence.

### Add indexable BM and editorial update routes

- Completed and verified on deployed Preview: `/bm/` now pre-renders the full Malay tracker with `lang="ms"`,
  Malay metadata, a self-referencing canonical, and reciprocal English and Malay `hreflang` links.
- Completed and verified on deployed Preview: `/updates/` is an editorial history of dated, source-backed public
  project developments, with a matching BM presentation at `/bm/updates/`, supporting sources, and
  a visible top-level link back to the matching-language tracker.
- Completed and verified on deployed Preview: `/`, `/bm/`, `/updates/`, and `/bm/updates/` are included in the
  sitemap and generated as real static HTML files for direct GitHub Pages navigation. Language
  controls switch instantly after hydration while retaining these static route links as fallback.
- Deployment verification completed on 23 July 2026: all four routes returned `200` from
  `preview.pcds2030.com`, the BM routes served `lang="ms"`, and Vercel retained the Preview
  environment's `noindex, nofollow` response header.
- Release gate: Review all four routes on the deployed Preview site before any Production
  promotion. Search Console measurement begins only after Production deployment and crawling.

## 1. Must Fix Before Production

### Add a production data review checklist

- What needs to be done: Document a repeatable checklist for reviewing project data before promoting Preview to Production.
- Why it matters: The tracker is manually curated, so a simple checklist helps prevent stale dates, broken source links, missing source context, or accidental unsourced claims.
- Estimated difficulty: low
- Risk level: low
- Suggested first task: Add a checklist section to project documentation covering source URL, source date, milestone status, `LAST_UPDATED`, Preview review, and Production promotion.

## 2. Should Improve Soon

### Measure indexing and search performance after the next SEO release

- What needs to be done: After `/bm/`, `/updates/`, and `/bm/updates/` reach Production, confirm their live HTML,
  canonical and `hreflang` signals, then review indexing and page-level performance in Google
  Search Console using `docs/seo-measurement.md`.
- Why it matters: Local and Preview builds prove the implementation, but impressions, clicks, and
  indexing status cannot be measured until Production is deployed and crawled.
- Estimated difficulty: low
- Risk level: low
- Suggested first task: After an approved Production release, inspect `/`, `/bm/`, `/updates/`,
  and `/bm/updates/`, then record the first 28-day baseline without claiming pre-release search
  performance.

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

## 4. Technical Cleanup

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
