# Data Audit

Audit date: 2026-07-08

Scope: current dashboard project data in `src/trackerData.js`, reviewed against `docs/data-methodology.md`.

This audit does not update dashboard data. It records public evidence found during review and recommends possible follow-up changes for human review.

## Method

- Checked the current dashboard status, next milestone, milestone list, and source list for each project.
- Used the evidence priority from `docs/data-methodology.md`: official government, official agency/ministry, official company/project announcements, reputable news, then other public sources.
- Treated statuses as public-evidence indicators, not official certification.
- Did not treat speculation or broad context as enough to change a status or milestone.
- Marked conflicting or timeline-changing evidence for manual review.

## Summary

- Projects checked: 13 records total, including 12 active dashboard projects and the hidden PCDS framework overview record.
- Projects with high-confidence update candidates: Sarawak Cancer Centre; KUTS - Kuching Urban Transportation System.
- Projects needing manual review: Sarawak Cancer Centre; KUTS - Kuching Urban Transportation System; Baleh Hydroelectric Project; PCDS 2030 - Overarching Framework.
- Projects with no clear public update found: SMD Semiconductor - GaN Chip Development; RM1 Billion Paddy Infrastructure Programme; Sarawak Delta Geopark; Niah National Park - UNESCO World Heritage; Greenhouse Gas Emission Ordinance 2023; FutureData - Kuching Data Centre Park; SCORE - Sarawak Corridor of Renewable Energy; Bintulu Port - State Control Handover; Green Hydrogen Economy - H2ornbill & H2biscus.
- Recommended next step: review the high-confidence and manual-review items first, then update `src/trackerData.js` only where the owner accepts the evidence and interpretation.

## Project Checks

### SMD Semiconductor - GaN Chip Development

- Current dashboard status: `In Progress`
- Current next milestone: Global IP registration and commercialisation
- Existing sources reviewed: DayakDaily SMD centre article; DayakDaily keteq.GaN/AI converter article; DayakDaily Keteq AI global IP article.
- Newer public evidence found: No clear public update found.
- Possible update: none.
- Human review needed: no, unless a later official SMD/company source is found.

### RM1 Billion Paddy Infrastructure Programme

- Current dashboard status: `In Progress`
- Current next milestone: Farmer clustering and paddy land-leasing implementation
- Existing sources reviewed: DayakDaily allocation, misuse warning, 500,000-tonne target, and rice-bowl articles.
- Newer public evidence found: No clear public update found.
- Possible update: none.
- Human review needed: no, unless an official Department of Agriculture or implementation-progress source is found.

### Sarawak Delta Geopark

- Current dashboard status: `Designated`
- Current next milestone: Tourism products and community-based geopark rollout
- Existing sources reviewed: DayakDaily UNESCO approval, branding, and heritage-tourism articles.
- Newer public evidence found: No clear public update found.
- Possible update: none.
- Human review needed: no. A direct UNESCO Global Geoparks page would be useful if found later, but no dashboard change is supported from this audit.

### Niah National Park - UNESCO World Heritage

- Current dashboard status: `Designated`
- Current next milestone: UNESCO site management, conservation, and visitor facilities
- Existing sources reviewed: UNESCO World Heritage listing; DayakDaily post-inscription conservation context.
- Newer public evidence found: No clear public update found.
- Possible update: none.
- Supporting current evidence: UNESCO's listing confirms inscription year 2024 and identifies Sarawak Forestry Corporation and Sarawak Museum Department as the main implementation institutions.
- Human review needed: no. The current `Designated` status remains supported by the official UNESCO listing.

### Greenhouse Gas Emission Ordinance 2023

- Current dashboard status: `Enacted`
- Current next milestone: GHG reporting, carbon market, and sustainability reporting rollout
- Existing sources reviewed: FULCRUM low-carbon policy analysis.
- Newer public evidence found: No clear public update found.
- Possible update: none.
- Human review needed: no immediate dashboard change. A future review should still look for official ordinance, gazette, or regulator implementation sources because the current active source is analytical rather than official.

### Sarawak Cancer Centre

- Current dashboard status: `In Progress`
- Current dashboard value: `RM1.52 billion (RM500M equipment fronted)`
- Current next milestone: `2026-Q3: Groundbreaking ceremony`
- Existing sources reviewed: DayakDaily December 2025 and February 2026 articles; DayakDaily 13MP healthcare context article.

Possible update 1:

- Current dashboard value: next milestone is `2026-Q3: Groundbreaking ceremony`.
- Proposed update: replace the next milestone with a procurement/construction-start milestone, for example `2027-Q1: Contract award / construction start target`.
- Source title: Sarawak Cancer Centre targets 2032 completion as design-and-build tender process begins.
- Source URL: https://dayakdaily.com/sarawak-cancer-centre-targets-2032-completion-as-design-and-build-tender-process-begins/
- Publication date: 2026-07-07.
- Exact claim found: "construction targeted to commence in early 2027."
- Field may need updating: milestones, next milestone, summary, sources.
- Confidence: high.
- Human review needed: yes, because this changes the existing 2026 groundbreaking expectation.

Possible update 2:

- Current dashboard value: operations targeted `Before 2031`.
- Proposed update: mark completion/operation timing for manual review; possible revised milestone is `2032: Completion target`, with note that operation may begin during DLP.
- Source title: Sarawak Cancer Centre targets 2032 completion as design-and-build tender process begins.
- Source URL: https://dayakdaily.com/sarawak-cancer-centre-targets-2032-completion-as-design-and-build-tender-process-begins/
- Publication date: 2026-07-07.
- Exact claim found: "expected to be completed by 2032."
- Field may need updating: milestones, summary.
- Confidence: high.
- Human review needed: yes, because older tracker data says operational before 2031 and the new report gives a later completion timeline.

Possible update 3:

- Current dashboard value: reported value is `RM1.52 billion (RM500M equipment fronted)`.
- Proposed update: consider revising value wording to reflect RM1 billion advanced for implementation and more than RM1 billion total project cost, while keeping the RM500M equipment note if still separately supported.
- Source title: Sarawak Cancer Centre targets 2032 completion as design-and-build tender process begins.
- Source URL: https://dayakdaily.com/sarawak-cancer-centre-targets-2032-completion-as-design-and-build-tender-process-begins/
- Publication date: 2026-07-07.
- Exact claim found: "more than RM1 billion in total."
- Field may need updating: value, summary, sources.
- Confidence: medium.
- Human review needed: yes, because the new source avoids final cost detail and should not overwrite the RM1.52B estimate without reconciliation.

Corroborating source:

- Source title: Sarawak Cancer Centre enters tender stage.
- Source URL: https://www.sarawaktribune.com/sarawak-cancer-centre-enters-tender-stage/
- Publication date: 2026-05-19.
- Exact claim found: "now at the tender procurement stage."
- Field may need updating: milestones, summary, sources.
- Confidence: high.
- Human review needed: yes.

### FutureData - Kuching Data Centre Park

- Current dashboard status: `In Progress`
- Current next milestone: First 17MW data centre operational
- Existing sources reviewed: Data Center Dynamics and The Edge articles.
- Newer public evidence found: No clear public update found.
- Possible update: none.
- Human review needed: no immediate dashboard change. A future audit should prioritize official FutureData, TSG Group, project-company, or government investment sources.

### SCORE - Sarawak Corridor of Renewable Energy

- Current dashboard status: `Operational`
- Current next milestone: Industrial park expansion and investor facilitation
- Existing sources reviewed: DayakDaily RM125B/53K jobs article; RECODA official site.
- Newer public evidence found: No clear public update found for headline investment/job metrics.
- Possible update: none to dashboard status, milestones, or reported value.
- Supporting public evidence: RECODA's official site remains relevant for agency context and says RECODA is the lead agency overseeing SCORE. Its homepage also shows 2026 news items, but the items found were general outreach/engagement rather than clear updates to the tracked SCORE metrics.
- Human review needed: no immediate dashboard change.

### KUTS - Kuching Urban Transportation System

- Current dashboard status: `In Progress`
- Current next milestone: `2026-Q4: Begin passenger operations and complete hydrogen plant relocation`
- Existing sources reviewed: DayakDaily ART Q4 2026 operations article; The Edge hydrogen plant relocation article.

Possible update 1:

- Current dashboard value: source list has media sources but no official Sarawak Metro project page.
- Proposed update: add the official Sarawak Metro KUTS page as an official project source and consider updating summary with official route/progress context.
- Source title: KUTS - Sarawak Metro Sdn Bhd.
- Source URL: https://www.mysarawakmetro.com/what-we-do/kuching-urban-transportation-system
- Publication date: page current progress includes June 2026 items; no single publication date shown.
- Exact claim found: "Blue Line is estimated to begin revenue service in 2026."
- Field may need updating: sources, summary.
- Confidence: high.
- Human review needed: no for adding source; yes if changing milestone wording.

Possible update 2:

- Current dashboard value: milestone `2026-Q1: First two ART units arrive in Kuching` is marked done.
- Proposed update: manually review whether this milestone should remain completed. Public evidence found in this audit confirms testing and readiness for delivery in April 2026, but did not confirm arrival in Kuching.
- Source title: ART 'golden trains' set to arrive in Kuching for pilot run this year.
- Source URL: https://www.sarawaktribune.com/art-golden-trains-set-to-arrive-in-kuching-for-pilot-run-this-year/
- Publication date: 2026-04-15.
- Exact claim found: "expected to arrive in Kuching in the second quarter."
- Field may need updating: milestone `done`, milestone text/date, sources.
- Confidence: medium.
- Human review needed: yes, because the current data may have used a later source not found in this audit.

Possible update 3:

- Current dashboard value: next milestone combines passenger operations and hydrogen plant relocation.
- Proposed update: keep the Q4 2026 pilot/passenger-service framing unless stronger official evidence changes it; optionally add a source note that pilot operations remain scheduled for Q4 2026.
- Source title: ART 'golden trains' set to arrive in Kuching for pilot run this year.
- Source URL: https://www.sarawaktribune.com/art-golden-trains-set-to-arrive-in-kuching-for-pilot-run-this-year/
- Publication date: 2026-04-15.
- Exact claim found: "pilot operations scheduled for the fourth quarter."
- Field may need updating: sources, next milestone wording.
- Confidence: high.
- Human review needed: no for source addition; yes if splitting milestones.

Possible update 4:

- Current dashboard value: no communications-system milestone.
- Proposed update: consider adding a completed support-system milestone for dedicated spectrum only if the dashboard wants operational-readiness milestones, not every procurement/detail event.
- Source title: Sarawak Metro first in M'sia to secure dedicated spectrum for ART operations.
- Source URL: https://dayakdaily.com/sarawak-metro-first-in-msia-to-secure-dedicated-spectrum-for-art-operations/
- Publication date: 2026-04-24.
- Exact claim found: "obtain a dedicated private frequency spectrum."
- Field may need updating: milestones, sources.
- Confidence: high.
- Human review needed: yes, because this may be too granular for the tracker.

### Bintulu Port - State Control Handover

- Current dashboard status: `Awaiting Decision`
- Current next milestone: Federal Cabinet endorsement and final agreement signing
- Existing sources reviewed: DayakDaily February 2026 agreement/valuation articles and May 2026 cabinet-endorsement article.
- Newer public evidence found: No clear public update found.
- Possible update: none.
- Human review needed: no immediate dashboard change. The existing `Awaiting Decision` status remains appropriate unless an official cabinet, ministry, or agreement-signing source is found.

### Baleh Hydroelectric Project

- Current dashboard status: `In Progress`
- Current next milestone: `2026: Project completion`
- Existing sources reviewed: DayakDaily August 2025 energy overview; DayakDaily January 2026 ASEAN/Borneo grid article.

Possible manual-review item:

- Current dashboard value: milestones separate `2026: Project completion` and `2028: Operational generation`.
- Proposed update: do not change yet; reconcile official RECODA wording with current DayakDaily/Sarawak Energy-context reporting.
- Source title: Annual Report - RECODA.
- Source URL: https://recoda.gov.my/annual-report/
- Publication date: page does not expose a single publication date; RECODA site copyright shows 2025.
- Exact claim found: "Baleh hydroelectric project is due for commissioning in 2026."
- Field may need updating: milestones, summary, sources.
- Confidence: medium.
- Human review needed: yes, because current dashboard separates completion in 2026 from operation in 2028, while the RECODA page uses "commissioning" for 2026.

Corroborating/current-source context:

- Source title: Green revolution: Supercharging Sarawak's energy prowess.
- Source URL: https://dayakdaily.com/green-revolution-supercharging-sarawaks-energy-prowess/
- Publication date: 2025-08-26.
- Exact claim found: "completed in 2026 and operational by 2028."
- Field may need updating: none immediately.
- Confidence: high for the current dashboard wording.
- Human review needed: yes only because RECODA wording conflicts with this interpretation.

### Green Hydrogen Economy - H2ornbill & H2biscus

- Current dashboard status: `Planning`
- Current next milestone: Hydrogen plant relocation and upgrading at Rembus
- Existing sources reviewed: DayakDaily H2ornbill/H2biscus hydrogen economy article; DayakDaily Bintulu low-carbon industrial push article; FULCRUM hydrogen analysis.
- Newer public evidence found: No clear public update found.
- Possible update: none.
- Human review needed: no immediate dashboard change. A future update should prioritize SEDC Energy, Gentari, Sarawak H2 Hub, or project-company announcements.

### PCDS 2030 - Overarching Framework

- Current dashboard status: `Operational`
- Current next milestone: Target: RM282B GDP
- Rendering note: this record is stored in `src/trackerData.js` but excluded from the active project grid.
- Existing sources reviewed: Business Events Sarawak PCDS page; Sarawak Government PCDS strategy PDF.

Possible update:

- Current dashboard value: completed milestone says Sarawak surpassed the World Bank high-income threshold ahead of schedule.
- Proposed update: consider adding a source and/or milestone note that Sarawak retained high-income status in 2025, with GNI per capita RM70,500, while keeping the existing 2030 targets unchanged.
- Source title: World Bank: Sarawak retains high-income State status with GNI per capita of RM70,500 in 2025.
- Source URL: https://dayakdaily.com/world-bank-sarawak-retains-high-income-state-status-with-gni-per-capita-of-rm70500-in-2025/
- Publication date: 2026-07-07.
- Exact claim found: "GNI per capita of RM70,500 in 2025."
- Field may need updating: overview milestones, summary, sources.
- Confidence: medium.
- Human review needed: yes, because the report attributes the figures to World Bank staff calculations and DOSM data, but this audit did not find a direct official World Bank/DOSM source page.

## Recommended Next Step

1. Review and accept/reject the Sarawak Cancer Centre timeline updates first because they directly affect next milestone, completion target, value wording, and source list.
2. Review KUTS official-source addition and the ART unit arrival milestone before changing any `done` flag.
3. Reconcile Baleh's 2026/2028 timeline wording before changing milestones.
4. For the PCDS overview, look for a direct World Bank or DOSM source before updating the hidden overview record.
5. Only after human review, update `src/trackerData.js` and `LAST_UPDATED` in a separate data-update task.
