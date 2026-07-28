import { ECONOMIC_SECTOR_IDS, SECTORS } from "./trackerData.js";
import { localizeSectors } from "./localization.js";

const updateDefinitions = [
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
    projectName: "Bintulu-Samalaju Gas Pipeline",
    description: {
      en: "Bintulu Port Authority issued a notice for pipeline pre-commissioning activities. Progressive commercial operations are expected from 2027.",
      ms: "Lembaga Pelabuhan Bintulu mengeluarkan notis bagi aktiviti prapentauliahan saluran paip. Operasi komersial secara berperingkat dijangka bermula pada 2027.",
    },
    sourceUrl: "https://www.bpa.gov.my/web/home/notice_view/0/439/",
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
