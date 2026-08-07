import { ECONOMIC_SECTOR_IDS, SECTORS } from "./trackerData.js";
import { localizeSectors } from "./localization.js";

const updateDefinitions = [
  {
    date: "2026-07-30",
    projectName: "Sarawak Reef Ball Project",
    description: {
      en: "Eighty artificial reef balls were deployed at Kuala Nyalau-Samalaju, while SFC reported a long-term statewide target of 5,000 units through continuing marine-conservation partnerships.",
      ms: "Sebanyak 80 bebola terumbu tiruan ditempatkan di Kuala Nyalau-Samalaju, manakala SFC melaporkan sasaran jangka panjang 5,000 unit di seluruh negeri melalui kerjasama pemuliharaan marin yang berterusan.",
    },
    sourceUrl:
      "https://dayakdaily.com/80-reef-balls-deployed-to-safeguard-marine-biodiversity-in-kuala-nyalau-samalaju/",
  },
  {
    date: "2026-07-29",
    projectName: "Sarawak Science Centre (SSCiEX)",
    description: {
      en: "The five-storey Sarawak Science Centre officially launched with 22 thematic galleries and more than 400 hands-on exhibits, before opening to visitors on 30 July.",
      ms: "Pusat Sains Sarawak lima tingkat dilancarkan secara rasmi dengan 22 galeri bertema dan lebih 400 pameran interaktif, sebelum dibuka kepada pengunjung pada 30 Julai.",
    },
    sourceUrl: "https://ssciex.org.my/",
  },
  {
    date: "2026-07-24",
    projectName: "Kota Petra Green Technology Park",
    description: {
      en: "A RM328 million EPCC contract was awarded for the 100MWac agrivoltaic solar facility in Phase 1, marking the project's move from approvals and site preparation into execution.",
      ms: "Kontrak EPCC RM328 juta dianugerahkan bagi kemudahan solar agrovoltaik 100MWac dalam Fasa 1, menandakan peralihan projek daripada kelulusan dan penyediaan tapak kepada pelaksanaan.",
    },
    sourceUrl:
      "https://www.thestar.com.my/business/business-news/2026/07/24/zecon-unit-secures-contract-for-sarawak-solar-project",
  },
  {
    date: "2026-07-07",
    projectName: "Sarawak Cancer Centre",
    description: {
      en: "The Sarawak Cancer Centre reached the design-and-build procurement stage. Construction remains targeted to begin in the first quarter of 2027.",
      ms: "Pusat Kanser Sarawak mencapai peringkat perolehan reka dan bina. Pembinaan kekal disasarkan bermula pada suku pertama 2027.",
    },
    sourceUrl:
      "https://dayakdaily.com/sarawak-cancer-centre-targets-2032-completion-as-design-and-build-tender-process-begins/",
  },
  {
    date: "2026-07-02",
    projectName: "Community Social Support Centre (CSSC) Network",
    description: {
      en: "JKR Sarawak called a one-month furniture-supply quotation for TTG and CSSC Bintulu. Full operations remain unconfirmed and undated.",
      ms: "JKR Sarawak memanggil sebutharga pembekalan perabot selama satu bulan bagi TTG dan CSSC Bintulu. Operasi penuh masih belum disahkan dan belum mempunyai tarikh.",
    },
    sourceUrl: "https://jkr.sarawak.gov.my/web/subpage/webpage_view/465",
  },
  {
    date: "2026-06-21",
    projectName: "Bintulu Port — State Control Handover",
    description: {
      en: "The Tripartite and Completion Agreements were signed, and Bintulu Port was handed over to Sarawak under the RM1.8 billion MA63 devolution agreement.",
      ms: "Perjanjian Tiga Pihak dan Perjanjian Penyempurnaan ditandatangani, dan Pelabuhan Bintulu diserahkan kepada Sarawak di bawah perjanjian penurunan kuasa MA63 bernilai RM1.8 bilion.",
    },
    sourceUrl:
      "https://dayakdaily.com/bintulu-port-officially-handed-over-to-sarawak-in-rm1-8-bil-deal/",
  },
  {
    date: "2026-06-15",
    projectName: "Sarawak Bioindustrial Park",
    description: {
      en: "JKR Sarawak awarded the combined delivery-package tender for the Sarawak Bioindustrial Park and SBC Bioprocess Commercial Centre, moving the bundled project into implementation.",
      ms: "JKR Sarawak menganugerahkan tender pakej pelaksanaan gabungan bagi Taman Bioindustri Sarawak dan Pusat Komersial Bioproses SBC, sekali gus membawa projek gabungan itu ke peringkat pelaksanaan.",
    },
    sourceUrl: "https://jkr.sarawak.gov.my/web/subpage/webpage_view/403",
  },
  {
    date: "2026-06-13",
    projectName: "Sarawak High Performance Centre",
    description: {
      en: "The Sarawak Government confirmed that the centre was in planning and study, with its Sarawak Sports Complex site identified and construction expected after the 2027 SEA Games.",
      ms: "Kerajaan Sarawak mengesahkan pusat itu berada pada peringkat perancangan dan kajian, dengan tapaknya di Kompleks Sukan Sarawak dikenal pasti serta pembinaan dijangka selepas Sukan SEA 2027.",
    },
    sourceUrl: "https://ukas.sarawak.gov.my/web/subpage/news_view/42510",
  },
  {
    date: "2026-06-09",
    projectName: "Green Hydrogen Economy — H2ornbill & H2biscus",
    description: {
      en: "The H2biscus and H2ornbill project scopes entered recalibration and were set to be scaled down because of immediate financial constraints.",
      ms: "Skop projek H2biscus dan H2ornbill memasuki penyelarasan semula dan akan dikecilkan berikutan kekangan kewangan segera.",
    },
    sourceUrl:
      "https://www.theborneopost.com/2026/06/09/sarawak-recalibrates-h2biscus-and-h2ornbill-hydrogen-projects-amid-financial-constraints/",
  },
  {
    date: "2026-06-05",
    projectName: "Special Needs Community Centre",
    description: {
      en: "The RM30 million first phase was announced for Samarahan, combining early intervention, vocational training, therapy and trainee accommodation, with completion targeted for May 2028.",
      ms: "Fasa pertama bernilai RM30 juta diumumkan bagi Samarahan, menggabungkan intervensi awal, latihan vokasional, terapi dan penginapan pelatih, dengan penyiapan disasarkan pada Mei 2028.",
    },
    sourceUrl:
      "https://www.theborneopost.com/2026/06/05/sarawaks-first-special-needs-community-centre-set-for-completion-by-2028/",
  },
  {
    date: "2026-05-19",
    projectName: "New Kuching International Airport",
    description: {
      en: "The site-verification and feasibility study was completed, confirming Tanjung Embang as operationally and technically feasible. The project is proceeding to a federal Airport Development Request.",
      ms: "Kajian pengesahan tapak dan kebolehlaksanaan selesai serta mengesahkan Tanjung Embang sesuai dari segi operasi dan teknikal. Projek kini diteruskan kepada Permohonan Pembangunan Lapangan Terbang persekutuan.",
    },
    sourceUrl: "https://mot.sarawak.gov.my/web/subpage/news_view/881",
  },
  {
    date: "2026-05-18",
    projectName: "KUTS — Kuching Urban Transportation System",
    description: {
      en: "KUTS Phase 1 reached 38.2 percent physical progress by 30 April 2026. Pilot operations are scheduled for the fourth quarter of 2026 before full commercial operations in 2027.",
      ms: "Fasa 1 KUTS mencapai kemajuan fizikal 38.2 peratus setakat 30 April 2026. Operasi rintis dijadualkan pada suku keempat 2026 sebelum operasi komersial penuh pada 2027.",
    },
    sourceUrl:
      "https://www.thestar.com.my/news/nation/2026/05/18/kuching-urban-transportation-system-to-start-pilot-run-in-q4",
  },
  {
    date: "2026-05-12",
    projectName: "Tanjung Embang Deep-Sea Port",
    description: {
      en: "The proposed deep-sea port and gas terminal were reported as a Sarawak Government and PETROS development, with operations scheduled to begin in 2032.",
      ms: "Cadangan pelabuhan laut dalam dan terminal gas dilaporkan sebagai pembangunan Kerajaan Sarawak dan PETROS, dengan operasi dijadualkan bermula pada 2032.",
    },
    sourceUrl:
      "https://dayakdaily.com/tanjung-embang-deep-sea-port-gas-terminal-set-for-2032-operations/",
  },
  {
    date: "2026-05-12",
    projectName: "Bintulu-Samalaju Gas Pipeline",
    description: {
      en: "Bintulu Port Authority issued a notice for pipeline pre-commissioning activities. Progressive commercial operations are expected from 2027.",
      ms: "Lembaga Pelabuhan Bintulu mengeluarkan notis bagi aktiviti prapentauliahan saluran paip. Operasi komersial secara berperingkat dijangka bermula pada 2027.",
    },
    sourceUrl: "https://www.bpa.gov.my/web/home/notice_view/0/439/",
  },
  {
    date: "2026-04-30",
    projectName: "One-Stop Early Intervention Centre (OSEIC) Miri",
    description: {
      en: "The Sarawak Government reported RM5.743 million in development grants and assessed progress at the OSEIC Miri site in Tudan ahead of its planned opening.",
      ms: "Kerajaan Sarawak melaporkan geran pembangunan RM5.743 juta dan menilai kemajuan di tapak OSEIC Miri di Tudan menjelang pembukaan yang dirancang.",
    },
    sourceUrl: "https://ukas.sarawak.gov.my/web/subpage/news_view/39533",
  },
  {
    date: "2026-04-27",
    projectName:
      "Sarawak Delta Geopark - UNESCO Global Geopark Designation",
    description: {
      en: "The Sarawak Delta was recognised as a UNESCO Global Geopark, covering the Kuching, Santubong, and Bako region.",
      ms: "Delta Sarawak diiktiraf sebagai Geopark Global UNESCO, meliputi kawasan Kuching, Santubong dan Bako.",
    },
    sourceUrl:
      "https://dayakdaily.com/sarawak-delta-geopark-gets-unesco-approval/",
  },
  {
    date: "2026-04-25",
    projectName: "Miri Combined Cycle Gas Turbine (CCGT) Power Plant",
    description: {
      en: "The RM2 billion, 500MW Miri CCGT Power Plant reached 45 percent completion as of March 2026, with completion targeted for the end of 2027.",
      ms: "Loji Janakuasa CCGT Miri bernilai RM2 bilion dan berkapasiti 500MW mencapai 45 peratus siap setakat Mac 2026, dengan penyiapan disasarkan pada penghujung 2027.",
    },
    sourceUrl:
      "https://www.sarawaktribune.com/miri-combined-cycle-gas-turbine-project-reaches-45-completion/",
  },
  {
    date: "2026-04-25",
    projectName: "Miri Port Kuala Baram Capital Dredging",
    description: {
      en: "The Kuala Baram dredging project reached about 55 percent physical progress and remained ahead of schedule, with completion expected in October 2026.",
      ms: "Projek pengorekan Kuala Baram mencapai kira-kira 55 peratus kemajuan fizikal dan kekal mendahului jadual, dengan penyiapan dijangka pada Oktober 2026.",
    },
    sourceUrl:
      "https://dayakdaily.com/premier-miri-port-dredging-project-55-pct-complete-channel-extension-up-to-10km-under-study/",
  },
  {
    date: "2026-04-01",
    projectName: "PETRONAS Kasawari Carbon Capture and Storage Project",
    description: {
      en: "PETRONAS said it was examining whether the Kasawari project's first carbon dioxide injection could be brought forward to 2027.",
      ms: "PETRONAS menyatakan bahawa ia sedang meneliti sama ada suntikan karbon dioksida pertama projek Kasawari boleh diawalkan ke 2027.",
    },
    sourceUrl:
      "https://www.thestar.com.my/business/business-news/2026/04/01/petronas-seeks-to-bring-forward-first-co2-injection-at-kasawari-to-2027",
  },
  {
    date: "2026-03-29",
    projectName: "Baram Agrovoltaic Project",
    description: {
      en: "The proposed RM6 billion Baram Agrovoltaic Project scope was announced for Temala near Long Lama, combining renewable energy, commercial agriculture, logistics and township components.",
      ms: "Skop cadangan Projek Agrovoltaik Baram bernilai RM6 bilion diumumkan bagi Temala berhampiran Long Lama, menggabungkan tenaga boleh baharu, pertanian komersial, logistik dan komponen perbandaran.",
    },
    sourceUrl:
      "https://ukas.sarawak.gov.my/web/subpage/news_view/37208",
  },
  {
    date: "2026-03-27",
    projectName: "Sago BioCNG Plant and Gas Distribution Network",
    description: {
      en: "Gas pipelines were installed to about 122 homes and public facilities in Kampung Teh and Kampung Tabo, with the pilot project targeted for completion by the end of 2026.",
      ms: "Paip gas dipasang ke kira-kira 122 kediaman dan kemudahan awam di Kampung Teh dan Kampung Tabo, dengan projek rintis disasarkan siap menjelang akhir 2026.",
    },
    sourceUrl:
      "https://www.tvsarawak.my/2026/03/27/krisis-tenaga-dunia-sisa-sagu-jadi-emas-hijau/",
  },
  {
    date: "2026-03-17",
    projectName: "Community Social Support Centre (CSSC) Network",
    description: {
      en: "The Kuching centre was operating after handling 653 social cases and 760 programmes, while the statewide network continued expanding beyond Kuching.",
      ms: "Pusat Kuching beroperasi selepas mengendalikan 653 kes sosial dan 760 program, manakala rangkaian seluruh negeri terus diperluas ke luar Kuching.",
    },
    sourceUrl: "https://ukas.sarawak.gov.my/web/subpage/news_view/36445",
  },
  {
    date: "2026-03-08",
    projectName: "Lubok Punggor AgriHub and Mid Sadong 1 Irrigation Project",
    description: {
      en: "Compensation totalling RM6.5 million was handed to 119 recipients for the Lubok Punggor AgriHub development, whose scope includes irrigation, drainage, a reservoir, warehouse and machinery workshop.",
      ms: "Pampasan berjumlah RM6.5 juta diserahkan kepada 119 penerima bagi pembangunan AgriHub Lubok Punggor yang merangkumi pengairan, perparitan, takungan air, gudang dan bengkel jentera.",
    },
    sourceUrl: "https://ukas.sarawak.gov.my/web/subpage/news_view/35719",
  },
  {
    date: "2026-02-10",
    projectName:
      "Environment (Reduction of Greenhouse Gases Emission) Ordinance 2023",
    description: {
      en: "NREB's Greenhouse Gas Management System Phase 1 commenced operations for carbon-emissions reporting and flaring and venting consent applications.",
      ms: "Sistem Pengurusan Gas Rumah Hijau Fasa 1 NREB mula beroperasi bagi pelaporan pelepasan karbon serta permohonan kebenaran pembakaran dan pelepasan gas.",
    },
    sourceUrl: "https://www.nreb.gov.my/web/subpage/announcement_view/196",
  },
  {
    date: "2026-01-30",
    projectName: "Piasau Nature Reserve Discovery Centre",
    description: {
      en: "RM30 million in development funding and the marine eco-tourism scope were confirmed for the Piasau discovery centre. Completion is scheduled for August 2027.",
      ms: "Pembiayaan pembangunan RM30 juta dan skop ekopelancongan marin disahkan untuk pusat penemuan Piasau. Penyiapan dijadualkan pada Ogos 2027.",
    },
    sourceUrl:
      "https://www.theborneopost.com/2026/01/30/piasau-nature-reserve-discovery-centre-to-become-marine-eco-tourism-hub-with-rm30-mln-boost/",
  },
  {
    date: "2025-12-01",
    projectName: "Sarawak Infectious Disease Centre",
    description: {
      en: "The Samarahan campus reached 40.19 percent physical progress in October 2025, while the SIDC research organisation continued operating ahead of the campus completion target.",
      ms: "Kampus Samarahan mencapai 40.19 peratus kemajuan fizikal pada Oktober 2025, manakala organisasi penyelidikan SIDC terus beroperasi sebelum sasaran penyiapan kampus.",
    },
    sourceUrl:
      "https://dayakdaily.com/sarawak-infectious-disease-centre-to-be-completed-by-oct-2026/",
  },
  {
    date: "2025-11-24",
    projectName: "Sarawak Agrotechnology Park",
    description: {
      en: "The Sarawak Budget 2026 allocated RM19.5 million to develop the Sarawak Agrotechnology Park sites at Semenggok and Tarat.",
      ms: "Belanjawan Sarawak 2026 memperuntukkan RM19.5 juta untuk membangunkan tapak Taman Agroteknologi Sarawak di Semenggok dan Tarat.",
    },
    sourceUrl:
      "https://dayakdaily.com/sarawak-budget-2026-nearly-rm300-mil-allocated-to-modernise-agriculture-boost-food-security/",
  },
  {
    date: "2025-11-07",
    projectName: "Community Social Support Centre (CSSC) Network",
    description: {
      en: "CSSC Sibu was launched at Jalan Awang Ramli Amit and handed over to its community operator, establishing the network's second centre after Kuching.",
      ms: "CSSC Sibu dilancarkan di Jalan Awang Ramli Amit dan diserahkan kepada pengendali komunitinya, menjadikannya pusat kedua dalam rangkaian selepas Kuching.",
    },
    sourceUrl:
      "https://www.theborneopost.com/2025/11/08/community-social-support-centre-launched-in-sibu/",
  },
  {
    date: "2025-11-05",
    projectName: "FR21 Jalan Serian-Tebedu-Indonesia Border Upgrade",
    description: {
      en: "Parliamentary reporting placed the project's preliminary estimate above RM500 million and potentially up to RM1 billion, pending finalisation after preliminary work expected by the end of 2026.",
      ms: "Laporan Parlimen meletakkan anggaran awal projek melebihi RM500 juta dan mungkin mencecah RM1 bilion, tertakluk kepada pemuktamadan selepas kerja awalan yang dijangka siap menjelang akhir 2026.",
    },
    sourceUrl: "https://www.nadma.gov.my/bm/media-2/berita/5439-dewan-rakyat-projek-naik-taraf-jalan-serian-tebedu-dijangka-cecah-rm1-bilion",
  },
  {
    date: "2025-09-22",
    projectName: "Bako National Park ASEAN Heritage Park",
    description: {
      en: "The ASEAN Centre for Biodiversity confirmed Bako National Park as the 65th ASEAN Heritage Park, recognising its outstanding biological and conservation significance.",
      ms: "Pusat Biodiversiti ASEAN mengesahkan Taman Negara Bako sebagai Taman Warisan ASEAN ke-65, mengiktiraf kepentingan biologi dan pemuliharaannya yang luar biasa.",
    },
    sourceUrl: "https://www.aseanbiodiversity.org/news-events-jobs/six-natural-wonders-in-malaysia-and-viet-nam-declared-as-asean-heritage-parks/",
  },
  {
    date: "2025-09-22",
    projectName: "Lambir Hills National Park ASEAN Heritage Park",
    description: {
      en: "The ASEAN Centre for Biodiversity confirmed Lambir Hills National Park as the 66th ASEAN Heritage Park, recognising its exceptional plant diversity and conservation importance.",
      ms: "Pusat Biodiversiti ASEAN mengesahkan Taman Negara Bukit Lambir sebagai Taman Warisan ASEAN ke-66, mengiktiraf kepelbagaian tumbuhan dan kepentingan pemuliharaannya yang luar biasa.",
    },
    sourceUrl: "https://www.aseanbiodiversity.org/news-events-jobs/six-natural-wonders-in-malaysia-and-viet-nam-declared-as-asean-heritage-parks/",
  },
  {
    date: "2025-09-10",
    projectName: "RM1 Billion Paddy Infrastructure Programme",
    description: {
      en: "The Sarawak Government reported a RM1 billion allocation for the Stumbin-Bijat paddy project, covering irrigation, drainage, farm roads, and related infrastructure.",
      ms: "Kerajaan Sarawak melaporkan peruntukan RM1 bilion bagi projek padi Stumbin-Bijat yang meliputi pengairan, saliran, jalan ladang dan infrastruktur berkaitan.",
    },
    sourceUrl:
      "https://premierdept.sarawak.gov.my/web/subpage/news_view/24582/UKAS",
  },
  {
    date: "2025-06-16",
    projectName: "Baleh Hydroelectric Project",
    description: {
      en: "Reservoir impoundment was scheduled to begin in 2027 and take about two years, with project completion and power generation expected by December 2029.",
      ms: "Penakungan takungan dijadualkan bermula pada 2027 dan mengambil masa kira-kira dua tahun, dengan penyiapan projek serta penjanaan kuasa dijangka menjelang Disember 2029.",
    },
    sourceUrl:
      "https://premierdept.sarawak.gov.my/web/subpage/news_view/19825/UKAS",
  },
  {
    date: "2024-09-16",
    projectName: "Bintulu Bio-Algae Initial Commercial Plant",
    description: {
      en: "Ongoing Bintulu studies by SEDC Energy and PETRONAS were publicly confirmed alongside a plan to scale microalgae cultivation to 10,000 acres and support a later bio-refinery.",
      ms: "Kajian berterusan di Bintulu oleh SEDC Energy dan PETRONAS disahkan secara terbuka bersama pelan meningkatkan penanaman mikroalga kepada 10,000 ekar serta menyokong bio-penapisan pada peringkat kemudian.",
    },
    sourceUrl: "https://dayakdaily.com/premier-swak-to-build-bio-refinery-in-bintulu-once-microalgae-cultivation-on-10000-acre-site-starts/",
  },
];

function resolveUpdate(definition, language) {
  const sectors = localizeSectors(SECTORS, language);

  for (const sector of sectors) {
    const project = sector.projects?.find(
      (candidate) => candidate.name === definition.projectName
    );

    if (!project) {
      continue;
    }

    const source = project.sources?.find(
      (candidate) => candidate.url === definition.sourceUrl
    );

    if (!source) {
      throw new Error(
        `Update source not found for ${definition.projectName}: ${definition.sourceUrl}`
      );
    }

    return {
      ...definition,
      description:
        definition.description[language] || definition.description.en,
      projectDisplayName: project.displayName || project.name,
      sectorId: sector.id,
      kind: ECONOMIC_SECTOR_IDS.has(sector.id) ? "sector" : "enabler",
      sectorName: sector.name,
      sectorColor: sector.color,
      source,
    };
  }

  throw new Error(`Update project not found: ${definition.projectName}`);
}

export function getUpdateHistory(language = "en") {
  return updateDefinitions.map((definition) =>
    resolveUpdate(definition, language)
  );
}
