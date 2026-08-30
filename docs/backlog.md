# Backlog

This file lists outstanding work only. Completed behavior belongs in `docs/product.md`,
`docs/design.md`, the data methodology, and Git history rather than remaining mixed into the
active backlog.

Last reconciled with the current `preview` implementation on 30 August 2026.

## Release blockers

No unresolved release blocker is currently recorded. Every release must still pass the repository's
content, lint, Preview build, Production build, and human Preview-review gates.

## 1. Should Improve Soon

### Resolve the two deferred milestone wording reviews

- What needs to be done: Re-run the evidence and English/Bahasa Melayu wording review for Lubok
  Punggor AgriHub and Mid Sadong 1 Irrigation Project, and SCORE. Bau Gold Project and Sarawak
  Bioindustrial Park were resolved during the 20 August 2026 sweep.
- Why it matters: These two cards still have proposed reader-facing wording changes that were not
  resolved by the evidence sweep. Recording the remaining scope prevents their current wording from
  being mistaken for a completed review.
- Scope boundary: Confirm each source-backed outcome, date, open or complete state, and BM
  counterpart before editing. Do not infer lifecycle stages or add milestones to meet a quota.
- Suggested first task: Reopen the latest audit record for each card, run exact-name milestone and
  current-status searches, then prepare a current-versus-proposed table for approval.
- Estimated difficulty: low to medium
- Risk level: medium

### Review the next PDF-derived candidate batch

- What needs to be done: Continue the 50-unit candidate pool recorded in the
  [16 August 2026 PDF and online verification audit](project-audits/2026-08-16-pdf-online-verification-audit.md)
  in evidence-depth batches of four to six. The 30 August leftover closed Rural Broadband / MySRBN,
  Miri Smart City, Old Kuching Smart Heritage, the Pig Farming Area Initiative, Sama Jaya Free
  Industrial Zone, and Samalaju Industrial Park with no new card. Its verification pass then spun
  off two site-level proposals that are awaiting approval: Selangau Pig Farming Area and the
  Samalaju SME Cluster.
- Why it matters: The remaining pool contains credible project leads alongside programmes,
  services, events, institutions, umbrella scopes, and possible duplicates. Each needs an identity
  and evidence decision before it can become a tracker card.
- Scope boundary: Online identity verification is not approval for a card. Resolve overlap and
  tracked-unit identity first, then require project-specific value, lifecycle, lead-role, status,
  public-source, open-outcome, and English/Bahasa Melayu checks.
- Inclusion gate: A new card needs a unique `audit/project-inclusion.json` record, an accepted
  `direct`, `official_linked`, or manually approved `component` tier, and a passing
  `npm run check:content`. Keep unresolved candidates monitored.
- Suggested first task: Decide the two pending proposals in the
  [30 August 2026 PDF candidate batch](project-audits/2026-08-30-pdf-candidate-batch.md), then audit
  Sarawak Digital Bank, AirBorneo, Digital Community Centre, Digital Village Accelerator, SARES, and
  the Sarawak Water Supply Grid / SAWAS. Reopen Virtual Pipeline or the Senari quay cranes only if
  their 17 August triggers fire.
- Estimated difficulty: high
- Risk level: high

### Add lightweight interaction and accessibility regression checks

- What needs to be done: Add a small repeatable browser check for the tracker behaviors most likely
  to regress: the skip link, heading hierarchy, route focus, search query state, combined status and
  category filters, card disclosures, and narrow-screen overflow.
- Why it matters: These behaviors now work, but the current automated checks cover content shape,
  linting, builds, and source availability rather than user-facing interaction.
- Scope boundary: Start with a few critical paths across the four EN/BM routes and light/dark
  themes. Do not turn this into a redesign or a large end-to-end test suite.
- Suggested first task: Document one manual smoke path, automate that path at desktop and 320px,
  and add more coverage only when it catches a real regression.
- Estimated difficulty: medium
- Risk level: low to medium

### Establish a meaningful search-performance baseline

- What needs to be done: Use `docs/seo-measurement.md` to review indexing, queries, and page-level
  performance once Production has enough data for a stable 28-day comparison.
- Why it matters: The four public routes and Production analytics are implemented, but useful search
  decisions require real traffic and crawl data rather than build or Preview evidence.
- Scope boundary: Keep this measurement-only. Do not request indexing or change titles based on a
  few days of volatile data.
- Suggested first task: At the next scheduled review, record the data window and whether traffic is
  sufficient. If not, retain the current implementation and recheck later.
- Estimated difficulty: low
- Risk level: low

## 2. Monitor Until Evidence Changes

### Revisit unresolved 13th Malaysia Plan candidates only when a trigger appears

- Sarawak High Performance Centre: Keep `monitored_unconfirmed` until public evidence resolves
  whether the UKAS project and the 13MP Sarawak High Performance Sports Centre are the same tracked
  unit and connects it to PCDS 2030.
- FutureData — Kuching Data Centre Park: Keep `monitored_unconfirmed` until a PCDS, 13MP, Sarawak
  Government, InvestSarawak, or delivery-owner publication explicitly makes the PCDS connection.
- Sarawak AI Centre: Recheck when an implementing body, location, budget, launch, or operational
  milestone establishes whether it is a facility, institution, or programme.
- Sarawak Climate Change Centre: Recheck after an official establishment announcement identifies
  its lead agency, location, budget, or operational milestone.
- Kuching Low-Carbon Hub Economic Zone: Keep as umbrella context for the new Kuching airport and
  Tanjung Embang deep-sea port. Reconsider a card only after its designation, boundaries, governing
  body, masterplan, or zone-wide infrastructure delivery is confirmed.
- Baram Renewable Energy Economic Zone: Keep as context for the Baram Agrovoltaic Project.
  Reconsider a card when governance, boundaries, a masterplan, an investment framework, or more
  named projects are publicly confirmed.
- Suggested first task: Do nothing until one of these evidence triggers appears.

### Retain the legacy tracker redirect until its scheduled review

- What needs to be done: Keep `tracker.hafiy.my`, its permanent redirect, and its CNAME active until
  at least 24 July 2027. Keep the Google ownership-verification TXT record indefinitely.
- Review gate: At the scheduled 24 July 2027 review, confirm that Google no longer indexes the old
  hostname, Search Console shows no meaningful activity, and no valuable links or referrals depend
  on it. If any condition is uncertain, retain the redirect and schedule another review.
- Source of truth: Follow the detailed criteria in `docs/seo-measurement.md`.
- Suggested first task: No action before the scheduled review unless the redirect fails.

## 3. Nice To Have

### Add visual regression coverage if layout churn increases

- What needs to be done: Capture a small set of stable reference screenshots for the tracker and
  update-history layouts.
- Why it matters: Much of the interface is shared, so a small style change can affect cards,
  discovery controls, themes, languages, and mobile layouts together.
- Trigger: Add this only after the interaction smoke checks exist or repeated visual regressions make
  screenshot maintenance worthwhile.
- Suggested first task: Define the minimum desktop and mobile views before selecting tooling.
- Estimated difficulty: medium
- Risk level: medium

### Represent empty sectors or enablers only after a reader need is observed

- What needs to be done: Decide whether classifications with no current project records should appear
  anywhere in the interface.
- Why it matters: The current scan-first view intentionally shows classifications represented by
  project cards. Empty classifications may add completeness, but they may also add noise.
- Suggested first task: Keep the interface unchanged and record a real reader question that would
  justify exposing empty classifications.
- Estimated difficulty: medium
- Risk level: low

## 4. Technical Cleanup

### Split the large app file when related work makes it worthwhile

- What needs to be done: Move stable components out of `src/App.jsx` gradually during related edits.
- Why it matters: Smaller files are easier to review safely as project-card, discovery, and summary
  behavior evolves.
- Scope boundary: Avoid a standalone rewrite. Extract one component only when its area is already
  being changed and the extraction keeps behavior identical.
- Suggested first task: Choose one stable boundary such as `ProjectCard`, `SummaryMetrics`,
  `DiscoveryControls`, or `EnvironmentBadge` during the next related implementation task.
- Estimated difficulty: medium
- Risk level: medium
