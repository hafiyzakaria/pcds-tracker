# Manual Review Project Addition Plan

Prepared: 2026-07-08
Revalidated: 2026-07-10

Scope: the 10 provisional candidates from the earlier manual-review pass. Batang Ai Floating Solar Farm and Sarawak Bioindustrial Park were previously approved as full cards and already exist in `src/trackerData.js`.

The initial revalidation used the official PDFs in `docs/source-pdfs/`. A subsequent public-link audit on 10 July 2026 replaced repository-hosted PDF links in live project cards with official agency, project-owner, company-disclosure, and reputable public news links. The detailed proposal sections below preserve the original provisional review; the summary immediately below records the final live-card decisions after that audit.

## Revalidation Summary

- Approved for cautious implementation: 10
- Final `In Progress`: 5
- Final `Planning`: 4
- Final `Operational`: 1
- Duplicate or merge candidates: 0
- Highest-confidence current updates: Sarawak River VTMS fully operational; Miri dredging in full swing; SSLR package progress reported through April 2026
- Highest-risk identity: combined Semenggoh and Piasau discovery-centre development, which must remain distinct from the existing operational conservation sites

### Final Public-Source Decisions

- Pan Borneo Highway Sarawak Phase 1: `In Progress`; The Edge Malaysia and Sarawak Tribune.
- Sarawak-Sabah Link Road: `In Progress`; The Star and DayakDaily.
- Miri Port Kuala Baram Capital Dredging: `In Progress`; Dredging Today project reports.
- Bau Gold Project: `Planning`; Besra Gold official disclosures.
- Bintulu-Samalaju Gas Pipeline: `In Progress`; The Star.
- Sarawak Agrotechnology Park: `Planning`; Sarawak Tribune.
- Sungai Baji Agropark: `Planning`; DayakDaily.
- Semenggoh and Piasau Discovery Centre Development: `Planning`; Sarawak Forestry official pages, with no current consolidated schedule.
- PETRONAS Kasawari Carbon Capture and Storage Project: `In Progress`; The Sun and The Star.
- Sarawak River Aids to Navigation and Surveillance System: `Operational`; Borneo Post.

## 1. Pan Borneo Highway Sarawak Phase 1

- Decision: add as provisional card
- Reason: The project is clearly identifiable. The official report records 98.6 percent completion in December 2023, while Sarawak Tribune reported 99.98 percent progress in October 2025, with ten of eleven work packages completed and opened in stages.
- Proposed category: `infrastructure`
- Proposed status: `In Progress`
- Proposed lead: `Federal Government / JKR`
- Proposed reported value: `RM16.54 billion`
- Proposed summary: A 786 km dual-carriageway upgrade from Telok Melano to Miri delivered through 11 work packages. The Works Minister reported 99.98 percent progress in October 2025, with ten packages completed and opened in stages. Work Package 11 in Miri remained unfinished because LAKU water pipes had to be replaced before road works could proceed.
- Proposed milestones:
  - `{ date: "2016", text: "Phase 1 construction commenced", done: true }`
  - `{ date: "2023-12", text: "Phase 1 reached 98.6 percent completion", done: true }`
  - `{ date: "2025-10", text: "Ten work packages completed and opened", done: true }`
  - `{ date: "TBD", text: "Work Package 11 completion", done: false }`
- Proposed sources:
  - Sarawak Government PCDS 2030 Highlights 2023, pages 99-101
  - Sarawak Tribune, `Pan Borneo Highway Phase 1 in Sarawak nears full completion`, 4 December 2025
- Missing information: Work Package 11 completion date and final Phase 1 handover
- Risk level: Medium
- Ready to implement: Yes

## 2. Sarawak-Sabah Link Road

- Decision: add as provisional card
- Reason: The project is distinct from Pan Borneo Phase 1 and has official evidence for federal approval, route phases, allocation, and an overall completion expectation. Current package-level progress remains unclear.
- Proposed category: `infrastructure`
- Proposed status: `In Progress`
- Proposed lead: `Federal Government / JKR`
- Proposed reported value: `RM8.17 billion`
- Proposed summary: Interior road link intended to connect Sarawak and Sabah without relying on transit through Brunei. Official reporting records RM8.17 billion in federal allocation, routes covering Simpang Gelugos to Long Luping and Mulu to Ba'Kelalan, and an overall completion expectation in Q3 2029.
- Proposed milestones:
  - `{ date: "2023", text: "Federal approval and RM8.17B allocation documented", done: true }`
  - `{ date: "2029-Q3", text: "Overall project completion scheduled", done: false }`
- Proposed sources:
  - Sarawak Government PCDS 2030 Highlights 2023, page 108
- Missing information: package contractors, current physical progress, and whether the Q3 2029 expectation remains current
- Risk level: Medium
- Ready to implement: Yes

## 3. Miri Port Kuala Baram Capital Dredging

- Decision: add as provisional card
- Reason: The dredging project is specifically identified in two official reports, but no contract award or physical-progress confirmation was found.
- Proposed category: `transport`
- Proposed status: `Planning`
- Proposed lead: `Miri Port Authority / Sarawak Government`
- Proposed reported value: `RM540 million`
- Proposed summary: Capital dredging programme to deepen the Kuala Baram access channel to approximately eight metres below chart datum and enable larger vessels to use Miri Port. Official plans separate survey and design from physical dredging, with RM540 million in proposed funding and completion scheduled for Q2 2027.
- Proposed milestones:
  - `{ date: "2023", text: "RM540M capital dredging programme documented", done: true }`
  - `{ date: "TBD", text: "Capital dredging contract award", done: false }`
  - `{ date: "2027-Q2", text: "Capital dredging scheduled for completion", done: false }`
- Proposed sources:
  - Sarawak Government PCDS 2030 Highlights 2023, page 108
  - PCDS 2030 AIP Volume III, pages 252-253
- Missing information: implementing contract, contractor, actual commencement date, and physical progress
- Risk level: High
- Ready to implement: Yes, with `Planning` status

## 4. Bau Gold Project

- Decision: add as provisional card
- Reason: The project and reported resource are identifiable, but no current approval, financing, EIA, construction, or mine-reopening evidence was found.
- Proposed category: `mining`
- Proposed status: `Planning`
- Proposed lead: `Besra Gold Inc / North Borneo Gold Sdn Bhd`
- Proposed reported value: `RM1.38 billion projected investment`
- Proposed summary: Proposed gold-development project in Bau associated with Besra Gold and North Borneo Gold. Sarawak's PCDS highlights cite Besra's 2021 announcement of a 3.3-million-ounce gold resource and projected upstream investment, while current approvals, financing, environmental review, and development timing remain unconfirmed.
- Proposed milestones:
  - `{ date: "2021", text: "Besra announced 3.3-million-ounce Bau gold resource", done: true }`
  - `{ date: "TBD", text: "Development approvals and financing decision", done: false }`
- Proposed sources:
  - Sarawak Government PCDS 2030 Highlights 2023, page 60
- Missing information: current ownership, mining approval, EIA status, financing, and final development decision
- Risk level: High
- Ready to implement: Yes, as an exploration and planning-stage card

## 5. Bintulu-Samalaju Gas Pipeline

- Decision: add as provisional card
- Reason: Newer public reporting confirms PETROS investment and pipe-material manufacturing, supporting an upgrade from `Planning` to `In Progress`. The scheduled November 2025 installation completion remains unconfirmed.
- Proposed category: `utilities`
- Proposed status: `In Progress`
- Proposed lead: `PETROS / Sarawak Government`
- Proposed reported value: `RM1 billion committed; RM599.98 million earlier estimate`
- Proposed summary: Approximately 70 km gas pipeline intended to supply Samalaju Industrial Park and a Bintulu combined-cycle power station. PETROS committed RM1 billion and pipe manufacturing was reported in November 2024, but offshore installation completion and gas-in-service status remain publicly unconfirmed.
- Proposed milestones:
  - `{ date: "2023", text: "Sarawak Gas Roadmap pipeline component documented", done: true }`
  - `{ date: "2024-11-04", text: "RM1B commitment and pipe manufacturing reported", done: true }`
  - `{ date: "2025-11", text: "Offshore pipeline installation completion", done: false }`
  - `{ date: "TBD", text: "Gas supply enters service", done: false }`
- Proposed sources:
  - The Star, `RM1bil gas pipeline plan`, 4 November 2024
  - PCDS 2030 AIP Volume III, page 368
  - Sarawak Government PCDS 2030 Highlights 2023, page 113
- Missing information: installation completion, commissioning, gas-in-service date, and EPC contractor
- Risk level: Medium
- Ready to implement: Yes

## 6. Sarawak Agrotechnology Park

- Decision: add as provisional card
- Reason: The official AIP identifies the Semenggok and Tarat sites and a 2021-2030 implementation window, but no newer public implementation update or confirmed operator was found.
- Proposed category: `agriculture`
- Proposed status: `Planning`
- Proposed lead: `Sarawak Government`
- Proposed reported value: `RM500 million reported resources`
- Proposed summary: Proposed agrotechnology park development at Semenggok and Tarat for smart farming, research, quality control, livestock auction functions, and agro-entrepreneurship. The official AIP reports a 2021-2030 programme window and RM500 million in resources, while site progress and the operating entity remain unclear.
- Proposed milestones:
  - `{ date: "2022", text: "Semenggok and Tarat park sites documented", done: true }`
  - `{ date: "2021-2030", text: "Agrotechnology park implementation programme", done: false }`
  - `{ date: "TBD", text: "Site infrastructure development", done: false }`
- Proposed sources:
  - PCDS 2030 AIP Volume II, pages 176-178
- Missing information: current public project name, implementing agency, site works, and operator
- Risk level: High
- Ready to implement: Yes, with cautious naming and lead wording

## 7. Sungai Baji Agropark

- Decision: add as provisional card
- Reason: The project is site-specific and supported for area, funding, and greenhouse scope. Its December 2025 completion target has passed without public confirmation, so the status should be `Planning`, not `In Progress` or `Operational`.
- Proposed category: `agriculture`
- Proposed status: `Planning`
- Proposed lead: `Sarawak Government`
- Proposed reported value: `RM180 million`
- Proposed summary: Proposed 127-hectare agropark at Sungai Baji for controlled-environment food production, including 32 IoT-enabled greenhouse units. Official reporting records RM180 million in state funding and a December 2025 completion target, but opening, operation, tenants, and production remain unconfirmed.
- Proposed milestones:
  - `{ date: "2023", text: "127-hectare agropark and funding documented", done: true }`
  - `{ date: "2025-12", text: "Infrastructure completion scheduled", done: false }`
  - `{ date: "TBD", text: "Operational opening and production", done: false }`
- Proposed sources:
  - PCDS 2030 AIP Volume II, pages 31-32
  - Sarawak Government PCDS 2030 Highlights 2023, page 31
- Missing information: completion, operator, tenants, opening date, and production
- Risk level: High
- Ready to implement: Yes, with `Planning` status

## 8. Semenggoh and Piasau Discovery Centre Development

- Decision: add as provisional card
- Reason: The official AIP identifies Semenggoh Phase 1 and Piasau Phase 2 development works, but the combined discovery-centre title is not well represented on current public agency pages. The card must describe capital development within existing conservation sites rather than imply that the reserves themselves are new projects.
- Proposed category: `forestry`
- Proposed status: `Planning`
- Proposed lead: `Sarawak Forestry Corporation / Sarawak Government`
- Proposed reported value: `RM60 million`
- Proposed summary: Phased visitor-infrastructure development at the existing Semenggoh and Piasau conservation sites. The official AIP scheduled Semenggoh's Wildlife Centre Zone for 2022 to 2024 and Piasau Phase 2 for 2026 to 2030. Current Sarawak Forestry pages confirm both sites remain open but do not document completion of the named development phases.
- Proposed milestones:
  - `{ date: "2022", text: "Discovery-centre development programme documented", done: true }`
  - `{ date: "2026-2030", text: "Piasau Phase 2 development programme", done: false }`
- Proposed sources:
  - PCDS 2030 AIP Volume II, pages 504 and 506-508
  - Sarawak Forestry Corporation, Semenggoh Nature Reserve
  - Sarawak Forestry Corporation, Piasau Nature Reserve
- Missing information: Semenggoh Phase 1 completion, Piasau Phase 2 commencement, detailed capital scope, and opening dates
- Risk level: High
- Ready to implement: Yes, only with the cautious development-focused title and summary

## 9. PETRONAS Kasawari Carbon Capture and Storage Project

- Decision: add as provisional card
- Reason: The project is specifically identified in an official Sarawak publication, but newer reporting concerns broader Malaysian offshore CCS plans and does not confirm Kasawari construction, final investment decision, or first injection.
- Proposed category: `innovation`
- Proposed status: `Planning`
- Proposed lead: `PETRONAS`
- Proposed reported value: `Up to 3.3Mt CO2 annually`
- Proposed summary: Proposed carbon capture and storage project associated with PETRONAS' Kasawari Field. Official Sarawak reporting describes potential annual emissions reduction of up to 3.3 million tonnes of CO2, while the final investment decision, construction schedule, storage governance, and first-injection date remain unconfirmed.
- Proposed milestones:
  - `{ date: "2023-12-21", text: "Kasawari CCS initiative documented by EPU Sarawak", done: true }`
  - `{ date: "TBD", text: "Final investment decision and construction schedule", done: false }`
  - `{ date: "TBD", text: "First CO2 injection", done: false }`
- Proposed sources:
  - Latest Sarawak Innovative Initiatives Book, page 46
- Missing information: project-specific FID, construction stage, storage site, injection schedule, and governance parties
- Risk level: High
- Ready to implement: Yes, as a clearly provisional Kasawari-specific card

## 10. Sarawak River Aids to Navigation and Surveillance System

- Decision: add as provisional card
- Reason: The official report confirms commencement on 27 April 2023. No reliable completion, commissioning, or operational handover source was found after the end-2024 target.
- Proposed category: `transport`
- Proposed status: `In Progress`
- Proposed lead: `Sarawak Government`
- Proposed reported value: `RM30 million proposed first phase`
- Proposed summary: Sarawak River navigation-safety project installing river signage, light beacons, aids to navigation, and a vessel traffic management tower. The first phase began on 27 April 2023 with a proposed value of RM30 million; commissioning and operational handover are not confirmed by a later public source.
- Proposed milestones:
  - `{ date: "2023-04-27", text: "First-phase installation commenced", done: true }`
  - `{ date: "TBD", text: "System commissioning and operational handover", done: false }`
  - `{ date: "TBD", text: "Wider deployment to Miri River and Kuala Baram", done: false }`
- Proposed sources:
  - Sarawak Government PCDS 2030 Highlights 2023, page 121
  - PCDS 2030 AIP Volume III, pages 380-381
- Missing information: implementing agency, completion, commissioning, operational handover, and later river phases
- Risk level: High
- Ready to implement: Yes

## Final Recommendation

Add all 10 provisional cards using the statuses and wording above. None should be marked completed or operational. The cards should retain open milestones for any passed target that lacks later confirmation.

Safest first evidence tier:

1. Bintulu-Samalaju Gas Pipeline
2. Pan Borneo Highway Sarawak Phase 1
3. Sarawak-Sabah Link Road
4. Sarawak River Aids to Navigation and Surveillance System

Highest ongoing review priority:

1. Semenggoh and Piasau Discovery Centre Development
2. Bau Gold Project
3. PETRONAS Kasawari Carbon Capture and Storage Project
4. Sarawak Agrotechnology Park
