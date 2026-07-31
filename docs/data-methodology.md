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
- `docs/source-pdfs/*.pdf`: local PCDS framework and report material, including the main Post COVID-19 Development Strategy PDF, PCDS 2030 final report volumes, AIP economic-sector and enabler volumes, Sarawak Government PCDS 2030 highlights, Facts & Figures 2025, Sarawak innovative initiatives material, and the Sarawak 13th Malaysia Plan 2026-2030 executive summary. These PDFs are not automatically parsed by the app.
- `README.md`, `docs/product.md`, `docs/design.md`, and `docs/backlog.md`: project memory and maintenance guidance.

## Current Data Fields

Global fields:

- `LAST_UPDATED`: one manually maintained ISO date string for the tracker data freshness indicator. Current value: `2026-07-30`.
- `SECTORS`: the main data array. It contains PCDS economic sectors, enablers, and a framework overview entry.
- `ECONOMIC_SECTOR_IDS`: set used by the UI to label rows as `Sector`.
- `ENABLER_IDS`: set listing the PCDS enabler category ids. It is exported but not currently imported by `src/App.jsx`.

Reported-value standard:

- `value` is reserved for the monetary figure only, using a compact display such as `RM1.38 billion`, `RM25-30 billion`, or `USD130 million`.
- Put the figure's meaning and qualifiers, such as estimated cost, allocation, investment, commitment, contract, phase, or source year, in the project summary and source label rather than the `value` field.
- Capacity, distance, site area, output, and network size belong in the summary or milestones, not the reported-value field.
- An older project-specific estimate may be retained when its source clearly attributes the amount and value type. Keep the displayed value amount-only, identify the estimate year and value type in the summary, check for a newer project-specific figure, and do not present the historical estimate as a current final cost.
- Use `Not disclosed` when no reliable public monetary figure is available.
- Use `Not applicable` only for non-capital policy or legislative entries where a project value is not meaningful.

AI-assisted discovery standard:

- Use Google AI Overviews, other search summaries, snippets, and semantic search results as discovery tools when available. They are not evidence and must not be cited as live-card sources.
- For every reviewed card, run separate searches for value, status, lifecycle milestones, and lead or party roles. Search exact names, aliases, locations, phases, delivery bodies, current-year terms, and likely official domains.
- Capture the links cited by an AI Overview or search summary, then open each underlying page and compare its visible wording with the generated claim before accepting it.
- Record when an AI-generated synthesis narrows, combines, converts, or otherwise changes the scope of the underlying source. Do not use generated currency conversions unless an accepted source publishes that conversion.
- Run a counter-search for newer completion, delay, suspension, cancellation, scope reduction, revised cost, ownership, or delivery evidence before accepting an older claim.

Card-scope and aggregation standard:

- Define the card's tracked unit before evaluating evidence: a single asset, phase or package, combined project card, shared enabling system, programme, designation, or policy implementation.
- Classify each candidate claim as project-only, combined-card, shared-infrastructure, umbrella-programme, statewide or portfolio aggregate, or economic-impact evidence.
- A combined or historical figure may be displayed when the card genuinely represents that combined scope, the source names the included components, and the summary explains the scope, date, value type, and absence of any project-level split.
- Do not assign a wider programme, adjacent project, statewide portfolio, economic-impact, capacity, distance, or land-area figure to a narrower card merely because the named project appears in the same article.
- When evidence spans a broader package than the current card, either keep the value undisclosed or explicitly revise and document the card scope. Never silently present a package aggregate as a standalone project cost.

Lead-and-party standard:

- Search and record roles separately: owner, lead developer, implementing agency, operator, contractor, investor or financier, regulator, technology provider, and development partner.
- The `lead` field should identify the owner, principal developer, implementing agency, or operator most responsible for delivery. Other evidenced roles may appear in the summary or sources.
- Do not promote a minister, announcing body, regulator, funder, contractor, or one-package partner to project lead unless the source explicitly assigns that responsibility.
- When sources use broad terms such as partner or stakeholder, preserve the narrower wording instead of inferring ownership, operation, or delivery control.

Public-source-link standard:

- Live project cards should link to official agency or project-owner pages, parliamentary or government releases, company disclosures, or reputable public news reports.
- PCDS strategy and report PDFs may confirm project inclusion, naming, scope, and historical context during research, but PDF-only claims should not be added to live project cards.
- Each public card claim should remain independently verifiable through a visible public webpage that identifies the exact project and directly supports the displayed field. PDF references may instead be recorded in methodology, audit, or research documentation.
- A live source may be a dedicated project page or a broader official speech, release, budget report, or reputable news article containing a clear, attributable project-specific claim. The article's main subject does not disqualify a source when the passage itself names the exact project and directly establishes a value, milestone, status, party, or timeline.
- A concise list item or passage can qualify when it contains a specific evidence-bearing fact such as an allocation, contract, date, achieved event, or stated target. Mere name-drops, comparisons, repeated context, inaccessible bodies, and passages that support no displayed field remain research context only.
- Source labels must describe the linked page and supported claim accurately. A label must not make a broader article appear to be a dedicated project report.
- Evaluate claims within a source independently. A page may support one displayed field while another claim, such as an older target schedule, has been superseded by newer official evidence.
- When an official project page presents milestone evidence only in a graphic or image asset, inspect the image directly and transcribe only clearly legible dates and outcomes. Record omitted minor stages in the audit document when the public card uses a shorter lifecycle.
- Not every qualifying mention needs to be retained. Prefer the smallest set of sources that collectively supports the displayed fields, but do not remove the only public evidence for a milestone merely because the article has a broader subject.
- If no public project-specific source can be found, keep the card explicitly provisional and avoid unsupported values, completion claims, or detailed schedules.
- `POPULATED_ECONOMIC` and `POPULATED_ENABLERS`: exported sets that identify categories with projects. They are not currently used by the dashboard UI.

Field-verification standard:

- Build a field-level evidence map for `status`, `summary`, `lead`, `value`, `milestones`, and `sources`; one page does not need to support every field.
- Verify milestones across the full public lifecycle: approval or agreement, study or design, procurement or contract, construction or implementation, commissioning, service or production commencement, and completion.
- Treat targeted, planned, expected, proposed, discussed, or scheduled events as open. Mark a milestone complete only when an accepted source states that the event happened.
- Derive status from the latest achieved lifecycle evidence and remaining delivery outcomes, not from an AI-generated status label or an isolated target date.
- When newer evidence supersedes an older cost, party, schedule, or scope, keep the older claim only as clearly labelled historical context.

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
- Company announcements and project pages: for example Zecon's Kota Petra Green Technology Park page and Sarawak Energy project announcements.
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

## Project Update Search and Verification

Use a search-first, source-verified workflow for recurring project reviews. Google Search and its AI Overview are useful discovery tools because they can surface aliases, recent reporting, and related official pages that an exact-name search misses. They are not evidence by themselves. Every dashboard claim must still be checked against the underlying public page.

### Search sequence

For each project:

1. Start with the exact public project name and current year, for example `"Project name" update 2026`.
2. If results are weak, repeat the search with:
   - the recognised acronym, alternate spelling, former name, or lead organisation;
   - the project name plus its current open milestone;
   - the project name plus terms such as `completed`, `commissioned`, `delayed`, `revised`, `cancelled`, or `financial close`;
   - an official-domain filter when a likely project owner or ministry is known.
3. Search passed or near-term milestones separately. A target date passing is a review trigger, not proof that the milestone was achieved.
4. Use AI Overview statements, search snippets, and news-result groupings only to identify candidate links. Open each candidate page before accepting it.

### Source-page checks

For every candidate page, confirm:

- the publication date shown for the article, announcement, or disclosure, rather than a website footer or page-modification date;
- the exact project identity, including location, phase, package, and delivery body;
- whether the source says an outcome was achieved, commenced, approved, targeted, expected, proposed, delayed, reduced, or merely discussed;
- whether the information is newer than the latest source already on the card;
- which fields are affected: `status`, `summary`, `lead`, `value`, `milestones`, or `sources`;
- whether a monetary figure is a contract award, allocation, estimate, investment, or total project cost.
- whether the visible passage names the exact project and directly supports a displayed field, even when the article's primary subject is broader;
- whether the source adds unique evidence or only repeats a field already supported more directly elsewhere.

Prefer a project owner, ministry, regulator, company disclosure, or other primary source. A reputable report may support an ordinary progress update. Require one strong primary source or two independent reputable reports before making a consequential status change.

### Review outcomes

Record one outcome for every project:

- `Update recommended`: a verified source materially changes or clarifies a displayed field.
- `Evidence enhancement`: the displayed claim remains correct, but a stronger public source should be added.
- `Monitor`: a milestone is approaching or has passed without public confirmation, or the available result is still only a target.
- `No card change`: no newer project-specific information was verified.
- `Conflict / manual review`: sources disagree, project identities are ambiguous, or the evidence is insufficient for a safe change.

For each audit, record the audit date, query variants, candidate and accepted URLs, source publication dates, affected fields, decision, and confidence. Also record false positives and name collisions so later reviews do not repeat them.

### Review cadence

- Run a lightweight search on a card when its next milestone date passes.
- Run a full dashboard sweep at least quarterly.
- Run an event-driven check after major budgets, legislative sittings, project-owner announcements, or reported status changes.
- Compare each sweep with the previous dated audit so unchanged cards do not need to be researched from scratch.

Latest full milestone review:
`docs/project-audits/2026-07-29-full-milestone-audit.md`.

## Milestone Writing Standard

- Use one canonical `text` value everywhere. Collapsed and expanded cards must not use different wording for the same milestone.
- Follow the format `Date: clear action or outcome`; the UI supplies the date from the milestone's `date` field.
- Keep the milestone to one clause, normally 6 to 12 words and about 70 characters or fewer after the date.
- Use sentence case without a terminal period.
- Do not repeat the project name when the card title already provides the context.
- Avoid `Target:` prefixes, slash-separated alternatives, vague `rollout` wording, and internal research tasks such as confirming a project's status.
- Write completed milestones with a definitive past-tense outcome, such as `Construction officially began` or `Contract awarded`.
- Write future milestones as concise, public-facing outcomes and keep `done: false` until completion is confirmed. Prefer a concrete subject followed by an observable outcome, such as `Logistics hub enters operation`, over internal task wording such as `Develop logistics hub` or repetitive abstract wording such as `Completion of logistics hub`. Use an operating, commissioning, or completion outcome only when that stage is supported by the available evidence. Do not add `planned` when the milestone date and open state already communicate that the outcome is prospective.
- Do not phrase an open milestone as though it has already happened. Avoid terminal past-participle wording such as `approval obtained`, `capacity added`, or `centre completed`. Use an active present-tense outcome such as `Federal authorities approve the request`, `capacity increases by 120MW`, or `centre reaches completion`. A pending event may use a concise noun phrase when that is clearer, such as `Announcement of updated project plan`.
- Distinguish construction completion, commissioning, operations commencement, and commercial operation. These terms describe different project stages and must not be used interchangeably.
- Keep completed milestones before the next open milestone in each project's array. The card's segmented progress indicator follows this order, so an open milestone placed before a completed milestone creates a misleading broken sequence.
- Keep supporting context, uncertainty, and attribution in the project summary and sources rather than lengthening the milestone statement.
- A non-completed capital project should continue to an evidence-supported delivery outcome such as construction completion, commissioning, service commencement, commercial operation, or first production. An intermediate announcement, approval, or design stage must not make the card appear fully complete. Do not invent missing lifecycle stages when public evidence does not identify them.
- `npm run check:content` enforces the structural portion of this standard: non-completed cards retain an open milestone, completed milestones cannot use `TBD`, open milestones cannot end in selected completed-event wording, reported values must be amount-only monetary figures or use the approved unknown-value labels, public sources cannot be PDF links, and English and BM milestone counts must match.

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
- [Office of the Premier / UKAS - Stumbin-Bijat paddy allocation (Sep 2025)](https://premierdept.sarawak.gov.my/web/subpage/news_view/24582/UKAS) - Publisher: Office of the Premier / UKAS; type: official government release; date: Sep 2025; directly supports the RM1 billion allocation and project scope.
- [DayakDaily - RM1B allocation (Jun 2024)](https://dayakdaily.com/sarawak-allocates-rm1-bln-for-large-scale-paddy-cultivation-to-boost-rice-self-sufficiency/) - Publisher: DayakDaily; type: news report; date: Jun 2024; appears to support allocation, value, and paddy infrastructure scope.
- [DayakDaily - Minister warns against misuse (Feb 2026)](https://dayakdaily.com/rm1-bln-in-infra-at-stake-minister-warns-against-misuse-of-paddy-facilities-for-oil-palm/) - Publisher: DayakDaily; type: news report; date: Feb 2026; appears to support implementation guardrails and paddy-only use.
- [DayakDaily - 500K tonnes rice target (Aug 2025)](https://dayakdaily.com/sarawak-ups-rice-output-target-to-500000-tonnes-by-2030-in-premiers-bold-food-security-push/) - Publisher: DayakDaily; type: news report; date: Aug 2025; appears to support the 2030 output target.
- [DayakDaily - Overtake Kedah as rice bowl (Aug 2025)](https://dayakdaily.com/sarawak-to-overtake-kedah-as-nations-rice-bowl-by-2030-eyes-global-export-future/) - Publisher: DayakDaily; type: news report; date: Aug 2025; appears to support broader rice-self-sufficiency/export framing.
- Gaps or uncertainty: the official allocation source does not confirm newer physical infrastructure progress; delivery remains weakly evidenced.

### Sarawak Delta Geopark - UNESCO Global Geopark Designation

- Current dashboard status: `Designated`
- Current next milestone: none; the designation milestones are complete
- Sources currently used:
- [DayakDaily - UNESCO approval (Apr 2026)](https://dayakdaily.com/sarawak-delta-geopark-gets-unesco-approval/) - Publisher: DayakDaily; type: news report; date: Apr 2026; appears to support UNESCO approval/designation.
- [DayakDaily - Borneo's Cradle of Origin (Apr 2026)](https://dayakdaily.com/borneos-cradle-of-origin-puts-sarawak-delta-geopark-on-world-map-with-unesco-recognition/) - Publisher: DayakDaily; type: news report; date: Apr 2026; appears to support branding and designation context.
- Gaps or uncertainty: no direct UNESCO page is encoded for the geopark. The card is scoped to the completed designation effort rather than open-ended tourism and community programmes.

### The Archaeological Heritage of Niah National Park’s Caves Complex

- Current dashboard status: `Designated`
- Current next milestone: none; UNESCO inscription is the tracked final outcome
- Sources currently used:
- [UNESCO - Niah World Heritage listing](https://whc.unesco.org/en/list/1014) - Publisher: UNESCO; type: official international body; date: not encoded in label; appears to support inscription/designation and heritage-site facts.
- Identity decision: the canonical name follows UNESCO's official listed-property title. The shorter public display name is `Niah Caves Archaeological Heritage Site`. UNESCO identifies Sarawak Forestry Corporation and the Sarawak Museum Department as the main responsible government institutions.

### Greenhouse Gas Emission Ordinance 2023

- Canonical legislation name: `Environment (Reduction of Greenhouse Gases Emission) Ordinance 2023`
- Current dashboard status: `In Progress`
- Current next milestone: scheduled sectors submit verified emissions reports annually
- Sources currently used:
- [NREB - GHG-MS Phase 1 commenced operations (Feb 2026)](https://www.nreb.gov.my/web/subpage/announcement_view/196) - Publisher: Natural Resources and Environment Board Sarawak; type: official regulator announcement; date: 10 Feb 2026; directly supports the Phase 1 commencement milestone and mandatory system use.
- [Borneo Post - Climate governance implementation update (Mar 2026)](https://www.theborneopost.com/2026/03/12/sarawak-intensifies-climate-governance-on-path-to-net-zero-2050/) - Publisher: Borneo Post; type: news report quoting NREB; date: 12 Mar 2026; supports annual reporting requirements, accredited external-auditor rules, and the integrated Greenhouse Gas Management System.
- [FULCRUM - Sarawak's low-carbon future](https://fulcrum.sg/envisioning-a-low-carbon-future-sarawaks-journey-towards-sustainable-development/) - Publisher: FULCRUM; type: policy analysis/public source; date: not encoded in active source label; appears to support the ordinance, carbon-market context, and low-carbon policy framing.
- Gaps or uncertainty: no official ordinance or gazette source is encoded in active dashboard data; future annual compliance remains an open recurring milestone.

### Sarawak Cancer Centre

- Current dashboard status: `In Progress`
- Current next milestone: Construction begins in Q1 2027
- Sources currently used:
- [DayakDaily - RM1.52B preliminary estimate (Dec 2025)](https://dayakdaily.com/sarawak-cancer-centre-construction-to-start-by-2026-with-rm1-52-bln-preliminary-estimate-cost/) - Publisher: DayakDaily; type: news report; date: Dec 2025; appears to support reported value and construction timeline.
- [DayakDaily - PM tells JKR to expedite (Dec 2025)](https://dayakdaily.com/pm-tells-jkr-to-expedite-swak-cancer-centre-project-to-be-tendered-in-q1-2026-operational-before-2031/) - Publisher: DayakDaily; type: news report; date: Dec 2025; appears to support lead/delivery agency, Q1 2026 tender direction, and before-2031 operational target.
- [DayakDaily - RM500M medical equipment fronted (Dec 2025)](https://dayakdaily.com/patients-cannot-wait-sarawak-fronts-rm500-mln-for-cancer-centre-medical-equipment/) - Publisher: DayakDaily; type: news report; date: Dec 2025; appears to support equipment funding/fronting claim.
- July 2026 update: DayakDaily reported that the project entered design-and-build procurement on 7 July 2026, with construction targeted for January 2027 and completion by 2032.
- Gaps or uncertainty: no official JKR tender award page or health ministry project page is encoded; the contractor award and construction start still need later confirmation.

### FutureData - Kuching Data Centre Park

- Current dashboard status: `In Progress`
- Current next milestone: First 17MW data centre expected to begin operations
- Sources currently used:
- [DCD - FutureData first off-taker (2025)](https://www.datacenterdynamics.com/en/news/futuredata-announces-first-off-taker-at-500mw-malaysian-data-center-park-in-sarawak/) - Publisher: Data Center Dynamics; type: industry media; date: 2025; appears to support off-taker, 500MW park, and 17MW facility context.
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
- Current next milestone: ART pilot service begins
- Sources currently used:
- [DayakDaily - ART Q4 2026 operations](https://dayakdaily.com/hydrogen-powered-art-to-begin-service-in-kuching-in-final-quarter-of-2026-premier/) - Publisher: DayakDaily; type: news report; date: not encoded in active label; appears to support Q4 2026 passenger-service target and ART system context.
- [The Edge - KUTS hydrogen plant relocation](https://theedgemalaysia.com/node/786079) - Publisher: The Edge Malaysia; type: business/news media; date: not encoded in active label; appears to support the hydrogen plant relocation contract/milestone.
- [The Star - KUTS Q4 pilot and 2027 commercial operations (May 2026)](https://www.thestar.com.my/news/nation/2026/05/18/kuching-urban-transportation-system-to-start-pilot-run-in-q4) - Publisher: The Star; type: news report; date: 18 May 2026; distinguishes Q4 2026 pilot operations from 2027 commercial operations and reports 38.2 percent Phase 1 progress.
- [Sarawak Metro - KUTS official project page](https://www.mysarawakmetro.com/what-we-do/kuching-urban-transportation-system) - Publisher: Sarawak Metro; type: official project page; date: not encoded in active label; supports project scope and delivery context.
- Gaps or uncertainty: the feeder bus rollout remains `TBD`, while full-network completion is tracked separately from the first pilot and commercial operations.

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
- Current next milestone: Reservoir impoundment begins
- Sources currently used:
- [Office of the Premier / UKAS - Impoundment from 2027 (Jun 2025)](https://premierdept.sarawak.gov.my/web/subpage/news_view/19825/UKAS) - Publisher: Office of the Premier / UKAS; type: official government release; date: 16 Jun 2025; supports the 2027 impoundment start and December 2029 completion and generation schedule.
- [Sarawak Energy - Baleh HEP project page](https://www.sarawakenergy.com/baleh-hep) - Publisher: Sarawak Energy; type: official project-owner page; date: not encoded in active label; supports the 1,285MW project scope and project context.
- [Sarawak Energy - Baleh HEP key milestones](https://www.sarawakenergy.com/baleh-hep/baleh-hep-project-key-milestones) - Publisher: Sarawak Energy; type: official project-owner milestone page; date: not encoded on the page. Its milestone graphic supports diversion-tunnel completion in September 2020, river diversion in October 2020, dam rockfill commencement in May 2025, reservoir impoundment in September 2027, minimum operating level in September 2029, first-unit generation in December 2029, and full generation in June 2030.
- [Borneo Post - About RM8B construction cost (Aug 2017)](https://www.theborneopost.com/2017/08/03/construction-of-baleh-hep-to-cost-rm8-bln-seb/) - Publisher: Borneo Post; type: reputable Sarawak news report; date: 3 Aug 2017. It quotes Sarawak Energy's group chief executive officer stating that the total construction cost was about RM8 billion, including financing.
- Value decision: `RM8 billion`. The source directly attributes this project-specific estimate to Sarawak Energy. The summary carries the 2017 date, estimate qualifier, and inclusion of financing so the amount is not presented as a current final cost. The earlier `~RM10 billion` display remains unsupported.
- Gaps or uncertainty: the dated future milestones remain targets. The card does not mark impoundment, minimum operating level, first-unit generation, or full generation complete without later confirmation.

### Green Hydrogen Economy - H2ornbill & H2biscus

- Current dashboard status: `Planning`
- Current next milestone: Announcement of updated project plan and production timeline
- Sources currently used:
- [Samsung E&A - H2biscus FEED project commenced (Nov 2023)](https://www.samsungena.com/en/newsroom/news/view?idx=15543) - Publisher: Samsung E&A; type: official company disclosure; date: 24 Nov 2023; supports the September 2022 renewable-power memorandum, the 23 November 2023 FEED commencement, the original design capacities, and the named H2biscus partners.
- [Borneo Post - H2ornbill joint development agreement (Dec 2023)](https://www.theborneopost.com/2023/12/19/sedc-energy-sumitomo-and-eneos-fine-tuning-project-h2ornbill-details/) - Publisher: Borneo Post; type: news report based on a project news release; date: 19 Dec 2023; supports the October 2023 joint development agreement, SEDC Energy, ENEOS and Sumitomo as parties, and the project's planned FEED stage.
- [The Edge Malaysia - US$4.2B hydrogen partnership package (Feb 2024)](https://theedgemalaysia.com/node/702237) - Publisher: The Edge Malaysia; type: news report; date: 26 Feb 2024; supports the combined partnership-package value and identifies H2biscus, H2ornbill, shared Sarawak Hydrogen Hub infrastructure, and the Rembus Depot within its scope.
- [MIDA - H2biscus joint development agreement (May 2024)](https://www.mida.gov.my/mida-news/sarawaks-new-energy-hub-to-receive-rm2-16-trillion-investment-by-2050-says-abang-johari/) - Publisher: Malaysian Investment Development Authority; type: official agency republication; date: 22 May 2024; supports the H2biscus joint development agreement and FEED context.
- [MEESty - H2biscus and H2ornbill in FEED (Jun 2025)](https://meesty.sarawak.gov.my/web/subpage/news_view/40) - Publisher: Ministry of Energy and Environmental Sustainability Sarawak; type: official ministry news page republishing a Borneo Post report; source-news date: 9 Jun 2025; supports both projects having reached FEED and the combined planned production scope at that time.
- [DayakDaily - USD4.2B hydrogen partnership package (Dec 2025)](https://dayakdaily.com/sarawak-is-open-for-business/) - Publisher: DayakDaily; type: Sarawak news feature; date: 6 Dec 2025; attributes the USD4.2 billion strategic-partnership value as of 21 Sep 2024 and states that the package encompasses H2ornbill, H2biscus, the Sarawak Hydrogen Hub, and the Rembus Depot.
- [Free Malaysia Today - Projects scaled down over weak demand (Apr 2026)](https://www.freemalaysiatoday.com/category/nation/2026/04/08/sarawak-hydrogen-projects-scaled-down-over-weak-demand/) - Publisher: Free Malaysia Today; type: news report; date: 8 Apr 2026; supports the reported downscaling and demand or offtake constraint.
- [Borneo Post - Original H2ornbill export concept suspended (May 2026)](https://www.theborneopost.com/2026/05/27/sarawaks-hydrogen-initiative-scaled-down-on-funding-constraints/) - Publisher: Borneo Post; type: news report quoting the SEDC Energy chairman; date: 27 May 2026; supports suspension of the original Japan-export concept while alternative hydrogen carriers are considered.
- [Borneo Post - Project scopes recalibrated (Jun 2026)](https://www.theborneopost.com/2026/06/09/sarawak-recalibrates-h2biscus-and-h2ornbill-hydrogen-projects-amid-financial-constraints/) - Publisher: Borneo Post; type: news report; date: 9 Jun 2026; supports the scope-recalibration milestone and immediate financial constraint.
- Value decision: `USD4.2 billion`. The amount is displayed as a historical combined strategic-partnership-package value covering H2biscus, H2ornbill, shared Sarawak Hydrogen Hub infrastructure, and the Rembus Depot, not as a project-level split or current final cost. The summary states that no revised investment value has been published following the 2026 capacity reductions and scope recalibration.
- Gaps or uncertainty: no updated project plan, investment value, or production timeline has been published. Former 2027, 2028, 2029, and 2030 delivery targets are historical planning references and are not retained after the 2026 recalibration. Final investment decisions, construction, and commercial production remain undated open outcomes because the earlier official project sequence identifies these delivery stages but newer evidence does not provide replacement dates.
- Editorial update-history decision: no new entry. The existing 9 June 2026 recalibration entry remains the latest material public development; the added milestones document earlier project stages.

### Provisional Additions Revalidated on 10 July 2026

- Pan Borneo Highway Sarawak Phase 1 - `In Progress`; value: RM16.5 billion construction cost; next milestone: Work Package 11 completion; sources: The Edge Malaysia and Sarawak Tribune.
- Sarawak-Sabah Link Road - `In Progress`; Phase 1 reached 70.05 percent and Phase 2 reached 10.55 percent in April 2026; next milestone: expected Phase 1 completion in 2027; sources: The Star and DayakDaily.
- Miri Port Kuala Baram Capital Dredging - `In Progress`; value: RM238 million contract; physical progress reached about 55 percent in April 2026; next milestone: dredging completion in October 2026; sources: MIPD, DayakDaily, and Dredging Today.
- Bau Gold Project - `Planning`; value: RM1.38 billion projected upstream investment in the PCDS 2030 Highlights 2023 report, corroborated by DayakDaily in November 2024. The separate RM24.3 billion in-ground gold value is a resource valuation and is excluded from the reported-value field. Besra completed an independent technical review and received conditional Jugan mining-lease renewal progress; next milestone: finalised mining lease conditions; sources: DayakDaily and Besra Gold company disclosures.
- Bintulu-Samalaju Gas Pipeline - `In Progress`; value: RM1 billion committed; offshore work was reported complete in October 2025 and pre-commissioning activity was publicly notified in May 2026; next milestone: progressive commercial operations expected from 2027; sources: The Star, Bintulu Port Authority, and Sarawak Tribune.
- Sarawak Agrotechnology Park - `In Progress`; value: RM19.5 million Budget 2026 allocation for further development of Semenggok and Tarat. Official M-FICORD reporting confirms that a coral-shrimp farm at SARTECH Tarat has operated since 2022, while wider development of both sites remains incomplete; next milestone: completion of Semenggok and Tarat site development; sources: M-FICORD, Sarawak Tribune, and DayakDaily. The DayakDaily budget article is broader than SARTECH but contains an exact project-specific allocation line.
- Sungai Baji Agropark - `In Progress`; value: `Not disclosed`. December 2025 reporting states that infrastructure and agricultural components were complete by October 2025 and that LCDA appointed an anchor company on 14 May 2025. Operations were expected in Q1 2026 and commercial production in Q3 2026, but neither milestone is marked complete without a confirming public update; sources: DID Sarawak and TVS. The PDF-only 127-hectare scope, RM180 million figure, unrelated UKAS page, passing Sarawak Tribune mention, and paywalled DayakDaily body are retained as research context rather than live-card evidence.
- Semenggoh Rainforest Discovery Centre - `In Progress`; value: RM30 million. The PCDS 2030 AIP Volume II Forestry initiative identifies three phases covering the Wildlife Centre, Entrance, and Botanical zones through 2030. Borneo Post reporting confirms the August 2020 foundation-laying ceremony, three-stage scope, and funding, but no newer public source confirms whether the June 2024 Phase 1 target was achieved; sources: PCDS 2030 AIP Volume II, pages 504-507, and Borneo Post.
- Piasau Nature Reserve Discovery Centre - `In Progress`; value: RM30 million. The AIP identifies it as the second site under the discovery-centre initiative. Newer reporting confirms development commenced on 5 August 2025, describes its marine eco-tourism and national-park management functions, and gives an early August 2027 completion schedule; sources: PCDS 2030 AIP Volume II, pages 504 and 508, and Borneo Post.
- PETRONAS Kasawari Carbon Capture and Storage Project - `In Progress`; MMHE holds the EPCIC contract and PETRONAS is examining a 2027 first-injection date; sources: The Sun and The Star.
- Sarawak River Aids to Navigation and Surveillance System - `In Progress` as an interim combined card; Sarawak River VTMS was reported fully operational in December 2025, while Miri River system completion remains scheduled for Q3 2027. The PCDS 2030 Highlights 2023 report identifies Sarawak River as the first project under a wider river-management initiative and describes similar systems for Miri River and Kuala Baram as later plans. The scopes should ultimately be separated, but the combined card remains `Ongoing` while the Miri milestone is open; source: Borneo Post and PCDS 2030 Highlights 2023, PDF page 121 (printed page 120).

### Sustainability Vision 2030 Energy Projects Added on 13 July 2026

- Sejingkat Battery Energy Storage System - `Operational`; 60MW/82MWh facility energised in December 2024 and publicly announced as commissioned in February 2025. Routine grid services and performance monitoring are operational activities rather than open delivery milestones, so the commissioned facility displays as `Completed`; source: Sarawak Energy.
- Mentarang Induk Hydroelectric Project - `In Progress`; US$2.6 billion, 1,375MW cross-border hydropower venture in North Kalimantan; groundbreaking and early works were reported in 2023, while current physical progress remains unclear; sources: Sarawak Energy, Office of the Premier, and PT Kayan Hydropower Nusantara.
- Sarawak-Singapore Electricity Interconnection - `In Progress`; Sarawak Energy confirmed that a techno-commercial study with Sembcorp and Singapore Power was under way in March 2023. Conditional approval was obtained in October 2025 for around 1GW of renewable power exports, with further regulatory approvals and licences still required; sources: Sarawak Energy.

### Sarawak 13th Malaysia Plan Projects Added on 28 July 2026

- New Kuching International Airport - `Planning`; proposed at Tanjung Embang. The site-verification and feasibility study was complete by May 2026, and state and federal transport officials were discussing the Airport Development Request. No federal approval or airport construction start has been confirmed, and the airport-only monetary value is not disclosed; sources: Ministry of Transport Sarawak. The broader KLCH master-plan page remains research context rather than a live airport-card source.
- Tanjung Embang Deep-Sea Port - `Planning`; separately tracked as the port and gas-terminal component of the integrated Tanjung Embang development. The Edge Malaysia reported an estimated RM25 billion to RM30 billion cost in November 2024, and CIDB Malaysia connected the same estimate to the Tanjung Embang port and gas-terminal scope in January 2025. An official April 2025 report placed the port master-plan design in its final stage, and project-specific May 2025 reporting confirmed that detailed technical and economic feasibility work was under way. The Sarawak Government and PETROS were identified as development partners, with operations scheduled for 2032. No final budget, procurement, or construction start has been confirmed; sources: The Edge Malaysia, CIDB Malaysia, Sarawak Premier's Department, DayakDaily, UKAS, and The Star.
- Baram Agrovoltaic Project - `Planning`; proposed RM6 billion integrated agriculture and 300MW power-development scope at Temala near Long Lama. The exact UKAS report does not identify an implementing party, contracts, delivery sequence, or schedule. The separate RM2.32 billion Baram DeepTech Energy Programme uses different capacity, land, partner, and investment descriptions, so its agreements and parties are not used as evidence for this card; source: UKAS.
- Kota Petra Green Technology Park - `In Progress`; 3,000-acre Zecon development near Demak Laut and Senari Port. Phase 1 site preparation was under way by May 2026, a RM328 million EPCC contract was awarded in July 2026, and commercial operations remain scheduled for December 2027; sources: Zecon, UKAS, and The Star.
- PDF research basis: `docs/source-pdfs/Final - Sarawak 13th Malaysia Plan 2026-2030_Executive Summary -13.01.2026.pdf`, especially pages 18 and 30. The PDF confirms strategic inclusion and naming; every live-card claim is also supported by a project-specific public webpage.
- Dated source and inclusion review: `docs/project-audits/2026-07-28-13mp-candidate-review.md`.
- Not added: the Kuching Low-Carbon Hub and Baram Renewable Energy Economic Zone remain umbrella-zone context; Sarawak AI Centre, Sarawak Climate Change Centre, and Sarawak High Performance Sports Centre remain monitored candidates pending firmer public implementation evidence.

### PCDS 2030 - Overarching Framework

- Current dashboard status: `Operational`
- Current next milestone: RM282B GDP goal
- Rendering note: this record is stored in `src/trackerData.js` under the `overview` category, but `src/App.jsx` excludes `isOverview` rows from the active project grid.
- Sources currently used:
- [Business Events Sarawak - PCDS 2030](https://businesseventssarawak.com/about-sarawak/pcds2030/) - Publisher: Business Events Sarawak; type: government-linked/official tourism-business portal; date: not encoded in label; appears to support PCDS targets and framework summary.
- [DayakDaily - Sarawak retains high-income status (Jul 2026)](https://dayakdaily.com/world-bank-sarawak-retains-high-income-state-status-with-gni-per-capita-of-rm70500-in-2025/) - Publisher: DayakDaily; type: news report; date: 7 Jul 2026; supports the completed high-income milestone and reports 2025 GNI per capita.
- Gaps or uncertainty: overview targets are long-range framework outcomes; no annual checkpoint methodology is encoded.

## Derived Metrics

The app derives display rows by flattening `SECTORS` into project rows and excluding the overview category:

- Active rendered projects: 34.
- Stored projects including overview: 35.
- PCDS economic sectors represented in data: 6.
- PCDS enablers represented in data: 7.
- Populated economic-sector ids: manufacturing, agriculture, tourism, forestry, mining, social-services.
- Populated enabler ids: digital-transformation, innovation, education, infrastructure, utilities, transport, renewable-energy.

Current active dashboard status counts from `src/trackerData.js`:

- `In Progress`: 23.
- `Awaiting Decision`: 0.
- `Planning`: 7.
- `Operational`: 3.
- `Designated`: 1.
- `Enacted`: 0.

The UI groups detailed statuses into public filter labels:

- `Awaiting Decision` and `In Progress` display as `Ongoing`.
- `Planning` displays as `Planning`.
- `Operational`, `Designated`, and `Enacted` display as `Completed`.

Current public display counts:

- Tracked projects: 34.
- Planning: 7.
- Ongoing: 23.
- Completed: 4.
- Milestones: 85 completed out of 134 active-project milestones.

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
- Reported values appear to be copied or normalized into compact display strings such as `RM1 billion`, `USD130 million (Phase 1)`, or `Multi-billion`.
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
