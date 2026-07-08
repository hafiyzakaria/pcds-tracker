# Data Update Plan

Plan date: 2026-07-08

Scope: proposed dashboard data update plan based only on `docs/data-audit.md` and the current dashboard data in `src/trackerData.js`.

This plan does not update dashboard data. It identifies safe candidates for a later data-update task.

## Method

- Follow `docs/data-methodology.md`.
- Treat statuses as public-evidence indicators, not official certification.
- Prefer official and project sources over media where available.
- Do not invent missing dates, values, or statuses.
- Treat conflicting timeline evidence as manual review.
- Use wording/source updates where evidence clarifies context but does not prove status completion.

## Sarawak Cancer Centre

Current dashboard values:

- Status: `In Progress`
- Value: `RM1.52 billion (RM500M equipment fronted)`
- Summary says PM directed JKR to expedite tendering in Q1 2026, Sarawak fronted RM500M for equipment, groundbreaking is expected in 2026, and operations are targeted before 2031.
- Milestones:
  - `2025-12-03`: RM1.52B preliminary cost estimate announced, done.
  - `2025-12-16`: PM: expedite project for Q1 2026 tender, done.
  - `2025-12-17`: Sarawak fronts RM500M for medical equipment, done.
  - `2026-02-26`: Construction gathering pace in Samarahan health metropolis, done.
  - `2026-Q3`: Groundbreaking ceremony, open.
  - `Before 2031`: Target: Operational, open.
- Next milestone: `2026-Q3: Groundbreaking ceremony`
- Sources: five DayakDaily articles from July 2025, December 2025, and February 2026.

Proposed updates:

1. Replace the open `2026-Q3: Groundbreaking ceremony` milestone with a procurement/construction-start milestone only after human review.
   - Field affected: milestone; next milestone; wording; source; last reviewed date.
   - Proposed update: use wording such as `2027-Q1: Construction start target` or `2027-Q1: Contract award / construction start target`, if accepted.
   - Evidence source: DayakDaily, `Sarawak Cancer Centre targets 2032 completion as design-and-build tender process begins`, https://dayakdaily.com/sarawak-cancer-centre-targets-2032-completion-as-design-and-build-tender-process-begins/, published 2026-07-07.
   - Exact audit claim: "construction targeted to commence in early 2027."
   - Confidence level: high.
   - Risk level: medium, because it changes a visible next milestone and replaces the existing 2026 groundbreaking expectation.
   - Human review needed: yes.
   - Recommended action: manual review first.

2. Review the `Before 2031: Target: Operational` milestone against newer completion timing.
   - Field affected: milestone; wording; source; last reviewed date.
   - Proposed update: do not change directly yet; consider replacing with `2032: Completion target` only if the owner accepts the newer media report as the best current public evidence.
   - Evidence source: DayakDaily, `Sarawak Cancer Centre targets 2032 completion as design-and-build tender process begins`, https://dayakdaily.com/sarawak-cancer-centre-targets-2032-completion-as-design-and-build-tender-process-begins/, published 2026-07-07.
   - Exact audit claim: "expected to be completed by 2032."
   - Confidence level: high for the article claim, medium for replacing the older operational target.
   - Risk level: high, because it changes the public interpretation from operations before 2031 to completion in 2032.
   - Human review needed: yes.
   - Recommended action: manual review first.

3. Add tender/procurement evidence to the source list and clarify summary wording if the timeline update is accepted.
   - Field affected: source; wording; last reviewed date.
   - Proposed update: add the July 2026 DayakDaily article and the May 2026 Sarawak Tribune tender-stage article as newer public evidence; update summary wording from "groundbreaking is expected in 2026" to a neutral procurement/construction-start formulation.
   - Evidence sources:
     - DayakDaily, `Sarawak Cancer Centre targets 2032 completion as design-and-build tender process begins`, https://dayakdaily.com/sarawak-cancer-centre-targets-2032-completion-as-design-and-build-tender-process-begins/, published 2026-07-07.
     - Sarawak Tribune, `Sarawak Cancer Centre enters tender stage`, https://www.sarawaktribune.com/sarawak-cancer-centre-enters-tender-stage/, published 2026-05-19.
   - Exact audit claims: "construction targeted to commence in early 2027"; "now at the tender procurement stage."
   - Confidence level: high.
   - Risk level: low for adding sources; medium for summary wording.
   - Human review needed: yes if the summary changes the interpreted timeline; no if only adding a source after accepting it as relevant.
   - Recommended action: manual review first.

4. Keep the dashboard status unchanged.
   - Field affected: status.
   - Proposed update: leave `In Progress` unchanged.
   - Evidence source: same tender/procurement sources above.
   - Confidence level: high.
   - Risk level: low.
   - Human review needed: no.
   - Recommended action: leave unchanged.

## KUTS - Kuching Urban Transportation System

Current dashboard values:

- Status: `In Progress`
- Value: `Multi-billion (phased)`
- Summary describes Southeast Asia's first hydrogen-powered ART system, with Phase 1 Blue, Red, and Green lines and trackless-lane ART vehicles.
- Milestones:
  - `2025-12`: RM58M contract awarded to Linde EOX for hydrogen plant relocation to Rembus Depot, done.
  - `2026-Q1`: First two ART units arrive in Kuching, done.
  - `2026-Q4`: Begin passenger operations and complete hydrogen plant relocation, open.
  - `TBD`: Feeder bus network rollout, open.
- Next milestone: `2026-Q4: Begin passenger operations and complete hydrogen plant relocation`
- Sources: DayakDaily ART Q4 2026 operations article; The Edge hydrogen plant relocation article.

Proposed updates:

1. Add the official Sarawak Metro KUTS page as a project source.
   - Field affected: source; wording; last reviewed date.
   - Proposed update: add `Sarawak Metro - KUTS official project page` or similar source label.
   - Evidence source: Sarawak Metro, `KUTS - Sarawak Metro Sdn Bhd`, https://www.mysarawakmetro.com/what-we-do/kuching-urban-transportation-system, current page with June 2026 progress items and no single publication date.
   - Exact audit claim: "Blue Line is estimated to begin revenue service in 2026."
   - Confidence level: high.
   - Risk level: low.
   - Human review needed: no for adding the official source; yes if using it to rewrite milestones.
   - Recommended action: update now.

2. Keep Q4 2026 passenger-service/pilot-service timing, but consider wording clarification.
   - Field affected: next milestone; wording; source; last reviewed date.
   - Proposed update: retain the 2026 timing; optionally clarify wording to avoid overstating full service if the accepted evidence says pilot operations or Blue Line revenue service.
   - Evidence sources:
     - Sarawak Metro official KUTS page, https://www.mysarawakmetro.com/what-we-do/kuching-urban-transportation-system.
     - Sarawak Tribune, `ART 'golden trains' set to arrive in Kuching for pilot run this year`, https://www.sarawaktribune.com/art-golden-trains-set-to-arrive-in-kuching-for-pilot-run-this-year/, published 2026-04-15.
   - Exact audit claims: "Blue Line is estimated to begin revenue service in 2026"; "pilot operations scheduled for the fourth quarter."
   - Confidence level: high.
   - Risk level: medium, because changing "passenger operations" to "pilot operations" may alter public interpretation.
   - Human review needed: yes if changing milestone wording; no if only adding a corroborating source.
   - Recommended action: update now for source; manual review first for wording change.

3. Review the completed ART-unit-arrival milestone before changing it.
   - Field affected: milestone; source; last reviewed date.
   - Proposed update: do not change the `done` flag yet. The audit found evidence that units were expected to arrive in Q2 2026, but did not find a source confirming arrival in Kuching.
   - Evidence source: Sarawak Tribune, `ART 'golden trains' set to arrive in Kuching for pilot run this year`, https://www.sarawaktribune.com/art-golden-trains-set-to-arrive-in-kuching-for-pilot-run-this-year/, published 2026-04-15.
   - Exact audit claim: "expected to arrive in Kuching in the second quarter."
   - Confidence level: medium.
   - Risk level: high, because changing `done: true` to `done: false` would alter progress metrics and may be wrong if another source supported completion.
   - Human review needed: yes.
   - Recommended action: manual review first.

4. Do not add a dedicated-spectrum milestone yet.
   - Field affected: milestone; source.
   - Proposed update: no dashboard milestone change. Keep the DayakDaily spectrum item as optional supporting evidence only if the project card needs more operational-readiness context.
   - Evidence source: DayakDaily, `Sarawak Metro first in M'sia to secure dedicated spectrum for ART operations`, https://dayakdaily.com/sarawak-metro-first-in-msia-to-secure-dedicated-spectrum-for-art-operations/, published 2026-04-24.
   - Exact audit claim: "obtain a dedicated private frequency spectrum."
   - Confidence level: high for the claim.
   - Risk level: medium, because this may be too granular for the tracker and could crowd the milestone list.
   - Human review needed: yes.
   - Recommended action: leave unchanged.

5. Keep the dashboard status unchanged.
   - Field affected: status.
   - Proposed update: leave `In Progress` unchanged.
   - Evidence source: official Sarawak Metro page and public reporting above.
   - Confidence level: high.
   - Risk level: low.
   - Human review needed: no.
   - Recommended action: leave unchanged.

## Baleh Hydroelectric Project

Current dashboard values:

- Status: `In Progress`
- Value: `~RM10 billion`
- Summary says the 1,285MW hydroelectric dam is part of Sarawak's 10-20-30 generation target and that public reporting separates project completion from later operational target.
- Milestones:
  - `2026`: Project completion, open.
  - `2028`: Operational generation, open.
- Next milestone: `2026: Project completion`
- Sources: DayakDaily August 2025 energy overview; DayakDaily January 2026 ASEAN-grid article.

Proposed updates:

1. Do not change the 2026/2028 milestones until the wording conflict is resolved.
   - Field affected: milestone; next milestone; wording; source; last reviewed date.
   - Proposed update: leave current milestones unchanged for now.
   - Evidence sources:
     - RECODA, `Annual Report - RECODA`, https://recoda.gov.my/annual-report/, page without a single publication date; site copyright 2025.
     - DayakDaily, `Green revolution: Supercharging Sarawak's energy prowess`, https://dayakdaily.com/green-revolution-supercharging-sarawaks-energy-prowess/, published 2025-08-26.
   - Exact audit claims: RECODA says "Baleh hydroelectric project is due for commissioning in 2026"; DayakDaily says "completed in 2026 and operational by 2028."
   - Confidence level: medium.
   - Risk level: high, because "commissioning", "completion", and "operational generation" may describe different stages.
   - Human review needed: yes.
   - Recommended action: manual review first.

2. Add RECODA source only after deciding how to interpret "commissioning".
   - Field affected: source; wording; last reviewed date.
   - Proposed update: if accepted, add RECODA annual-report page as official agency context and keep summary wording careful.
   - Evidence source: RECODA, `Annual Report - RECODA`, https://recoda.gov.my/annual-report/.
   - Exact audit claim: "Baleh hydroelectric project is due for commissioning in 2026."
   - Confidence level: medium.
   - Risk level: medium, because an official source is valuable but may conflict with the current interpretation.
   - Human review needed: yes.
   - Recommended action: manual review first.

3. Keep the dashboard status unchanged.
   - Field affected: status.
   - Proposed update: leave `In Progress` unchanged.
   - Evidence source: current dashboard sources plus RECODA context.
   - Confidence level: high.
   - Risk level: low.
   - Human review needed: no.
   - Recommended action: leave unchanged.

## PCDS 2030 Overview

Current dashboard values:

- Status: `Operational`
- Value: `Target: RM282B GDP by 2030`
- Summary states PCDS 2030 targets, including 8% annual GDP growth, RM15,000 median household income, 45% GHG intensity reduction, and 195,000 jobs.
- Milestones:
  - `Achieved`: Surpassed World Bank high-income threshold ahead of schedule, done.
  - `2030`: Target: RM282B GDP, open.
  - `2030`: Target: RM15,000 median monthly household income, open.
  - `2030`: Target: 195,000 new jobs created, open.
- Next milestone: `2030: Target: RM282B GDP`
- Sources: Business Events Sarawak PCDS page; Sarawak Government PCDS strategy PDF.
- Rendering note: this overview is stored in `src/trackerData.js` but excluded from the active project grid.

Proposed updates:

1. Do not change the overview milestones yet based only on media reporting.
   - Field affected: milestone; source; wording; last reviewed date.
   - Proposed update: leave current overview milestones unchanged until a direct World Bank or DOSM source is found.
   - Evidence source: DayakDaily, `World Bank: Sarawak retains high-income State status with GNI per capita of RM70,500 in 2025`, https://dayakdaily.com/world-bank-sarawak-retains-high-income-state-status-with-gni-per-capita-of-rm70500-in-2025/, published 2026-07-07.
   - Exact audit claim: "GNI per capita of RM70,500 in 2025."
   - Confidence level: medium.
   - Risk level: medium, because the article attributes the figure to World Bank staff calculations and DOSM data, but the audit did not find a direct official World Bank or DOSM source.
   - Human review needed: yes.
   - Recommended action: manual review first.

2. Consider a wording/source update only after official corroboration.
   - Field affected: source; wording; last reviewed date.
   - Proposed update: if a direct World Bank or DOSM source is found, add it and clarify that the high-income milestone is retained/confirmed for 2025 rather than treating it as a new project-status change.
   - Evidence source: none accepted yet beyond the DayakDaily article above.
   - Confidence level: low until official corroboration is found.
   - Risk level: medium.
   - Human review needed: yes.
   - Recommended action: leave unchanged.

3. Keep the dashboard status unchanged.
   - Field affected: status.
   - Proposed update: leave `Operational` unchanged.
   - Evidence source: current PCDS sources.
   - Confidence level: high.
   - Risk level: low.
   - Human review needed: no.
   - Recommended action: leave unchanged.

## Summary

High-confidence updates:

- KUTS: add the official Sarawak Metro KUTS page as a source.
- Sarawak Cancer Centre: newer tender/procurement and construction-start evidence is strong, but the actual milestone and wording changes still need human review because they change the visible timeline.

Require manual review:

- Sarawak Cancer Centre: replace 2026 groundbreaking with procurement/construction-start milestone; reconcile `Before 2031` operations target with reported 2032 completion target; reconcile value wording.
- KUTS: decide whether to alter passenger-service wording and whether the completed ART-unit-arrival milestone remains valid.
- Baleh Hydroelectric Project: reconcile RECODA "commissioning in 2026" with current "completed in 2026 and operational by 2028" wording.
- PCDS 2030 overview: find direct World Bank or DOSM corroboration before adding the 2025 GNI-per-capita update.

Should not be changed yet:

- Cancer Centre status: keep `In Progress`.
- KUTS status: keep `In Progress`.
- KUTS dedicated-spectrum milestone: leave unchanged because it may be too granular.
- Baleh milestones and sources: leave unchanged until commissioning/completion/operation wording is resolved.
- PCDS 2030 overview milestones and sources: leave unchanged until official corroboration is found.

Recommended safest first dashboard data update:

Add the official Sarawak Metro KUTS project page as a source, without changing KUTS status or milestone completion. This is the lowest-risk update because it strengthens the evidence base with an official project source and does not change dashboard interpretation.
