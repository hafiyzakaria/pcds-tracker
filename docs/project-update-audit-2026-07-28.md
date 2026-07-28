# Project Update Audit — 28 July 2026

## Scope and Outcome

This audit reviewed all 30 live project cards in `src/trackerData.js` for newer public information. It used exact-name searches, aliases, lead organisations, current open milestones, and passed-target searches. Google Search and AI Overview were used for discovery only; recommendations below rely on opened public source pages or clearly identified source-page metadata.

Outcome:

- 6 content updates recommended
- 1 evidence-only enhancement recommended
- 12 cards marked for monitoring because an open checkpoint is approaching, has passed, or remains weakly evidenced
- 11 cards with no verified need for a change

The seven recommendations below were implemented on the `preview` branch on 28 July 2026, including matching BM copy and bilingual update-history entries. A subsequent QC reviewed all 30 cards, corrected the H2biscus and H2ornbill milestone order, and verified the seven newly added public links before the Preview release.

## Recommended Content Updates

### 3. Sarawak Agrotechnology Park

- Keep status `Planning`.
- Change the reported value from `RM5 million reported allocations` to `RM19.5 million allocated in the Sarawak Budget 2026`.
- Add a completed `2025-11-24` milestone: `RM19.5M development allocation announced`.
- Update the summary so it no longer says no later site-development update was published.
- Add [DayakDaily — Sarawak Budget 2026 agriculture allocations (24 Nov 2025)](https://dayakdaily.com/sarawak-budget-2026-nearly-rm300-mil-allocated-to-modernise-agriculture-boost-food-security/). The report specifically assigns RM19.5 million to SARTECH development at Semenggok and Tarat.
- Confidence: medium. The allocation is clear, but it does not prove physical site work has begun.

### 7. Greenhouse Gas Emission Ordinance 2023

- Keep status `In Progress`.
- Replace the broad `2026-03-12` system milestone with the exact primary-source event: `2026-02-10: GHG-MS Phase 1 commenced operations`.
- Retain annual emissions reporting as the next open milestone.
- Add [NREB — GHG-MS Phase 1 Carbon Emission Report and Flaring and Venting Module (10 Feb 2026)](https://www.nreb.gov.my/web/subpage/announcement_view/196). NREB states that the module commenced operation and that business entities must use it for emissions reporting and flaring and venting consent.
- Confidence: high.

### 23. Kuala Baram Capital Dredging

- Keep status `In Progress`.
- Add a completed `2026-04-25` progress milestone: `Physical progress reached about 55 percent`.
- Replace the generic `2026-Q4` completion target with `2026-10: Dredging completion`.
- Keep `RM238 million contract` as the displayed value unless the value field is separately reviewed. Newer reports refer to an RM208.9 million development cost, which is not necessarily the same measure as the awarded contract.
- Add [DayakDaily — Miri Port dredging project 55 percent complete (25 Apr 2026)](https://dayakdaily.com/premier-miri-port-dredging-project-55-pct-complete-channel-extension-up-to-10km-under-study/) and [MIPD — Kuala Baram works ahead of schedule (14 Nov 2025)](https://mipd.sarawak.gov.my/web/subpage/news_view/508).
- Confidence: high.

### 25. Kuching Urban Transportation System

- Keep status `In Progress`.
- Correct the Q4 2026 next milestone from public passenger service to `Pilot operations begin`.
- Add `2027: Full commercial operations begin` as a separate open milestone.
- Add `2026-04-30: Phase 1 reached 38.2 percent physical progress`.
- Consider adding `2030-Q3: Overall KUTS project completion` after checking whether the card should track full network completion as well as initial service.
- Add [The Star — KUTS to start pilot run in Q4 (18 May 2026)](https://www.thestar.com.my/news/nation/2026/05/18/kuching-urban-transportation-system-to-start-pilot-run-in-q4). The article distinguishes the Q4 pilot from full commercial operations in 2027 and reports Phase 1 progress.
- Confidence: high.

### 27. Baleh Hydroelectric Project

- Keep status `In Progress`.
- Remove the stale `2026: Dam construction completion` and `2028: Electricity generation begins` milestones.
- Replace them with `2027: Reservoir impoundment begins` and `2029-12: Project completion and power generation`.
- Update the summary to reflect the official revised sequence. The impoundment process is expected to take about two years, with completion scheduled for December 2029 and an aspiration to finish three months early.
- Add [Office of the Premier / UKAS — Impoundment works scheduled to begin in 2027 (16 Jun 2025)](https://premierdept.sarawak.gov.my/web/subpage/news_view/19825/UKAS) and [Sarawak Energy — Baleh HEP project page](https://www.sarawakenergy.com/baleh-hep).
- Confidence: high. This is a correction to a stale card timeline, not a newly completed milestone.

### 29. H2biscus and H2ornbill Hydrogen Projects

- Keep status `Planning`.
- Update the summary to say the projects are being recalibrated and downscaled because of immediate financial constraints and uncertain demand or offtake.
- Add `2026-06-09: Project scopes entered recalibration`.
- Remove the definitive `2028: Commercial production begins` claim or label the timing `Under review` until a revised schedule is published.
- Keep the Rembus plant milestone separate from the export-project recalibration.
- Add [Borneo Post — H2biscus and H2ornbill recalibrated (9 Jun 2026)](https://www.theborneopost.com/2026/06/09/sarawak-recalibrates-h2biscus-and-h2ornbill-hydrogen-projects-amid-financial-constraints/) and [Free Malaysia Today — projects scaled down over weak demand (8 Apr 2026)](https://www.freemalaysiatoday.com/category/nation/2026/04/08/sarawak-hydrogen-projects-scaled-down-over-weak-demand/).
- Confidence: high.

## Evidence Enhancement

### 2. Paddy Infrastructure Programme

- No content or status change is recommended.
- Add [Office of the Premier / UKAS — RM1 billion allocated to the Stumbin-Bijat Paddy Project (10 Sep 2025)](https://premierdept.sarawak.gov.my/web/subpage/news_view/24582/UKAS) as a primary public source for the allocation and project scope.
- Continue monitoring physical infrastructure delivery, farmer clustering, and land leasing.
- Confidence: medium. The official page strengthens the existing claim but does not provide a newer delivery milestone.

## Full Dashboard Audit

| # | Project | Verdict | Audit finding and next action |
| --- | --- | --- | --- |
| 1 | Gallium Nitride Chip Development | Monitor | No confirmation that the early-2026 global IP or commercialisation target was achieved. Search SMD and keteq disclosures again using the product and company names. |
| 2 | Paddy Infrastructure Programme | Evidence enhancement | Add the UKAS allocation source above. No verified newer physical-delivery milestone. |
| 3 | Sarawak Agrotechnology Park | Update recommended | Budget 2026 assigns RM19.5 million to SARTECH at Semenggok and Tarat. Keep Planning until site work is confirmed. |
| 4 | Sungai Baji Agropark | Monitor | The Q1 2026 operations checkpoint has passed, but no credible source confirming operations was found. Recheck before treating it as complete; Q3 2026 commercial production is the next stated target. |
| 5 | Sarawak Delta UNESCO Global Geopark | No card change | April 2026 designation is already reflected. Later results were follow-up tourism coverage rather than a new designation milestone. |
| 6 | Niah National Park World Heritage Site | Monitor | UNESCO inscription is complete, while the card tracks continuing conservation and visitor work. No newer project-specific delivery update was verified. |
| 7 | Greenhouse Gas Emission Ordinance 2023 | Update recommended | Use NREB's exact 10 Feb 2026 Phase 1 commencement and primary source. Annual reporting remains open. |
| 8 | Semenggoh Rainforest Discovery Centre | Monitor | The June 2024 Phase 1 target remains unconfirmed. Search results mainly concerned the wildlife centre or unrelated visits, not verified project completion. |
| 9 | Piasau Nature Reserve Discovery Centre | No card change | January 2026 reporting remains the newest material project update found. Completion remains expected in August 2027. |
| 10 | Bau Gold Project | Monitor | The May 2026 conditional Jugan lease terms remain the newest relevant disclosure found. Search results for increased ownership and drilling were from 2024 and 2021, so they were rejected as stale. |
| 11 | Sarawak Cancer Centre | No card change | The card already includes the 7 July 2026 design-and-build tender, Q1 2027 construction target, and 2032 completion update. |
| 12 | Kuching Data Centre Park | Monitor | No confirmation was found that the first 17MW facility began operations in 2026. The operating target must remain open. |
| 13 | CHITOSE Carbon Capture Central Sarawak | No card change | The apparent expansion result was published in February 2024. It is useful context, not a new 2026 update. |
| 14 | Sarawak Bioindustrial Park | Monitor | No public evidence was found that Phase 1 construction has begun or that the Q3 2027 completion schedule changed. |
| 15 | Kasawari Carbon Capture and Storage Project | No card change | The April 2026 reporting on a possible 2027 first injection is already reflected. No later verified project milestone was found. |
| 16 | Yayasan Sarawak International Schools Expansion | No card change | Search results described school activity and an official launch, but did not change the remaining three-campus completion target. |
| 17 | Sarawak Corridor of Renewable Energy | Monitor | No newer corridor-wide investment or jobs figure was verified. Search node-specific RECODA reporting during the next sweep. |
| 18 | Pan Borneo Highway Sarawak Phase 1 | Monitor | No source confirming Work Package 11 completion was found. Do not infer completion from the earlier 99.98 percent figure. |
| 19 | Sarawak-Sabah Link Road | No card change | The April 2026 Phase 1 and Phase 2 progress figures remain the newest project-specific update located. |
| 20 | Bintulu-Samalaju Gas Pipeline | No card change | May 2026 pre-commissioning and the 2027 operations target are already reflected. No later operational confirmation was verified. |
| 21 | Sejingkat Battery Energy Storage System | No card change | No material project-specific event newer than the February 2025 commissioning was found. |
| 22 | Sarawak-Singapore Electricity Interconnection | Monitor | New partnership coverage did not establish a further approval, licence, construction start, or revised delivery date beyond the October 2025 conditional approval. |
| 23 | Kuala Baram Capital Dredging | Update recommended | Add April 2026 progress and replace generic Q4 completion with October 2026. Keep the contract and project-cost figures distinct. |
| 24 | Sarawak River Navigation and Surveillance System | No card change | The operational Sarawak River VTMS and Q3 2027 Miri system target remain current. Miri smart-city surveillance results were unrelated false positives. |
| 25 | Kuching Urban Transportation System | Update recommended | Q4 2026 is a pilot, not full passenger service. Full commercial operations are expected in 2027. |
| 26 | Bintulu Port Handover to Sarawak | No card change | The card already records the 21 June 2026 agreements and handover. Later reporting only confirms continuity of day-to-day operations. |
| 27 | Baleh Hydroelectric Project | Update recommended | The 2026/2028 sequence is stale. Official reporting gives 2027 impoundment and December 2029 completion and generation. |
| 28 | Mentarang Induk Hydroelectric Project | Monitor | Q1 2026 financial close was a target reported in 2025. No source confirming that it occurred was found, so the existing first-power milestone should not be changed. |
| 29 | H2biscus and H2ornbill Hydrogen Projects | Update recommended | Two 2026 reports confirm scope recalibration or downscaling. The definitive 2028 production claim is no longer safe. |
| 30 | Batang Ai Floating Solar Farm | Monitor | No credible confirmation was found for the additional 120MW capacity in 2026. Search results reconfirmed the original 50MW facility and expansion intention only. |

## Search Method Findings

The improved search approach was more effective than a single exact-name sweep:

- Alias and milestone searches found the official NREB implementation page after the full ordinance name returned weak results.
- A passed-target search exposed Baleh's revised 2027-to-2029 sequence, which the current exact-name card audit had missed.
- Searching `pilot` and `commercial operations` distinguished KUTS's Q4 2026 pilot from 2027 commercial service.
- Searches for `scaled down`, `recalibrated`, and `offtake` found the material H2biscus and H2ornbill change.

It also produced false positives that show why the source-page gate is necessary:

- Miri River navigation searches returned Miri city vehicle and facial-recognition surveillance stories.
- A Bau Gold ownership result was from January 2024, while a drilling result was from November 2021.
- The C4 Sarawak expansion result was from February 2024 despite appearing in a current search.
- Government pages often display a current website footer date that is newer than the actual article date.

The repeatable workflow is now documented in `docs/data-methodology.md`.
