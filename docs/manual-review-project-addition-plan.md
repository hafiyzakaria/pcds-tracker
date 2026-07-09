# Manual Review Project Addition Plan

Prepared: 2026-07-08

Scope: the 12 candidates previously listed under `Manual Review Candidates` in `docs/project-trackability-review.md`.

Interpretation used here: a project may be addable even with limited online updates if it has a clear name, clear PCDS/public-sector relevance, at least one official PDF source, enough information for a cautious card, and no obvious duplicate in `src/trackerData.js`.

## 1. Pan Borneo Highway Sarawak Phase 1

- Candidate project name: Pan Borneo Highway Sarawak Phase 1
- Decision: provisional card
- Reason: The project is clearly named, statewide, infrastructure-relevant, and supported by official PDF evidence. The latest completion or handover status still needs better public confirmation, so the card should avoid claiming completion.
- Evidence from PDF: `docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`, page 101, says the project began in 2016, upgrades 786 km to dual carriageway JKR R5 standard, covers 11 work packages, and was 98.6 percent complete as of December 2023.
- Online sources found, if any: Broad public route/background references exist, but no official current completion source was verified in the prior review.
- Proposed category: `infrastructure` / Basic Infrastructure
- Proposed status using existing status values: `In Progress`
- Proposed reported value: Do not state a monetary value.
- Proposed summary: Major Sarawak road-upgrade programme under the Pan Borneo Highway, converting a 786 km single carriageway corridor into dual carriageway JKR R5 standard across 11 work packages. Official PDF evidence reports 98.6 percent completion as of December 2023; the next public proof point is final completion or handover confirmation.
- Proposed milestones:
  - `{ date: "2016", text: "Pan Borneo Highway Sarawak Phase 1 commenced", done: true }`
  - `{ date: "2023-12", text: "Official report: project reached 98.6 percent completion", done: true }`
  - `{ date: "TBD", text: "Final completion, opening, or handover confirmation", shortText: "Final completion confirmation", done: false }`
- Proposed sources:
  - `Sarawak Government PCDS 2030 Highlights 2023 PDF - page 101` (`docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`)
- Missing information: Latest official completion status, remaining work package details, public handover/opening source.
- Risk level: Medium
- Whether ready to implement: Yes, as a provisional infrastructure card.

## 2. Sarawak-Sabah Link Road

- Candidate project name: Sarawak-Sabah Link Road (SSLR)
- Decision: provisional card
- Reason: The project is clearly named and strategically relevant to regional road connectivity. PDF evidence provides scope, value, routes, and target completion, but package-level current progress remains unclear.
- Evidence from PDF: `docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`, page 108, says the Federal Government approved SSLR with RM8.17 billion allocation, Phase 1 from Simpang Gelugos to Long Luping and Phase 2 from Mulu to Ba'Kelalan, with total completion expected in Q3 2029.
- Online sources found, if any: Search found only indirect route/background references during prior validation.
- Proposed category: `infrastructure` / Basic Infrastructure
- Proposed status using existing status values: `In Progress`
- Proposed reported value: `RM8.17 billion`
- Proposed summary: Major regional road-link project intended to improve Sarawak-Sabah connectivity without relying on Brunei transit. Official PDF evidence reports federal approval, RM8.17 billion allocation, Phase 1 and Phase 2 route descriptions, and a Q3 2029 overall completion target.
- Proposed milestones:
  - `{ date: "Official report", text: "Federal Government approval and RM8.17B allocation reported", done: true }`
  - `{ date: "2029-Q3", text: "Target: total SSLR completion", shortText: "Target: total completion", done: false }`
  - `{ date: "TBD", text: "Public package-level progress update", shortText: "Package progress update", done: false }`
- Proposed sources:
  - `Sarawak Government PCDS 2030 Highlights 2023 PDF - page 108` (`docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`)
- Missing information: Current work-package status, contractors, procurement/progress updates, official public source after 2023.
- Risk level: Medium
- Whether ready to implement: Yes, as a provisional card. Avoid splitting Phase 2/3 road works into separate cards until package evidence is clearer.

## 3. Miri Port Kuala Baram Capital Dredging / Northern Gateway Upgrade

- Candidate project name: Miri Port Kuala Baram Capital Dredging / Northern Gateway upgrade
- Decision: provisional card
- Reason: The project is specific, infrastructure-relevant, and supported by two official PDF references. Public online progress is thin, so wording should focus on the planned dredging and the need for implementation updates.
- Evidence from PDF: `docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`, page 108, describes capital dredging from September 2024 to Q2 2027. `docs/source-pdfs/PCDS 2030 AIP Final Report Volume III Enablers_Poverty Alleviation.pdf`, pages 252-253, lists RM540 million for reinvigorating Miri Port as the Northern Gateway and dredging to -8 m below chart datum.
- Online sources found, if any: No adequate current public progress source found in prior validation.
- Proposed category: `transport` / Transport
- Proposed status using existing status values: `Planning`
- Proposed reported value: `RM540 million`
- Proposed summary: Proposed Miri Port access upgrade centred on capital dredging at Kuala Baram to support the port's Northern Gateway role. Official PDF evidence gives the dredging objective, reported value, and planned schedule into Q2 2027, but current contract and physical-progress evidence still need public confirmation.
- Proposed milestones:
  - `{ date: "Official report", text: "AIP listed RM540M Miri Port Northern Gateway dredging proposal", done: true }`
  - `{ date: "2024-09", text: "Target: capital dredging period begins", done: false }`
  - `{ date: "2027-Q2", text: "Target: capital dredging period completes", shortText: "Dredging completion target", done: false }`
- Proposed sources:
  - `Sarawak Government PCDS 2030 Highlights 2023 PDF - page 108` (`docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`)
  - `PCDS 2030 AIP Volume III PDF - pages 252-253` (`docs/source-pdfs/PCDS 2030 AIP Final Report Volume III Enablers_Poverty Alleviation.pdf`)
- Missing information: Contract award, implementing party confirmation, latest schedule, dredging progress.
- Risk level: High
- Whether ready to implement: Yes, as a provisional planning card.

## 4. Bau Gold Project

- Candidate project name: Bau Gold Project
- Decision: provisional card
- Reason: The project is clearly named and economically material, and the PDF identifies the reported proponent and resource basis. It should be treated cautiously as a planning/exploration-stage mining project, not as an approved mine.
- Evidence from PDF: `docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`, page 60, says Besra Gold Inc through North Borneo Gold Sdn Bhd announced 3.3 million ounces of gold in Bau, projected upstream investment of RM1.38 billion, and 500-1,000 jobs.
- Online sources found, if any: Prior review found only secondary or historical project references, not a current official mine-development source.
- Proposed category: `mining` / Mining
- Proposed status using existing status values: `Planning`
- Proposed reported value: `RM1.38 billion projected upstream investment`
- Proposed summary: Proposed gold-development project in Bau associated with Besra Gold Inc and North Borneo Gold Sdn Bhd. Official PDF evidence reports a 3.3 million ounce gold resource and projected upstream investment, but public evidence for mine approvals, EIA status, financing, and development timetable remains incomplete.
- Proposed milestones:
  - `{ date: "Official report", text: "Bau Gold resource and projected investment reported in PCDS Highlights", done: true }`
  - `{ date: "TBD", text: "Public update on approvals, EIA, financing, or development decision", shortText: "Development decision update", done: false }`
- Proposed sources:
  - `Sarawak Government PCDS 2030 Highlights 2023 PDF - page 60` (`docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`)
- Missing information: Current company source, mining approvals, EIA, financing, final development decision, construction timeline.
- Risk level: High
- Whether ready to implement: Yes, as a provisional mining card if the tracker accepts exploration/planning-stage projects.

## 5. Bintulu-Samalaju Gas Pipeline

- Candidate project name: Bintulu-Samalaju Gas Pipeline
- Decision: provisional card
- Reason: The project is specific and supports gas supply to Samalaju Industrial Park. PDF evidence provides route scale, value, and commissioning target, but public online evidence remains limited and it must not be confused with the different Sabah-Sarawak Gas Pipeline.
- Evidence from PDF: `docs/source-pdfs/PCDS 2030 AIP Final Report Volume III Enablers_Poverty Alleviation.pdf`, page 368, lists an approximately 70 km pipeline, RM599.98 million resources, and commissioning through 2025. `docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`, page 113, identifies it as a Sarawak Gas Roadmap component.
- Online sources found, if any: Prior validation found no adequate PETROS or official project page. Search results also surfaced the unrelated Sabah-Sarawak Gas Pipeline.
- Proposed category: `utilities` / Utilities
- Proposed status using existing status values: `Planning`
- Proposed reported value: `RM599.98 million`
- Proposed summary: Proposed gas-supply pipeline linking Bintulu and Samalaju to support the Sarawak Gas Roadmap and industrial energy needs. Official PDF evidence describes an approximately 70 km pipeline and commissioning target through 2025, but current construction or commissioning status still needs a public project update.
- Proposed milestones:
  - `{ date: "Official report", text: "Bintulu-Samalaju Gas Pipeline listed as Sarawak Gas Roadmap component", done: true }`
  - `{ date: "2025", text: "Target: commissioning period from AIP evidence", shortText: "Commissioning target", done: false }`
  - `{ date: "TBD", text: "Official project status update from implementing party", shortText: "Official status update", done: false }`
- Proposed sources:
  - `PCDS 2030 AIP Volume III PDF - page 368` (`docs/source-pdfs/PCDS 2030 AIP Final Report Volume III Enablers_Poverty Alleviation.pdf`)
  - `Sarawak Government PCDS 2030 Highlights 2023 PDF - page 113` (`docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`)
- Missing information: Implementing party, route details, contractor/EPC evidence, current physical progress, commissioning confirmation.
- Risk level: High
- Whether ready to implement: Yes, as a provisional utilities card with a clear note not to conflate it with the Sabah-Sarawak Gas Pipeline.

## 6. Batang Ai Floating Solar Farm

- Candidate project name: Batang Ai Floating Solar Farm
- Decision: full card
- Reason: The project has strong PDF evidence and an official Sarawak Energy public update naming the project, lead parties, capacity, location, progress status, and commissioning target.
- Evidence from PDF: `docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`, pages 125 and 128, and `docs/source-pdfs/PCDS 2030 AIP Final Report Volume III Enablers_Poverty Alleviation.pdf`, pages 409-410, describe the 50 MWac / 69 MWdc project, expected annual output, carbon-reduction target, design and soil-investigation milestones, and Q4 2024 first-power/mechanical-completion targets.
- Online sources found, if any: Sarawak Energy reported on 20 June 2024 that construction reached 35 percent, commissioning was targeted by end-October 2024, the facility has 50 MW capacity, and the joint venture involves Sarawak Energy, China Power International Holdings, and Trina Solar. Source: https://www.sarawakenergy.com/media-info/media-releases/2024/sarawak-energys-first-floating-solar-farm-on-track-for-commissioning-by-october-2024
- Proposed category: `renewable-energy` / Renewable Energy
- Proposed status using existing status values: `In Progress`
- Proposed reported value: `50MW`
- Proposed summary: Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Official sources describe a 50 MW facility intended to hybridise hydropower and solar generation and support Sarawak's renewable-energy expansion. Commissioning was targeted for end-October 2024, so the next tracker milestone should verify actual operational status.
- Proposed milestones:
  - `{ date: "2023-06-20", text: "Construction officially began", done: true }`
  - `{ date: "2024-06-20", text: "Sarawak Energy reported 35 percent construction completion", done: true }`
  - `{ date: "2024-10", text: "Target: commissioning by end-October 2024", done: false }`
  - `{ date: "TBD", text: "Confirm commercial operation or latest commissioning status", shortText: "Confirm operational status", done: false }`
- Proposed sources:
  - `Sarawak Energy - Floating solar farm on track for commissioning by October 2024` (https://www.sarawakenergy.com/media-info/media-releases/2024/sarawak-energys-first-floating-solar-farm-on-track-for-commissioning-by-october-2024)
  - `Sarawak Government PCDS 2030 Highlights 2023 PDF - pages 125 and 128` (`docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`)
- Missing information: Public confirmation that commissioning or commercial operation happened after October 2024.
- Risk level: Medium
- Whether ready to implement: Yes, as a full card, provided the commissioning target remains `done: false` until confirmed.

## 7. Sarawak Bioindustrial Park

- Candidate project name: Sarawak Bioindustrial Park
- Decision: full card
- Reason: The project has official PDF evidence, an official Sarawak Biodiversity Centre page, and a BioVerde Technologies page with current public-facing project and operating-mandate information.
- Evidence from PDF: `docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`, pages 89-90, and `docs/source-pdfs/Latest Sarawak Innovative Initiatives Book_EPU Sarawak.pdf`, page 31, describe a 100-acre park, 27 industrial plots, four phases, Phase 1 target, and full operations target by 2035.
- Online sources found, if any: Sarawak Biodiversity Centre identifies SBP as a catalytic PCDS 2030 project and lists 27 plots across four phases. BioVerde describes a 100-acre bioindustrial hub and says BioVerde Technologies was established in 2025 with an expanded mandate covering product commercialisation, SBP operations, and scientific services. Sources: https://www.sbc.org.my/index.php/commercialisation and https://www.bioverde.com.my/
- Proposed category: `innovation` / Innovation
- Proposed status using existing status values: `Planning`
- Proposed reported value: `100-acre bioindustrial hub`
- Proposed summary: Bioindustry and commercialisation hub intended to turn Sarawak biodiversity research into scalable bio-based production. Official and public sources describe a 100-acre park with industrial plots, pilot bioprocessing, analytical laboratories, GMP manufacturing, and a 2025 BioVerde mandate covering SBP operations.
- Proposed milestones:
  - `{ date: "Official report", text: "Sarawak Bioindustrial Park listed as a PCDS 2030 bioindustry platform", done: true }`
  - `{ date: "2025", text: "BioVerde Technologies established with SBP operations mandate", done: true }`
  - `{ date: "2027-Q3", text: "Target: Phase 1 construction completion from official report", shortText: "Phase 1 completion target", done: false }`
  - `{ date: "2035", text: "Target: full operations from official report", shortText: "Full operations target", done: false }`
- Proposed sources:
  - `Sarawak Biodiversity Centre - Commercialisation` (https://www.sbc.org.my/index.php/commercialisation)
  - `BioVerde Technologies` (https://www.bioverde.com.my/)
  - `Sarawak Government PCDS 2030 Highlights 2023 PDF - pages 89-90` (`docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`)
- Missing information: Current physical construction progress, tenant list, capex, reconciliation of Phase 1 target dates across sources.
- Risk level: Medium
- Whether ready to implement: Yes, as a full card with `Planning` status unless a newer construction-progress source supports `In Progress`.

## 8. Sarawak Agrotechnology Park (SARTECH)

- Candidate project name: Sarawak Agrotechnology Park (SARTECH)
- Decision: provisional card
- Reason: The project is named, locatable, and sector-relevant in the official AIP. Online evidence for the public name and current progress is limited, so it should be represented cautiously.
- Evidence from PDF: `docs/source-pdfs/PCDS 2030 AIP Final Report Volume II Economic Sectors.pdf`, pages 176-178, lists RM500 million total resources, Semenggok and Tarat sites, public/private investment split, and a 2021-2030 timeline.
- Online sources found, if any: No adequate public source found in the prior validation for the SARTECH name, current progress, lead, or operating entity.
- Proposed category: `agriculture` / Commercial Agriculture
- Proposed status using existing status values: `Planning`
- Proposed reported value: `RM500 million`
- Proposed summary: Proposed agrotechnology park programme at Semenggok and Tarat to support smart farming, R&D, quality control, livestock auction functions, and agro-entrepreneurship. Official AIP evidence gives site areas, investment estimates, and a 2021-2030 timeline, but current implementation status is not yet publicly clear.
- Proposed milestones:
  - `{ date: "2021-2030", text: "Official AIP timeline for SARTECH implementation", done: false }`
  - `{ date: "TBD", text: "Public implementation update for Semenggok and Tarat sites", shortText: "Implementation update", done: false }`
- Proposed sources:
  - `PCDS 2030 AIP Volume II PDF - pages 176-178` (`docs/source-pdfs/PCDS 2030 AIP Final Report Volume II Economic Sectors.pdf`)
- Missing information: Current site progress, formal public project name, lead/operating entity, tenant or programme status.
- Risk level: High
- Whether ready to implement: Yes, as a provisional planning card.

## 9. Sungai Baji Agropark

- Candidate project name: Sungai Baji Agropark
- Decision: provisional card
- Reason: The project is a named agropark with official PDF evidence for area, funding, facilities, and target completion. Current public completion/operation evidence remains missing.
- Evidence from PDF: `docs/source-pdfs/PCDS 2030 AIP Final Report Volume II Economic Sectors.pdf`, pages 31-32, lists 127 ha, RM180 million state funding, and December 2025 completion target. `docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`, page 31, describes 32 greenhouse units with IoT.
- Online sources found, if any: No adequate current online source found for completion, operations, anchor tenants, or post-2023 progress in prior validation.
- Proposed category: `agriculture` / Commercial Agriculture
- Proposed status using existing status values: `In Progress`
- Proposed reported value: `RM180 million`
- Proposed summary: Named agropark at Sungai Baji intended to support controlled-environment food production, including greenhouse units with IoT-enabled systems. Official PDF evidence reports approved land area, state funding, and a December 2025 completion target, while current operating status still needs public confirmation.
- Proposed milestones:
  - `{ date: "Official report", text: "Sungai Baji Agropark listed with approved land area and funding", done: true }`
  - `{ date: "2025-12", text: "Target: infrastructure implementation completed", shortText: "Completion target", done: false }`
  - `{ date: "TBD", text: "Public opening, operator, or production update", shortText: "Operational update", done: false }`
- Proposed sources:
  - `PCDS 2030 AIP Volume II PDF - pages 31-32` (`docs/source-pdfs/PCDS 2030 AIP Final Report Volume II Economic Sectors.pdf`)
  - `Sarawak Government PCDS 2030 Highlights 2023 PDF - page 31` (`docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`)
- Missing information: Completion status, operator, tenants, production status, online post-2023 update.
- Risk level: High
- Whether ready to implement: Yes, as a provisional in-progress card.

## 10. Semenggoh Rainforest Discovery Centre and Piasau Nature Discovery Centre

- Candidate project name: Semenggoh Rainforest Discovery Centre and Piasau Nature Discovery Centre
- Decision: provisional card
- Reason: The project pair is clearly identified in the AIP as conservation-tourism infrastructure. Public pages confirm the underlying Semenggoh and Piasau conservation sites, but not the exact development phases, so the tracker card should be cautious.
- Evidence from PDF: `docs/source-pdfs/PCDS 2030 AIP Final Report Volume II Economic Sectors.pdf`, pages 504 and 506-508, lists RM60 million funding, SRDC Phase 1 Wildlife Centre Zone from June 2022 to June 2024, and Piasau Phase 2 from January 2026 to December 2030.
- Online sources found, if any: Sarawak Forestry pages confirm the existing Semenggoh Nature Reserve/Wildlife Centre and Piasau Nature Reserve context, but not the named Discovery Centre development projects.
- Proposed category: `forestry` / Forestry
- Proposed status using existing status values: `Planning`
- Proposed reported value: `RM60 million`
- Proposed summary: Conservation-tourism infrastructure proposal covering Semenggoh Rainforest Discovery Centre and Piasau Nature Discovery Centre. Official AIP evidence describes phased development tied to wildlife, rainforest discovery, and visitor facilities, while current public evidence for phase completion or opening dates remains incomplete.
- Proposed milestones:
  - `{ date: "Official report", text: "Semenggoh and Piasau discovery-centre projects listed in AIP", done: true }`
  - `{ date: "2022-06 to 2024-06", text: "Target period: SRDC Phase 1 Wildlife Centre Zone", done: false }`
  - `{ date: "2026-2030", text: "Target period: Piasau Phase 2 development", shortText: "Piasau Phase 2 target", done: false }`
  - `{ date: "TBD", text: "Public update on phase completion or visitor opening", shortText: "Phase/opening update", done: false }`
- Proposed sources:
  - `PCDS 2030 AIP Volume II PDF - pages 504 and 506-508` (`docs/source-pdfs/PCDS 2030 AIP Final Report Volume II Economic Sectors.pdf`)
  - `Sarawak Forestry - Semenggoh Nature Reserve` (https://sarawakforestry.com/semenggoh-nature-reserve/)
  - `Sarawak Forestry - Piasau Nature Reserve` (https://sarawakforestry.com/parks-and-reserves/piasau-nature-reserve/)
- Missing information: Whether SRDC Phase 1 completed, current Piasau Phase 2 status, visitor opening dates, exact scope.
- Risk level: Medium to high
- Whether ready to implement: Yes, as a provisional forestry/conservation infrastructure card.

## 11. PETRONAS Kasawari Carbon Capture and Storage Project

- Candidate project name: PETRONAS Kasawari Carbon Capture and Storage Project
- Decision: provisional card
- Reason: The project is specific, strategically important, and supported by the official innovative-initiatives PDF. Public online validation remains incomplete, so the card should avoid claiming current construction, first injection, or operational status.
- Evidence from PDF: `docs/source-pdfs/Latest Sarawak Innovative Initiatives Book_EPU Sarawak.pdf`, page 46, says the CCS project at PETRONAS Kasawari Field is anticipated to reduce up to 3.3 million tonnes of CO2 annually.
- Online sources found, if any: The IEA CCUS Projects Database is relevant public context, but an individual Kasawari record was not field-verified during prior review.
- Proposed category: `renewable-energy` / Renewable Energy
- Proposed status using existing status values: `Planning`
- Proposed reported value: `Up to 3.3Mt CO2 annually`
- Proposed summary: Carbon capture and storage project associated with PETRONAS' Kasawari Field and Sarawak's low-carbon development direction. Official PDF evidence reports an anticipated reduction of up to 3.3 million tonnes of CO2 annually, but current project stage, schedule, and first-injection status need a confirmed public PETRONAS or database source.
- Proposed milestones:
  - `{ date: "Official report", text: "Kasawari CCS listed with up to 3.3Mt annual CO2 reduction potential", done: true }`
  - `{ date: "TBD", text: "Public confirmation of project stage, schedule, or first injection", shortText: "Project-stage confirmation", done: false }`
- Proposed sources:
  - `Latest Sarawak Innovative Initiatives Book PDF - page 46` (`docs/source-pdfs/Latest Sarawak Innovative Initiatives Book_EPU Sarawak.pdf`)
  - `IEA - CCUS Projects Database` (https://www.iea.org/data-and-statistics/data-product/ccus-projects-database)
- Missing information: Official PETRONAS URL, project schedule, current stage, first-injection date, Sarawak governance details.
- Risk level: High
- Whether ready to implement: Yes, as a provisional low-carbon/CCUS card only.

## 12. Sarawak River Aids to Navigation and Surveillance System

- Candidate project name: Installation of Aids to Navigation and Surveillance System at Sarawak River
- Decision: provisional card
- Reason: The project is specific, public-infrastructure oriented, and supported by official PDF evidence. Completion status is not publicly confirmed, so the card should track it as an early-stage/awaiting-update transport safety project.
- Evidence from PDF: `docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`, page 121, says the first river-management project commenced on 27 April 2023, has a proposed RM30 million first-phase value, and was scheduled for completion by end-2024.
- Online sources found, if any: No adequate public source found confirming completion or current rollout in prior validation.
- Proposed category: `transport` / Transport
- Proposed status using existing status values: `In Progress`
- Proposed reported value: `RM30 million first phase`
- Proposed summary: River transport safety and monitoring project for Sarawak River under the river-management initiative. Official PDF evidence reports commencement on 27 April 2023, a proposed RM30 million first phase, and an end-2024 completion target, while completion and rollout to other rivers remain unconfirmed.
- Proposed milestones:
  - `{ date: "2023-04-27", text: "Sarawak River Aids to Navigation and Surveillance System commenced", done: true }`
  - `{ date: "2024", text: "Target: first-phase completion by end-2024", shortText: "First-phase completion target", done: false }`
  - `{ date: "TBD", text: "Public confirmation of completion or next river rollout", shortText: "Completion or rollout update", done: false }`
- Proposed sources:
  - `Sarawak Government PCDS 2030 Highlights 2023 PDF - page 121` (`docs/source-pdfs/SarawakGovt PCDS2030 - Highlights 2023.pdf`)
- Missing information: Completion confirmation, implementing agency, operational status, Miri River or other river rollout plan.
- Risk level: High
- Whether ready to implement: Yes, as a provisional transport card.

## Summary

1. Can be added as full cards: 2
   - Batang Ai Floating Solar Farm
   - Sarawak Bioindustrial Park
2. Can be added as provisional cards: 10
   - Pan Borneo Highway Sarawak Phase 1
   - Sarawak-Sabah Link Road
   - Miri Port Kuala Baram Capital Dredging / Northern Gateway upgrade
   - Bau Gold Project
   - Bintulu-Samalaju Gas Pipeline
   - Sarawak Agrotechnology Park (SARTECH)
   - Sungai Baji Agropark
   - Semenggoh Rainforest Discovery Centre and Piasau Nature Discovery Centre
   - PETRONAS Kasawari Carbon Capture and Storage Project
   - Sarawak River Aids to Navigation and Surveillance System
3. Should merge with existing cards: 0
4. Should not be added: 0
5. Recommended first implementation batch:
   - Batang Ai Floating Solar Farm
   - Sarawak Bioindustrial Park
   - Pan Borneo Highway Sarawak Phase 1
   - Sarawak-Sabah Link Road
   - Sarawak River Aids to Navigation and Surveillance System

## Implementation Notes

- No new category is required.
- No new status is required.
- Use `Planning` where implementation status is unclear and `In Progress` only where the PDF or online source directly supports a started project or continuing implementation.
- Local PDF paths are suitable as internal evidence references in this plan. Before adding to `src/trackerData.js`, decide whether dashboard `sources.url` values should point to public web URLs, repository-hosted PDF URLs, or a future local-source handling pattern.
