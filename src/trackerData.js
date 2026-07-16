// ─── DATA ───────────────────────────────────────────────────────────────────
export const LAST_UPDATED = "2026-07-16";

const PCDS_SUMMARY = {
  name: "PCDS 2030 — Overarching Framework",
  status: "Operational",
  statusColor: "#16a34a",
  lead: "Sarawak Government",
  value: "RM282 billion GDP target",
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
        displayName: "Gallium Nitride (GaN) Chip Development",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "SMD Semiconductor (State-owned)",
        value: "Not disclosed",
        summary:
          "Sarawak's state-owned semiconductor venture developing compound semiconductor chips based on Gallium Nitride (GaN), enhanced by AI. The keteq.GaN and keteq.ai platforms have been publicly unveiled, with global IP registration and commercialisation still the next visible proof points.",
        milestones: [
          { date: "2026-Q1", text: "Premier announced GaN chip development success", done: true },
          { date: "2026", text: "Global IP registration and commercialisation", done: false },
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
        summary: "Statewide paddy irrigation, drainage, and farm road programme to boost rice self-sufficiency. RM1B has been allocated, with implementation guardrails to keep infrastructure dedicated to paddy and support Sarawak's 500,000-tonne 2030 rice output target.",
        milestones: [
          { date: "2024-06", text: "RM1B allocation announced for large-scale paddy cultivation", done: true },
          { date: "2024-11", text: "DID restructured for agricultural and urban infrastructure", done: true },
          { date: "2025-08", text: "500,000-tonne annual rice output goal announced", done: true },
          { date: "2026-02", text: "Minister warned against diverting paddy infrastructure to oil palm", done: true },
          { date: "2026", text: "Farmer clustering and paddy land leasing", done: false },
          { date: "2030", text: "500,000-tonne annual rice output goal", done: false },
        ],
        sources: [
          { label: "DayakDaily — RM1B allocation (Jun 2024)", url: "https://dayakdaily.com/sarawak-allocates-rm1-bln-for-large-scale-paddy-cultivation-to-boost-rice-self-sufficiency/" },
          { label: "DayakDaily — Minister warns against misuse (Feb 2026)", url: "https://dayakdaily.com/rm1-bln-in-infra-at-stake-minister-warns-against-misuse-of-paddy-facilities-for-oil-palm/" },
          { label: "DayakDaily — 500K tonnes rice target (Aug 2025)", url: "https://dayakdaily.com/sarawak-ups-rice-output-target-to-500000-tonnes-by-2030-in-premiers-bold-food-security-push/" },
          { label: "DayakDaily — Overtake Kedah as rice bowl (Aug 2025)", url: "https://dayakdaily.com/sarawak-to-overtake-kedah-as-nations-rice-bowl-by-2030-eyes-global-export-future/" },
        ],
      },
      {
        name: "Sarawak Agrotechnology Park",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "Sarawak Government",
        value: "RM5 million reported allocations",
        summary:
          "Proposed Sarawak Agro-Technology Park sites at Semenggok and Tarat intended to attract technology-based agriculture firms. Public reporting in November 2022 identified RM1 million for Semenggok and RM4 million for Tarat, but no later site-development update has been published.",
        milestones: [
          { date: "2022-11-22", text: "Semenggok and Tarat allocations announced", done: true },
          { date: "TBD", text: "SARTECH site development", done: false },
        ],
        sources: [
          { label: "Sarawak Tribune — Semenggok and Tarat SARTECH allocations (Nov 2022)", url: "https://www.sarawaktribune.com/state-government-vigorously-pursuing-smart-agriculture-initiative/" },
        ],
      },
      {
        name: "Sungai Baji Agropark",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "Sarawak Government",
        value: "Not disclosed",
        summary:
          "Proposed agropark on a 127-hectare site at Sungai Baji, Sarikei. Public reporting in June 2023 said the Sarawak Government was considering the site's development model, including possible large-scale algae cultivation, but did not confirm an implementation decision or project value.",
        milestones: [
          { date: "2023-06-24", text: "127-hectare agropark site proposed", done: true },
          { date: "TBD", text: "Agropark development decision", done: false },
        ],
        sources: [
          { label: "DayakDaily — Proposed Sungai Baji agropark site (Jun 2023)", url: "https://dayakdaily.com/algae-farming-viable-option-for-proposed-sungai-baji-agro-park/" },
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
        summary: "3,112 km\u00b2 geopark covering Kuching-Santubong-Bako region. Officially recognised as UNESCO Global Geopark on April 27, 2026 \u2014 Malaysia's 3rd after Langkawi and Kinabalu. Branded \u201cBorneo's Cradle of Origin\u201d for unique geological heritage.",
        milestones: [
          { date: "2024-10", text: "Geopark nomination dossier prepared", done: true },
          { date: "2025-06", text: "UNESCO field evaluation completed", done: true },
          { date: "2025-09", text: "UNESCO Council acceptance secured", done: true },
          { date: "2026-04-27", text: "Recognised as a UNESCO Global Geopark", done: true },
        ],
        sources: [
          { label: "DayakDaily — UNESCO approval (Apr 2026)", url: "https://dayakdaily.com/sarawak-delta-geopark-gets-unesco-approval/" },
          { label: "DayakDaily — Borneo's Cradle of Origin (Apr 2026)", url: "https://dayakdaily.com/borneos-cradle-of-origin-puts-sarawak-delta-geopark-on-world-map-with-unesco-recognition/" },
        ],
      },
      {
        name: "Niah National Park — UNESCO World Heritage",
        displayName: "Niah National Park World Heritage Site",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Forestry Corporation / UNESCO",
        value: "Not disclosed",
        summary: "Niah Caves complex \u2014 one of SE Asia's most important archaeological sites, preserving at least 50,000 years of human interaction with rainforest environments. Inscribed as a UNESCO World Heritage Site in 2024. Premier heritage tourism draw.",
        milestones: [
          { date: "2019", text: "Nominated for UNESCO World Heritage listing", done: true },
          { date: "2024", text: "Inscribed as UNESCO World Heritage Site", done: true },
          { date: "Ongoing", text: "Site conservation and visitor facility improvements", done: false },
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
        name: "Environment (Reduction of Greenhouse Gases Emission) Ordinance 2023",
        displayName: "Greenhouse Gas Emission Ordinance 2023",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Government",
        value: "Not applicable",
        summary:
          "Provides the state framework for regulating and managing greenhouse gas emissions. NREB reported in March 2026 that scheduled economic sectors must register and submit annual carbon emissions reports, supported by accredited external auditors and an integrated Greenhouse Gas Management System.",
        milestones: [
          { date: "2023", text: "Ordinance enacted", done: true },
          { date: "2025", text: "Accredited external auditor rules established", done: true },
          { date: "2026-03-12", text: "Integrated Greenhouse Gas Management System reported in place", done: true },
          { date: "Annual", text: "Scheduled sectors submit verified emissions reports", done: false },
        ],
        sources: [
          { label: "Borneo Post — Climate governance implementation update (Mar 2026)", url: "https://www.theborneopost.com/2026/03/12/sarawak-intensifies-climate-governance-on-path-to-net-zero-2050/" },
          { label: "FULCRUM — Sarawak's low-carbon future", url: "https://fulcrum.sg/envisioning-a-low-carbon-future-sarawaks-journey-towards-sustainable-development/" },
        ],
      },
      {
        name: "Semenggoh and Piasau Discovery Centre Development",
        displayName: "Semenggoh and Piasau Discovery Centres",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "Sarawak Forestry Corporation / Sarawak Government",
        value: "Not disclosed",
        summary:
          "Potential visitor-infrastructure development at the existing Semenggoh and Piasau conservation sites. Current Sarawak Forestry pages confirm both destinations are open to visitors, but do not publish a consolidated project value, construction status, or development schedule for the discovery-centre programme.",
        milestones: [
          { date: "TBD", text: "Discovery-centre development programme", done: false },
        ],
        sources: [
          { label: "Sarawak Forestry — Semenggoh Nature Reserve", url: "https://sarawakforestry.com/semenggoh-nature-reserve/" },
          { label: "Sarawak Forestry — Piasau Nature Reserve", url: "https://sarawakforestry.com/parks-and-reserves/piasau-nature-reserve/" },
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
        value: "Not disclosed",
        summary:
          "Gold exploration and development project in Bau led by Besra Gold through North Borneo Gold. An independent review in November 2025 identified tenure and further technical studies as critical, while 2026 announcements record conditional progress on renewal of the Jugan mining lease. Commercial development timing remains unconfirmed.",
        milestones: [
          { date: "2025-11-13", text: "Independent technical review completed", done: true },
          { date: "2026-02-25", text: "Jugan mining lease renewal conditionally approved", done: true },
          { date: "2026-05-13", text: "Conditional lease-renewal terms received", done: true },
          { date: "TBD", text: "Finalised mining lease conditions", done: false },
        ],
        sources: [
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
        value: "RM1.52 billion (RM500M equipment fronted)",
        summary:
          "Sarawak's first dedicated cancer centre in Kota Samarahan. Sarawak fronted RM500M for medical equipment, and the project entered design-and-build procurement in July 2026. Construction is targeted to start in January 2027, with completion expected by 2032.",
        milestones: [
          { date: "2025-12-03", text: "Preliminary RM1.52B cost estimate announced", done: true },
          { date: "2025-12-16", text: "Prime Minister directed expedited Q1 2026 tendering", done: true },
          { date: "2025-12-17", text: "Sarawak committed RM500M for medical equipment", done: true },
          { date: "2026-07-07", text: "Design-and-build procurement stage confirmed", done: true },
          { date: "2027-Q1", text: "Construction begins", done: false },
          { date: "2032", text: "Project completion expected", done: false },
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
        displayName: "Kuching Data Centre Park",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "TSG Group / Global Telecommunications Group",
        value: "USD130 million (Phase 1)",
        summary:
          "500MW data centre park in Kuching. First facility: 17MW IT capacity for Global Telecommunications Group. Aligned with Sarawak Digital Economy Blueprint 2030. Sarawak's abundant hydropower makes it attractive for energy-intensive data centre operations, with first operations targeted in 2026.",
        milestones: [
          { date: "2025-Q2", text: "Construction began on first facility", done: true },
          { date: "2026", text: "First 17MW data centre expected to begin operations", done: false },
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
        value: "Not disclosed",
        summary:
          "Industrial microalgae production and carbon capture research facility at Sarawak Energy's Sejingkat coal-fired power plant. C4 Sarawak captures CO2 from flue gas for microalgae cultivation, with expected annual output of 450 tonnes of CO2 captured and 300 tonnes of dried biomass.",
        milestones: [
          { date: "2020", text: "Microalgae carbon-capture project began", done: true },
          { date: "2023-05-10", text: "Industrial microalgae facility officially launched", done: true },
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
        value: "Not disclosed",
        summary:
          "Bioindustry and commercialisation hub intended to turn Sarawak biodiversity research into scalable bio-based production. Official and public sources describe a 100-acre park with industrial plots, pilot bioprocessing, analytical laboratories, and GMP manufacturing; BioVerde describes the park as under development and says anchor and research partners are being selected.",
        milestones: [
          { date: "Official report", text: "Identified as a PCDS 2030 bioindustry platform", done: true },
          { date: "2025", text: "BioVerde established with park operations mandate", done: true },
          { date: "2027-Q3", text: "Phase 1 construction completion", done: false },
          { date: "2035", text: "Full park operations", done: false },
        ],
        sources: [
          { label: "SBC — Sarawak Bioindustrial Park commercialisation", url: "https://www.sbc.org.my/index.php/commercialisation" },
          { label: "BioVerde — Sarawak Bioindustrial Park under development", url: "https://www.bioverde.com.my/sbp" },
          { label: "BioVerde — About BioVerde Technologies", url: "https://www.bioverde.com.my/about" },
        ],
      },
      {
        name: "PETRONAS Kasawari Carbon Capture and Storage Project",
        displayName: "Kasawari Carbon Capture and Storage Project",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "PETRONAS / MMHE",
        value: "Not disclosed",
        summary:
          "Offshore carbon capture and storage project associated with PETRONAS' Kasawari Field. MMHE received the EPCIC contract in November 2022 for the capture platform and related infrastructure. PETRONAS said in April 2026 that it was examining whether first CO2 injection could be brought forward to 2027.",
        milestones: [
          { date: "2022-11-29", text: "MMHE awarded Kasawari CCS EPCIC contract", done: true },
          { date: "2026-04-01", text: "Earlier CO2 injection plan announced", done: true },
          { date: "2027", text: "First CO2 injection", done: false },
        ],
        sources: [
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
        value: "Not disclosed",
        summary:
          "State-backed international secondary school network intended to expand access to international-syllabus education for low-income and rural students. Petra Jaya began operations in 2022, the official site lists Petra Jaya, Kuching 12th Mile, and Sibu campuses, and public reporting says three more schools are targeted for completion within two to three years.",
        milestones: [
          { date: "2022-04-03", text: "Petra Jaya campus began operations", done: true },
          { date: "2025-09", text: "Three campuses completed statewide", done: true },
          { date: "2025-09", text: "Sibu campus opening date announced", done: true },
          { date: "2027-2028", text: "Remaining three campuses completed", done: false },
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
        displayName: "Sarawak Corridor of Renewable Energy (SCORE)",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "RECODA",
        value: "RM125 billion reported investment",
        summary:
          "Major economic corridor spanning Samalaju Industrial Park, Tanjung Manis, Mukah, Baram, and Tunoh growth nodes. SCORE has reported RM125B in investment and 53,000 jobs created. RECODA also oversees URDA, HDA, and NRDA for rural/interior development.",
        milestones: [
          { date: "2025-05-10", text: "RM125B investment and 53,000 jobs reported", done: true },
          { date: "Ongoing", text: "Industrial park expansion and investor support", done: false },
          { date: "Ongoing", text: "Rural infrastructure delivery through URDA, HDA, and NRDA", done: false },
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
        value: "RM16.5 billion construction cost",
        summary:
          "A 786 km dual-carriageway upgrade from Telok Melano to Miri delivered through 11 work packages. The Works Minister reported 99.98 percent progress in October 2025, with ten packages completed and opened in stages. Work Package 11 in Miri remained unfinished because LAKU water pipes had to be replaced before road works could proceed.",
        milestones: [
          { date: "2016", text: "Phase 1 construction commenced", done: true },
          { date: "2023-12", text: "Phase 1 reached 98.6 percent completion", done: true },
          { date: "2025-10", text: "Ten work packages completed and opened", done: true },
          { date: "TBD", text: "Work Package 11 completion", done: false },
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
        value: "RM7.6 billion (Phase 2)",
        summary:
          "Interior road link connecting northern Sarawak and Sabah without transit through Brunei. Phase 1 from Lawas to Long Luping reached 70.05 percent physical progress in April 2026 and is expected to complete in 2027. Phase 2 was launched in September 2025, reached 10.55 percent progress by April 2026, and is scheduled to complete in 2029.",
        milestones: [
          { date: "2021", text: "Phase 1 construction commenced", done: true },
          { date: "2025-09-11", text: "Phase 2 officially launched", done: true },
          { date: "2026-04", text: "Phase 1 reached 70.05 percent progress", done: true },
          { date: "2027", text: "Expected Phase 1 completion", done: false },
          { date: "2029", text: "Phase 2 completion scheduled", done: false },
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
        value: "RM1 billion committed",
        summary:
          "Approximately 70 km gas pipeline intended to supply Samalaju Industrial Park and a Bintulu combined-cycle power station. The offshore section was reported completed in October 2025, and Bintulu Port Authority published a notice for pipeline pre-commissioning activities in May 2026. Progressive commercial operations are now expected from 2027.",
        milestones: [
          { date: "2023", text: "Sarawak Gas Roadmap pipeline component documented", done: true },
          { date: "2024-11-04", text: "RM1B commitment and pipe manufacturing reported", done: true },
          { date: "2025-10", text: "Offshore pipeline section completed", done: true },
          { date: "2026-05-12", text: "Pipeline pre-commissioning activities notified", done: true },
          { date: "2027", text: "Progressive commercial operations expected to begin", done: false },
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
        value: "Not disclosed",
        summary:
          "Malaysia's first utility-scale battery energy storage system, located at Sejingkat Power Plant in Kuching. The 60MW/82MWh facility was energised in December 2024 and provides spinning reserve, voltage and frequency regulation, and peak-demand management for Sarawak's power grid.",
        milestones: [
          { date: "2024-12", text: "60MW/82MWh system energised", done: true },
          { date: "2025-02-14", text: "Utility-scale BESS commissioning announced", done: true },
        ],
        sources: [
          { label: "Sarawak Energy — Sejingkat BESS commissioned (Feb 2025)", url: "https://www.sarawakenergy.com/media-info/media-releases/2025/sarawak-energy-strengthens-grid-resilience-with-battery-energy-storage-system" },
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
          "Proposed cross-border interconnection to export around 1GW of renewable electricity from Sarawak to Singapore. Singapore's Energy Market Authority granted conditional approval in October 2025, allowing the project to proceed toward further regulatory approvals and licences, with electricity flow expected around 2035 or earlier.",
        milestones: [
          { date: "2023", text: "Techno-commercial study commenced", done: true },
          { date: "2025-10-17", text: "Conditional approval obtained", done: true },
          { date: "TBD", text: "Further regulatory approvals and licences", done: false },
          { date: "2035", text: "Electricity flow expected", done: false },
        ],
        sources: [
          { label: "Sarawak Energy — Interconnection study (Mar 2023)", url: "https://www.sarawakenergy.com/media-info/media-releases/2023/sarawak-moves-closer-to-regional-powerhouse-aspiration-through-hydropower-venture-in-indonesia" },
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
        value: "RM238 million contract",
        summary:
          "Kuala Baram Delta dredging and training-bund project to deepen and stabilise the access channel to Miri Port. A RM238 million contract was awarded to the Rimbun Prima-CCCC joint venture in June 2024. Miri Port Authority reported work in full swing in May 2026, with completion targeted for Q4 2026.",
        milestones: [
          { date: "2024-06-19", text: "RM238M dredging contract awarded", done: true },
          { date: "2024-12-09", text: "Works reported ahead of schedule", done: true },
          { date: "2026-05-08", text: "Dredging reported in full swing", done: true },
          { date: "2026-Q4", text: "Targeted dredging completion", done: false },
        ],
        sources: [
          { label: "Dredging Today — Kuala Baram contract award (Jun 2024)", url: "https://www.dredgingtoday.com/2024/06/19/malaysian-chinese-jv-wins-miri-port-dredging-contract/" },
          { label: "Dredging Today — Miri Port progress update (Dec 2024)", url: "https://www.dredgingtoday.com/2024/12/09/miri-port-dredging-project-progressing-along-smoothly/" },
          { label: "Dredging Today — Dredging in full swing (May 2026)", url: "https://www.dredgingtoday.com/2026/05/08/dredging-work-on-kuala-baram-delta-access-channel-in-full-swing/" },
        ],
      },
      {
        name: "Sarawak River Aids to Navigation and Surveillance System",
        displayName: "Sarawak River Navigation and Surveillance System",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Rivers Board / Ministry of Transport Sarawak",
        value: "Not disclosed",
        summary:
          "This card currently tracks the operational Sarawak River navigation-safety system together with the related Miri River system under construction. The Transport Minister reported in December 2025 that the Sungai Sarawak VTMS was fully operational and the Sungai Miri system was targeted for completion in Q3 2027.",
        milestones: [
          { date: "2023-04-27", text: "First-phase installation commenced", done: true },
          { date: "2025-10-31", text: "Sarawak River VTMS fully operational", done: true },
          { date: "2027-Q3", text: "Miri River system completion", done: false },
        ],
        sources: [
          { label: "Borneo Post — Sarawak River VTMS fully operational (Dec 2025)", url: "https://www.theborneopost.com/2025/12/02/lee-sarawak-rivers-board-installs-65-new-navigation-aids-to-boost-safety/" },
        ],
      },
      {
        name: "KUTS — Kuching Urban Transportation System",
        displayName: "Kuching Urban Transportation System (KUTS)",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "Sarawak Metro Sdn Bhd",
        value: "Multi-billion ringgit (phased)",
        summary:
          "Southeast Asia's first hydrogen-powered Autonomous Rapid Transit (ART) system. Phase 1 covers three lines: Blue Line (Rembus\u2013Hikmah Exchange), Red Line, and Green Line. ART vehicles run on dedicated trackless lanes using rubber tyres.",
        milestones: [
          { date: "2025-12", text: "RM58M hydrogen plant relocation contract awarded", done: true },
          { date: "2026-Q1", text: "First two ART units arrived in Kuching", done: true },
          { date: "2026-04", text: "Dedicated frequency spectrum secured for ART operations", done: true },
          { date: "2026-Q4", text: "Blue Line passenger service scheduled to begin", done: false },
          { date: "2026-Q4", text: "Rembus hydrogen plant relocation scheduled for completion", done: false },
          { date: "TBD", text: "Hydrogen-powered feeder bus network rollout", done: false },
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
        displayName: "Bintulu Port Handover to Sarawak",
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
          { date: "2025-08", text: "1,285MW dam scope publicly confirmed", done: true },
          { date: "2026", text: "Dam construction completion", done: false },
          { date: "2028", text: "Electricity generation begins", done: false },
          { date: "2030", text: "1,285MW contribution to Sarawak's hydropower capacity", done: false },
        ],
        sources: [
          { label: "DayakDaily — Green revolution supercharging Sarawak energy (Aug 2025)", url: "https://dayakdaily.com/green-revolution-supercharging-sarawaks-energy-prowess/" },
          { label: "DayakDaily — ASEAN grid & Baleh 1,285MW by 2030 (Jan 2026)", url: "https://dayakdaily.com/sarawak-urges-asean-to-study-european-union-nordic-models-to-realise-regional-power-grid-dream/" },
          { label: "RECODA — Annual Report page", url: "https://recoda.gov.my/annual-report/" },
        ],
      },
      {
        name: "Mentarang Induk Hydroelectric Project",
        status: "In Progress",
        statusColor: "#d97706",
        lead: "PT Kayan Hydropower Nusantara / Sarawak Energy-led consortium",
        value: "US$2.6 billion",
        summary:
          "A 1,375MW hydropower project in North Kalimantan developed by PT Kayan Hydropower Nusantara, a joint venture involving Sarawak Energy, Adaro Energy Indonesia, and Kayan Patria Pratama. Groundbreaking was held in March 2023 and early works were reported underway later that year; current physical-construction progress remains publicly unclear.",
        milestones: [
          { date: "2023-03-01", text: "Groundbreaking ceremony held", done: true },
          { date: "2023-10-31", text: "Early works reported underway", done: true },
          { date: "2029", text: "First power expected", done: false },
        ],
        sources: [
          { label: "Sarawak Energy — Mentarang Induk groundbreaking (Mar 2023)", url: "https://www.sarawakenergy.com/media-info/media-releases/2023/sarawak-moves-closer-to-regional-powerhouse-aspiration-through-hydropower-venture-in-indonesia" },
          { label: "Office of the Premier — Early works underway (Oct 2023)", url: "https://premier.sarawak.gov.my/web/subpage/news_view/5662" },
          { label: "PT Kayan Hydropower Nusantara — MIHEP project page", url: "https://www.ptkhn.com/projects/mentarang-induk-hydroelectric-project-mihep-" },
        ],
      },
      {
        name: "Green Hydrogen Economy — H2ornbill & H2biscus",
        displayName: "H2biscus and H2ornbill Hydrogen Projects",
        status: "Planning",
        statusColor: "#4f46e5",
        lead: "SEDC Energy / Gentari (Petronas)",
        value: "Multi-billion USD",
        summary:
          "Large-scale green hydrogen production in Bintulu. Sarawak H2 Hub (JV between SEDC Energy and Gentari) to be sole developer/operator. The Rembus hydrogen plant relocation supports KUTS fuel supply, while H2ornbill and H2biscus target commercial hydrogen and derivatives production from 2028.",
        milestones: [
          { date: "2026-Q4", text: "Rembus hydrogen plant relocation and upgrade", done: false },
          { date: "2028", text: "Commercial production begins for H2ornbill and H2biscus", done: false },
          { date: "2028+", text: "Large-scale hydrogen derivatives production and export", done: false },
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
        value: "Not disclosed",
        summary:
          "Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Public sources describe a 50MW hydro-solar hybrid facility and later reporting points to a December operations or commissioning milestone, but the exact commissioning confirmation date needs review. Sarawak Energy is also reported to be planning an additional 120MW expansion at Batang Ai.",
        milestones: [
          { date: "2023-06-20", text: "Construction officially began", done: true },
          { date: "2024-06-20", text: "Construction reached 35 percent completion", done: true },
          { date: "2025-08-19", text: "December operations start announced", done: true },
          {
            date: "2026",
            text: "Addition of 120MW floating solar capacity",
            done: false,
          },
          { date: "TBD", text: "Commercial operations commencement", done: false },
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

export const POPULATED_ECONOMIC = new Set(["manufacturing", "agriculture", "tourism", "forestry", "mining", "social-services"]);
export const POPULATED_ENABLERS = new Set(["digital-transformation", "innovation", "education", "infrastructure", "utilities", "transport", "renewable-energy"]);
