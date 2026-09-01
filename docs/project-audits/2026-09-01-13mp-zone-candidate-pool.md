# Parked 13MP / zone candidate pool: 1 September 2026 re-review

- Review date: 2026-09-01
- Review type: excluded-candidate re-review of the six named parked units in `docs/backlog.md` §2
- Base: current `preview` at `c333fe0`. Not a Codex branch. No merge. No promote to `main`.
- Method: [data methodology](../data-methodology.md), [project research template](../project-research-template.md), [data review checklist](../data-review-checklist.md)
- Prior dated decisions: [13MP candidate review](2026-07-28-13mp-candidate-review.md) (28 July 2026); [approved six-card route](2026-08-07-approved-six-card-route-first-three.md) (7 August 2026, HPC added then later parked); [PDF and online verification audit](2026-08-16-pdf-online-verification-audit.md) (16 August 2026); [inclusion provenance](2026-08-17-current-card-inclusion-provenance.md) (17 August 2026)

This is not a site-wide inventory. The six watchlist names were checked only. None is a live card in `src/trackerData.js`. Search syntheses were discovery only. Every accepted claim below comes from an opened page or from the opened official 13MP / Budget Speech attachments.

Outcome: research-only. No live card added. No existing related card updated. `LAST_UPDATED`, `src/localization.js`, and `src/updateHistory.js` were not changed.

## Decision table

| Watchlist name | PCDS 2030 | Trigger fired | Decision | Why |
| --- | --- | --- | --- | --- |
| Sarawak High Performance Centre | unclear | no | Keep parked | UKAS/MYSED Petra Jaya facility still exists in planning. The 13MP Game Changer is `Sarawak High Performance Sports Centre`. No opened official page equates the two or names the UKAS unit as PCDS 2030. |
| FutureData | no | no | Keep parked | Opened InvestSarawak and developer pages still cite the Sarawak Digital Economy Blueprint 2030, not PCDS 2030. Lianhe Zaobao reports Cyclect ended the JV in 2025; TSG has not confirmed a replacement status. That is not the inclusion trigger. |
| Sarawak AI Centre | yes | yes (identity resolved) | Keep parked | 13MP DT-S3 / Game Changer and the 2026 Budget Speech name SAIC. Identity is now an operating state-owned institution at Unifor Complex, not a capital facility. The tracker does not add agency cards. |
| Sarawak Climate Change Centre | yes | no | Keep parked | 13MP FNAM-S6 / Game Changer and the 2026 Budget Speech name the centre. Both still use establishment language. No opened page gives a launch, location, ring-fenced budget, or operating milestone. |
| Kuching Low-Carbon Hub | yes | no | Keep parked as umbrella | 13MP names the proposed economic zone. PETROS, CJI, and Sumitomo are advancing masterplanning. The masterplan is not published and zone-wide works remain a 2027 target. The airport and port stay the trackable components. |
| Baram Renewable Energy Economic Zone | yes | no | Keep parked as umbrella | 13MP names the proposed economic zone. May 2026 DUN reporting still treats DeepTech / the agrovoltaic project as the named delivery unit. No published zone governance, masterplan, or second distinct project. |

## Shared method notes

- Mandatory first query for each name: `"[exact name]" project milestones`. Ordinary results were read whether or not a synthesis appeared. Follow-up queries used `update 2026` / `latest status 2026`, aliases, locations, delivery bodies, official domains, value terms (including BM `kos`, `nilai projek`, `anggaran`, `peruntukan`, `pelaburan`, `juta`, `bilion`), and counter-search terms (`revised`, `delayed`, `suspended`, `cancelled`, `completed` 2026).
- Official PCDS / 13MP lists opened: the Premier Department 13MP executive-summary and strategy attachments, and the 2026 Sarawak Budget Speech. Core PCDS Highlights / AIP PDFs were not re-parsed in this workspace copy; prior audits already recorded that these six names sit in the 13MP set rather than the core Highlights/AIP project lists, except where noted below.
- Tribune article bodies returned a site shell and were treated as unusable. Borneo Post pages returned Cloudflare challenges and were not used as evidence. Replacement DayakDaily, UKAS, Premier, PETROS, InvestSarawak, SDEC, Malay Mail, FULCRUM, and Lianhe Zaobao/Longbridge pages were opened instead.
- A live-card claim may rest on a public webpage. It does not have to be SDEC. The page must name the exact unit and support a displayed field. Inclusion and live-card evidence remain different questions.
- `Do not add` remains a dated evidence decision, not a permanent classification.

## Official-list inclusion check

Opened official attachments:

| Source | Opened URL | Visible naming used |
| --- | --- | --- |
| Sarawak 13th Malaysia Plan 2026-2030 | https://premierdept.sarawak.gov.my/web/attachment/show/?docid=SjR4UGV3UnJLenhOQnRLdWdRbkFvUT09Ojqr0vAZtDVWQo-R_Ljnk5Gu | Cabinet approval of Sarawak AI Centre; proposed Kuching Low-Carbon Hub Economic Zone and Baram Renewable Energy Economic Zone; Sarawak High Performance Sports Centre; establish Sarawak Climate Change Centre. 13MP is described as the platform to align with PCDS 2030 / PCDS Phase 2. |
| Sarawak 13MP strategy attachment | https://premierdept.sarawak.gov.my/web/attachment/show/?docid=R0dnQWl0Z0ZyakZ5Mk9rc0FOWGlDUT09OjoGi3SUCspqb6puT61d5jvw | DT-S3 and NEW Game Changer: Sarawak Artificial Intelligence Centre (SAIC). EHC-S6 and BUILD Game Changer: Establish Sarawak High Performance Sports Centre. FNAM-S6 and NEW Game Changer: Establish Sarawak Climate Change Centre, with planned operating context under the Office of the Premier. Proposed KLCH and Baram REEZ among economic zones. |
| 2026 Sarawak Budget Speech | https://premier.sarawak.gov.my/web/attachment/show/?docid=SFhLM2J4c1Z4Ymxlb0pTOEVMYVlRUT09OjoH96R7oV1RindRYgYUin5k | Paragraph 140: Climate Change Centre "will be established". Paragraph 222: SAIC launched in 2025; RM5 million in 2026 for operations and strategic functions. No FutureData, HPC, KLCH, or Baram REEZ line in the opened speech text. |

FutureData does not appear in those official PCDS/13MP lists.

## 1. Sarawak High Performance Centre

- Prior review: added 7 August 2026; moved to `monitored_unconfirmed` on 17 August 2026.
- Prior evidence gap: 13MP names a Sarawak High Performance Sports Centre; no authoritative source resolved that unit as the UKAS Petra Jaya project or otherwise connected the exact UKAS card to PCDS 2030.
- Aliases checked: High Performance Sports Centre; High-Performance Centre; Pusat Prestasi Tinggi; Petra Jaya / Sarawak Sports Complex HPC; proposed Miri and Sibu centres; International Velodrome.
- Tracked unit if ever added: single planned sports-science facility inside the Sarawak Sports Complex, Petra Jaya. Not the older statewide “launch this year” wording, not proposed divisional centres, and not the separate 13MP velodrome project paper.

### Searches

| Search type | Query | Finding |
| --- | --- | --- |
| Milestone-first | `"Sarawak High Performance Centre" project milestones` | 2026 DayakDaily planning and post-SEA Games construction reporting; 2025 operational-this-year collision |
| Current-year | `"Sarawak High Performance Centre" OR "Sarawak High Performance Sports Centre" update 2026` | Feb and June 2026 site/planning updates; no tender or construction start |
| Value / BM | HPC / Sports Centre + kos, peruntukan, pelaburan, RM | Minister says state-funded and “not excessively costly”; no figure |
| Counter-search | delayed, cancelled, tender, completed 2026 | Schedule slipped from 2025 operations to after SEA Games; not cancelled |
| Official-domain / PCDS | 13MP attachments; Budget Speech; UKAS | 13MP names Sports Centre as a Game Changer. Budget Speech has no HPC line. UKAS 34514/42510 timed out on this pass; DayakDaily reprints the same ministerial briefings |

### Opened pages

| URL | Publication date | Visible claim | Decision |
| --- | --- | --- | --- |
| https://dayakdaily.com/sarawak-high-performance-sports-centre-plan-to-move-forward-after-sea-games/ | 12 June 2026 | MYSED: site identified in Sarawak Sports Complex; implementation after SEA Games; state-funded; ISN sports-science support; “not excessively costly” | Accepted for continued planning status. Does not name PCDS or 13MP |
| https://dayakdaily.com/68-acre-petra-jaya-site-set-for-swak-high-performance-sports-centre/ | 18 Feb 2026 | 68 acres returned from PDRM; sports-science centre; velodrome and shooting-range plans on the same site; two-to-three-year hope | Accepted for site/identity. Velodrome remains a related complex idea, not proof it is the 13MP velodrome line |
| https://premierdept.sarawak.gov.my/web/attachment/show/?docid=R0dnQWl0Z0ZyakZ5Mk9rc0FOWGlDUT09OjoGi3SUCspqb6puT61d5jvw | 13MP attachment | BUILD Game Changer: Establish Sarawak High Performance Sports Centre. Athlete-development ecosystem, including PWD athletes. Separate International Velodrome project paper under MYSED | Accepted for 13MP naming. Does not give Petra Jaya, 68 acres, or UKAS identity |

### Identity and PCDS

PCDS 2030: **unclear**. The 13MP unit is a named PCDS Phase 2 Game Changer. The public UKAS/MYSED unit uses both “High Performance Centre” and “High Performance Sports Centre” in 2026 reporting and matches the sports-science purpose, but no opened official page says they are the same tracked unit or places the Petra Jaya project on a PCDS list.

Value: still no project-specific amount after English/BM exhaustion. “Not excessively costly” is not a figure.

### Decision

- Trigger fired: **no**. The parked trigger was an official identity/PCDS link, not another planning restatement.
- Recommended action: keep parked.
- Follow-up: **2027-01-15**, or sooner if MYSED, UKAS, Treasury, or a 13MP implementation page names the Petra Jaya / Sarawak Sports Complex facility as the 13MP Sarawak High Performance Sports Centre or as a PCDS 2030 project, or publishes a tender, allocation, or construction start.
- Search identities: `Sarawak High Performance Centre`, `Sarawak High Performance Sports Centre`, `Pusat Prestasi Tinggi`, `Sarawak Sports Complex`, `Petra Jaya`, `MYSED`.

## 2. FutureData — Kuching Data Centre Park

- Prior review: removed from the live dashboard and parked as `monitored_unconfirmed` on 17 August 2026.
- Prior evidence gap: no authoritative source named the exact project as part of PCDS 2030.
- Aliases checked: FutureData Park; Future Data; TSG / Cyclect consortium; Global Telecommunications 17MW offtake; Kota Samarahan / Kuching data-centre park.
- Collisions rejected: irix Santubong data centre; Kota Petra planned data-centre sites; the 200MW “Green Data Centre Park” mentioned in the July 2024 SAIC cabinet-approval speech.

### Opened pages

| URL | Publication date | Visible claim | Decision |
| --- | --- | --- | --- |
| https://investsarawak.gov.my/global-telecommunications-first-off-taker-for-kuchings-futuredata-park/ | 10 Oct 2024 (page also stamped 23 Apr 2026) | TSG/Cyclect consortium; 500MW park; Global Telecommunications first offtaker; above US$130 million / 17MW; construction 2Q 2025, online 2026; “in line with the Sarawak Digital Economy Blueprint 2030” | Accepted. Still no PCDS naming |
| https://longbridge.com/en/news/272174900 | Lianhe Zaobao financial report, opened 1 Sept 2026 | Cyclect president said the company terminated the cooperation earlier in 2025. TSG had not responded. Article also mentions a general Post-Pandemic Development Strategy context for data centres, not this park by PCDS name | Accepted only as a reported Cyclect-exit claim. Rejected as PCDS inclusion |
| https://www.datacenterdynamics.com/en/news/futuredata-announces-first-off-taker-at-500mw-malaysian-data-center-park-in-sarawak/ | 2024/2025 industry report | Same offtaker, 500MW, Digital Economy Blueprint wording | Context. No newer construction or PCDS fact |

The TSG FutureData park page timed out on this pass. The October 2024 TSG offtaker URL remains the register’s live-evidence URL and was not needed to change the inclusion decision.

### Identity and PCDS

PCDS 2030: **no**. Opened project-owner and InvestSarawak pages still attach the exact park to the Digital Economy Blueprint 2030. The Zaobao PCDS-strategy sentence is statewide data-centre policy, not an exact-project inclusion statement. FutureData is absent from the opened 13MP and Budget Speech lists.

Value candidates remain the historical first-facility figure (above USD130 million / RM617.84 million) and the 500MW park scope. They are not used because no card is added. Construction after the Q2 2025 target is still unconfirmed on an opened TSG or InvestSarawak page.

### Decision

- Trigger fired: **no**. The parked trigger was an explicit PCDS / 13MP / government / InvestSarawak / delivery-owner PCDS connection.
- Recommended action: keep parked.
- Follow-up: **2026-12-15**, or sooner if a PCDS/13MP/InvestSarawak/TSG page names FutureData as a PCDS 2030 project, or if TSG or InvestSarawak publishes a construction start, cancellation, or replacement-partner status after the reported Cyclect exit.
- Search identities: `FutureData`, `FutureData Park`, `TSG Group`, `Cyclect`, `Global Telecommunications`, `Kuching Data Centre Park`.

## 3. Sarawak AI Centre

- Prior review: 16 August 2026 PDF pool (`Identity/scope review: resolve facility, institution, or programme boundary`); 28 July 2026 13MP note that public implementation evidence was not yet enough for a useful project card.
- Aliases checked: SAIC; Sarawak Artificial Intelligence Centre; Sarawak Artificial Intelligence Centre Sdn Bhd.
- Collisions rejected: SAINS Sovereign AI Infrastructure Platform (17 August 2026 launch, SAINS custodian); ADAM AI (Sarawak Civil Service tool); generic IDECS AI programming.

### Opened pages

| URL | Publication date | Visible claim | Decision |
| --- | --- | --- | --- |
| https://saic.com.my/ | current official site, opened 1 Sept 2026 | Sarawak Artificial Intelligence Centre. Level 9, Unifor Complex, Jalan Ong Tiang Swee, Kuching. Mission/sectors language. No PCDS sentence on the homepage | Accepted for institution identity and location |
| https://premier.sarawak.gov.my/web/attachment/show/?docid=SFhLM2J4c1Z4Ymxlb0pTOEVMYVlRUT09OjoH96R7oV1RindRYgYUin5k | 2026 Budget Speech | SAIC launched in 2025. RM5 million in 2026 for operations and strategic functions | Accepted for launch year and operations allocation |
| https://dayakdaily.com/sarawak-targets-digital-leap-with-rm33-million-for-ai-financial-inclusion-and-e-services-in-2026/ | 24 Nov 2025 | Same RM5 million for SAIC inside a wider RM33 million digital package; Premier Budget 2026 wording | Accepted. RM33 million rejected as SAIC-only value |
| https://premierdept.sarawak.gov.my/web/subpage/news_view/27209/UKAS | 24 Oct 2025 | CEO Prof Dr Patrick Then; DeepSight, rural diagnostic prototypes, Herbarium, DeepSAR chatbot that answers PCDS 2030 questions | Accepted for operational R&D activity. DeepSAR using PCDS as a knowledge base is not PCDS inclusion of SAIC itself |
| https://nativecustoms.sarawak.gov.my/web/subpage/news_view/601 | 30 July 2024 | Cabinet approval of SAIC; speech also frames AI under the Digital Economy Blueprint and mentions a separate 200MW Green Data Centre Park | Accepted for cabinet approval. Blueprint mention is not a PCDS locator |
| https://sdec.com.my/web/2025/11/03/sarawaks-startup-village-lights-up-idecs25-turning-ideas-into-impact/ | 23 Oct 2025 | MoU: Sarawak Biodiversity Centre and Sarawak Artificial Intelligence Centre Sdn Bhd | Accepted for legal-entity name |
| https://dayakdaily.com/sarawak-energy-sarawak-ai-centre-ink-mou-to-drive-states-shift-towards-sustainable-energy-system/ | 28 Sept 2025 | SAIC Sdn Bhd / Patrick Then MoU with Sarawak Energy on Sovereign Energy AI | Accepted for lead/parties. Distinct from the later SAINS Sovereign AI platform |
| 13MP strategy attachment (URL above) | 13MP | DT-S3 and NEW Game Changer: Sarawak AI Centre (SAIC). R&D institution through partnerships | Accepted for official_linked inclusion of the institution |

Tribune RM5 million and Borneo Post blueprint articles did not yield usable opened bodies. The Budget Speech and DayakDaily Budget report already carry the RM5 million operations line. Blueprint timing (targeted 2H 2026; July 2026 kick-off workshop) remains discovery until a usable opened page is retained; it is not required for this no-card decision.

### Identity and PCDS

PCDS 2030: **yes**. The exact unit is a 13MP Digital Transformation Game Changer in a plan the same document describes as PCDS Phase 2 alignment. That is `official_linked` if a card were ever added.

Identity is now resolved: **institution / state-owned Sdn Bhd**, already launched in 2025, office at Unifor Complex, CEO in post, operations allocation, prototypes and MoUs. It is not a capital campus comparable to SSCiEX or SIDC, and it is not a construction programme.

Value if a card existed: `RM5 million` as a 2026 operations allocation, not a project cost. RM33 million, RM27 million ICT, and RM299 million maintenance are wider digital lines and are rejected.

### Decision

- Trigger fired: **yes**, against the backlog identity trigger (implementing body, location, budget, launch, operational activity). The unit is an institution.
- Recommended action: keep parked. An operating agency is not a major development-project card. Adding it would treat SAIC like SDEC or SMA.
- Follow-up: **2026-12-31**, or sooner if SAIC, the Premier’s Department, or 13MP implementation material announces a dedicated campus / capital facility, or publishes the Sarawak AI Blueprint as a named delivery programme with project-level units.
- Search identities: `Sarawak AI Centre`, `SAIC`, `Sarawak Artificial Intelligence Centre Sdn Bhd`, `Patrick Then`.

## 4. Sarawak Climate Change Centre

- Prior review: 28 July 2026 / 16 August 2026 institutional-initiative hold pending establishment evidence.
- Aliases checked: SCCC; Climate Change Centre; Pusat Perubahan Iklim Sarawak.
- Collisions rejected: Climate and Energy Diplomacy Unit; CCIA Report 2026; Climate Change Fund / carbon levy; NREB GHG-MS; Sustainability Blueprint 2030.

### Opened pages

| URL | Publication date | Visible claim | Decision |
| --- | --- | --- | --- |
| https://premier.sarawak.gov.my/web/attachment/show/?docid=SFhLM2J4c1Z4Ymxlb0pTOEVMYVlRUT09OjoH96R7oV1RindRYgYUin5k | 2026 Budget Speech | Paragraph 140: the centre “will be established” as the coordinating hub. RM7 million in paragraph 139 is for Net Zero Strategy, carbon-levy study, Energy Transition Policy implementation, and forest-carbon quantification — not a centre line | Accepted for still-future establishment. RM7 million rejected as SCCC value |
| https://dayakdaily.com/sarawak-climate-and-energy-diplomacy-unit-to-lead-all-regional-and-international-climate-energy-engagements/ | 3 Dec 2025 | Premier: the Climate Change Centre “will also be placed” under the new Diplomacy Unit as its technical arm | Accepted as planned organisational placement, not a launch |
| https://www.malaymail.com/news/malaysia/2024/05/15/sarawak-announces-regions-first-climate-change-centre-in-bid-to-spearhead-malaysias-response-to-crisis/134512 | 15 May 2024 | Study on establishing the centre had reached completion, “paving the way for its upcoming development” | Historical announcement. Still prospective |
| https://fulcrum.sg/envisioning-a-low-carbon-future-sarawaks-journey-towards-sustainable-development/ | 10 Feb 2025 lecture, published 2025 | Premier: “we are establishing the Sarawak Climate Change Centre” | Same prospective wording. PCDS framing is the wider lecture, not a locator that the centre already exists |
| 13MP strategy attachment | 13MP | NEW Game Changer: Establish Sarawak Climate Change Centre. Planned central entity under the Office of the Premier | Accepted for official_linked inclusion of the named future institution |

### Identity and PCDS

PCDS 2030: **yes**. Named 13MP Game Changer under a PCDS Phase 2 plan, and named again in the 2026 Budget Speech.

It is still not established on opened pages. Lead remains planned (Office of the Premier / Diplomacy Unit technical arm). No location, no SCCC-only budget, no operational milestone.

### Decision

- Trigger fired: **no**. The parked trigger was an official establishment announcement that identifies lead, location, budget, or an operational milestone.
- Recommended action: keep parked.
- Follow-up: **2026-12-31**, or sooner if the Premier’s Department, MEESTY, or NREB publishes a launch, address, director, or ring-fenced allocation for the centre itself.
- Search identities: `Sarawak Climate Change Centre`, `SCCC`, `Pusat Perubahan Iklim Sarawak`, `Climate and Energy Diplomacy Unit`.

## 5. Kuching Low-Carbon Hub

- Prior review: 28 July 2026 rejected as umbrella context for the new Kuching airport and Tanjung Embang deep-sea port.
- Aliases checked: KLCH; Kuching Low-Carbon Hub Economic Zone; Tanjung Embang integrated development.
- Collisions rejected: New Kuching International Airport card; Tanjung Embang Deep-Sea Port card; Sarawak Gas Roadmap’s four gas hubs as a substitute identity.

### Opened pages

| URL | Publication date | Visible claim | Decision |
| --- | --- | --- | --- |
| https://dayakdaily.com/tanjung-embangs-kuching-low-carbon-hub-positioned-as-future-low-carbon-industrial-trade-and-logistic-hub/ | 20 May 2026 | Premier DUN winding-up: KLCH at Tanjung Embang; CJI and Sumitomo partnerships; airport and deep-sea port as key masterplan parts; detailed masterplan being finalised; physical works expected 2027 via PPP | Accepted as updated umbrella context. Masterplan not published |
| https://www.petroleumsarawak.com/publications/2025/17-dec-2025-petros-and-sumitomo-corporation-advance-co-development-of-kuching-low-carbon-hub | 17 Dec 2025 | PETROS and Sumitomo advancing co-development; Sumitomo and CJI are May 2025 anchor partners; still moving from masterplanning toward project-level definition | Accepted for emerging PETROS lead role. Not a published masterplan or zone-wide delivery start |
| 13MP attachments | 13MP | Proposed Kuching Low-Carbon Hub Economic Zone, with the new airport and deep seaport as the gateway components | Accepted as official_linked zone naming |

NST and Tribune KLCH pages did not yield usable opened bodies. DayakDaily and PETROS are sufficient.

### Identity and PCDS

PCDS 2030: **yes**, as a named 13MP proposed economic zone. That does not make the zone itself a third live card beside the airport and port.

Governing body is emerging (PETROS with CJI and Sumitomo) but not gazetted. Boundaries remain “Tanjung Embang” without a published plan. Zone-wide infrastructure delivery is still a 2027 expectation.

Airport and port displayed fields were not updated. The 2027 works line is zone-wide PPP language, not a new airport- or port-specific achieved milestone.

### Decision

- Trigger fired: **no**, against the backlog trigger (confirmed designation, boundaries, governing body, published masterplan, or zone-wide infrastructure delivery).
- Recommended action: keep parked as umbrella context.
- Follow-up: **2027-03-01**, or sooner if PETROS or the State publishes the KLCH masterplan, gazettes the zone, or reports zone-wide works underway that are not already covered by the airport or port cards.
- Search identities: `Kuching Low-Carbon Hub`, `KLCH`, `Kuching Low-Carbon Hub Economic Zone`, `Tanjung Embang`, `PETROS`.

## 6. Baram Renewable Energy Economic Zone

- Prior review: 28 July 2026 rejected as umbrella context for the Baram Agrovoltaic Project.
- Aliases checked: Baram REEZ; Baram Special Energy Zone / SEZ; Green Energy Zone; Baram DeepTech Energy Programme.
- Collisions rejected: Baram Agrovoltaic Project (already a live component card); Long Bedian solar-hydrogen hybrid (separate federal proposal named on 13 May 2026); Bario agrivoltaics mention.

### Opened pages

| URL | Publication date | Visible claim | Decision |
| --- | --- | --- | --- |
| https://dayakdaily.com/deeptech-energy-programme-to-transform-baram-into-green-energy-and-economic-hub/ | 13 May 2026 | Dennis Ngau: Deeptech Energy programme anchors the Baram Renewable Energy Economic Zone at Temala, Long Lama / Telang Usan. Long Bedian hybrid named separately | Accepted as current zone-plus-component restatement. Opened page does not use the words PCDS 2030 |
| 13MP attachments | 13MP | Proposed Baram Renewable Energy Economic Zone among economic zones | Accepted for official zone naming |
| Prior UKAS agrovoltaic record (29 March 2026) | already on the live Baram Agrovoltaic card | Zone received state approval; RM6 billion agrovoltaic scope | Context only. Not re-opened here after timeout; no change to the live card |

### Identity and PCDS

PCDS 2030: **yes**, as a named 13MP proposed economic zone. The live Baram Agrovoltaic Project remains the approved `component` card.

May 2026 DUN reporting still points to one named delivery programme (DeepTech / agrovoltaic) inside the zone. No opened page publishes zone governance, a zone masterplan, an investment framework for the zone itself, or a second project that should become its own card. Long Bedian is a different, smaller federal hybrid proposal.

### Decision

- Trigger fired: **no**.
- Recommended action: keep parked as umbrella context. Do not change the Baram Agrovoltaic card from this scan.
- Follow-up: **2026-12-31**, or sooner if RECODA, UKAS, MEESTY, or Planet QEOS publishes zone governance, boundaries, a masterplan, or a second named project that is not the current agrovoltaic / DeepTech scope.
- Search identities: `Baram Renewable Energy Economic Zone`, `Baram Special Energy Zone`, `Baram DeepTech`, `Temala`, `Long Lama`.

## Inclusion-register updates from this review

`audit/project-inclusion.json` last-reviewed dates and evidence-gap wording for the two existing monitored records (FutureData and Sarawak High Performance Centre) are updated to 2026-09-01. No new active or monitored register rows are added for SAIC, SCCC, or the two zones. The zones remain umbrella context rather than deferred project identities. SAIC and SCCC remain named institutional monitors in the backlog until a capital-facility or establishment trigger appears.

## Checks

- No `src/trackerData.js`, `src/localization.js`, or `src/updateHistory.js` edit.
- `LAST_UPDATED` unchanged.
- Content/lint/preview-build gates are not required for this research-only documentation change; they should still be run if a later revision adds a card.
