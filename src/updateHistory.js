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
    date: "2026-05-12",
    projectName: "Bintulu-Samalaju Gas Pipeline",
    description: {
      en: "Bintulu Port Authority issued a notice for pipeline pre-commissioning activities. Progressive commercial operations are expected from 2027.",
      ms: "Lembaga Pelabuhan Bintulu mengeluarkan notis bagi aktiviti prapentauliahan saluran paip. Operasi komersial secara berperingkat dijangka bermula pada 2027.",
    },
    sourceUrl: "https://www.bpa.gov.my/web/home/notice_view/0/439/",
  },
  {
    date: "2026-05-08",
    projectName: "Miri Port Kuala Baram Capital Dredging",
    description: {
      en: "Dredging work on the Kuala Baram Delta access channel was reported to be in full swing, with completion targeted for the fourth quarter of 2026.",
      ms: "Kerja pengorekan saluran akses Delta Kuala Baram dilaporkan sedang giat dijalankan, dengan penyiapan disasarkan pada suku keempat 2026.",
    },
    sourceUrl:
      "https://www.dredgingtoday.com/2026/05/08/dredging-work-on-kuala-baram-delta-access-channel-in-full-swing/",
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
    date: "2026-01-30",
    projectName: "Piasau Nature Reserve Discovery Centre",
    description: {
      en: "RM30 million in development funding and the marine eco-tourism scope were confirmed for the Piasau discovery centre. Completion is scheduled for August 2027.",
      ms: "Pembiayaan pembangunan RM30 juta dan skop ekopelancongan marin disahkan untuk pusat penemuan Piasau. Penyiapan dijadualkan pada Ogos 2027.",
    },
    sourceUrl:
      "https://www.theborneopost.com/2026/01/30/piasau-nature-reserve-discovery-centre-to-become-marine-eco-tourism-hub-with-rm30-mln-boost/",
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
