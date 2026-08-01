// ─── DATA ───────────────────────────────────────────────────────────────────
export const LAST_UPDATED = "2026-08-01";

const PCDS_SUMMARY = {
  name: "PCDS 2030 — Overarching Framework",
  status: "Operational",
  statusColor: "#16a34a",
  lead: "Sarawak Government",
  value: "RM282 billion",
  summary:
    "Post COVID-19 Development Strategy 2030. Vision: a thriving society driven by data and innovation. Targets 8% annual GDP growth, RM15,000 median household income by 2030, 45% GHG intensity reduction, and 195,000 new jobs. Anchored on 6 Economic Sectors and 7 Enablers.",
  milestones: [
    { date: "Achieved", text: "Surpassed World Bank high-income threshold ahead of schedule", done: true },
    { date: "2030", text: "RM282B GDP goal", done: false },
    { date: "2030", text: "RM15,000 median monthly household income goal", done: false },
    { date: "2030", text: "195,000 new jobs goal", done: false },
  ],
  sources: [
    { label: "Business Events Sarawak — PCDS 2030", url: "https://businesseventssarawak.com/about-sarawak/pcds2030/" },
    { label: "DayakDaily — Sarawak retains high-income status (Jul 2026)", url: "https://dayakdaily.com/world-bank-sarawak-retains-high-income-state-status-with-gni-per-capita-of-rm70500-in-2025/" },
  ],
};

export const SECTORS = [

  // ─── ECONOMIC SECTORS (6) ──────────────────────────────────────────────────
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: "⚙",
    color: "#6366f1",
    projects: [
      {
        name: "SMD Semiconductor — GaN Chip Development",
        displayName: "Gallium Nitride (GaN) Chip Development",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "SMD Semiconductor (State-owned)",
        value: "Not disclosed",
        summary:
          "A state-owned semiconductor venture developing AI-enhanced gallium nitride (GaN) chips through its keteq.GaN and keteq.ai platforms. It aims to build Sarawak's semiconductor capability and support the state's technology sector.",
        milestones: [
          { date: "2026-Q1", text: "Premier announced GaN chip development success", done: true },
          { date: "TBD", text: "Global IP registration", done: false },
          { date: "TBD", text: "Commercialisation begins", done: false },
        ],
        sources: [
          { label: "DayakDaily — SMD Advanced Chip Integration Centre (Sep 2025)", url: "https://dayakdaily.com/sarawak-to-establish-smd-advanced-chip-integration-centre-to-power-semiconductor-leap/" },
          { label: "DayakDaily — keteq.GaN and AI converter unveiled (Oct 2025)", url: "https://dayakdaily.com/smd-semiconductor-unveils-keteq-gan-ai-convertor-in-london-cementing-sarawak-as-tech-leader/" },
          { label: "DayakDaily — Keteq AI chip secures global IP rights (Oct 2025)", url: "https://dayakdaily.com/sarawak-designed-keteq-ai-chip-set-to-secure-global-ip-rights-by-early-2026/" },
        ],
      },
    ],
  },
  {
    id: "agriculture",
    name: "Commercial Agriculture",
    icon: "⚘",
    color: "#b45309",
    projects: [
      {
        name: "RM1 Billion Paddy Infrastructure Programme",
        displayName: "Paddy Infrastructure Programme",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Government / Department of Agriculture",
        value: "RM1 billion",
        summary: "A statewide programme for paddy irrigation, drainage and farm roads, backed by a RM1 billion allocation. It is intended to strengthen rice production and support Sarawak's food security and rice self-sufficiency.",
        milestones: [
          { date: "2024-06", text: "RM1B allocation announced for paddy cultivation", done: true },
          { date: "2026", text: "Farmer clustering and paddy land leasing", done: false },
          { date: "2030", text: "Annual rice output reaches 500,000 tonnes", done: false },
        ],
        sources: [
          { label: "Office of the Premier / UKAS — Stumbin-Bijat paddy allocation (Sep 2025)", url: "https://premierdept.sarawak.gov.my/web/subpage/news_view/24582/UKAS" },
          { label: "DayakDaily — RM1B allocation (Jun 2024)", url: "https://dayakdaily.com/sarawak-allocates-rm1-bln-for-large-scale-paddy-cultivation-to-boost-rice-self-sufficiency/" },
          { label: "DayakDaily — Minister warns against misuse (Feb 2026)", url: "https://dayakdaily.com/rm1-bln-in-infra-at-stake-minister-warns-against-misuse-of-paddy-facilities-for-oil-palm/" },
          { label: "DayakDaily — 500K tonnes rice target (Aug 2025)", url: "https://dayakdaily.com/sarawak-ups-rice-output-target-to-500000-tonnes-by-2030-in-premiers-bold-food-security-push/" },
          { label: "DayakDaily — Overtake Kedah as rice bowl (Aug 2025)", url: "https://dayakdaily.com/sarawak-to-overtake-kedah-as-nations-rice-bowl-by-2030-eyes-global-export-future/" },
        ],
      },
      {
        name: "Sarawak Agrotechnology Park",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Government",
        value: "RM19.5 million",
        summary:
          "Technology-based agriculture sites at Semenggok and Tarat, including a coral-shrimp farm at SARTECH Tarat. Budget 2026 allocates RM19.5 million for further development of both sites to support agricultural innovation and commercialisation.",
        milestones: [
          { date: "2022", text: "Coral shrimp farm began operating at SARTECH Tarat", done: true },
          { date: "2022-11-22", text: "RM5M allocated to Semenggok and Tarat", done: true },
          { date: "2025-11-24", text: "RM19.5M development allocation announced", done: true },
          { date: "TBD", text: "Semenggok and Tarat site development reaches completion", done: false },
        ],
        sources: [
          { label: "M-FICORD - Operating agriculture at SARTECH Tarat (May 2024)", url: "https://mficord.sarawak.gov.my/web/subpage/news_view/1370" },
          { label: "Sarawak Tribune — Semenggok and Tarat SARTECH allocations (Nov 2022)", url: "https://www.sarawaktribune.com/state-government-vigorously-pursuing-smart-agriculture-initiative/" },
          { label: "DayakDaily — RM19.5M SARTECH allocation in Budget 2026 (Nov 2025)", url: "https://dayakdaily.com/sarawak-budget-2026-nearly-rm300-mil-allocated-to-modernise-agriculture-boost-food-security/" },
        ],
      },
      {
        name: "Sungai Baji Agropark",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Ministry of Food Industry, Commodity and Regional Development / LCDA",
        value: "RM180 million",
        summary:
          "A commercial-agriculture development in Sungai Baji, Sarikei. Planned state funding totals RM180 million, comprising RM29 million approved under RMK-12 and an estimated RM151 million for the remaining area, to support agricultural production and investment.",
        milestones: [
          { date: "2025-05-14", text: "LCDA appointed the anchor company", done: true },
          { date: "2025-10", text: "Infrastructure and agricultural components completed", done: true },
          { date: "TBD", text: "Agropark operations commence", done: false },
          { date: "TBD", text: "Commercial production begins", done: false },
        ],
        sources: [
          { label: "DID Sarawak — Sungai Baji infrastructure completion and operating timeline (Dec 2025)", url: "https://did.sarawak.gov.my/web/subpage/news_view/897" },
          { label: "TVS — Agropark and smart-farming progress update (Dec 2025)", url: "https://www.tvsarawak.my/2025/12/02/dun-sarawak-agropark-dan-pertanian-pintar-perkasa-tanaman-komersial-sarawak/" },
        ],
      },
    ],
  },
  {
    id: "tourism",
    name: "Tourism",
    icon: "⛰",
    color: "#ce1126",
    projects: [
      {
        name: "Sarawak Delta Geopark - UNESCO Global Geopark Designation",
        displayName: "Sarawak Delta UNESCO Global Geopark",
        status: "Designated",
        statusColor: "#16a34a",
        lead: "Sarawak Government / UNESCO",
        value: "Not disclosed",
        summary: "A 3,112 km² UNESCO Global Geopark across Kuching, Santubong and Bako, recognised for its geological significance. Known as Borneo's Cradle of Origin, it supports conservation, education and geotourism around Sarawak's natural heritage.",
        milestones: [
          { date: "2024-10", text: "Geopark nomination dossier prepared", done: true },
          { date: "2025-06", text: "UNESCO field evaluation completed", done: true },
          { date: "2025-09", text: "UNESCO Council acceptance secured", done: true },
          { date: "2026-04-27", text: "Recognised as a UNESCO Global Geopark", done: true },
        ],
        sources: [
          { label: "UNESCO — Sarawak Delta UNESCO Global Geopark", url: "https://www.unesco.org/en/iggp/sarawak-delta-unesco-global-geopark" },
          { label: "DayakDaily — UNESCO approval (Apr 2026)", url: "https://dayakdaily.com/sarawak-delta-geopark-gets-unesco-approval/" },
          { label: "DayakDaily — Borneo's Cradle of Origin (Apr 2026)", url: "https://dayakdaily.com/borneos-cradle-of-origin-puts-sarawak-delta-geopark-on-world-map-with-unesco-recognition/" },
        ],
      },
      {
        name: "The Archaeological Heritage of Niah National Park’s Caves Complex",
        displayName: "Niah Caves Archaeological Heritage Site",
        status: "Designated",
        statusColor: "#16a34a",
        lead: "Sarawak Forestry Corporation / Sarawak Museum Department",
        value: "Not disclosed",
        summary: "A UNESCO World Heritage property in Niah National Park centred on a caves complex that preserves at least 50,000 years of human interaction with rainforest environments. It safeguards evidence of a long human and environmental history in Sarawak.",
        milestones: [
          { date: "2019", text: "Nominated for UNESCO World Heritage listing", done: true },
          { date: "2024", text: "Inscribed as UNESCO World Heritage Site", done: true },
        ],
        sources: [
          { label: "UNESCO — Niah World Heritage listing", url: "https://whc.unesco.org/en/list/1014" },
        ],
      },
    ],
  },
  {
    id: "forestry",
    name: "Forestry",
    icon: "\ud83c\udf32",
    color: "#2d6a4f",
    projects: [
      {
        name: "Environment (Reduction of Greenhouse Gases Emission) Ordinance 2023",
        displayName: "Greenhouse Gas Emission Ordinance 2023",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Government",
        value: "Not applicable",
        summary:
          "A state ordinance for regulating and managing greenhouse gas emissions. It requires scheduled sectors to register and submit annual emissions reports supported by accredited external auditors, strengthening Sarawak's climate governance and emissions accountability.",
        milestones: [
          { date: "2023", text: "Ordinance enacted", done: true },
          { date: "2025", text: "Accredited external auditor rules established", done: true },
          { date: "2026-02-10", text: "GHG-MS Phase 1 commenced operations", done: true },
          { date: "Annual", text: "Scheduled sectors submit verified emissions reports", done: false },
        ],
        sources: [
          { label: "NREB — GHG-MS Phase 1 commenced operations (Feb 2026)", url: "https://www.nreb.gov.my/web/subpage/announcement_view/196" },
          { label: "Borneo Post — Climate governance implementation update (Mar 2026)", url: "https://www.theborneopost.com/2026/03/12/sarawak-intensifies-climate-governance-on-path-to-net-zero-2050/" },
          { label: "FULCRUM — Sarawak's low-carbon future", url: "https://fulcrum.sg/envisioning-a-low-carbon-future-sarawaks-journey-towards-sustainable-development/" },
        ],
      },
      {
        name: "Semenggoh Rainforest Discovery Centre",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Ministry of Urban Development and Natural Resources / Sarawak Forestry Corporation",
        value: "RM30 million",
        summary:
          "A three-stage ecotourism and biodiversity-research development in Semenggoh Nature Reserve, covering the Wildlife Centre entrance, visitor facilities, botanical gardens and research infrastructure. It has a RM30 million allocation to strengthen conservation, visitor access and research.",
        milestones: [
          { date: "2020-08-19", text: "Foundation ceremony and RM30M allocation announced", done: true },
          { date: "TBD", text: "Phase 1 Wildlife Centre Zone reaches completion", done: false },
          { date: "2030", text: "Phase 2 Entrance Zone reaches completion", done: false },
          { date: "2030", text: "Phase 3 Botanical Zone reaches completion", done: false },
        ],
        sources: [
          { label: "Borneo Post — Semenggoh RM30M upgrade and foundation laying (Aug 2020)", url: "https://www.theborneopost.com/2020/08/19/state-govt-pledges-rm30-mln-to-upgrade-semenggoh-wildlife-centre-provide-high-speed-internet/" },
        ],
      },
      {
        name: "Piasau Nature Reserve Discovery Centre",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Forestry Corporation / Sarawak Government",
        value: "RM30 million",
        summary:
          "A RM30 million marine ecotourism and conservation facility at Piasau Nature Reserve in Miri. It combines an interpretation centre and offices supporting the Miri-Sibuti Coral Reefs and Luconia Shoal national parks, connecting visitors with marine conservation.",
        milestones: [
          { date: "2025-08-05", text: "Discovery centre development commenced", done: true },
          { date: "2027-08", text: "Discovery centre reaches completion", done: false },
        ],
        sources: [
          { label: "Borneo Post — Piasau discovery centre RM30M development (Jan 2026)", url: "https://www.theborneopost.com/2026/01/30/piasau-nature-reserve-discovery-centre-to-become-marine-eco-tourism-hub-with-rm30-mln-boost/" },
        ],
      },
    ],
  },
  {
    id: "mining",
    name: "Mining",
    icon: "\u26cf",
    color: "#78716c",
    projects: [
      {
        name: "Bau Gold Project",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "Besra Gold Inc / North Borneo Gold Sdn Bhd",
        value: "RM1.38 billion",
        summary:
          "A gold exploration and development project in Bau led by Besra Gold through North Borneo Gold. PCDS 2030 Highlights 2023 projects RM1.38 billion in upstream investment, supporting Sarawak's mining and resource-development sector.",
        milestones: [
          { date: "2025-11-13", text: "Independent technical review completed", done: true },
          { date: "2026-02-25", text: "Jugan mining lease renewal conditionally approved", done: true },
          { date: "2026-05-13", text: "Conditional lease-renewal terms received", done: true },
          { date: "TBD", text: "Finalisation of mining lease conditions", done: false },
        ],
        sources: [
          { label: "DayakDaily - RM1.38B projected upstream investment (Nov 2024)", url: "https://dayakdaily.com/baus-3-3-mln-ounce-gold-find-ranks-sarawak-13th-in-asia-valued-at-rm24-3-bln/" },
          { label: "Besra Gold — Independent technical review (Nov 2025)", url: "https://www.besra.com/independent-technical-review-and-corporate-update/" },
          { label: "Besra Gold — Jugan mining lease renewal (Feb 2026)", url: "https://www.besra.com/renewal-of-ml-05-2012-1d-mining-lease-conditionally-approved/" },
          { label: "Besra Gold — Conditional renewal terms (May 2026)", url: "https://www.besra.com/conditional-renewal-terms-received-ml-05-2012-1d-jugan-project/" },
        ],
      },
    ],
  },
  {
    id: "social-services",
    name: "Social Services",
    icon: "\u271a",
    color: "#e11d48",
    projects: [
      {
        name: "Sarawak Cancer Centre",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "JKR / Sarawak Government",
        value: "RM1.52 billion",
        summary:
          "A planned specialist cancer centre in Kota Samarahan with a preliminary project estimate of RM1.52 billion. It is intended to expand access to dedicated cancer care in Sarawak.",
        milestones: [
          { date: "2025-12-03", text: "Preliminary RM1.52B cost estimate announced", done: true },
          { date: "2025-12-16", text: "Prime Minister directed expedited Q1 2026 tendering", done: true },
          { date: "2025-12-17", text: "Sarawak committed RM500M for medical equipment", done: true },
          { date: "2026-07-07", text: "Design-and-build procurement stage confirmed", done: true },
          { date: "2027-Q1", text: "Construction begins", done: false },
          { date: "2032", text: "Cancer centre reaches completion", done: false },
        ],
        sources: [
          { label: "DayakDaily — RM1.52B preliminary estimate (Dec 2025)", url: "https://dayakdaily.com/sarawak-cancer-centre-construction-to-start-by-2026-with-rm1-52-bln-preliminary-estimate-cost/" },
          { label: "DayakDaily — PM tells JKR to expedite (Dec 2025)", url: "https://dayakdaily.com/pm-tells-jkr-to-expedite-swak-cancer-centre-project-to-be-tendered-in-q1-2026-operational-before-2031/" },
          { label: "DayakDaily — RM500M medical equipment fronted (Dec 2025)", url: "https://dayakdaily.com/patients-cannot-wait-sarawak-fronts-rm500-mln-for-cancer-centre-medical-equipment/" },
          { label: "Sarawak Tribune — Tender stage (May 2026)", url: "https://www.sarawaktribune.com/sarawak-cancer-centre-enters-tender-stage/" },
          { label: "DayakDaily — Tender begins, 2032 completion target (Jul 2026)", url: "https://dayakdaily.com/sarawak-cancer-centre-targets-2032-completion-as-design-and-build-tender-process-begins/" },
        ],
      },
    ],
  },
  // ─── ENABLERS (7) ─────────────────────────────────────────────────────────
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    icon: "\u25c7",
    color: "#7c3aed",
    projects: [
      {
        name: "FutureData — Kuching Data Centre Park",
        displayName: "Kuching Data Centre Park",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "TSG Group / Global Telecommunications Group",
        value: "USD130 million",
        summary:
          "A planned 500MW data centre park in Kuching, with its first 17MW facility intended for Global Telecommunications Group. The first facility represents an investment above USD130 million and supports Sarawak's digital-economy and renewable-energy ambitions.",
        milestones: [
          { date: "2023-06", text: "FutureData Park announced", done: true },
          { date: "2024-10-09", text: "Global Telecommunications named first off-taker", done: true },
          { date: "TBD", text: "Construction of first 17MW facility begins", done: false },
          { date: "2026", text: "First 17MW data centre begins operations", done: false },
        ],
        sources: [
          { label: "TSG Group — First 17MW FutureData off-taker (Oct 2024)", url: "https://tsggroup.my/2024/10/09/sarawaks-futuredata-welcomes-1st-offtaker-a-17mw-data-center/" },
          { label: "InvestSarawak — FutureData first off-taker and schedule (Oct 2024)", url: "https://investsarawak.gov.my/global-telecommunications-first-off-taker-for-kuchings-futuredata-park/" },
          { label: "DCD — FutureData first off-taker (2025)", url: "https://www.datacenterdynamics.com/en/news/futuredata-announces-first-off-taker-at-500mw-malaysian-data-center-park-in-sarawak/" },
        ],
      },
    ],
  },
  {
    id: "innovation",
    name: "Innovation",
    icon: "\u25c8",
    color: "#0d9488",
    projects: [
      {
        name: "CHITOSE Carbon Capture Central Sarawak",
        status: "Operational",
        statusColor: "#16a34a",
        lead: "CHITOSE Group / Sarawak Energy / Sarawak Biodiversity Centre",
        value: "USD18.3 million",
        summary:
          "Industrial microalgae production and carbon capture facility at Sarawak Energy's Sejingkat coal-fired power plant. The five-hectare C4 Sarawak facility received over USD18.3 million in Japanese government funding and uses flue gas to cultivate microalgae for biomass and carbon capture.",
        milestones: [
          { date: "2020", text: "Microalgae carbon-capture project began", done: true },
          { date: "2023-03-20", text: "Five-hectare C4 facility construction completed", done: true },
          { date: "2023-03-20", text: "Industrial microalgae production began", done: true },
          { date: "2023-05-10", text: "Industrial microalgae facility officially launched", done: true },
        ],
        sources: [
          { label: "CHITOSE Group — C4 construction completed and production began (Mar 2023)", url: "https://chitose-bio.com/news/5155/" },
          { label: "Sarawak Energy — C4 Sarawak launch (May 2023)", url: "https://www.sarawakenergy.com/media-info/media-releases/2023/official-launching-of-sarawaks-first-industrial-microalgae-production-facility-chitose-carbon-capture-central-sarawak" },
          { label: "DayakDaily — Japanese funding for C4 Sarawak (Dec 2025)", url: "https://dayakdaily.com/the-algae-revolution-sarawaks-eco-innovative-climate-solution/" },
        ],
      },
      {
        name: "Sarawak Bioindustrial Park",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Biodiversity Centre / BioVerde Technologies",
        value: "RM10 million",
        summary:
          "A 100-acre, four-phase bioindustrial hub in Kota Samarahan for bio-commercialisation. Budget 2026 provides a joint RM10 million allocation for the park and the SBC Bioprocess Commercial Centre, supporting facilities for turning biodiversity research into commercial applications.",
        milestones: [
          { date: "2024-05-30", text: "Four-phase Bioindustrial Park development plan announced", done: true },
          { date: "2025", text: "BioVerde established with park management mandate", done: true },
          { date: "2025-11-24", text: "RM10M combined Budget 2026 allocation announced", done: true },
          { date: "2026-06-15", text: "Combined delivery-package tender awarded", done: true },
          { date: "TBD", text: "Anchor and research partner selection", done: false },
          { date: "TBD", text: "Phase 1 central hub and Bioprocess Commercial Centre reach completion", done: false },
          { date: "TBD", text: "Combined facilities begin operations", done: false },
        ],
        sources: [
          { label: "UKAS — Four-phase development plan and Phase 1 scope (May 2024)", url: "https://ukas.sarawak.gov.my/web/subpage/news_view/2352" },
          { label: "UKAS — Biopharma consultations for park development (Oct 2025)", url: "https://ukas.sarawak.gov.my/web/subpage/news_view/26099" },
          { label: "Office of the Premier — RM10M combined Budget 2026 allocation (Nov 2025)", url: "https://premier.sarawak.gov.my/web/subpage/news_view/5780" },
          { label: "SBC — Organisational grouping of both facilities (Feb 2026)", url: "https://sbc.org.my/index.php/about-sbc/organisation-chart" },
          { label: "JKR Sarawak — Combined delivery-package tender award (Jun 2026)", url: "https://jkr.sarawak.gov.my/web/subpage/webpage_view/403" },
          { label: "BioVerde — Sarawak Bioindustrial Park under development", url: "https://www.bioverde.com.my/sbp" },
          { label: "BioVerde — About BioVerde Technologies", url: "https://www.bioverde.com.my/about" },
        ],
      },
      {
        name: "Kota Petra Green Technology Park",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Zecon Berhad",
        value: "RM328 million",
        summary:
          "A 3,000-acre green-technology development near Demak Laut and Senari, combining solar generation, battery storage and AI-ready data centres. Phase 1 covers 300 acres and a 100MWac facility under a RM328 million EPCC contract, supporting Sarawak's digital and clean-energy infrastructure.",
        milestones: [
          { date: "2025-02", text: "300MW solar-generation licence obtained", done: true },
          { date: "2025-10", text: "30-year power purchase agreement signed", done: true },
          { date: "2026-05-16", text: "Phase 1 site preparation reached 150 cleared acres", done: true },
          { date: "2026-07-24", text: "RM328M Phase 1 EPCC contract awarded", done: true },
          { date: "2026-08", text: "Phase 1 site clearing completes", done: false },
          { date: "2027-12", text: "Commercial operations begin", done: false },
          { date: "2028-08", text: "Permanent Sungai Serai bridge reaches completion", done: false },
        ],
        sources: [
          { label: "Zecon - Kota Petra Green Technology Park", url: "https://zecon.com.my/project/kota-petra-green-technology-park/" },
          { label: "UKAS - Kota Petra Phase 1 progress (May 2026)", url: "https://ukas.sarawak.gov.my/web/subpage/news_view/41040" },
          { label: "The Star - RM328M Phase 1 EPCC contract (Jul 2026)", url: "https://www.thestar.com.my/business/business-news/2026/07/24/zecon-unit-secures-contract-for-sarawak-solar-project" },
        ],
      },
      {
        name: "PETRONAS Kasawari Carbon Capture and Storage Project",
        displayName: "Kasawari Carbon Capture and Storage Project",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "PETRONAS / MMHE",
        value: "RM4.5 billion",
        summary:
          "A Phase 2 carbon capture and storage development associated with PETRONAS' offshore Kasawari Field. A 2022 estimate placed the project at RM4.5 billion for a dedicated CCS platform and its connection to the Phase 1 central processing platform.",
        milestones: [
          { date: "2022-10-20", text: "Final investment decision approved", done: true },
          { date: "2022-11-03", text: "MMHE awarded Kasawari CCS EPCIC contract", done: true },
          { date: "2026-04-01", text: "PETRONAS announced earlier-injection schedule review", done: true },
          { date: "2027", text: "First CO2 injection", done: false },
        ],
        sources: [
          { label: "PETRONAS — Kasawari FID and EPCIC award dates (Nov 2022)", url: "https://www.petronas.com/media/media-releases/petronas-carigali-reaches-final-investment-decision-kasawari-ccs-project" },
          { label: "The Edge Malaysia - RM4.5B Kasawari CCS Phase 2 project (Dec 2022)", url: "https://theedgemalaysia.com/article/special-report-kasawari-ccs-project-marks-new-chapter-offshore-sector" },
          { label: "The Sun — MMHE awarded Kasawari CCS EPCIC contract (Nov 2022)", url: "https://thesun.my/news/m-sia-marine-and-heavy-engineering-unit-secures-kasawari-capture-storage-project-off-s-wak-dk10293145/" },
          { label: "The Star — PETRONAS explores 2027 first CO2 injection (Apr 2026)", url: "https://www.thestar.com.my/business/business-news/2026/04/01/petronas-seeks-to-bring-forward-first-co2-injection-at-kasawari-to-2027" },
        ],
      },
    ],
  },
  {
    id: "education",
    name: "Education & Human Capital",
    icon: "\u25c6",
    color: "#2563eb",
    projects: [
      {
        name: "Yayasan Sarawak International Secondary Schools Expansion",
        displayName: "Yayasan Sarawak International Schools Expansion",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Yayasan Sarawak / Sarawak Government",
        value: "RM120-135 million",
        summary:
          "A state-backed international secondary school expansion intended to improve access to international-syllabus education for rural and low-income students. Based on the 2022 estimate of RM40 million to RM45 million per school, the remaining three-school expansion has a derived estimate of RM120 million to RM135 million.",
        milestones: [
          { date: "2022-04-03", text: "Petra Jaya campus began operations", done: true },
          { date: "2025-09", text: "Three campuses completed statewide", done: true },
          { date: "2025-09", text: "Sibu campus opening date announced", done: true },
          { date: "2027-2028", text: "Remaining three campuses reach completion", done: false },
        ],
        sources: [
          { label: "YSISS — Official site", url: "https://ysiss.edu.my/" },
          { label: "YSISS — About YSISS", url: "https://ysiss.edu.my/about-ysiss/" },
          { label: "YSISS — Campus contacts", url: "https://ysiss.edu.my/contact-us/" },
          { label: "Rakan Sarawak - RM40-45M implementation estimate per school (Apr 2022)", url: "https://www.rakansarawak.com/know-more-about-the-sarawak-owned-international-schools/" },
          { label: "Borneo Post — YSISS Sibu first class (Sep 2025)", url: "https://www.theborneopost.com/2025/09/29/yayasan-sarawak-international-secondary-school-sibu-to-run-first-class-on-oct-1/" },
          { label: "Borneo Post — Six-school YSISS network (Sep 2025)", url: "https://www.theborneopost.com/2025/09/07/dr-annuar-ysiss-established-to-uplift-rural-low-income-students/" },
        ],
      },
    ],
  },
  {
    id: "infrastructure",
    name: "Basic Infrastructure",
    icon: "\u25a3",
    color: "#e07c3c",
    projects: [
      {
        name: "SCORE — Sarawak Corridor of Renewable Energy",
        displayName: "Sarawak Corridor of Renewable Energy (SCORE)",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "RECODA",
        value: "RM125 billion",
        summary:
          "An economic corridor linking the Samalaju, Tanjung Manis, Mukah, Baram and Tunoh growth nodes. With RM125 billion in cumulative investment, SCORE supports industrial development and rural and interior delivery through RECODA, URDA, HDA and NRDA.",
        milestones: [
          { date: "2025-05-10", text: "RM125B investment and 53,000 jobs reported", done: true },
          { date: "TBD", text: "Industrial park expansion and investor support", done: false },
          { date: "TBD", text: "Rural infrastructure delivery through URDA, HDA, and NRDA", done: false },
        ],
        sources: [
          { label: "DayakDaily — SCORE: RM125B investment, 53K jobs (May 2025)", url: "https://dayakdaily.com/score-fuels-sarawaks-economic-growth-with-rm125-bln-investment-53000-jobs-created/" },
          { label: "RECODA official site", url: "https://recoda.gov.my/" },
        ],
      },
      {
        name: "Pan Borneo Highway Sarawak Phase 1",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Federal Government / JKR",
        value: "RM16.5 billion",
        summary:
          "A 786 km dual-carriageway highway from Telok Melano to Miri, delivered through 11 work packages at a RM16.5 billion construction cost. It is intended to improve road connectivity across Sarawak and link communities, towns and economic centres.",
        milestones: [
          { date: "2016", text: "Phase 1 construction commenced", done: true },
          { date: "2023-12", text: "Phase 1 reached 98.6 percent completion", done: true },
          { date: "2025-10", text: "Ten work packages completed and opened", done: true },
          { date: "TBD", text: "Work Package 11 reaches completion", done: false },
        ],
        sources: [
          { label: "The Edge Malaysia — RM16.5B construction cost explained (Feb 2020)", url: "https://theedgemalaysia.com/article/rm165b-represents-only-sarawaks-pan-borneo-highway-construction-cost" },
          { label: "Sarawak Tribune — Phase 1 reaches 99.98% completion (Dec 2025)", url: "https://www.sarawaktribune.com/pan-borneo-highway-phase-1-in-sarawak-nears-full-completion/" },
        ],
      },
      {
        name: "Sarawak-Sabah Link Road",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Federal Government / JKR",
        value: "RM7.6 billion",
        summary:
          "A two-phase road link connecting Sarawak and Sabah without transit through Brunei. The RM7.6 billion value applies to Phase 2 only; together, the phases are intended to improve rural and interior connectivity.",
        milestones: [
          { date: "2021", text: "Phase 1 construction commenced", done: true },
          { date: "2025-09-11", text: "Phase 2 officially launched", done: true },
          { date: "2026-04", text: "Phase 1 reached 70.05 percent progress", done: true },
          { date: "2027", text: "Phase 1 reaches completion", done: false },
          { date: "2029", text: "Phase 2 reaches completion", done: false },
        ],
        sources: [
          { label: "The Star — SSLR Phase 2 launched (Sep 2025)", url: "https://www.thestar.com.my/news/nation/2025/09/12/anwar-launches-second-phase-of-sslr-project" },
          { label: "DayakDaily — SSLR Phase 1 and 2 progress (May 2026)", url: "https://dayakdaily.com/sarawaks-first-2-24km-highway-tunnel-in-sarawak-sabah-link-road-phase-2-to-cut-22-4km-route-to-7km/" },
        ],
      },
    ],
  },
  {
    id: "utilities",
    name: "Utilities",
    icon: "\u26a1",
    color: "#d4a017",
    projects: [
      {
        name: "Bintulu-Samalaju Gas Pipeline",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "PETROS / Sarawak Government",
        value: "RM1 billion",
        summary:
          "An approximately 70 km gas pipeline backed by a RM1 billion commitment to supply Samalaju Industrial Park and a Bintulu combined-cycle power station. It supports industrial energy demand and electricity generation in the Bintulu-Samalaju corridor.",
        milestones: [
          { date: "2024-11-04", text: "RM1B commitment and pipe manufacturing reported", done: true },
          { date: "2025-10", text: "Offshore pipeline section completed", done: true },
          { date: "2026-05-12", text: "Pipeline pre-commissioning activities notified", done: true },
          { date: "2027", text: "Progressive commercial operations begin", done: false },
        ],
        sources: [
          { label: "The Star — RM1bil gas pipeline plan (Nov 2024)", url: "https://www.thestar.com.my/business/business-news/2024/11/04/rm1bil-gas-pipeline-plan" },
          { label: "Bintulu Port Authority — Pipeline pre-commissioning notice (May 2026)", url: "https://www.bpa.gov.my/web/home/notice_view/0/439/" },
          { label: "Sarawak Tribune — Samalaju pipeline operations from 2027 (May 2026)", url: "https://www.sarawaktribune.com/samalaju-power-pipeline-ready-by-2027/" },
        ],
      },
      {
        name: "Sejingkat Battery Energy Storage System",
        status: "Operational",
        statusColor: "#16a34a",
        lead: "Sarawak Energy",
        value: "RM128 million",
        summary:
          "A 60MW/82MWh battery energy storage system at Sejingkat Power Plant in Kuching, housed in 22 containers. Sarawak Energy invested RM128 million in the facility to provide grid reserve, regulation and peak-demand support.",
        milestones: [
          { date: "2024-12", text: "60MW/82MWh system energised", done: true },
          { date: "2025-02-14", text: "Utility-scale BESS commissioning announced", done: true },
        ],
        sources: [
          { label: "Sarawak Energy — Sejingkat BESS commissioned (Feb 2025)", url: "https://www.sarawakenergy.com/media-info/media-releases/2025/sarawak-energy-strengthens-grid-resilience-with-battery-energy-storage-system" },
          { label: "Malay Mail — RM128M Sarawak Energy investment (Feb 2025)", url: "https://www.malaymail.com/news/malaysia/2025/02/15/sarawak-leads-green-energy-revolution-with-malaysias-first-utility-scale-battery-system/166714" },
        ],
      },
      {
        name: "Sarawak-Singapore Electricity Interconnection",
        displayName: "Sarawak-Singapore Electricity Interconnection",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Energy / Sembcorp Utilities",
        value: "Not disclosed",
        summary:
          "A proposed cross-border electricity link to export around 1GW of renewable power from Sarawak to Singapore. It is intended to support regional energy trade and connect Sarawak's renewable resources with Singapore's electricity market.",
        milestones: [
          { date: "2023-03-04", text: "Techno-commercial study was under way", done: true },
          { date: "2025-10-17", text: "Conditional approval obtained", done: true },
          { date: "TBD", text: "Project secures further regulatory approvals and licences", done: false },
          { date: "2035", text: "Electricity exports begin", done: false },
        ],
        sources: [
          { label: "Sarawak Energy — Techno-commercial study under way (Mar 2023)", url: "https://www.sarawakenergy.com/media-info/media-releases/2023/sarawak-moves-closer-to-regional-powerhouse-aspiration-through-hydropower-venture-in-indonesia" },
          { label: "Sarawak Energy — Conditional approval (Oct 2025)", url: "https://www.sarawakenergy.com/media-info/media-releases/2025/sarawak-singapore-interconnection-project-receives-conditional-approval-from-energy-market-authority-of-singapore-to-proceed-to-next-phase" },
        ],
      },
    ],
  },
  {
    id: "transport",
    name: "Transport",
    icon: "\u25c9",
    color: "#1d4ed8",
    projects: [
      {
        name: "Miri Port Kuala Baram Capital Dredging",
        displayName: "Kuala Baram Capital Dredging",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Miri Port Authority / Rimbun Prima-CCCC JV",
        value: "RM238 million",
        summary:
          "A dredging and training-bund project at Kuala Baram to deepen and stabilise the access channel to Miri Port. The RM238 million contract supports safer, more reliable maritime access for the port.",
        milestones: [
          { date: "2024-06-19", text: "RM238M dredging contract awarded", done: true },
          { date: "2026-04-25", text: "Physical progress reached about 55 percent", done: true },
          { date: "2026-10", text: "Dredging reaches completion", done: false },
        ],
        sources: [
          { label: "Dredging Today — Kuala Baram contract award (Jun 2024)", url: "https://www.dredgingtoday.com/2024/06/19/malaysian-chinese-jv-wins-miri-port-dredging-contract/" },
          { label: "Dredging Today — Miri Port progress update (Dec 2024)", url: "https://www.dredgingtoday.com/2024/12/09/miri-port-dredging-project-progressing-along-smoothly/" },
          { label: "MIPD — Kuala Baram works ahead of schedule (Nov 2025)", url: "https://mipd.sarawak.gov.my/web/subpage/news_view/508" },
          { label: "DayakDaily — Dredging reaches 55% progress (Apr 2026)", url: "https://dayakdaily.com/premier-miri-port-dredging-project-55-pct-complete-channel-extension-up-to-10km-under-study/" },
          { label: "Dredging Today — Dredging in full swing (May 2026)", url: "https://www.dredgingtoday.com/2026/05/08/dredging-work-on-kuala-baram-delta-access-channel-in-full-swing/" },
        ],
      },
      {
        name: "Sarawak River Aids to Navigation and Surveillance System",
        displayName: "Sarawak River Navigation and Surveillance System",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Rivers Board / Ministry of Transport Sarawak",
        value: "RM30 million",
        summary:
          "A navigation safety and monitoring system covering the Sarawak River and the related Miri River scope. The RM30 million value covers only the first-phase Vessel Traffic Management System at Senari on the Sarawak River, supporting safer river navigation.",
        milestones: [
          { date: "2023-04-27", text: "First-phase installation commenced", done: true },
          { date: "2025-10-31", text: "Sarawak River VTMS fully operational", done: true },
          { date: "2027-Q3", text: "Miri River system reaches completion", done: false },
        ],
        sources: [
          { label: "DayakDaily — RM30M Senari VTMS (Mar 2023)", url: "https://dayakdaily.com/rm30-mln-vessel-monitoring-system-for-senari-port-ready-by-may-rm56-9-mln-vehicle-yard-ahead-of-schedule/" },
          { label: "Borneo Post — Sarawak River VTMS fully operational (Dec 2025)", url: "https://www.theborneopost.com/2025/12/02/lee-sarawak-rivers-board-installs-65-new-navigation-aids-to-boost-safety/" },
        ],
      },
      {
        name: "KUTS — Kuching Urban Transportation System",
        displayName: "Kuching Urban Transportation System (KUTS)",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Metro Sdn Bhd",
        value: "RM6 billion",
        summary:
          "A hydrogen-powered Autonomous Rapid Transit public transport system for Kuching. Phase 1 covers the Blue, Red and Green lines and has a RM6 billion state allocation, intended to improve urban mobility and connectivity.",
        milestones: [
          { date: "2025-12", text: "RM58M hydrogen plant relocation contract awarded", done: true },
          { date: "2026-Q1", text: "First two ART units arrived in Kuching", done: true },
          { date: "2026-04", text: "Dedicated frequency spectrum secured for ART operations", done: true },
          { date: "2026-04-30", text: "Phase 1 reached 38.2 percent progress", done: true },
          { date: "2026-Q4", text: "ART pilot service begins", done: false },
          { date: "2026-Q4", text: "Rembus hydrogen plant relocation completes", done: false },
          { date: "2027", text: "ART commercial service begins", done: false },
          { date: "2030-Q3", text: "KUTS reaches overall project completion", done: false },
          { date: "TBD", text: "Hydrogen-powered feeder bus network enters service", done: false },
        ],
        sources: [
          { label: "DayakDaily — ART Q4 2026 operations", url: "https://dayakdaily.com/hydrogen-powered-art-to-begin-service-in-kuching-in-final-quarter-of-2026-premier/" },
          { label: "The Edge — KUTS hydrogen plant relocation", url: "https://theedgemalaysia.com/node/786079" },
          { label: "Sarawak Metro — KUTS official project page", url: "https://www.mysarawakmetro.com/what-we-do/kuching-urban-transportation-system" },
          { label: "Sarawak Tribune — ART pilot run target (Apr 2026)", url: "https://www.sarawaktribune.com/art-golden-trains-set-to-arrive-in-kuching-for-pilot-run-this-year/" },
          { label: "DayakDaily — Dedicated ART spectrum (Apr 2026)", url: "https://dayakdaily.com/sarawak-metro-first-in-msia-to-secure-dedicated-spectrum-for-art-operations/" },
          { label: "The Star — KUTS Q4 pilot and 2027 commercial operations (May 2026)", url: "https://www.thestar.com.my/news/nation/2026/05/18/kuching-urban-transportation-system-to-start-pilot-run-in-q4" },
          { label: "New Straits Times — RM6B KUTS allocation (May 2025)", url: "https://www.nst.com.my/news/nation/2025/05/1221758/rm6-billion-allocated-kuching-urban-transportation-system" },
        ],
      },
      {
        name: "Bintulu Port — State Control Handover",
        displayName: "Bintulu Port Handover to Sarawak",
        status: "Operational",
        statusColor: "#16a34a",
        lead: "Sarawak Government / Federal Government",
        value: "RM1.8 billion",
        summary:
          "The transfer of Bintulu Port to Sarawak control under MA63, with a RM1.8 billion valuation. The port is central to LNG exports and the SCORE corridor, supporting Sarawak's industrial and trade role.",
        milestones: [
          { date: "2025-01-01", text: "12-month extension agreement signed for transition", done: true },
          { date: "2026-02-04", text: "RM1.8B takeover agreed in principle", done: true },
          { date: "2026-02-06", text: "RM1.8B valuation confirmed after detailed negotiations", done: true },
          { date: "2026-06-21", text: "Tripartite and Completion Agreements signed", done: true },
          { date: "2026-06-21", text: "Bintulu Port handed over to Sarawak", done: true },
        ],
        sources: [
          { label: "DayakDaily — RM1.8B takeover agreed in principle (Feb 2026)", url: "https://dayakdaily.com/rm1-8-bln-bintulu-port-takeover-agreed-in-principle-as-handover-enters-final-stage/" },
          { label: "DayakDaily — RM1.8B valuation confirmed (Feb 2026)", url: "https://dayakdaily.com/rm1-8-bln-bintulu-port-valuation-not-arbitrary-reflects-true-asset-worth-after-detailed-negotiations/" },
          { label: "DayakDaily — Awaiting cabinet endorsement (May 2026)", url: "https://dayakdaily.com/rm1-8-bln-bintulu-port-handover-to-sarawak-awaits-federal-cabinet-endorsement/" },
          { label: "DayakDaily — Bintulu Port officially handed over to Sarawak (Jun 2026)", url: "https://dayakdaily.com/bintulu-port-officially-handed-over-to-sarawak-in-rm1-8-bil-deal/" },
        ],
      },
      {
        name: "New Kuching International Airport",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "Sarawak Government / Ministry of Transport Sarawak",
        value: "RM10 billion",
        summary:
          "A proposed regional aviation and logistics hub at Tanjung Embang. The project had an approximate RM10 billion estimate in 2025 and is intended to strengthen Sarawak's air connectivity, freight capacity and regional links.",
        milestones: [
          { date: "2025-05-21", text: "Feasibility-study consultants appointed", done: true },
          { date: "2026-05-18", text: "Site-verification and feasibility study completed", done: true },
          { date: "TBD", text: "Federal authorities approve Airport Development Request", done: false },
          { date: "TBD", text: "Physical construction of the airport begins", done: false },
        ],
        sources: [
          { label: "Ministry of Transport Sarawak - Feasibility-study consultants and cost review (May 2025)", url: "https://mot.sarawak.gov.my/web/subpage/news_view/688" },
          { label: "Sarawak Premier's Department - Approximate RM10B airport cost (Aug 2025)", url: "https://premierdept.sarawak.gov.my/web/subpage/news_view/23808" },
          { label: "Ministry of Transport Sarawak - Proposed new airport (Jan 2026)", url: "https://mot.sarawak.gov.my/web/subpage/news_view/813" },
          { label: "Ministry of Transport Sarawak - Feasibility study and approval phase (May 2026)", url: "https://mot.sarawak.gov.my/web/subpage/news_view/881" },
          { label: "Ministry of Transport Sarawak - Federal airport discussions (Jun 2026)", url: "https://mot.sarawak.gov.my/web/subpage/news_view/889" },
        ],
      },
      {
        name: "Tanjung Embang Deep-Sea Port",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "Sarawak Government / PETROS",
        value: "RM25-30 billion",
        summary:
          "A proposed marine and energy infrastructure project within the integrated Tanjung Embang development, with an estimated cost of RM25 billion to RM30 billion. It combines a deep-sea port and gas terminal intended to support maritime logistics, gas exports and regional trade.",
        milestones: [
          { date: "2025-04-20", text: "Port master-plan design reached its final stage", done: true },
          { date: "2025-05-28", text: "Technical and economic feasibility study was under way", done: true },
          { date: "2026-05-12", text: "Port and gas-terminal schedule announced", done: true },
          { date: "2032", text: "Port and gas-terminal operations begin", done: false },
        ],
        sources: [
          { label: "The Edge Malaysia - Estimated RM25-30 billion port cost (Nov 2024)", url: "https://theedgemalaysia.com/node/734490" },
          { label: "CIDB Malaysia - Tanjung Embang port estimate and scope (Jan 2025)", url: "https://www.cidb.gov.my/eng/sarawak-embarking-two-mega-projects-at-once/" },
          { label: "Sarawak Premier's Department - Port master-plan design in final stage (Apr 2025)", url: "https://premierdept.sarawak.gov.my/web/subpage/news_view/16589" },
          { label: "DayakDaily - Tanjung Embang feasibility study under way (May 2025)", url: "https://dayakdaily.com/feasibility-study-underway-for-tanjung-embang-deep-sea-port-project/" },
          { label: "DayakDaily - Port and gas terminal scheduled for 2032 operations (May 2026)", url: "https://dayakdaily.com/tanjung-embang-deep-sea-port-gas-terminal-set-for-2032-operations/" },
          { label: "UKAS - Integrated Tanjung Embang master plan (May 2026)", url: "https://ukas.sarawak.gov.my/web/subpage/news_view/41055" },
          { label: "The Star - Technology-led port development scope (Jul 2026)", url: "https://www.thestar.com.my/news/nation/2026/07/08/tanjung-embang-deep-sea-port-to-anchor-sarawak039s-transformation-beyond-2030" },
        ],
      },
    ],
  },
  {
    id: "renewable-energy",
    name: "Renewable Energy",
    icon: "\u267b",
    color: "#d97706",
    projects: [
      {
        name: "Baleh Hydroelectric Project",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Energy Berhad",
        value: "RM8 billion",
        summary:
          "A 1,285MW hydroelectric dam on the Baleh River in Kapit, developed by Sarawak Energy. A 2017 construction estimate placed the cost at about RM8 billion, including financing, to add renewable generation and strengthen the state grid.",
        milestones: [
          { date: "2020-09", text: "Diversion tunnel completed", done: true },
          { date: "2020-10", text: "River diversion began", done: true },
          { date: "2025-05", text: "Dam rockfill began", done: true },
          { date: "2027-09", text: "Reservoir impoundment begins", done: false },
          { date: "2029-09", text: "Reservoir reaches minimum operating level", done: false },
          { date: "2029-12", text: "First generating unit begins operation", done: false },
          { date: "2030-06", text: "Full power generation begins", done: false },
        ],
        sources: [
          { label: "Office of the Premier / UKAS — Impoundment from 2027 (Jun 2025)", url: "https://premierdept.sarawak.gov.my/web/subpage/news_view/19825/UKAS" },
          { label: "Sarawak Energy — Baleh HEP project page", url: "https://www.sarawakenergy.com/baleh-hep" },
          { label: "Sarawak Energy — Baleh HEP key milestones", url: "https://www.sarawakenergy.com/baleh-hep/baleh-hep-project-key-milestones" },
          { label: "Borneo Post - About RM8B construction cost (Aug 2017)", url: "https://www.theborneopost.com/2017/08/03/construction-of-baleh-hep-to-cost-rm8-bln-seb/" },
        ],
      },
      {
        name: "Mentarang Induk Hydroelectric Project",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "PT Kayan Hydropower Nusantara / Sarawak Energy-led consortium",
        value: "US$2.6 billion",
        summary:
          "A US$2.6 billion, 1,375MW hydropower project in North Kalimantan developed by PT Kayan Hydropower Nusantara, a joint venture involving Sarawak Energy, Adaro Energy Indonesia and Kayan Patria Pratama. It is intended to support regional power supply and cross-border energy development.",
        milestones: [
          { date: "2023-03-01", text: "Groundbreaking ceremony held", done: true },
          { date: "2023-10-31", text: "Early works reported underway", done: true },
          { date: "2029", text: "First power", done: false },
        ],
        sources: [
          { label: "Sarawak Energy — Mentarang Induk groundbreaking (Mar 2023)", url: "https://www.sarawakenergy.com/media-info/media-releases/2023/sarawak-moves-closer-to-regional-powerhouse-aspiration-through-hydropower-venture-in-indonesia" },
          { label: "Office of the Premier — Early works underway (Oct 2023)", url: "https://premier.sarawak.gov.my/web/subpage/news_view/5662" },
        ],
      },
      {
        name: "Green Hydrogen Economy — H2ornbill & H2biscus",
        displayName: "H2biscus and H2ornbill Hydrogen Projects",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "SEDC Energy",
        value: "USD4.2 billion",
        summary:
          "Two export-scale green hydrogen projects at the Sarawak H2 Hub in Bintulu. A 2024 strategic partnership package of USD4.2 billion covers H2biscus, H2ornbill, shared hub infrastructure and the Rembus Depot, with no project-level split, supporting Sarawak's hydrogen-export ambitions.",
        milestones: [
          { date: "2022-09", text: "H2biscus renewable power memorandum signed", done: true },
          { date: "2023-10", text: "H2ornbill joint development agreement signed", done: true },
          { date: "2023-11-23", text: "H2biscus front-end engineering design began", done: true },
          { date: "2024-05-22", text: "H2biscus joint development agreement signed", done: true },
          { date: "2025-06-09", text: "Both projects reached front-end engineering design", done: true },
          { date: "2026-05-27", text: "Original H2ornbill Japan-export concept suspended", done: true },
          { date: "2026-06-09", text: "Export project scopes entered recalibration", done: true },
          { date: "TBD", text: "Announcement of updated project plan and production timeline", done: false },
          { date: "TBD", text: "Final investment decisions for H2biscus and H2ornbill", done: false },
          { date: "TBD", text: "Construction of hydrogen facilities begins", done: false },
          { date: "TBD", text: "Commercial hydrogen production begins", done: false },
        ],
        sources: [
          { label: "Samsung E&A — H2biscus FEED project commenced (Nov 2023)", url: "https://www.samsungena.com/en/newsroom/news/view?idx=15543" },
          { label: "Borneo Post — H2ornbill joint development agreement (Dec 2023)", url: "https://www.theborneopost.com/2023/12/19/sedc-energy-sumitomo-and-eneos-fine-tuning-project-h2ornbill-details/" },
          { label: "The Edge Malaysia — US$4.2B hydrogen partnership package (Feb 2024)", url: "https://theedgemalaysia.com/node/702237" },
          { label: "MIDA — H2biscus joint development agreement (May 2024)", url: "https://www.mida.gov.my/mida-news/sarawaks-new-energy-hub-to-receive-rm2-16-trillion-investment-by-2050-says-abang-johari/" },
          { label: "MEESty — H2biscus and H2ornbill in FEED (Jun 2025)", url: "https://meesty.sarawak.gov.my/web/subpage/news_view/40" },
          { label: "DayakDaily — USD4.2B hydrogen partnership package (Dec 2025)", url: "https://dayakdaily.com/sarawak-is-open-for-business/" },
          { label: "Free Malaysia Today — Projects scaled down over weak demand (Apr 2026)", url: "https://www.freemalaysiatoday.com/category/nation/2026/04/08/sarawak-hydrogen-projects-scaled-down-over-weak-demand/" },
          { label: "Borneo Post - Original H2ornbill export concept suspended (May 2026)", url: "https://www.theborneopost.com/2026/05/27/sarawaks-hydrogen-initiative-scaled-down-on-funding-constraints/" },
          { label: "Borneo Post — Project scopes recalibrated (Jun 2026)", url: "https://www.theborneopost.com/2026/06/09/sarawak-recalibrates-h2biscus-and-h2ornbill-hydrogen-projects-amid-financial-constraints/" },
        ],
      },
      {
        name: "Batang Ai Floating Solar Farm",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Energy / China Power International Holdings / Trina Solar",
        value: "RM184 million",
        summary:
          "A RM184 million, 50MW hydro-solar hybrid floating farm on the Batang Ai HEP reservoir, developed by Sarawak Energy with China Power International Holdings and Trina Solar. It adds renewable electricity generation by combining floating solar with hydropower infrastructure.",
        milestones: [
          { date: "2023-06-20", text: "Construction officially began", done: true },
          { date: "2024-06-20", text: "Construction reached 35 percent completion", done: true },
          { date: "2024-12", text: "50MW floating solar facility commissioned", done: true },
          {
            date: "2026",
            text: "Floating solar capacity increases by 120MW",
            done: false,
          },
        ],
        sources: [
          { label: "Sarawak Energy — Floating solar commissioning target (Jun 2024)", url: "https://www.sarawakenergy.com/media-info/media-releases/2024/sarawak-energys-first-floating-solar-farm-on-track-for-commissioning-by-october-2024" },
          { label: "MEESty Sarawak — Batang Ai floating solar December launch target (Aug 2025)", url: "https://meesty.sarawak.gov.my/web/subpage/news_view/54" },
          { label: "The Star — Sarawak solar expansion and Batang Ai capacity (Oct 2025)", url: "https://www.thestar.com.my/news/nation/2025/10/06/sarawak-expands-solar-capacity-in-push-for-renewable-energy-says-abang-johari" },
          { label: "New Straits Times — RM184M Batang Ai investment (Dec 2025)", url: "https://www.nst.com.my/news/nation/2025/12/1344427/strategic-investments-boost-sarawaks-growth-pm" },
        ],
      },
      {
        name: "Baram Agrovoltaic Project",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "Not disclosed",
        value: "RM6 billion",
        summary:
          "A proposed integrated agrovoltaic development at Temala near Long Lama in the Baram Renewable Energy Economic Zone, estimated at RM6 billion. Its scope includes 1,500 hectares of modern agriculture, 500 hectares of paddy, a logistics hub, a 300MW power station and a supporting township.",
        milestones: [
          { date: "2026-03-29", text: "Project scope and estimate announced", done: true },
          { date: "TBD", text: "Agriculture and paddy components enter operation", done: false },
          { date: "TBD", text: "Logistics hub enters operation", done: false },
          { date: "TBD", text: "300MW power station enters operation", done: false },
          { date: "TBD", text: "Supporting township reaches completion", done: false },
        ],
        sources: [
          { label: "UKAS - Baram Agrovoltaic Project scope and estimate (Mar 2026)", url: "https://ukas.sarawak.gov.my/web/subpage/news_view/37208" },
        ],
      },
    ],
  },
// ─── OVERVIEW ────────────────────────────────────────────────────────────────
  {
    id: "overview",
    name: "PCDS 2030 Framework",
    icon: "◆",
    color: "#0d9488",
    isOverview: true,
    projects: [PCDS_SUMMARY],
  },
  ];

export const ECONOMIC_SECTOR_IDS = new Set([
  "manufacturing",
  "agriculture",
  "tourism",
  "forestry",
  "mining",
  "social-services",
]);

export const ENABLER_IDS = new Set([
  "digital-transformation",
  "innovation",
  "education",
  "infrastructure",
  "utilities",
  "transport",
  "renewable-energy",
]);

export const POPULATED_ECONOMIC = new Set(["manufacturing", "agriculture", "tourism", "forestry", "mining", "social-services"]);
export const POPULATED_ENABLERS = new Set(["digital-transformation", "innovation", "education", "infrastructure", "utilities", "transport", "renewable-energy"]);
