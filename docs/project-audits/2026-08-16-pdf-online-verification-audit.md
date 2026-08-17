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

1. Resolve the nine bold overlap decisions first so components and umbrella programmes do not become duplicate cards.
2. Audit the discrete infrastructure and asset candidates in batches of four to six, starting with Coastal Road Network, Second Trunk Road, the Sarawak Virtual Pipeline System, SMA Rural Telecommunication, and the Kuching Port quay cranes.
3. Review programmes, services, events, operating institutions, and the statutory fund against the product's project-card boundary before spending time on full field research.
4. For any candidate retained after scope review, run the full value, lead-role, lifecycle, status, counter-search, source-quality, and BM-parity audit before proposing a card.

No candidate in this document should be added solely because it appears in a PCDS PDF and has one qualifying public page.
