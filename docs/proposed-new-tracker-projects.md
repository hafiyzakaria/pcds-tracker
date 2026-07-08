# Proposed New Tracker Projects

Prepared: 2026-07-08

Scope: proposed tracker entries for the two `Add Now` candidates identified in `docs/project-trackability-review.md`. This is a review plan only. Do not paste into `src/trackerData.js` until the entries are approved.

## Schema Notes

- Current project objects in `src/trackerData.js` use `name`, `status`, `statusColor`, `lead`, `value`, `summary`, `milestones`, and `sources`.
- Current project objects do not have project-level `id`, `title`, `category`, or `tags` fields.
- In this report, `id` and `title` are review metadata only. In implementation, `title` maps to the existing `name` field, and `category` maps to the containing `SECTORS` entry.
- Existing status values reused here: `Operational` and `In Progress`.
- Existing status colors reused here: `#16a34a` for completed/operational status and `#d97706` for in-progress status.
- No new categories, statuses, or schema fields are proposed.

## CHITOSE Carbon Capture Central Sarawak (C4 Sarawak)

### Proposed Tracker Entry

- id: `c4-sarawak`
- title: `CHITOSE Carbon Capture Central Sarawak`
- category: `innovation` / `Innovation`
- tags: none; no tag field exists in the current schema.
- ready to implement: Yes.

Insert under `SECTORS` entry with `id: "innovation"`:

```js
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
}
```

### Evidence Source For Important Fields

- `name`: `docs/project-trackability-review.md` identifies the candidate as CHITOSE Carbon Capture Central Sarawak (C4 Sarawak), supported by the Sarawak Energy release.
- `category`: `Innovation` is preferred because the source frames C4 Sarawak as industrial microalgae R&D and carbon-capture technology. `Renewable Energy` was considered in the review, but this is not a generation asset.
- `status`: `Operational` is supported by the 10 May 2023 official launch. The source confirms the facility was officially launched and toured.
- `statusColor`: `#16a34a` matches existing `Operational` cards.
- `lead`: Sarawak Energy says the project is led by CHITOSE Group, Sarawak Energy, and Sarawak Biodiversity Centre, with NEDO/METI funding/management support.
- `value`: No monetary value is disclosed. The capacity-style value is supported by Sarawak Energy's expected annual capture and biomass figures.
- `summary`: Supported by Sarawak Energy's description of flue gas delivery from Sejingkat, microalgae cultivation, CO2 capture, biomass production, and downstream research potential.
- `milestones`: 2020 project start and 10 May 2023 launch are supported by Sarawak Energy. The open milestone is the next visible public-evidence need, not a claimed completion target.
- `sources`: Use the official Sarawak Energy release as the dashboard source.

### Missing Information

- Actual annual CO2 capture achieved after launch.
- Actual annual dried biomass output after launch.
- Whether the facility has expanded into commercial downstream products.
- Monetary project value.

### Risk Level

Medium. The facility launch and expected technical outputs are well supported by an official source, but operating performance after launch is not yet publicly evidenced in the reviewed sources.

### Ready To Implement

Yes. The card can be implemented conservatively as an operational research facility with an open milestone for public performance or expansion reporting.

## Yayasan Sarawak International Secondary Schools Expansion

### Proposed Tracker Entry

- id: `ysiss-expansion`
- title: `Yayasan Sarawak International Secondary Schools Expansion`
- category: `education` / `Education & Human Capital`
- tags: none; no tag field exists in the current schema.
- ready to implement: Yes.

Insert under `SECTORS` entry with `id: "education"`:

```js
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
      text: "Target: remaining three YSISS schools completed or opened",
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
}
```

### Evidence Source For Important Fields

- `name`: `docs/project-trackability-review.md` identifies the candidate as Yayasan Sarawak International Secondary Schools expansion.
- `category`: `Education & Human Capital` matches the current category system and the PDF source section.
- `status`: `In Progress` is supported by the official site listing active campuses and Borneo Post reporting that three schools were built with another three due in the next two to three years.
- `statusColor`: `#d97706` matches existing `In Progress` cards.
- `lead`: The official site is branded as Yayasan Sarawak International Secondary School and references Yayasan Sarawak. The project is described as a Sarawak Government initiative for B40 and rural students.
- `value`: No monetary value is disclosed. `Six-school network` is supported by Borneo Post reporting and is consistent with the tracker using capacity/scale values where money is unavailable.
- `summary`: Supported by the YSISS official site, which describes B40 full scholarships and lists current/future campuses, plus Borneo Post reporting on the six-school plan and Sibu operations.
- `milestones`: Petra Jaya start date is supported by the YSISS About page; the three-built and remaining-three target is supported by Borneo Post; Sibu first-class timing is supported by Borneo Post and active Sibu campus contact listing.
- `sources`: Use the official YSISS pages plus Borneo Post articles for recent operational and expansion reporting.

### Missing Information

- Monetary project value.
- Exact implementation status of the remaining three schools.
- Confirmed locations and opening dates for the Bintulu, Miri, and sixth campuses.
- Whether the second Kuching campus should be represented as Kuching 12th Mile, Kuching, or another official campus name in a future milestone.

### Risk Level

Low to medium. Active campuses and network expansion are well supported, but the remaining-campus timeline is based on reported targets rather than official construction pages.

### Ready To Implement

Yes. The card can be implemented as an in-progress education-network rollout, with only completed/active campus milestones marked done and remaining campuses kept open.

## Summary

1. Number of proposed new tracker projects: 2
2. Safest to add first:
   - Yayasan Sarawak International Secondary Schools Expansion
   - CHITOSE Carbon Capture Central Sarawak
3. Need manual review before implementation: none of the two `Add Now` candidates, although both need later source updates for open milestones.
4. Schema/category/status concerns:
   - Do not add project-level `id`, `title`, `category`, or `tags` fields to `src/trackerData.js`; they are review metadata only.
   - Use `name` for the dashboard title.
   - Place C4 Sarawak under existing `innovation`.
   - Place YSISS under existing `education`.
   - Reuse existing statuses and colors: `Operational` / `#16a34a`, `In Progress` / `#d97706`.
