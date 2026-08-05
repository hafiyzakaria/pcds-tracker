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
- Completed on Preview: The BM introduction uses the idiomatic phrase `platform pemantauan bebas`,
  while the footer retains the quoted English phrase `'Project tracker'`. Both language versions keep
  the English site identity and project titles.
- Release gate: Review both themes and languages on the deployed Preview site before any
  Production promotion.

### Display data freshness

- Completed: The UI shows `LAST_UPDATED` from `src/trackerData.js` near the page description so readers can see how fresh the tracker is.

### Add the Production SEO foundation

- Completed on Production: `https://pcds2030.com` has canonical, Open Graph, Twitter, and
  `WebSite` structured-data metadata, plus `robots.txt` and `sitemap.xml` using the canonical
  Production domain.
- Completed locally for Preview review: Open Graph and Twitter metadata now declare a dedicated,
  versioned 1200 by 630 social-preview card for each environment so messaging apps do not fall back
  to the Apple touch icon.

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
- Completed locally for Preview review: The narrower two-column range now uses a taller shared
  collapsed height so wrapped English and BM card content remains aligned.
- QA completed: Current desktop and narrow two-column cards align at one height; status filters
  preserve the alignment; multiple cards can remain expanded; and narrow mobile cards have no
  clipping, overlap, or horizontal overflow.

### Add compact category filtering through project-card pills

- Completed for Preview review: The joined `Sector` or `Enabler` classification badge now
  morphs into separate group and category filter buttons on hover or keyboard focus. Touch layouts
  keep both controls separated, and an active-filter pill provides a persistent clear action.
- The existing status controls remain the default top-level filters and can be combined with the
  card-level classification filters. This avoids restoring the previous two-row category control,
  counts, and horizontal scrolling.
- Preserved reference: The earlier experiment remains in Git history through `97e2ba8`, `989cc63`,
  `42f61f2`, and `03dffa8`; `21fc60c` restored the simpler status filters.

### Align card behavior across environments

- Completed on Production: Development, Preview, and Production now use the same neutral card
  border, milestone formatting, completed-milestone rows, and expanded-card content.
- Environment differences are limited to deployment, domain, indexing policy, favicon,
  social-preview branding, and the Development or Preview badge.

### Standardize card titles, statuses, and milestones

- Completed on Preview: Public card titles now use project-first naming, acronyms in parentheses,
  and optional `displayName` values while retaining canonical names for stable identity.
- Completed on Preview: Milestone dates now use consistent reader-facing formats, with dates
  separated from milestone descriptions in collapsed cards.
- Completed locally for Preview review: Undated entries render as compact bullet points beneath
  the existing remaining-milestones heading, without a repeated date placeholder or second title.
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

### Migrate the legacy tracker hostname

- Completed on 24 July 2026: `https://tracker.hafiy.my/` was restored through an isolated Vercel
  redirect project. HTTP upgrades to HTTPS, and HTTPS permanently redirects to
  `https://pcds2030.com/` while preserving paths and query parameters.
- Search Console ownership for `hafiy.my` was verified, and a temporary prefix removal was
  submitted for the legacy tracker hostname.
- Retention gate: Keep the redirect and `tracker` CNAME active until at least 24 July 2027. Keep
  the Google ownership-verification TXT record indefinitely.
- Retirement review: A conditional review is scheduled for 24 July 2027 at 09:00 Asia/Kuching.
  Remove the redirect only if Google no longer indexes the old hostname, Search Console shows no
  meaningful activity, and no valuable incoming links or referrals still depend on it. Otherwise,
  retain the redirect and schedule another review.
- Detailed measurement and retirement criteria are documented in `docs/seo-measurement.md`.

## 1. Must Fix Before Production

### Add a production data review checklist

- Completed on 28 July 2026: `docs/data-review-checklist.md` now covers evidence,
  `LAST_UPDATED`, BM copy, update-history decisions, source links, content validation, all four
  routes, Preview review, and explicit approval before Production.
- `docs/project-research-template.md` provides the reusable search, source-decision, confidence,
  and new-project inclusion record.
- `AGENTS.md` makes `docs/data-methodology.md` mandatory for tracker-data and editorial changes.

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

- Completed on 28 July 2026: `npm run check:content` validates required project fields,
  categories, statuses, unique identities, source URL structure, milestone ordering and wording,
  completed-card consistency, `LAST_UPDATED`, BM coverage, and update-history sources.
- Preview and Production GitHub Actions now run the content check, lint, and the matching build
  before a release can proceed.

### Add automated source-link checking

- What needs to be done: Add a script or release check that verifies public source links still resolve.
- Why it matters: Source links are central to the tracker's credibility, and manual link checking is easy to forget.
- Estimated difficulty: medium
- Risk level: medium
- Suggested first task: Start with a simple script that extracts project source URLs and reports non-2xx or timeout responses without failing deployments yet.

### Reduce repeated keyboard stops from card-level controls

- What needs to be done: Revisit the number of keyboard stops created by the interactive category
  controls repeated across project cards when a future global search and category-filter surface is
  approved.
- Why it matters: The current card-level filters are useful for pointer and touch discovery, but the
  repeated controls make keyboard traversal long on a dashboard with many cards.
- Scope decision: Keep the current card-level category filtering for now. A deferred prototype could
  use a borderless divider-and-chevron reveal handle, with the search field and compact category pills
  appearing only after activation. Do not remove the repeated card controls without a follow-up review
  of discoverability and keyboard efficiency.
- Estimated difficulty: medium
- Risk level: medium
- Suggested first task: Prototype the reveal handle, then compare keyboard stops, URL/state behavior,
  and mobile discoverability before changing the current card interaction.

### Revisit monitored 13th Malaysia Plan candidates

- Sarawak High Performance Sports Centre: Strongest next candidate. The 13th Malaysia Plan
  names the facility on page 34, and June 2026 reporting confirms planning and a site within the
  Sarawak Sports Complex. Recheck when a project value, procurement action, construction date,
  or completion schedule is published. Resolve the conflict with older reporting that suggested
  operations in 2025 before creating a card.
- Sarawak AI Centre: The plan records Cabinet approval on page 13 and includes the centre in its
  AI strategy on page 30, but the public record does not yet establish whether this is a facility,
  institution, or programme. Recheck when an implementing body, location, budget, launch, or
  operational milestone is officially published.
- Sarawak Climate Change Centre: Page 35 describes its establishment in forward-looking terms.
  Recheck after an official establishment announcement identifies its lead agency, location,
  budget, or operational milestone.
- Kuching Low-Carbon Hub Economic Zone: Keep as umbrella context for the new Kuching airport and
  Tanjung Embang deep-sea port cards. Reconsider a separate card only after legal designation,
  boundaries, a governing body, a masterplan, or zone-wide infrastructure delivery is confirmed.
- Baram Renewable Energy Economic Zone: Keep as umbrella context for the Baram Agrovoltaic
  Project. Reconsider a separate card when governance, boundaries, a masterplan, an investment
  framework, or additional named projects are publicly confirmed.
- Suggested first task: Review the sports-centre candidate first, then repeat the documented
  project-research process for the institutional initiatives and economic zones when one of these
  evidence triggers occurs.

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
