# PDF Project Inventory and Online Verification Audit

- Review date: 2026-08-16
- Review type: PDF-derived project inventory and identity-level online verification
- Scope: named delivery units found in the repository's PCDS source PDFs, without using the then-current 50-card tracker inventory as the starting population
- Method: [data methodology](../data-methodology.md), [project research template](../project-research-template.md), and [data review checklist](../data-review-checklist.md)
- Implementation boundary: research and documentation only. Verification does not approve a candidate for a new card.

## Result

| Measure | Count |
| --- | ---: |
| Raw candidate records extracted from the PDF sources | 248 |
| Alias or duplicate merges | 8 |
| Umbrella, component, recognition, aspiration, or other non-delivery exclusions | 9 |
| Distinct named PDF delivery units after reconciliation | 231 |
| Verified through an opened public webpage | 81 |
| Public-page mention only | 3 |
| Identity conflict | 6 |
| No qualifying public page found in this sweep | 141 |

The 248 raw records reconcile to 231 distinct delivery units after eight duplicate or alias merges and nine exclusions. The online result is a minimum evidence count, not proof that the other 150 units have no public record. It records what this bounded review could establish from an opened page under the repository's source rules.

## Method and acceptance boundary

The PDF inventory retained explicit project labels and named, trackable delivery units. It merged aliases, removed umbrella entries when separately named components were retained, and excluded recognitions, broad aspirations, regulatory designations, and implementation activities that were not independent delivery units.

Each reconciled name then received an exact-name discovery pass, including the required `project milestones` query, current-status and alias variants where needed. Search summaries, AI-generated wording, snippets, and result rankings were discovery aids only. A unit counted as `Verified online` only when an opened public page visibly established the same project or a defensible alias. `Mention only` means the page named the unit but did not establish a useful project-specific fact. `Identity conflict` means the page could not safely be tied to the PDF unit.

This was an identity-level sweep across 231 units. It was not the full card-level audit required before publication. A new card still needs a resolved tracked unit, PCDS inclusion basis, current scope, lead roles, value exhaustion, lifecycle milestones, status, source decisions, English and Bahasa Melayu parity, and an open evidence-supported outcome.

## Reconciliation with the tracker

At the time of this audit, the tracker contained 50 project cards plus one PCDS framework overview
record. The 17 August inclusion-provenance review later moved FutureData and the Sarawak High
Performance Centre to monitored records, leaving 48 active cards plus the overview. FutureData was
not part of this PDF-derived set. The High Performance Centre represented one PDF unit, so the
current active overlap is one card and one unit lower than the audit-time result:

- At audit time, 22 cards represented 28 verified PDF units because KUTS, the hydrogen card, and
  the YSISS card combine multiple source units.
- After the 17 August disposition change, 21 active cards represent 27 verified PDF units.
- **81 - 27 = 54 verified PDF units are not active cards.** One is the already reviewed and
  monitored Sarawak High Performance Centre; the original 53-unit future-candidate pool is unchanged.

The 53 units below are candidates for deeper assessment, not 53 recommended additions. The monitored
High Performance Centre is intentionally kept outside this addition pool. Every future addition
must also pass the enforced inclusion-provenance gate in `audit/project-inclusion.json`.

## Verified PDF units outside the current tracker cards

Screening routes:

- `Standalone depth review`: appears to be a discrete asset, facility, network, zone, or delivery project, but all card fields still need a full audit.
- `Programme/service review`: verified as a programme, platform, service, event, scheme, fund, or operating institution; manual product-scope judgment is required before treating it as a project card.
- `Overlap review`: may be a component, phase, facility, system, or umbrella already represented by a current card.
- `Identity/scope review`: the name is verified, but the exact trackable unit still needs to be defined.

| # | Verified PDF unit | PDF basis | Qualifying online page | Initial screening route |
| ---: | --- | --- | --- | --- |
| 1 | AirBorneo | 13MP Executive Summary, p.4 | [AirBorneo](https://airborneo.com/en) | Programme/service review |
| 2 | Bamboo Industry Development | PCDS Highlights 2023, p.51 | [Sarawak Timber Industry Development Corporation](https://www.sarawaktimber.gov.my/web/subpage/webpage_view/195) | Programme/service review |
| 3 | Coastal Road Network | PCDS Highlights 2023, p.103 | [InvestSarawak](https://investsarawak.gov.my/sarawaks-coastal-road-network-77-9-pct-complete-second-trunk-roadprogressing-with-15-projects-underway/) | Standalone depth review |
| 4 | Collection, Processing and Packaging Centre / Food Terminal programme | PCDS Highlights 2023, p.32 | [RECODA](https://recoda.gov.my/site-visit-update-collection-processing-packaging-centre-cppc-in-spaoh-betong/) | **Overlap review: resolve programme, Spaoh CPPC, and Sungai Baji scope** |
| 5 | Hydrological Telemetry water-level monitoring application | AIP Volume III, p.91 | [DID Sarawak](https://did.sarawak.gov.my/web/subpage/webpage_view/1391) | Programme/service review |
| 6 | Digital Community Centre (DCC) | Innovative Initiatives, p.28; AIP Volume III, pp.181-182 | [Digital Community Centre](https://www.swkdcc.org/) | Programme/service review |
| 7 | Digital Village Accelerator | PCDS Highlights 2023, p.84 | [DiVA](https://diva.sarawak.digital/) | Programme/service review |
| 8 | Dual Language Programme Sarawak | PCDS Highlights 2023, p.94 | [UKAS](https://ukas.sarawak.gov.my/web/subpage/news_view/29802) | Programme/service review |
| 9 | E-Resident and District Office (eR&DO) | AIP Volume III, p.128 | [Sarawak Government](https://erndo2.sarawak.gov.my/erndo/) | Programme/service review |
| 10 | Urban Drainage Information Management System (UDIMS) enhancement | AIP Volume III, p.90 | [DID Sarawak](https://udims.sarawak.gov.my/api/FloodMap) | Programme/service review |
| 11 | Forest Landscape Restoration Programme | PCDS Highlights 2023, p.50 | [Forest Department Sarawak](https://forestry.sarawak.gov.my/web/subpage/webpage_view/1310) | Programme/service review |
| 12 | International Digital Economy Conference Sarawak (IDECS) | AIP Volume III, p.193 | [IDECS](https://idecs.com.my/) | **Programme/service review: annual-event suitability requires manual approval** |
| 13 | Jalinan Digital Negara (JENDELA) | PCDS Highlights 2023, p.75 | [Malaysia.gov.my](https://www.malaysia.gov.my/my/my-initiative/whole-government-digital-services/tadbir-urus/jalinan-digital-negara-jendela) | Programme/service review |
| 14 | Kuching hydrogen production plant and refuelling station | Innovative Initiatives, p.50 | [Sarawak Energy](https://www.sarawakenergy.com/media-info/media-releases/2019/sarawak-launches-southeast-asias-first-integrated-hydrogen-production-plant-and-refuelling-station) | **Overlap review: determine whether this is a KUTS enabling asset or a separate card** |
| 15 | Lingga-Banting paddy farm-infrastructure project | PCDS Highlights 2023, p.30 | [M-FICORD](https://mficord.sarawak.gov.my/web/subpage/news_view/1374) | **Overlap review: compare with the statewide paddy-infrastructure card** |
| 16 | Miri Smart City | AIP Volume III, pp.146-148 | [Sarawak Tribune](https://www.sarawaktribune.com/miri-smart-city-command-centre-enhances-real-time-management/) | Identity/scope review |
| 17 | Native Marriage Electronic System (NAMES) | AIP Volume III, p.127 | [Sarawak Government](https://namesv2.sarawak.gov.my/desktop/) | Programme/service review |
| 18 | Old Kuching Smart Heritage (OKSHE) | AIP Volume III, p.47 | [Sarawak Tribune](https://www.sarawaktribune.com/move-to-revive-old-kuching-smart-heritage-to-preserve-kuchings-historical-heritage/) | Identity/scope review |
| 19 | One Utility Bill (OUB) | AIP Volume III, p.66 | [Apple App Store](https://apps.apple.com/my/app/oub/id6479474965) | Programme/service review |
| 20 | One-Stop Early Intervention Centre, Kuching | PCDS Highlights 2023, p.66 | [Sarawak Premier Department](https://premierdept.sarawak.gov.my/web/subpage/news_view/23871/UKAS) | **Overlap review: distinguish the Kuching centre from the current OSEIC Miri card** |
| 21 | People Accessible Network for Digital Empowerment and Inclusivity (PANDEI) | AIP Volume III, p.183 | [Sarawak Smart](https://www.sarawaksmart.com/v2/program-pandei-didik-komuniti-berurusan-secara-dalam-talian/) | Programme/service review |
| 22 | Pig Farming Area Initiative | PCDS Highlights 2023, p.34 | [Sarawak Tribune](https://www.sarawaktribune.com/swines-a-growing-power/) | Identity/scope review |
| 23 | RM1 Flat Rate Bus Fare Subsidy Programme | PCDS Highlights 2023, p.120 | [DayakDaily](https://dayakdaily.com/redrawing-map-of-mobility-sarawaks-rm1-flat-rate-bus-fare/) | Programme/service review |
| 24 | Rembus Hydrogen Plant and Refuelling Station | PCDS Highlights 2023, p.127 | [DayakDaily](https://dayakdaily.com/rembus-hydrogen-plant-to-be-commissioned-by-q2-2026/) | **Overlap review: determine its boundary from KUTS and the Kuching hydrogen facility** |
| 25 | S Pay Global | AIP Volume III, p.96; PCDS Highlights 2023, p.80 | [S PAY GLOBAL](https://spayglobal.my/) | Programme/service review |
| 26 | S-MM2H Management and Online Application System | PCDS Highlights 2023, p.45 | [Sarawak Tourism](https://smm2h.sarawaktourism.com/) | **Overlap review: distinguish the application system from the S-MM2H programme** |
| 27 | SDEC Technology Accelerator | PCDS Highlights 2023, p.86 | [SDEC](https://sdec.com.my/web/2024/07/09/sdec-technology-accelerator-demo-day-showcases-capability-and-services-in-deep-tech/) | Programme/service review |
| 28 | SMA Rural Telecommunication (SMART) | AIP Volume III, p.160; PCDS Highlights 2023, p.75 | [SDEC](https://sdec.com.my/web/2024/07/09/smart-project-implementation-in-sarawak-by-sdec/) | Standalone depth review |
| 29 | STEM Trailblazer | Innovative Initiatives, p.25 | [MEITD](https://meitd.sarawak.gov.my/web/subpage/event_view/64) | Programme/service review |
| 30 | Sama Jaya Free Industrial Zone | PCDS Highlights 2023, p.25 | [MINTRED Sarawak](https://mid.sarawak.gov.my/modules/web/pages.php?mod=webpage&sub=page&id=60) | Identity/scope review |
| 31 | Samalaju Industrial Park | PCDS Highlights 2023, p.26 | [RECODA](https://recoda.gov.my/sarawak-corridor-of-renewable-energy/samalaju-industrial-park-sip/) | Identity/scope review |
| 32 | SaraBom | Innovative Initiatives, p.40 | [Utusan Sarawak](https://utusansarawak.com.my/sarabom-ejen-penghijauan-sarawak/) | Programme/service review |
| 33 | Sarawak AI Centre | 13MP Executive Summary, p.13 | [Sarawak AI Centre](https://saic.com.my/) | **Identity/scope review: resolve facility, institution, or programme boundary** |
| 34 | Sarawak Alternative Rural Electrification Scheme (SARES) | PCDS Highlights 2023, p.110 | [Sarawak Energy](https://www.sarawakenergy.com/sarawak-alternative-rural-electrification-scheme-sares) | Programme/service review |
| 35 | Sarawak Digital Bank | AIP Volume III, pp.149-150 | [BERNAMA](https://bernama.com/bm/am/news.php?id=2025871) | Identity/scope review |
| 36 | Sarawak Employment Package | 13MP Executive Summary, p.14 | [Sarawak Premier Department](https://premierdept.sarawak.gov.my/web/subpage/news_view/27018/UKAS) | Programme/service review |
| 37 | Sarawak Microelectronics Design semiconductor collaboration | Innovative Initiatives, p.24 | [SMD Semiconductor](https://smdsemiconductor.com/about-us) | **Overlap review: compare the wider collaboration with the tracked GaN-chip project** |
| 38 | Sarawak Rental Assistance Scheme | PCDS Highlights 2023, p.72 | [Housing Development Corporation Sarawak](https://hdc.sarawak.gov.my/web/subpage/webpage_view/139) | Programme/service review |
| 39 | Sarawak Rural Broadband Network | PCDS Highlights 2023, p.75 | [MySRBN](https://mysrbn.my/en) | Standalone depth review |
| 40 | Sarawak Sovereign Wealth Future Fund | 13MP Executive Summary, p.13 | [Sarawak Sovereign Wealth Future Fund Board](https://www.ssff.my/who-we-are) | **Programme/service review: statutory-fund suitability requires manual approval** |
| 41 | Sarawak Virtual Pipeline System | PCDS Highlights 2023, p.113 | [DayakDaily](https://dayakdaily.com/project-to-distribute-natural-gas-from-bintulu-to-kuching-to-be-finalised-by-q1-2024/) | Standalone depth review |
| 42 | Sarawak Water Supply Grid / SAWAS | PCDS Highlights 2023, p.112 | [Sarawak Rural Water Supply Department](https://jbalb.sarawak.gov.my/web/subpage/webpage_view/135) | Programme/service review |
| 43 | SarawakID | AIP Volume III, p.97; PCDS Highlights 2023, p.76 | [Sarawak Government](https://sarawakid.sarawak.gov.my/web/ssov1/login/) | Programme/service review |
| 44 | Sarawak-Malaysia My Second Home Programme | PCDS Highlights 2023, p.45 | [Sarawak Tourism Board](https://smm2h.sarawaktourism.com/) | **Overlap review: resolve programme versus online-system unit** |
| 45 | School Infrastructure Redevelopment Programme | PCDS Highlights 2023, p.92 | [DayakDaily](https://dayakdaily.com/85-dilapidated-schools-in-swak-rebuilt-under-rm1-bil-redevt-programme/) | Programme/service review |
| 46 | Second Trunk Road | PCDS Highlights 2023, p.104 | [JKR Sarawak](https://jkr.sarawak.gov.my/web/subpage/news_view/556) | Standalone depth review |
| 47 | Service Sarawak Centre | AIP Volume III, p.98 | [Service Sarawak](https://service.sarawak.gov.my/web/web/home/article_view/351/225/) | Programme/service review |
| 48 | Sungai Baji Food Terminal | PCDS Highlights 2023, p.32 | [RECODA](https://recoda.gov.my/work-visit-to-sungai-baji-agro-park-sarikei-to-inspect-food-terminal-project/) | **Overlap review: determine whether it is a component of the current Sungai Baji Agropark card** |
| 49 | Taman Kekal Pengeluaran Makanan | PCDS Highlights 2023, p.37 | [Service Sarawak](https://service.sarawak.gov.my/web/web/home/sla_view/211/593/) | Programme/service review |
| 50 | Two New Quay Cranes for Kuching Port Authority | PCDS Highlights 2023, p.107 | [MIPD Sarawak](https://mipd.sarawak.gov.my/web/subpage/news_view/467) | Standalone depth review |
| 51 | Women@Work | 13MP Executive Summary, p.41 | [Utusan Sarawak](https://utusansarawak.com.my/program-sarawak-womenwork-perluas-peluang-pekerjaan-latih-usahawan-wanita-kuasai-ai/) | Programme/service review |
| 52 | e-TANI: Integrated Agriculture Database for Sarawak | AIP Volume III, pp.105-106 | [Sarawak Government](https://etani.sarawak.gov.my/) | Programme/service review |
| 53 | eLA2: Development and implementation for all local authorities | AIP Volume III, pp.129-132 | [MPHLG Sarawak](https://mphlg.sarawak.gov.my/web/subpage/webpage_view/87) | Programme/service review |

## Recommended next review order

1. Resolve the nine bold overlap decisions first so components and umbrella programmes do not become duplicate cards. Done on 17 August 2026.
2. Audit the discrete infrastructure and asset candidates in batches of four to six, starting with Coastal Road Network, Second Trunk Road, the Sarawak Virtual Pipeline System, SMA Rural Telecommunication, and the Kuching Port quay cranes. First discrete batch closed on 17-18 August 2026.
3. Depth-review the next identity and operating-zone batch: Sarawak Rural Broadband Network, Miri Smart City, Old Kuching Smart Heritage, the Pig Farming Area Initiative, Sama Jaya Free Industrial Zone, and Samalaju Industrial Park. Closed on 30 August 2026 with no new card. Dated leftover: [30 August 2026 PDF candidate batch](2026-08-30-pdf-candidate-batch.md).
4. Review remaining programmes, services, events, operating institutions, and the statutory fund against the product's project-card boundary, starting with Sarawak Digital Bank, AirBorneo, Digital Community Centre, Digital Village Accelerator, SARES, and the Sarawak Water Supply Grid.
5. For any candidate retained after scope review, run the full value, lead-role, lifecycle, status, counter-search, source-quality, and BM-parity audit before proposing a card.

No candidate in this document should be added solely because it appears in a PCDS PDF and has one qualifying public page.

## 17 August 2026 follow-up depth review

This follow-up resolves the nine overlap cases and applies the full inclusion, identity, value,
lifecycle, role and live-source gate to the first five discrete candidates. It is an approval record,
not implementation. No tracker card or inclusion-register record changed in this review.

### Overlap decisions

| Candidate | Decision | Evidence boundary and follow-up |
| --- | --- | --- |
| Collection, Processing and Packaging Centre / Food Terminal programme | Do not add as one card | The AIP identifies a multi-site facilities programme. Review named facilities only when a current official page establishes their individual delivery boundary and outcome. |
| Kuching hydrogen production plant and refuelling station | Keep as KUTS and hydrogen-mobility context | The 2019 demonstration facility is completed enabling infrastructure, not a current standalone delivery programme. Reconsider only after a distinct upgrade or replacement project is announced. |
| Lingga-Banting paddy farm-infrastructure project | Distinct candidate, deferred | PCDS Highlights p.30 establishes a separate RM153.6 million irrigation and drainage asset. It is not the statewide paddy programme or the Lubok Punggor project, but no current public page confirms its passed March 2026 completion target. |
| One-Stop Early Intervention Centre, Kuching | Distinct candidate, deferred | It is a separate location-specific facility from the active OSEIC Miri card. A facility-specific current status, value or open delivery outcome is still required. |
| Rembus Hydrogen Plant and Refuelling Station | Keep as KUTS milestone context | It is the current KUTS fuel-supply enabling facility. The RM526 million and USD4.2 billion figures are wider combined commitments, not a Rembus-only value. Confirm commissioning after the conflicting Q2 and Q4 2026 targets before completing the milestone. |
| S-MM2H Management and Online Application System | Do not add under current product scope | The AIP treats the online system as a direct PCDS unit separate from the wider S-MM2H programme, but it is an operating digital service rather than a major project card under the current boundary. |
| Sarawak Microelectronics Design semiconductor collaboration | Keep as inclusion context for the active GaN card | The collaboration is the wider programme; GaN is its approved trackable output. The inclusion register should later correct the GaN card's `trackedUnit` from `programme` to `component` so it matches its approved tier and rationale. |
| Sarawak-Malaysia My Second Home Programme | Do not add under current product scope | The broader visa, policy, promotion and one-stop-centre programme is distinct from its online application system but remains a service programme rather than a major delivery card. |
| Sungai Baji Food Terminal | Keep within the active Sungai Baji Agropark card | RECODA's 2 April 2022 page states that the 2,367-square-metre terminal is located within the 127-hectare park and that RECODA is its implementing agency. Programme-level and conflicting terminal figures must not replace the agropark's value. |

### First discrete-candidate batch

| Candidate | Inclusion and identity | Live evidence decision | Recommendation |
| --- | --- | --- | --- |
| Coastal Road Network | Direct PCDS component of the CSTR programme | InvestSarawak records a RM5.42 billion network of road, bridge and rehabilitation packages. Current 17 August reporting confirms the RM365.74 million Sejingkat Bridge remains under construction for an October 2026 opening. | Manual tracked-unit review. Prefer one combined CSTR programme card unless separate component cards can maintain independent values and lifecycle outcomes. |
| Second Trunk Road | Direct PCDS component of the CSTR programme | InvestSarawak separately records RM5.58 billion and 20 work packages, but the available programme schedule is not a current package-by-package completion record. | Manual tracked-unit review together with Coastal Road Network. Do not create two cards by default. |
| Sarawak Virtual Pipeline System | Direct PCDS LNG-trucking pilot, distinct from the Bintulu-Samalaju fixed pipeline | DayakDaily reported on 1 December 2025 that operations were targeted for Q1 2026. No public confirmation of operations, delay or revised schedule was found by 17 August 2026. | Monitor. The passed target triggers re-review but does not prove operation; defer an active card until the current delivery state is clarified. |
| SMA Rural Telecommunication (SMART) | Direct PCDS rural-connectivity programme; the current delivery scope is SMART600 | SDEC reported 587 of 600 towers built and 431 on air on 9 July 2025, then confirmed active SMART sites and continuing resilience work in July 2026. A separate July 2025 report used 603 of 618 and 502 on-air, so the card must avoid an unreconciled precise progress count. | Ready for approval as an `In Progress` programme card with `Not disclosed` value and an open remaining-tower activation outcome. |
| Two New Quay Cranes for Kuching Port Authority | Direct PCDS equipment project at Senari Terminal Two | MIPD's 5 March 2024 page confirms handover of QC6 and QC7, the RM70 million acquisition value, and the intended increase in handling capacity. The earlier assembly and factory-acceptance stage remains PDF-only. | Defer pending manual product review or another live source. A handover-only lifecycle is too thin for a credible project card, and the PDF-only preceding stage must not be displayed. |

### Source and value decisions

- [SDEC, SMART600 rollout and operating-support agreement, 9 July 2025](https://sdec.com.my/web/2025/08/14/rapatkan-jurang-digital-luar-bandar-projek-smart600-perkasa-kesalinhubungan-sarawak-dengan-sokongan-mcmc/) supports the two-phase 600-tower scope, 587 completed towers, 431 activated towers, SDEC implementation lead and the MCMC/operator OPEX arrangement.
- [SDEC, SMART site resilience visit, 25 July 2026](https://sdec.com.my/web/2026/08/05/minister-visits-smart-sites-at-sungai-rayah-to-review-anti-vandalism-measures-and-strengthen-infrastructure-resilience/) confirms that SMART sites remain active infrastructure. The RM8.99 million vandalism loss is statewide telecommunications damage, not a SMART project value.
- [DayakDaily, VPS Q1 2026 operations target, 1 December 2025](https://dayakdaily.com/swaks-virtual-pipeline-set-for-q1-2026-launch-kuching-low-carbon-hub-to-spearhead-new-gas-network/) supports the LNG transport scope and target only. The historical AIP RM1 billion plan remains PDF-only and is not accepted as a live-card value.
- [RECODA, Sungai Baji food-terminal site visit, 2 April 2022](https://recoda.gov.my/work-visit-to-sungai-baji-agro-park-sarikei-to-inspect-food-terminal-project/) resolves the terminal as a facility within the agropark.
- [InvestSarawak, CSTR programme status and values](https://investsarawak.gov.my/sarawaks-coastal-road-network-77-9-pct-complete-second-trunk-roadprogressing-with-15-projects-underway/) supports separate RM5.42 billion and RM5.58 billion programme-component values, but its body reproduces an older schedule and does not by itself prove current package completion.
- [DayakDaily, Sejingkat Bridge status, 17 August 2026](https://dayakdaily.com/sejingkat-bridge-on-track-to-open-to-traffic-by-oct-1/) supports an active Coastal Road Network subproject and an October 2026 opening target.
- [MIPD, Senari quay-crane handover, 5 March 2024](https://mipd.sarawak.gov.my/web/subpage/news_view/467) supports the RM70 million value, QC6 and QC7 identity, Kuching Port Authority handover and expected handling-capacity improvement.

### Approval boundary

The recommended first implementation candidate is SMART. The two Senari quay cranes remain a
manual product decision because their live-source lifecycle is limited to the handover. A combined
Coastal Road Network and Second Trunk Road programme card requires the site owner's tracked-unit
decision before implementation. VPS remains monitored, and every overlap case remains merged,
deferred or outside the current product scope. Any approved addition still requires BM parity, a
unique inclusion-register record, content validation and four-route Preview review.

## 18 August 2026 approved implementation

The site owner approved the recommended SMART addition, selected one combined CSTR programme card
instead of separate Coastal Road Network and Second Trunk Road cards, and approved the SMD GaN
tracked-unit correction.

| Approved item | Implemented result | Evidence and scope safeguard |
| --- | --- | --- |
| SMA Rural Telecommunication (SMART) | Added as `SMART Rural Connectivity`, `In Progress`, `Not disclosed`, under Digital Transformation | The card represents the current SMART600 programme, avoids conflicting July 2025 tower totals, rejects the older RM5.5 billion 1,500-tower scope, and keeps remaining tower activation open. |
| Coastal Road Network and Second Trunk Road | Added as one combined `Coastal Road Network and Second Trunk Road (CSTR)` card, `In Progress`, with a combined `RM11 billion` value | The summary states the RM5.42 billion and RM5.58 billion component values. The current lifecycle uses the active Sejingkat Bridge package and does not present the older programme-wide progress schedule as current. |
| SMD Semiconductor - GaN Chip Development | Corrected `trackedUnit` from `programme` to `component` | The field now matches its approved `component` tier, manual approval and inclusion rationale. No reader-facing card fact changed. |

The two additions raise the active tracker from 48 to 50 cards. They represent three PDF units, so
23 active cards now represent 30 of the 81 online-verifiable PDF units. With the Sarawak High
Performance Centre retained separately as monitored, the future-candidate pool falls from 53 to 50
units. The two new cards have complete BM parity and unique `direct` inclusion records. A CSTR
update-history entry records the 17 August 2026 Sejingkat Bridge opening report; SMART's resilience
visit remains a supporting status source rather than a separate editorial update.

## 30 August 2026 leftover: next six PDF candidates

The next identity and operating-zone batch is recorded in
[30 August 2026 PDF candidate batch](2026-08-30-pdf-candidate-batch.md).

| Candidate | Decision |
| --- | --- |
| Sarawak Rural Broadband Network (MySRBN) | Do not add. Overlap with the live SMART card. |
| Miri Smart City | Do not add. Municipal multi-system programme. |
| Old Kuching Smart Heritage (OKSHE) | Do not add. Heritage and tourism programme. |
| Pig Farming Area Initiative | Do not add the initiative. Selangau PFA proposed as a card. |
| Sama Jaya Free Industrial Zone | Do not add. Operating 1992 zone. |
| Samalaju Industrial Park | Do not add. SCORE growth node already on the SCORE card. Samalaju SME Cluster proposed separately. |

No live card, inclusion-register row, or SMART / Kota Petra / Lubok Punggor / SCORE edit. The 50-unit pool is unchanged. Six units now have a dated depth decision and a re-review trigger.

A same-day verification pass confirmed all six `Do not add` decisions and overturned one sub-decision. Selangau Pig Farming Area is a named AIP Volume II action step with an official RM300 million project value, and the Samalaju SME Cluster trigger fired on its 29 June 2026 launch. Both are written up as proposals awaiting approval, not as additions.
