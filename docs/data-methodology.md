# Data Methodology

## Purpose

The PCDS 2030 Project Tracker is an independent, public, scan-first tracker for major Sarawak development projects connected to the Post COVID-19 Development Strategy 2030. It represents each project's current public status, next visible milestone, milestone history, reported lead parties, reported value, summary, and public evidence links.

The tracker should be read as a public-evidence monitor, not as an official project certification system. Statuses reflect what can be supported from available public sources in the repository and dashboard data.

## Data Location

Dashboard data is stored in `src/trackerData.js`.

The active dashboard imports:

- `LAST_UPDATED`
- `SECTORS`
- `ECONOMIC_SECTOR_IDS`

Tracker rendering, derived metrics, filters, status grouping, sorting, milestone progress, source rendering, and last-updated formatting are implemented in `src/App.jsx`.

`src/localization.js` is a presentation layer, not an independent evidence source. It stores
explicit Malaysian Bahasa Melayu renderings of current project facts, summaries, and milestones.
Project titles remain in English, while canonical names, URLs, date tokens, and completion flags
stay shared with `src/trackerData.js`. Source citation labels remain in their original language so linked
article and report titles are not misrepresented.

Additional repository source material:

- `audit/pcds-audit.json`: prior evidence-quality and trackability audit notes. This file is not rendered by the dashboard and some counts/status labels differ from current `src/trackerData.js`, so it should be treated as methodology context rather than active dashboard data.
- `PCDS 2030/*.pdf`: local PCDS framework/report material, including the main Post COVID-19 Development Strategy PDF, PCDS 2030 final report volumes, AIP economic-sector and enabler volumes, Sarawak Government PCDS 2030 highlights, Facts & Figures 2025, and Sarawak innovative initiatives material. These PDFs are not automatically parsed by the app.
- `README.md`, `docs/product.md`, `docs/design.md`, and `docs/backlog.md`: project memory and maintenance guidance.

## Current Data Fields

Global fields:

- `LAST_UPDATED`: one manually maintained ISO date string for the tracker data freshness indicator. Current value: `2026-07-16`.
- `SECTORS`: the main data array. It contains PCDS economic sectors, enablers, and a framework overview entry.
- `ECONOMIC_SECTOR_IDS`: set used by the UI to label rows as `Sector`.
- `ENABLER_IDS`: set listing the PCDS enabler category ids. It is exported but not currently imported by `src/App.jsx`.

Reported-value standard:

- `value` is reserved for a monetary project cost, allocation, investment, estimate, commitment, or other clearly labelled monetary figure.
- Capacity, distance, site area, output, and network size belong in the summary or milestones, not the reported-value field.
- Use `Not disclosed` when no reliable public monetary figure is available.
- Use `Not applicable` only for non-capital policy or legislative entries where a project value is not meaningful.

Public-source-link standard:

- Live project cards should link to official agency or project-owner pages, parliamentary or government releases, company disclosures, or reputable public news reports.
- PCDS strategy and report PDFs may confirm project inclusion, naming, scope, and historical context during research, but PDF-only claims should not be added to live project cards.
- Each public card claim should remain independently verifiable through a visible, project-specific public webpage link. PDF references may instead be recorded in methodology, audit, or research documentation.
- If no public project-specific source can be found, keep the card explicitly provisional and avoid unsupported values, completion claims, or detailed schedules.
- `POPULATED_ECONOMIC` and `POPULATED_ENABLERS`: exported sets that identify categories with projects. They are not currently used by the dashboard UI.

Category fields inside `SECTORS`:

- `id`: stable category identifier.
- `name`: displayed category name.
- `icon`: category icon stored in data, not currently rendered by `src/App.jsx`.
- `color`: category accent color used for card accents, milestone indicators, source badges, and related UI accents.
- `projects`: project records under that category.
- `isOverview`: marks the PCDS framework overview entry. The active project grid excludes overview rows.

Project fields:

- `name`: canonical project name used for stable project identity.
- `displayName`: optional shorter public title. Use it when an organisation prefix, acronym-first construction, or descriptive suffix makes the canonical name harder to scan.
- `status`: detailed source-data status such as `Planning`, `In Progress`, `Awaiting Decision`, `Operational`, `Designated`, or `Enacted`.
- `statusColor`: stored in data but the current UI mainly uses category accent color for badges.
- `lead`: lead party or parties shown in the card facts.
- `value`: reported monetary value, or `Not disclosed` / `Not applicable` when a monetary value is unavailable or not meaningful.
- `summary`: prose summary of the project and current public context.
- `milestones`: manually defined project milestone list.
- `sources`: manually defined project-level evidence links.

Milestone fields:

- `date`: display date, phase, target, or placeholder such as `Ongoing`, `TBD`, or `Before 2031`.
- `text`: canonical milestone statement rendered in both collapsed and expanded card states.
- `done`: boolean used to count completed milestones, draw progress indicators, split completed and remaining milestones, and select the next open milestone.

Milestone date display standard:

- Keep source values compact and sortable where possible: `YYYY-MM-DD`, `YYYY-MM`, `YYYY-Q#`, or `YYYY`.
- Use `TBD` only when no reliable date has been published; the UI omits the date label.
- Use `Ongoing` only for continuous activity without a single completion date.
- The UI formats full dates, month targets, quarter targets, ranges, and open-ended years consistently rather than exposing the compact source syntax directly.

Legacy `shortText` aliases have been removed. Milestones now use one canonical `text` value in every card state.

Source fields:

- `label`: displayed source label. Labels usually include publisher and sometimes an encoded publication month/year.
- `url`: source URL rendered as an external link.

No per-project `lastReviewed`, per-source publication date, source type, confidence score, or field-level evidence mapping exists in the active data file.

When canonical project facts change, update the corresponding explicit BM entry in
`src/localization.js` in the same change. A missing localization must fall back safely to the
English source rather than alter or invent a claim.

## Source Types

The current data uses these source types:

- Official statements and official bodies: for example Sarawak Government source PDFs and UNESCO listing pages.
- Government websites: for example `sarawak.gov.my`.
- Agency/ministry pages: for example RECODA's official site and Business Events Sarawak's PCDS page.
- Company announcements: none are directly encoded in the active source list; company or project-partner facts are currently supported through media or public reporting.
- News reports: especially DayakDaily and The Edge Malaysia.
- Industry media: Data Center Dynamics.
- Other public sources: FULCRUM policy analysis pieces.

The active data stores only `label` and `url`, so source type and publisher must be inferred from labels/domains unless a future data field is added.

## Evidence Rules

Explicit rules found in the repository:

- Data is manually curated from public reports and announcements.
- Project claims should be tied to visible source links.
- Milestone statuses are best-effort based on available information.
- Data freshness is manual and represented by `LAST_UPDATED`.
- Source links are not automatically checked.

Rules to use for future maintenance:

- Official sources are highest confidence.
- Reputable news sources can support public reporting.
- Conflicting sources require manual review.
- No update should be made without a source.
- Statuses reflect available public evidence, not official project certification.
- When a source supports only general context, do not treat it as proof of a specific milestone unless the source directly supports that milestone.
- Use PCDS PDFs as confirmation and research references rather than as the sole live-card evidence. If a potentially useful PDF fact has no supporting public webpage, leave the corresponding card field unchanged.
- When a milestone is future-dated or target-based, leave `done: false` until a source confirms completion.
- When sources disagree on cost, date, scope, or completion, keep the existing value until manually reviewed and note the conflict before changing dashboard data.

## Milestone Writing Standard

- Use one canonical `text` value everywhere. Collapsed and expanded cards must not use different wording for the same milestone.
- Follow the format `Date: clear action or outcome`; the UI supplies the date from the milestone's `date` field.
- Keep the milestone to one clause, normally 6 to 12 words and about 70 characters or fewer after the date.
- Use sentence case without a terminal period.
- Do not repeat the project name when the card title already provides the context.
- Avoid `Target:` prefixes, slash-separated alternatives, vague `rollout` wording, and internal research tasks such as confirming a project's status.
- Write completed milestones with a definitive past-tense outcome, such as `Construction officially began` or `Contract awarded`.
- Write future milestones as concise outcomes or actions and keep `done: false` until completion is confirmed. Do not add `planned` when the milestone date and open state already communicate that the outcome is prospective.
- Distinguish construction completion, commissioning, operations commencement, and commercial operation. These terms describe different project stages and must not be used interchangeably.
- Keep supporting context, uncertainty, and attribution in the project summary and sources rather than lengthening the milestone statement.

## Selected Project Source Map

This map records the earlier source-audit set. The 10 provisional additions revalidated on 10 July 2026 are summarized separately below, with full field-level rationale in `docs/manual-review-project-addition-plan.md`.

### SMD Semiconductor - GaN Chip Development

- Current dashboard status: `In Progress`
- Current next milestone: Global IP registration and commercialisation
- Sources currently used:
- [DayakDaily - SMD Advanced Chip Integration Centre (Sep 2025)](https://dayakdaily.com/sarawak-to-establish-smd-advanced-chip-integration-centre-to-power-semiconductor-leap/) - Publisher: DayakDaily; type: news report; date: Sep 2025; appears to support the SMD centre/chip-development context.
- [DayakDaily - keteq.GaN and AI converter unveiled (Oct 2025)](https://dayakdaily.com/smd-semiconductor-unveils-keteq-gan-ai-convertor-in-london-cementing-sarawak-as-tech-leader/) - Publisher: DayakDaily; type: news report; date: Oct 2025; appears to support platform/product unveiling claims.
- [DayakDaily - Keteq AI chip secures global IP rights (Oct 2025)](https://dayakdaily.com/sarawak-designed-keteq-ai-chip-set-to-secure-global-ip-rights-by-early-2026/) - Publisher: DayakDaily; type: news report; date: Oct 2025; appears to support the IP-rights/commercialisation pathway.
- Gaps or uncertainty: no official SMD/company primary source is encoded; commercialisation timing remains a future public milestone.

### RM1 Billion Paddy Infrastructure Programme

- Current dashboard status: `In Progress`
- Current next milestone: Farmer clustering and paddy land leasing
- Sources currently used:
- [DayakDaily - RM1B allocation (Jun 2024)](https://dayakdaily.com/sarawak-allocates-rm1-bln-for-large-scale-paddy-cultivation-to-boost-rice-self-sufficiency/) - Publisher: DayakDaily; type: news report; date: Jun 2024; appears to support allocation, value, and paddy infrastructure scope.
- [DayakDaily - Minister warns against misuse (Feb 2026)](https://dayakdaily.com/rm1-bln-in-infra-at-stake-minister-warns-against-misuse-of-paddy-facilities-for-oil-palm/) - Publisher: DayakDaily; type: news report; date: Feb 2026; appears to support implementation guardrails and paddy-only use.
- [DayakDaily - 500K tonnes rice target (Aug 2025)](https://dayakdaily.com/sarawak-ups-rice-output-target-to-500000-tonnes-by-2030-in-premiers-bold-food-security-push/) - Publisher: DayakDaily; type: news report; date: Aug 2025; appears to support the 2030 output target.
- [DayakDaily - Overtake Kedah as rice bowl (Aug 2025)](https://dayakdaily.com/sarawak-to-overtake-kedah-as-nations-rice-bowl-by-2030-eyes-global-export-future/) - Publisher: DayakDaily; type: news report; date: Aug 2025; appears to support broader rice-self-sufficiency/export framing.
- Gaps or uncertainty: no official agriculture department page or project implementation dashboard is encoded; physical infrastructure progress is not field-mapped.

### Sarawak Delta Geopark - UNESCO Global Geopark Designation

- Current dashboard status: `Designated`
- Current next milestone: none; the designation milestones are complete
- Sources currently used:
- [DayakDaily - UNESCO approval (Apr 2026)](https://dayakdaily.com/sarawak-delta-geopark-gets-unesco-approval/) - Publisher: DayakDaily; type: news report; date: Apr 2026; appears to support UNESCO approval/designation.
- [DayakDaily - Borneo's Cradle of Origin (Apr 2026)](https://dayakdaily.com/borneos-cradle-of-origin-puts-sarawak-delta-geopark-on-world-map-with-unesco-recognition/) - Publisher: DayakDaily; type: news report; date: Apr 2026; appears to support branding and designation context.
- Gaps or uncertainty: no direct UNESCO page is encoded for the geopark. The card is scoped to the completed designation effort rather than open-ended tourism and community programmes.

### Niah National Park - UNESCO World Heritage

- Current dashboard status: `In Progress`
- Current next milestone: Site conservation and visitor facility improvements
- Sources currently used:
- [UNESCO - Niah World Heritage listing](https://whc.unesco.org/en/list/1014) - Publisher: UNESCO; type: official international body; date: not encoded in label; appears to support inscription/designation and heritage-site facts.
- [DayakDaily - Bako & Lambir after Niah inscription (Aug 2025)](https://dayakdaily.com/sarawak-nominates-bako-bukit-lambir-as-asean-heritage-parks-to-elevate-global-conservation-status/) - Publisher: DayakDaily; type: news report; date: Aug 2025; appears to support post-inscription conservation/heritage context.
- Gaps or uncertainty: no field-level source explicitly links to visitor-facility progress; ongoing management milestone is broad.

### Greenhouse Gas Emission Ordinance 2023

- Canonical legislation name: `Environment (Reduction of Greenhouse Gases Emission) Ordinance 2023`
- Current dashboard status: `In Progress`
- Current next milestone: scheduled sectors submit verified emissions reports annually
- Sources currently used:
- [Borneo Post - Climate governance implementation update (Mar 2026)](https://www.theborneopost.com/2026/03/12/sarawak-intensifies-climate-governance-on-path-to-net-zero-2050/) - Publisher: Borneo Post; type: news report quoting NREB; date: 12 Mar 2026; supports annual reporting requirements, accredited external-auditor rules, and the integrated Greenhouse Gas Management System.
- [FULCRUM - Sarawak's low-carbon future](https://fulcrum.sg/envisioning-a-low-carbon-future-sarawaks-journey-towards-sustainable-development/) - Publisher: FULCRUM; type: policy analysis/public source; date: not encoded in active source label; appears to support the ordinance, carbon-market context, and low-carbon policy framing.
- Gaps or uncertainty: the 2026 update is a news report quoting NREB rather than a direct NREB implementation page, and no official ordinance/gazette source is encoded in active dashboard data.

### Sarawak Cancer Centre

- Current dashboard status: `In Progress`
- Current next milestone: Construction begins in Q1 2027
- Sources currently used:
- [DayakDaily - RM1.52B preliminary estimate (Dec 2025)](https://dayakdaily.com/sarawak-cancer-centre-construction-to-start-by-2026-with-rm1-52-bln-preliminary-estimate-cost/) - Publisher: DayakDaily; type: news report; date: Dec 2025; appears to support reported value and construction timeline.
- [DayakDaily - PM tells JKR to expedite (Dec 2025)](https://dayakdaily.com/pm-tells-jkr-to-expedite-swak-cancer-centre-project-to-be-tendered-in-q1-2026-operational-before-2031/) - Publisher: DayakDaily; type: news report; date: Dec 2025; appears to support lead/delivery agency, Q1 2026 tender direction, and before-2031 operational target.
- [DayakDaily - RM500M medical equipment fronted (Dec 2025)](https://dayakdaily.com/patients-cannot-wait-sarawak-fronts-rm500-mln-for-cancer-centre-medical-equipment/) - Publisher: DayakDaily; type: news report; date: Dec 2025; appears to support equipment funding/fronting claim.
- [DayakDaily - Arden City construction & Samarahan health hub (Feb 2026)](https://dayakdaily.com/arden-city-construction-gathers-pace-amid-healthcare-education-boom-in-kota-samarahan/) - Publisher: DayakDaily; type: news report; date: Feb 2026; appears to support health-metropolis/Samarahan construction context.
- [DayakDaily - RM40B healthcare boost in 13MP (Jul 2025)](https://dayakdaily.com/sarawak-cancer-centre-among-5-key-projects-under-rm40-bln-healthcare-boost-in-13mp/) - Publisher: DayakDaily; type: news report; date: Jul 2025; appears to support 13MP healthcare context.
- July 2026 update: DayakDaily reported that the project entered design-and-build procurement on 7 July 2026, with construction targeted for January 2027 and completion by 2032.
- Gaps or uncertainty: no official JKR tender award page or health ministry project page is encoded; the contractor award and construction start still need later confirmation.

### FutureData - Kuching Data Centre Park

- Current dashboard status: `In Progress`
- Current next milestone: First 17MW data centre expected to begin operations
- Sources currently used:
- [DCD - FutureData first off-taker (2025)](https://www.datacenterdynamics.com/en/news/futuredata-announces-first-off-taker-at-500mw-malaysian-data-center-park-in-sarawak/) - Publisher: Data Center Dynamics; type: industry media; date: 2025; appears to support off-taker, 500MW park, and 17MW facility context.
- [The Edge - FutureData 135-acre park in Kuching (Aug 2025)](https://theedgemalaysia.com/node/767538) - Publisher: The Edge Malaysia; type: business/news media; date: Aug 2025; appears to support project location, scale, and value context.
- Gaps or uncertainty: no direct FutureData, TSG, or government source is encoded; construction progress after the cited reporting is not represented.

### SCORE - Sarawak Corridor of Renewable Energy

- Current dashboard status: `In Progress`
- Current next milestone: Industrial park expansion and investor support
- Sources currently used:
- [DayakDaily - SCORE: RM125B investment, 53K jobs (May 2025)](https://dayakdaily.com/score-fuels-sarawaks-economic-growth-with-rm125-bln-investment-53000-jobs-created/) - Publisher: DayakDaily; type: news report; date: May 2025; appears to support reported investment and job figures.
- [RECODA official site](https://recoda.gov.my/) - Publisher: RECODA; type: official agency site; date: not encoded in label; appears to support lead/agency context and corridor identity.
- Gaps or uncertainty: SCORE is an umbrella programme; current active sources do not map individual growth nodes or annual progress.

### KUTS - Kuching Urban Transportation System

- Current dashboard status: `In Progress`
- Current next milestone: Blue Line passenger service scheduled to begin
- Sources currently used:
- [DayakDaily - ART Q4 2026 operations](https://dayakdaily.com/hydrogen-powered-art-to-begin-service-in-kuching-in-final-quarter-of-2026-premier/) - Publisher: DayakDaily; type: news report; date: not encoded in active label; appears to support Q4 2026 passenger-service target and ART system context.
- [The Edge - KUTS hydrogen plant relocation](https://theedgemalaysia.com/node/786079) - Publisher: The Edge Malaysia; type: business/news media; date: not encoded in active label; appears to support the hydrogen plant relocation contract/milestone.
- Gaps or uncertainty: no Sarawak Metro official project page is encoded in active sources; feeder bus rollout is `TBD`.

### Bintulu Port - State Control Handover

- Current dashboard status: `Operational`
- Current completed milestone: Bintulu Port handed over to Sarawak
- Sources currently used:
- [DayakDaily - RM1.8B takeover agreed in principle (Feb 2026)](https://dayakdaily.com/rm1-8-bln-bintulu-port-takeover-agreed-in-principle-as-handover-enters-final-stage/) - Publisher: DayakDaily; type: news report; date: Feb 2026; appears to support agreement-in-principle and reported value.
- [DayakDaily - RM1.8B valuation confirmed (Feb 2026)](https://dayakdaily.com/rm1-8-bln-bintulu-port-valuation-not-arbitrary-reflects-true-asset-worth-after-detailed-negotiations/) - Publisher: DayakDaily; type: news report; date: Feb 2026; appears to support valuation and negotiation context.
- [DayakDaily - Awaiting cabinet endorsement (May 2026)](https://dayakdaily.com/rm1-8-bln-bintulu-port-handover-to-sarawak-awaits-federal-cabinet-endorsement/) - Publisher: DayakDaily; type: news report; date: May 2026; appears to support awaiting-decision status and next milestone.
- Gaps or uncertainty: no official federal cabinet decision source or final agreement source is encoded; status should remain public-evidence based.

### Baleh Hydroelectric Project

- Current dashboard status: `In Progress`
- Current next milestone: Dam construction completion
- Sources currently used:
- [DayakDaily - Green revolution supercharging Sarawak energy (Aug 2025)](https://dayakdaily.com/green-revolution-supercharging-sarawaks-energy-prowess/) - Publisher: DayakDaily; type: news report; date: Aug 2025; appears to support energy-transition context and Baleh project positioning.
- [DayakDaily - ASEAN grid & Baleh 1,285MW by 2030 (Jan 2026)](https://dayakdaily.com/sarawak-urges-asean-to-study-european-union-nordic-models-to-realise-regional-power-grid-dream/) - Publisher: DayakDaily; type: news report; date: Jan 2026; appears to support capacity and regional-grid/2030 context.
- Gaps or uncertainty: active sources appear contextual rather than direct construction-progress evidence; no Sarawak Energy project update is encoded.

### Green Hydrogen Economy - H2ornbill & H2biscus

- Current dashboard status: `Planning`
- Current next milestone: Rembus hydrogen plant relocation and upgrade
- Sources currently used:
- [DayakDaily - H2ornbill & H2biscus hydrogen economy (Aug 2025)](https://dayakdaily.com/sarawak-powers-ahead-in-hydrogen-economy/) - Publisher: DayakDaily; type: news report; date: Aug 2025; appears to support H2ornbill/H2biscus project framing and hydrogen economy context.
- [DayakDaily - Bintulu low-carbon industrial push (Jan 2026)](https://dayakdaily.com/bintulu-set-to-anchor-msias-low-carbon-industrial-push-as-swak-integrates-hydrogen-ccus-and-carbon-pricing/) - Publisher: DayakDaily; type: news report; date: Jan 2026; appears to support Bintulu low-carbon/hydrogen integration context.
- [FULCRUM - Sarawak's green hydrogen ambitions](https://fulcrum.sg/sarawaks-green-hydrogen-ambitions-what-it-means-for-southeast-asia/) - Publisher: FULCRUM; type: policy analysis/public source; date: not encoded in active label; appears to support broader regional hydrogen ambition context.
- Gaps or uncertainty: no SEDC Energy, Gentari, or project-company primary source is encoded; production milestones are future targets.

### Provisional Additions Revalidated on 10 July 2026

- Pan Borneo Highway Sarawak Phase 1 - `In Progress`; value: RM16.5 billion construction cost; next milestone: Work Package 11 completion; sources: The Edge Malaysia and Sarawak Tribune.
- Sarawak-Sabah Link Road - `In Progress`; Phase 1 reached 70.05 percent and Phase 2 reached 10.55 percent in April 2026; next milestone: expected Phase 1 completion in 2027; sources: The Star and DayakDaily.
- Miri Port Kuala Baram Capital Dredging - `In Progress`; value: RM238 million contract; work was reported in full swing in May 2026; next milestone: targeted dredging completion in Q4 2026; sources: Dredging Today project reports.
- Bau Gold Project - `Planning`; Besra completed an independent technical review and received conditional Jugan mining-lease renewal progress; next milestone: finalised mining lease conditions; sources: Besra Gold company disclosures.
- Bintulu-Samalaju Gas Pipeline - `In Progress`; value: RM1 billion committed; offshore work was reported complete in October 2025 and pre-commissioning activity was publicly notified in May 2026; next milestone: progressive commercial operations expected from 2027; sources: The Star, Bintulu Port Authority, and Sarawak Tribune.
- Sarawak Agrotechnology Park - `Planning`; value: RM5 million reported allocations for Semenggok and Tarat; next milestone: SARTECH site development; source: Sarawak Tribune.
- Sungai Baji Agropark - `In Progress`; value: RM180 million reported state funding. The PCDS 2030 action plan describes a 127-hectare agropark with infrastructure, utilities, IoT connectivity, farming plots and 32 greenhouse units. December 2025 reporting states that infrastructure and agricultural components were complete by October 2025 and that LCDA appointed an anchor company on 14 May 2025. Operations were expected in Q1 2026 and commercial production in Q3 2026, but neither milestone is marked complete without a confirming public update; sources: PCDS 2030 AIP Volume II, pages 31-32, DID Sarawak, TVS, UKAS, Sarawak Tribune, and DayakDaily.
- Semenggoh Rainforest Discovery Centre - `In Progress`; value: RM30 million. The PCDS 2030 AIP Volume II Forestry initiative identifies three phases covering the Wildlife Centre, Entrance, and Botanical zones through 2030. Borneo Post reporting confirms the August 2020 foundation-laying ceremony, three-stage scope, and funding, but no newer public source confirms whether the June 2024 Phase 1 target was achieved; sources: PCDS 2030 AIP Volume II, pages 504-507, and Borneo Post.
- Piasau Nature Reserve Discovery Centre - `In Progress`; value: RM30 million. The AIP identifies it as the second site under the discovery-centre initiative. Newer reporting confirms development commenced on 5 August 2025, describes its marine eco-tourism and national-park management functions, and gives an early August 2027 completion schedule; sources: PCDS 2030 AIP Volume II, pages 504 and 508, Borneo Post, and DayakDaily.
- PETRONAS Kasawari Carbon Capture and Storage Project - `In Progress`; MMHE holds the EPCIC contract and PETRONAS is examining a 2027 first-injection date; sources: The Sun and The Star.
- Sarawak River Aids to Navigation and Surveillance System - `In Progress` as an interim combined card; Sarawak River VTMS was reported fully operational in December 2025, while Miri River system completion remains scheduled for Q3 2027. The PCDS 2030 Highlights 2023 report identifies Sarawak River as the first project under a wider river-management initiative and describes similar systems for Miri River and Kuala Baram as later plans. The scopes should ultimately be separated, but the combined card remains `Ongoing` while the Miri milestone is open; source: Borneo Post and PCDS 2030 Highlights 2023, PDF page 121 (printed page 120).

### Sustainability Vision 2030 Energy Projects Added on 13 July 2026

- Sejingkat Battery Energy Storage System - `Operational`; 60MW/82MWh facility energised in December 2024 and publicly announced as commissioned in February 2025. Routine grid services and performance monitoring are operational activities rather than open delivery milestones, so the commissioned facility displays as `Completed`; source: Sarawak Energy.
- Mentarang Induk Hydroelectric Project - `In Progress`; US$2.6 billion, 1,375MW cross-border hydropower venture in North Kalimantan; groundbreaking and early works were reported in 2023, while current physical progress remains unclear; sources: Sarawak Energy, Office of the Premier, and PT Kayan Hydropower Nusantara.
- Sarawak-Singapore Electricity Interconnection - `In Progress`; conditional approval obtained in October 2025 for around 1GW of renewable power exports, with further regulatory approvals and licences still required; source: Sarawak Energy.

### PCDS 2030 - Overarching Framework

- Current dashboard status: `Operational`
- Current next milestone: RM282B GDP goal
- Rendering note: this record is stored in `src/trackerData.js` under the `overview` category, but `src/App.jsx` excludes `isOverview` rows from the active project grid.
- Sources currently used:
- [Business Events Sarawak - PCDS 2030](https://businesseventssarawak.com/about-sarawak/pcds2030/) - Publisher: Business Events Sarawak; type: government-linked/official tourism-business portal; date: not encoded in label; appears to support PCDS targets and framework summary.
- [Sarawak Government - PCDS 2030 strategy PDF](https://sarawak.gov.my/media/attachments/PCDS_Compressed_22_July_2021.pdf) - Publisher: Sarawak Government; type: official government PDF; publication date in URL/label context: 2021; appears to support original framework, sectors/enablers, and headline targets.
- Gaps or uncertainty: overview targets are long-range framework outcomes; no annual checkpoint methodology is encoded.

## Derived Metrics

The app derives display rows by flattening `SECTORS` into project rows and excluding the overview category:

- Active rendered projects: 29.
- Stored projects including overview: 30.
- PCDS economic sectors represented in data: 6.
- PCDS enablers represented in data: 7.
- Populated economic-sector ids: manufacturing, agriculture, tourism, forestry, mining, social-services.
- Populated enabler ids: digital-transformation, innovation, education, infrastructure, utilities, transport, renewable-energy.

Current active dashboard status counts from `src/trackerData.js`:

- `In Progress`: 15.
- `Awaiting Decision`: 0.
- `Planning`: 6.
- `Operational`: 5.
- `Designated`: 2.
- `Enacted`: 1.

The UI groups detailed statuses into public filter labels:

- `Awaiting Decision` and `In Progress` display as `Ongoing`.
- `Planning` displays as `Planning`.
- `Operational`, `Designated`, and `Enacted` display as `Completed`.

Current public display counts:

- Tracked projects: 29.
- Planning: 6.
- Ongoing: 15.
- Completed: 8.
- Milestones: 63 completed out of 106 active-project milestones.

Milestone completion is calculated from each milestone's manual `done` boolean:

- `doneMilestones`: count of milestones with `done: true`.
- `totalMilestones`: total milestone count.
- `progress`: rounded percentage `doneMilestones / totalMilestones * 100`.
- `nextMilestone`: first milestone where `done` is false.
- `latestMilestone`: last completed milestone in the list.
- Completed milestone timeline: milestones where `done` is true.
- Remaining milestones: milestones where `done` is false, after the first open milestone.

Cards are sorted by status attention order, then by project name:

- `Awaiting Decision`
- `In Progress`
- `Planning`
- `Operational`
- `Designated`
- `Enacted`

## Unknowns / Manual Review Needed

Explicit methodology found in docs/code:

- The tracker is independent and public-facing.
- Data is manually curated.
- Public claims should have source links.
- PCDS PDFs are confirmation and research references; live card claims require visible, project-specific public webpage evidence.
- Milestone statuses are best-effort based on available public information.
- `LAST_UPDATED` is manually maintained.
- Source links are not automatically checked.
- Detailed statuses are grouped into simplified public labels.

Inferred methodology based on data structure:

- Categories follow the PCDS 2030 six economic sectors and seven enablers, with one separate framework overview record.
- Milestones are manually defined rather than generated from source data.
- Milestone completion is evidence-based in intent, but technically controlled by manually set booleans.
- Reported values appear to be copied or normalized into compact display strings such as `RM1 billion`, `~RM10 billion`, `USD130 million (Phase 1)`, or `Multi-billion`.
- Source support is project-level, not field-level. The app does not know which source supports which specific field.
- The dashboard distinguishes detailed internal statuses from simpler public labels, but it does not distinguish official confirmation from media reporting in the UI.
- The audit JSON suggests a prior evidence-review method using `PRESS_total`, `PRESS_tier`, `evidence_quality`, `trackability_score`, `recommendation`, and rationale notes, but no formula or active app integration is present.

Unknown methodology needing human confirmation:

- The exact project inclusion criteria.
- The exact definition and scoring formula for `PRESS_total` and `PRESS_tier` in `audit/pcds-audit.json`.
- Whether every completed milestone has been checked against a direct source, or whether some are inferred from broader reporting.
- Whether `LAST_UPDATED` means any data edit, source review, link check, or full tracker review.
- How to handle stale, broken, paywalled, changed, or redirected source URLs.
- Whether future updates should require one official source, multiple public sources, or a documented exception.
- Whether source publication dates should become structured fields rather than embedded in labels.
- Whether the overview/framework record should remain hidden from the active dashboard grid.
- Whether source type, confidence, and field-level support should be added to `src/trackerData.js` or kept in documentation/audit files.
