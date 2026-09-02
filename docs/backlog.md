# Backlog

This file lists outstanding work only. Completed behavior belongs in `docs/product.md`,
`docs/design.md`, the data methodology, and Git history rather than remaining mixed into the
active backlog.

Last reconciled with the current `preview` implementation on 2 September 2026.
Section 2 was re-reviewed on 1 September 2026. Dated record:
[13MP / zone candidate pool re-review](project-audits/2026-09-01-13mp-zone-candidate-pool.md).
On 2 September 2026, four discarded Notion polish cards were removed from this backlog:
accessibility / a11y smoke checks, empty-sectors UI, visual-regression screenshots, and the
`App.jsx` split.

## Release blockers

No unresolved release blocker is currently recorded. Every release must still pass the repository's
content, lint, Preview build, Production build, and human Preview-review gates.

## 1. Should Improve Soon

### Review the next PDF-derived candidate batch

- What needs to be done: Continue the 50-unit candidate pool recorded in the
  [16 August 2026 PDF and online verification audit](project-audits/2026-08-16-pdf-online-verification-audit.md)
  in evidence-depth batches of four to six. The 30 August leftover closed Rural Broadband / MySRBN,
  Miri Smart City, Old Kuching Smart Heritage, the Pig Farming Area Initiative, Sama Jaya Free
  Industrial Zone, and Samalaju Industrial Park with no new card. Its verification pass spun off two
  site-level proposals, Selangau Pig Farming Area and the Samalaju SME Cluster, and both were
  approved and added as cards on the same date.
- Why it matters: The remaining pool contains credible project leads alongside programmes,
  services, events, institutions, umbrella scopes, and possible duplicates. Each needs an identity
  and evidence decision before it can become a tracker card.
- Scope boundary: Online identity verification is not approval for a card. Resolve overlap and
  tracked-unit identity first, then require project-specific value, lifecycle, lead-role, status,
  public-source, open-outcome, and English/Bahasa Melayu checks.
- Inclusion gate: A new card needs a unique `audit/project-inclusion.json` record, an accepted
  `direct`, `official_linked`, or manually approved `component` tier, and a passing
  `npm run check:content`. Keep unresolved candidates monitored.
- Suggested first task: Audit Sarawak Digital Bank, AirBorneo, Digital Community Centre, Digital
  Village Accelerator, SARES, and the Sarawak Water Supply Grid / SAWAS. PFA Samarakan in Bintulu
  joins the pool with no online work done yet. Reopen Virtual Pipeline or the Senari quay cranes only
  if their 17 August triggers fire.
- Carried-forward evidence gaps from the two new cards are recorded in the
  [30 August 2026 PDF candidate batch](project-audits/2026-08-30-pdf-candidate-batch.md#residual-open-questions):
  Samalaju SME Cluster Phases 1 and 2 now use year-only 2023 rather than an invented day, no
  confirmed Phase 3 tender, no dated Selangau production milestone, and live Borneo Post URLs that
  still return Cloudflare challenges and should be re-checked at the next sweep.
- Estimated difficulty: high
- Risk level: high

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

1 September 2026 re-review of these six names: three live cards added (SAIC, Sarawak Climate Change
Centre, Kuching Low-Carbon Hub). The Baram Renewable Energy Economic Zone remains umbrella context
for the Baram Agrovoltaic Project. FutureData and Sarawak High Performance Centre remain parked.
Prior `Do not add` decisions remain dated evidence holds, not permanent classifications.

- Sarawak High Performance Centre: Keep `monitored_unconfirmed`. Prior review 17 August 2026.
  Evidence gap unchanged: 13MP names a Sarawak High Performance Sports Centre, but opened 2026
  MYSED/DayakDaily pages still do not equate that Game Changer with the Petra Jaya UKAS facility
  or place the exact UKAS unit on a PCDS list. Next follow-up 2027-01-15, or sooner if MYSED,
  UKAS, Treasury, or a 13MP implementation page makes that identity link or publishes a tender,
  allocation, or construction start.
- FutureData — Kuching Data Centre Park: Keep `monitored_unconfirmed`. Prior review 17 August
  2026. Evidence gap unchanged: opened InvestSarawak wording still cites the Digital Economy
  Blueprint 2030, not PCDS 2030. Next follow-up 2026-12-15, or sooner if a PCDS/13MP/InvestSarawak/TSG
  page names the exact park as PCDS 2030 or publishes construction, cancellation, or
  replacement-partner status.
- Sarawak Artificial Intelligence Centre (SAIC): Added as a live `In Progress` card on 1 September
  2026. Remaining watch: publication of the Sarawak AI Blueprint. Do not mix SAINS Sovereign AI or
  the wider RM33 million digital package.
- Sarawak Climate Change Centre: Added as a live `Planning` card on 1 September 2026. It remains
  in motion, not operational. Recheck when an official page gives an address, director, centre-only
  budget, or operations start. Google AI Mode’s 2025 operational-launch claim is rejected.
- Kuching Low-Carbon Hub: Added as a live `Planning` zone card on 1 September 2026. Airport and
  port stay separate cards. Recheck when the detailed masterplan is published or 2027 PPP works
  begin, without copying airport or port milestones onto this card.
- Baram Renewable Energy Economic Zone: Not a live card. The 13MP names the zone, but it remains
  umbrella context for the Baram Agrovoltaic Project, which is the tracked delivery unit. Recheck
  only if the zone is gazetted, a zone-level authority is named, or a second distinct project
  beyond agrovoltaic is publicly trackable. Do not add Long Bedian hybrid as a zone milestone.
- Suggested first task: Watch the remaining HPC and FutureData triggers, plus the open milestones
  on the three new cards.

### Retain the legacy tracker redirect until its scheduled review

- What needs to be done: Keep `tracker.hafiy.my`, its permanent redirect, and its CNAME active until
  at least 24 July 2027. Keep the Google ownership-verification TXT record indefinitely.
- Review gate: At the scheduled 24 July 2027 review, confirm that Google no longer indexes the old
  hostname, Search Console shows no meaningful activity, and no valuable links or referrals depend
  on it. If any condition is uncertain, retain the redirect and schedule another review.
- Source of truth: Follow the detailed criteria in `docs/seo-measurement.md`.
- Suggested first task: No action before the scheduled review unless the redirect fails.

## 3. Nice To Have

No items currently recorded. Visual-regression screenshots and empty-sectors UI were discarded
with the matching Notion polish cards on 2 September 2026.

## 4. Technical Cleanup

No items currently recorded. The `App.jsx` split was discarded with the matching Notion polish
card on 2 September 2026.
