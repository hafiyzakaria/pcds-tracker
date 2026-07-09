// ─── DATA ───────────────────────────────────────────────────────────────────
export const LAST_UPDATED = "2026-07-02";

const PCDS_SUMMARY = {
  name: "PCDS 2030 — Overarching Framework",
  status: "Operational",
  statusColor: "#16a34a",
  lead: "Sarawak Government",
  value: "Target: RM282B GDP by 2030",
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
    { label: "Sarawak Government — PCDS 2030 strategy PDF", url: "https://sarawak.gov.my/media/attachments/PCDS_Compressed_22_July_2021.pdf" },
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
        status: "In Progress",
        statusColor: "#d97706",
        lead: "SMD Semiconductor (State-owned)",
        value: "—",
        summary:
          "Sarawak's state-owned semiconductor venture developing compound semiconductor chips based on Gallium Nitride (GaN), enhanced by AI. The keteq.GaN and keteq.ai platforms have been publicly unveiled, with global IP registration and commercialisation still the next visible proof points.",
        milestones: [
          { date: "2026-Q1", text: "Premier announces GaN chip development success", done: true },
          {
            date: "2026",
            text: "Global IP registration and commercialisation pathway",
            shortText: "Global IP registration and commercialisation",
            done: false,
          },
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
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Government / Department of Agriculture",
        value: "RM1 billion",
        summary: "Statewide paddy irrigation, drainage, and farm road programme to boost rice self-sufficiency. RM1B has been allocated, with implementation guardrails to keep infrastructure dedicated to paddy and support Sarawak's 500,000-tonne 2030 rice output target.",
        milestones: [
          { date: "2024-06", text: "RM1B allocation announced for large-scale paddy cultivation", done: true },
          { date: "2024-11", text: "DID restructured for agriculture/urban focus", done: true },
          { date: "2025-08", text: "500,000 tonnes rice output goal announced", done: true },
          { date: "2026-02", text: "Minister: RM1B infra must not be diverted to oil palm", done: true },
          {
            date: "2026",
            text: "Farmer clustering and paddy land-leasing implementation",
            shortText: "Farmer clustering and land leasing",
            done: false,
          },
          { date: "2030", text: "500,000 tonnes annual rice output goal", done: false },
        ],
        sources: [
          { label: "DayakDaily — RM1B allocation (Jun 2024)", url: "https://dayakdaily.com/sarawak-allocates-rm1-bln-for-large-scale-paddy-cultivation-to-boost-rice-self-sufficiency/" },
          { label: "DayakDaily — Minister warns against misuse (Feb 2026)", url: "https://dayakdaily.com/rm1-bln-in-infra-at-stake-minister-warns-against-misuse-of-paddy-facilities-for-oil-palm/" },
          { label: "DayakDaily — 500K tonnes rice target (Aug 2025)", url: "https://dayakdaily.com/sarawak-ups-rice-output-target-to-500000-tonnes-by-2030-in-premiers-bold-food-security-push/" },
          { label: "DayakDaily — Overtake Kedah as rice bowl (Aug 2025)", url: "https://dayakdaily.com/sarawak-to-overtake-kedah-as-nations-rice-bowl-by-2030-eyes-global-export-future/" },
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
        name: "Sarawak Delta Geopark",
        status: "Designated",
        statusColor: "#16a34a",
        lead: "Sarawak Government / UNESCO",
        value: "—",
        summary: "3,112 km\u00b2 geopark covering Kuching-Santubong-Bako region. Officially recognised as UNESCO Global Geopark on April 27, 2026 \u2014 Malaysia's 3rd after Langkawi and Kinabalu. Branded \u201cBorneo's Cradle of Origin\u201d for unique geological heritage.",
        milestones: [
          { date: "2024-10", text: "Geopark nomination dossier prepared", done: true },
          { date: "2025-06", text: "UNESCO field evaluation completed (Jun 23\u201326)", done: true },
          { date: "2025-09", text: "UNESCO Council acceptance secured", done: true },
          { date: "2026-04-27", text: "Officially recognised as UNESCO Global Geopark", done: true },
          {
            date: "Ongoing",
            text: "Tourism products and community-based geopark rollout",
            shortText: "Tourism and community geopark rollout",
            done: false,
          },
        ],
        sources: [
          { label: "DayakDaily — UNESCO approval (Apr 2026)", url: "https://dayakdaily.com/sarawak-delta-geopark-gets-unesco-approval/" },
          { label: "DayakDaily — Borneo's Cradle of Origin (Apr 2026)", url: "https://dayakdaily.com/borneos-cradle-of-origin-puts-sarawak-delta-geopark-on-world-map-with-unesco-recognition/" },
          { label: "DayakDaily — Heritage tourism boost (Apr 2026)", url: "https://dayakdaily.com/unesco-recognition-of-sarawak-delta-geopark-boosts-heritage-tourism-potential/" },
        ],
      },
      {
        name: "Niah National Park — UNESCO World Heritage",
        status: "Designated",
        statusColor: "#16a34a",
        lead: "Sarawak Forestry Corporation / UNESCO",
        value: "—",
        summary: "Niah Caves complex \u2014 one of SE Asia's most important archaeological sites, preserving at least 50,000 years of human interaction with rainforest environments. Inscribed as a UNESCO World Heritage Site in 2024. Premier heritage tourism draw.",
        milestones: [
          { date: "2019", text: "Nominated for UNESCO World Heritage listing", done: true },
          { date: "2024", text: "Inscribed as UNESCO World Heritage Site", done: true },
          {
            date: "Ongoing",
            text: "UNESCO site management, conservation, and visitor facilities",
            shortText: "Site management and visitor facilities",
            done: false,
          },
        ],
        sources: [
          { label: "UNESCO — Niah World Heritage listing", url: "https://whc.unesco.org/en/list/1014" },
          { label: "DayakDaily — Bako & Lambir after Niah inscription (Aug 2025)", url: "https://dayakdaily.com/sarawak-nominates-bako-bukit-lambir-as-asean-heritage-parks-to-elevate-global-conservation-status/" },
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
        name: "Greenhouse Gas Emission Ordinance 2023",
        status: "Enacted",
        statusColor: "#16a34a",
        lead: "Sarawak Government",
        value: "—",
        summary:
          "Mandates GHG emissions reporting and supports development of carbon markets in Sarawak. Part of the state's broader environmental governance framework alongside the Land (Carbon Storage) Rules 2022 for CCUS and the Natural Resources and Environment Bill 2024.",
        milestones: [
          { date: "2023", text: "Ordinance enacted", done: true },
          { date: "2024", text: "Natural Resources and Environment Bill introduced", done: true },
          {
            date: "Ongoing",
            text: "GHG reporting, carbon market, and sustainability reporting rollout",
            shortText: "GHG and carbon market rollout",
            done: false,
          },
        ],
        sources: [
          { label: "FULCRUM — Sarawak's low-carbon future", url: "https://fulcrum.sg/envisioning-a-low-carbon-future-sarawaks-journey-towards-sustainable-development/" },
        ],
      },
    ],
  },
  {
    id: "mining",
    name: "Mining",
    icon: "\u26cf",
    color: "#78716c",
    projects: [],
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
        value: "RM1.52 billion (RM500M equipment fronted)",
        summary:
          "Sarawak's first dedicated cancer centre in Kota Samarahan. PM directed JKR to expedite tendering in Q1 2026; Sarawak fronted RM500M for medical equipment. Newer public reporting says the project has entered tender procurement, with construction targeted to start in early 2027 and completion expected by 2032.",
        milestones: [
          { date: "2025-12-03", text: "RM1.52B preliminary cost estimate announced", done: true },
          { date: "2025-12-16", text: "PM: expedite project for Q1 2026 tender", done: true },
          { date: "2025-12-17", text: "Sarawak fronts RM500M for medical equipment", done: true },
          { date: "2026-02-26", text: "Construction gathering pace in Samarahan health metropolis", done: true },
          { date: "2026-05", text: "Tender procurement stage underway", done: false },
          { date: "2027-Q1", text: "Planned construction start", done: false },
          { date: "2032", text: "Expected completion", done: false },
        ],
        sources: [
          { label: "DayakDaily — RM1.52B preliminary estimate (Dec 2025)", url: "https://dayakdaily.com/sarawak-cancer-centre-construction-to-start-by-2026-with-rm1-52-bln-preliminary-estimate-cost/" },
          { label: "DayakDaily — PM tells JKR to expedite (Dec 2025)", url: "https://dayakdaily.com/pm-tells-jkr-to-expedite-swak-cancer-centre-project-to-be-tendered-in-q1-2026-operational-before-2031/" },
          { label: "DayakDaily — RM500M medical equipment fronted (Dec 2025)", url: "https://dayakdaily.com/patients-cannot-wait-sarawak-fronts-rm500-mln-for-cancer-centre-medical-equipment/" },
          { label: "DayakDaily — Arden City construction & Samarahan health hub (Feb 2026)", url: "https://dayakdaily.com/arden-city-construction-gathers-pace-amid-healthcare-education-boom-in-kota-samarahan/" },
          { label: "DayakDaily — RM40B healthcare boost in 13MP (Jul 2025)", url: "https://dayakdaily.com/sarawak-cancer-centre-among-5-key-projects-under-rm40-bln-healthcare-boost-in-13mp/" },
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
        status: "In Progress",
        statusColor: "#d97706",
        lead: "TSG Group / Global Telecommunications Group",
        value: "USD130 million (Phase 1)",
        summary:
          "500MW data centre park in Kuching. First facility: 17MW IT capacity for Global Telecommunications Group. Aligned with Sarawak Digital Economy Blueprint 2030. Sarawak's abundant hydropower makes it attractive for energy-intensive data centre operations, with first operations targeted in 2026.",
        milestones: [
          { date: "2025-Q2", text: "Construction began on first facility", done: true },
          { date: "2026", text: "First 17MW data centre operational", done: false },
        ],
        sources: [
          { label: "DCD — FutureData first off-taker (2025)", url: "https://www.datacenterdynamics.com/en/news/futuredata-announces-first-off-taker-at-500mw-malaysian-data-center-park-in-sarawak/" },
          { label: "The Edge — FutureData 135-acre park in Kuching (Aug 2025)", url: "https://theedgemalaysia.com/node/767538" },
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
        value: "450t CO2 / 300t biomass annually",
        summary:
          "Industrial microalgae production and carbon capture research facility at Sarawak Energy's Sejingkat coal-fired power plant. C4 Sarawak captures CO2 from flue gas for microalgae cultivation, with expected annual output of 450 tonnes of CO2 captured and 300 tonnes of dried biomass.",
        milestones: [
          { date: "2020", text: "C4 Sarawak microalgae carbon-capture project began", done: true },
          { date: "2023-05-10", text: "C4 Sarawak facility officially launched in Kuching", done: true },
          {
            date: "Ongoing",
            text: "Public reporting on actual annual CO2 capture, biomass output, or expansion decision",
            shortText: "Annual output or expansion update",
            done: false,
          },
        ],
        sources: [
          { label: "Sarawak Energy — C4 Sarawak launch (May 2023)", url: "https://www.sarawakenergy.com/media-info/media-releases/2023/official-launching-of-sarawaks-first-industrial-microalgae-production-facility-chitose-carbon-capture-central-sarawak" },
        ],
      },
      {
        name: "Sarawak Bioindustrial Park",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "Sarawak Biodiversity Centre / BioVerde Technologies",
        value: "100-acre bioindustrial hub",
        summary:
          "Bioindustry and commercialisation hub intended to turn Sarawak biodiversity research into scalable bio-based production. Official and public sources describe a 100-acre park with industrial plots, pilot bioprocessing, analytical laboratories, and GMP manufacturing; BioVerde describes the park as under development and says anchor and research partners are being selected.",
        milestones: [
          { date: "Official report", text: "Sarawak Bioindustrial Park listed as a PCDS 2030 bioindustry platform", done: true },
          { date: "2025", text: "BioVerde Technologies established with SBP operations mandate", done: true },
          {
            date: "2027-Q3",
            text: "Phase 1 construction completion from official report",
            shortText: "Phase 1 completion",
            done: false,
          },
          { date: "2035", text: "Full operations from official report", shortText: "Full operations", done: false },
        ],
        sources: [
          { label: "SBC — Sarawak Bioindustrial Park commercialisation", url: "https://www.sbc.org.my/index.php/commercialisation" },
          { label: "BioVerde — Sarawak Bioindustrial Park under development", url: "https://www.bioverde.com.my/sbp" },
          { label: "BioVerde — About BioVerde Technologies", url: "https://www.bioverde.com.my/about" },
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
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Yayasan Sarawak / Sarawak Government",
        value: "Six-school network",
        summary:
          "State-backed international secondary school network intended to expand access to international-syllabus education for low-income and rural students. Petra Jaya began operations in 2022, the official site lists Petra Jaya, Kuching 12th Mile, and Sibu campuses, and public reporting says three more schools are targeted for completion within two to three years.",
        milestones: [
          { date: "2022-04-03", text: "YSISS Petra Jaya began operation", done: true },
          { date: "2025-09", text: "Three YSISS schools reported built statewide", done: true },
          { date: "2025-10-01", text: "YSISS Sibu scheduled to run its first class", done: true },
          {
            date: "2027-2028",
            text: "Remaining three YSISS schools completed or opened",
            shortText: "Remaining three YSISS schools",
            done: false,
          },
        ],
        sources: [
          { label: "YSISS — Official site", url: "https://ysiss.edu.my/" },
          { label: "YSISS — About YSISS", url: "https://ysiss.edu.my/about-ysiss/" },
          { label: "YSISS — Campus contacts", url: "https://ysiss.edu.my/contact-us/" },
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
        status: "Operational",
        statusColor: "#16a34a",
        lead: "RECODA",
        value: "Multi-billion",
        summary:
          "Major economic corridor spanning Samalaju Industrial Park, Tanjung Manis, Mukah, Baram, and Tunoh growth nodes. SCORE has reported RM125B in investment and 53,000 jobs created. RECODA also oversees URDA, HDA, and NRDA for rural/interior development.",
        milestones: [
          { date: "2025-05-10", text: "SCORE reports RM125B investment and 53,000 jobs created", done: true },
          {
            date: "Ongoing",
            text: "Industrial park expansion and investor facilitation",
            shortText: "Industrial park expansion and investors",
            done: false,
          },
          { date: "Ongoing", text: "Rural infrastructure via URDA, HDA, NRDA", done: false },
        ],
        sources: [
          { label: "DayakDaily — SCORE: RM125B investment, 53K jobs (May 2025)", url: "https://dayakdaily.com/score-fuels-sarawaks-economic-growth-with-rm125-bln-investment-53000-jobs-created/" },
          { label: "RECODA official site", url: "https://recoda.gov.my/" },
        ],
      },
    ],
  },
  {
    id: "utilities",
    name: "Utilities",
    icon: "\u26a1",
    color: "#d4a017",
    projects: [],
  },
  {
    id: "transport",
    name: "Transport",
    icon: "\u25c9",
    color: "#1d4ed8",
    projects: [
      {
        name: "KUTS — Kuching Urban Transportation System",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Metro Sdn Bhd",
        value: "Multi-billion (phased)",
        summary:
          "Southeast Asia's first hydrogen-powered Autonomous Rapid Transit (ART) system. Phase 1 covers three lines: Blue Line (Rembus\u2013Hikmah Exchange), Red Line, and Green Line. ART vehicles run on dedicated trackless lanes using rubber tyres.",
        milestones: [
          { date: "2025-12", text: "RM58M contract awarded to Linde EOX for hydrogen plant relocation to Rembus Depot", done: true },
          { date: "2026-Q1", text: "First two ART units arrive in Kuching", done: true },
          { date: "2026-04", text: "Dedicated private frequency spectrum secured for ART operations", done: true },
          {
            date: "2026-Q4",
            text: "Blue Line pilot/revenue-service target and hydrogen plant relocation",
            shortText: "Blue Line service and hydrogen plant move",
            done: false,
          },
          { date: "TBD", text: "Feeder bus network (hydrogen-powered) rollout", done: false },
        ],
        sources: [
          { label: "DayakDaily — ART Q4 2026 operations", url: "https://dayakdaily.com/hydrogen-powered-art-to-begin-service-in-kuching-in-final-quarter-of-2026-premier/" },
          { label: "The Edge — KUTS hydrogen plant relocation", url: "https://theedgemalaysia.com/node/786079" },
          { label: "Sarawak Metro — KUTS official project page", url: "https://www.mysarawakmetro.com/what-we-do/kuching-urban-transportation-system" },
          { label: "Sarawak Tribune — ART pilot run target (Apr 2026)", url: "https://www.sarawaktribune.com/art-golden-trains-set-to-arrive-in-kuching-for-pilot-run-this-year/" },
          { label: "DayakDaily — Dedicated ART spectrum (Apr 2026)", url: "https://dayakdaily.com/sarawak-metro-first-in-msia-to-secure-dedicated-spectrum-for-art-operations/" },
        ],
      },
      {
        name: "Bintulu Port — State Control Handover",
        status: "Operational",
        statusColor: "#16a34a",
        lead: "Sarawak Government / Federal Government",
        value: "RM1.8 billion",
        summary:
          "Return of Bintulu Port to Sarawak state control from the federal government under MA63 devolution. Takeover valued at RM1.8B, agreed in principle Feb 2026, with Tripartite and Completion Agreements signed on Jun 21, 2026. Will serve as Sarawak's main port for LNG exports and SCORE corridor.",
        milestones: [
          { date: "2025-01-01", text: "12-month extension agreement signed for transition", done: true },
          { date: "2026-02-04", text: "RM1.8B takeover agreed in principle", done: true },
          { date: "2026-02-06", text: "RM1.8B valuation confirmed after detailed negotiations", done: true },
          {
            date: "2026-06-21",
            text: "Tripartite and Completion Agreements signed; Bintulu Port officially handed over to Sarawak",
            shortText: "Official handover to Sarawak",
            done: true,
          },
        ],
        sources: [
          { label: "DayakDaily — RM1.8B takeover agreed in principle (Feb 2026)", url: "https://dayakdaily.com/rm1-8-bln-bintulu-port-takeover-agreed-in-principle-as-handover-enters-final-stage/" },
          { label: "DayakDaily — RM1.8B valuation confirmed (Feb 2026)", url: "https://dayakdaily.com/rm1-8-bln-bintulu-port-valuation-not-arbitrary-reflects-true-asset-worth-after-detailed-negotiations/" },
          { label: "DayakDaily — Awaiting cabinet endorsement (May 2026)", url: "https://dayakdaily.com/rm1-8-bln-bintulu-port-handover-to-sarawak-awaits-federal-cabinet-endorsement/" },
          { label: "DayakDaily — Bintulu Port officially handed over to Sarawak (Jun 2026)", url: "https://dayakdaily.com/bintulu-port-officially-handed-over-to-sarawak-in-rm1-8-bil-deal/" },
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
        value: "~RM10 billion",
        summary:
          "1,285MW hydroelectric dam on the Baleh River in Kapit Division, led by Sarawak Energy. Public sources describe Baleh HEP as a concrete-faced rockfill dam, with construction completion targeted in 2026, operational generation targeted by 2028, and the 1,285MW capacity expected to contribute to Sarawak's 2030 large-scale hydropower outlook.",
        milestones: [
          {
            date: "2025-08",
            text: "Project scope: 1,285MW concrete-faced rockfill dam on the Baleh River",
            shortText: "1,285MW hydroelectric dam scope",
            done: true,
          },
          { date: "2026", text: "Construction completion target", shortText: "Construction completion", done: false },
          { date: "2028", text: "Operational generation target", shortText: "Operational generation", done: false },
          {
            date: "2030",
            text: "Contribution to Sarawak's 4,843MW large-scale hydropower capacity",
            shortText: "2030 hydropower capacity contribution",
            done: false,
          },
        ],
        sources: [
          { label: "DayakDaily — Green revolution supercharging Sarawak energy (Aug 2025)", url: "https://dayakdaily.com/green-revolution-supercharging-sarawaks-energy-prowess/" },
          { label: "DayakDaily — ASEAN grid & Baleh 1,285MW by 2030 (Jan 2026)", url: "https://dayakdaily.com/sarawak-urges-asean-to-study-european-union-nordic-models-to-realise-regional-power-grid-dream/" },
          { label: "RECODA — Annual Report page", url: "https://recoda.gov.my/annual-report/" },
        ],
      },
      {
        name: "Green Hydrogen Economy — H2ornbill & H2biscus",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "SEDC Energy / Gentari (Petronas)",
        value: "Multi-billion (USD)",
        summary:
          "Large-scale green hydrogen production in Bintulu. Sarawak H2 Hub (JV between SEDC Energy and Gentari) to be sole developer/operator. The Rembus hydrogen plant relocation supports KUTS fuel supply, while H2ornbill and H2biscus target commercial hydrogen and derivatives production from 2028.",
        milestones: [
          {
            date: "2026-Q4",
            text: "Hydrogen plant relocation and upgrading at Rembus",
            shortText: "Rembus hydrogen plant relocation",
            done: false,
          },
          {
            date: "2028",
            text: "H2ornbill and H2biscus commercial production",
            shortText: "H2ornbill and H2biscus production",
            done: false,
          },
          { date: "2028+", text: "Large-scale hydrogen derivatives and export", done: false },
        ],
        sources: [
          { label: "DayakDaily — H2ornbill & H2biscus hydrogen economy (Aug 2025)", url: "https://dayakdaily.com/sarawak-powers-ahead-in-hydrogen-economy/" },
          { label: "DayakDaily — Bintulu low-carbon industrial push (Jan 2026)", url: "https://dayakdaily.com/bintulu-set-to-anchor-msias-low-carbon-industrial-push-as-swak-integrates-hydrogen-ccus-and-carbon-pricing/" },
          { label: "FULCRUM — Sarawak's green hydrogen ambitions", url: "https://fulcrum.sg/sarawaks-green-hydrogen-ambitions-what-it-means-for-southeast-asia/" },
        ],
      },
      {
        name: "Batang Ai Floating Solar Farm",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Energy / China Power International Holdings / Trina Solar",
        value: "50MW; 170MW planned",
        summary:
          "Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Public sources describe a 50MW hydro-solar hybrid facility and later reporting points to a December operations or commissioning milestone, but the exact commissioning confirmation date needs review. Sarawak Energy is also reported to be planning an additional 120MW expansion at Batang Ai.",
        milestones: [
          { date: "2023-06-20", text: "Construction officially began", done: true },
          { date: "2024-06-20", text: "Sarawak Energy reported 35 percent construction completion", done: true },
          {
            date: "2025-12",
            text: "Reported operations or commissioning milestone",
            shortText: "Operations/commissioning milestone",
            done: true,
          },
          {
            date: "2026",
            text: "Additional 120MW Batang Ai floating solar expansion rollout",
            shortText: "120MW expansion rollout",
            done: false,
          },
          {
            date: "TBD",
            text: "Confirm commercial operation date or latest commissioning status",
            shortText: "Confirm operational status",
            done: false,
          },
        ],
        sources: [
          { label: "Sarawak Energy — Floating solar commissioning target (Jun 2024)", url: "https://www.sarawakenergy.com/media-info/media-releases/2024/sarawak-energys-first-floating-solar-farm-on-track-for-commissioning-by-october-2024" },
          { label: "MEESty Sarawak — Batang Ai floating solar December launch target (Aug 2025)", url: "https://meesty.sarawak.gov.my/web/subpage/news_view/54" },
          { label: "The Star — Sarawak solar expansion and Batang Ai capacity (Oct 2025)", url: "https://www.thestar.com.my/news/nation/2025/10/06/sarawak-expands-solar-capacity-in-push-for-renewable-energy-says-abang-johari" },
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

export const POPULATED_ECONOMIC = new Set(["manufacturing", "agriculture", "tourism", "forestry", "social-services"]);
export const POPULATED_ENABLERS = new Set(["digital-transformation", "infrastructure", "transport", "renewable-energy"]);
