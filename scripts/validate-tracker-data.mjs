import {
  ECONOMIC_SECTOR_IDS,
  ENABLER_IDS,
  LAST_UPDATED,
  SECTORS,
} from "../src/trackerData.js";
import { localizeSectors } from "../src/localization.js";
import { getUpdateHistory } from "../src/updateHistory.js";

const ALLOWED_STATUSES = new Set([
  "Awaiting Decision",
  "In Progress",
  "Planning",
  "Operational",
  "Designated",
  "Enacted",
]);
const OVERVIEW_ID = "overview";
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
const MILESTONE_DATE = /^(?:\d{4}(?:-\d{2}(?:-\d{2})?|-(?:Q[1-4]|\d{4}))?|Achieved|Annual|Ongoing|Official report|TBD)$/;

const errors = [];
const warnings = [];

function error(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function checkText(value, label) {
  if (!hasText(value)) error(`${label} must be a non-empty string.`);
}

function checkHttpsUrl(value, label) {
  if (!hasText(value)) {
    error(`${label} must be a non-empty HTTPS URL.`);
    return;
  }

  try {
    const url = new URL(value);
    if (url.protocol !== "https:") error(`${label} must use HTTPS: ${value}`);
  } catch {
    error(`${label} must be a valid URL: ${value}`);
  }
}

function projectLabel(project) {
  return `Project “${project.name || "(unnamed)"}”`;
}

function checkMilestones(project, { isOverview = false } = {}) {
  const label = projectLabel(project);
  if (!Array.isArray(project.milestones) || project.milestones.length === 0) {
    error(`${label} must have at least one milestone.`);
    return;
  }

  let foundOpenMilestone = false;
  for (const [index, milestone] of project.milestones.entries()) {
    const milestoneLabel = `${label}, milestone ${index + 1}`;
    if (!milestone || typeof milestone !== "object") {
      error(`${milestoneLabel} must be an object.`);
      continue;
    }

    checkText(milestone.date, `${milestoneLabel} date`);
    if (hasText(milestone.date) && !MILESTONE_DATE.test(milestone.date.trim())) {
      // Dates intentionally allow established non-date labels such as Ongoing and TBD.
      warn(`${milestoneLabel} uses an unrecognised date label: ${milestone.date}`);
    }
    checkText(milestone.text, `${milestoneLabel} text`);
    if (hasText(milestone.text) && /[.!?]$/.test(milestone.text.trim())) {
      error(`${milestoneLabel} text must be a concise milestone phrase without terminal punctuation.`);
    }
    if (
      hasText(milestone.text) &&
      (/^target:/i.test(milestone.text.trim()) ||
        /\b(?:planned|targeted|expected)$/i.test(milestone.text.trim()) ||
        /\b(?:pending confirmation|status confirmation|to be confirmed)\b/i.test(milestone.text))
    ) {
      error(`${milestoneLabel} text uses research or target wording instead of the project outcome.`);
    }
    if (hasText(milestone.text) && milestone.text.trim().length > 90) {
      warn(`${milestoneLabel} exceeds 90 characters and may not fit the collapsed card cleanly.`);
    }
    if (typeof milestone.done !== "boolean") {
      error(`${milestoneLabel} done must be a boolean.`);
      continue;
    }
    if (milestone.done && foundOpenMilestone) {
      error(`${label} has a completed milestone after an open milestone; completed milestones must come first.`);
    }
    if (!milestone.done) foundOpenMilestone = true;
  }

  // The overview card is a long-range strategy framework, not a completed delivery
  // project, so its 2030 targets are intentionally left open.
  if (!isOverview && ["Operational", "Designated", "Enacted"].includes(project.status)) {
    const hasOpenDeliveryMilestone = project.milestones.some(
      (milestone) => milestone?.done === false
    );
    if (hasOpenDeliveryMilestone) {
      error(`${label} is completed (${project.status}) but still has an open delivery milestone.`);
    }
  }
}

function checkSources(project) {
  const label = projectLabel(project);
  if (!Array.isArray(project.sources) || project.sources.length === 0) {
    error(`${label} must have at least one source.`);
    return;
  }

  for (const [index, source] of project.sources.entries()) {
    const sourceLabel = `${label}, source ${index + 1}`;
    if (!source || typeof source !== "object") {
      error(`${sourceLabel} must be an object.`);
      continue;
    }
    checkText(source.label, `${sourceLabel} label`);
    checkHttpsUrl(source.url, `${sourceLabel} URL`);
  }
}

function flattenProjects(sectors) {
  return sectors.flatMap((sector) =>
    Array.isArray(sector.projects)
      ? sector.projects.map((project) => ({ sector, project }))
      : []
  );
}

function checkLocalization(canonicalProjects) {
  const bmProjects = flattenProjects(localizeSectors(SECTORS, "ms"));
  const bmByName = new Map(bmProjects.map(({ project }) => [project.name, project]));

  if (bmByName.size !== canonicalProjects.length) {
    error("Bahasa Melayu localization must retain every canonical project exactly once.");
  }

  for (const { project } of canonicalProjects) {
    const localized = bmByName.get(project.name);
    if (!localized) {
      error(`${projectLabel(project)} is missing Bahasa Melayu localization coverage.`);
      continue;
    }
    for (const field of ["lead", "value", "summary"]) {
      checkText(localized[field], `${projectLabel(project)} Bahasa Melayu ${field}`);
    }
    if (!Array.isArray(localized.milestones) || localized.milestones.length !== project.milestones.length) {
      error(`${projectLabel(project)} Bahasa Melayu milestones must match the canonical milestone count.`);
      continue;
    }
    localized.milestones.forEach((milestone, index) => {
      checkText(milestone?.text, `${projectLabel(project)} Bahasa Melayu milestone ${index + 1} text`);
    });
  }
}

if (!ISO_DATE.test(LAST_UPDATED) || Number.isNaN(Date.parse(`${LAST_UPDATED}T00:00:00Z`))) {
  error(`LAST_UPDATED must be an ISO calendar date (YYYY-MM-DD): ${LAST_UPDATED}`);
}

const allowedCategoryIds = new Set([...ECONOMIC_SECTOR_IDS, ...ENABLER_IDS, OVERVIEW_ID]);
const sectorIds = new Set();
for (const sector of SECTORS) {
  checkText(sector?.id, "Sector ID");
  if (sectorIds.has(sector?.id)) error(`Duplicate sector ID: ${sector.id}`);
  sectorIds.add(sector?.id);
  if (!allowedCategoryIds.has(sector?.id)) error(`Unknown tracker category: ${sector?.id}`);
  if (!Array.isArray(sector?.projects)) error(`Category “${sector?.id}” projects must be an array.`);
}

const canonicalProjects = flattenProjects(SECTORS);
const projectNames = new Set();
for (const { sector, project } of canonicalProjects) {
  const label = projectLabel(project);
  checkText(project?.name, "Project canonical name");
  if (projectNames.has(project?.name)) error(`Duplicate canonical project name: ${project.name}`);
  projectNames.add(project?.name);
  if (!ALLOWED_STATUSES.has(project?.status)) error(`${label} has an unsupported status: ${project?.status}`);
  if (sector.id === OVERVIEW_ID && project.status !== "Operational") {
    error(`${label} in the overview category must be Operational.`);
  }
  for (const field of ["lead", "value", "summary"]) checkText(project?.[field], `${label} ${field}`);
  checkMilestones(project, { isOverview: sector.id === OVERVIEW_ID });
  checkSources(project);
}

checkLocalization(canonicalProjects);

for (const language of ["en", "ms"]) {
  let history;
  try {
    history = getUpdateHistory(language);
  } catch (caught) {
    error(`Update history (${language}) could not be resolved: ${caught.message}`);
    continue;
  }
  if (!Array.isArray(history) || history.length === 0) {
    error(`Update history (${language}) must contain entries.`);
    continue;
  }
  let previousDate = null;
  const updateKeys = new Set();
  history.forEach((entry, index) => {
    const label = `Update history (${language}) entry ${index + 1}`;
    if (!ISO_DATE.test(entry.date) || Number.isNaN(Date.parse(`${entry.date}T00:00:00Z`))) error(`${label} date must be ISO YYYY-MM-DD.`);
    if (previousDate && entry.date > previousDate) {
      error(`${label} is out of reverse-chronological order.`);
    }
    previousDate = entry.date;
    checkText(entry.projectName, `${label} project name`);
    checkText(entry.description, `${label} description`);
    checkHttpsUrl(entry.sourceUrl, `${label} source URL`);
    if (!entry.source || entry.source.url !== entry.sourceUrl) error(`${label} source must exist on its canonical project.`);
    const updateKey = `${entry.date}|${entry.projectName}`;
    if (updateKeys.has(updateKey)) error(`${label} duplicates ${updateKey}.`);
    updateKeys.add(updateKey);
  });
}

if (warnings.length) {
  console.warn(`Content validation warnings (${warnings.length}):`);
  warnings.forEach((message) => console.warn(`- ${message}`));
}
if (errors.length) {
  console.error(`Content validation failed (${errors.length} error${errors.length === 1 ? "" : "s"}):`);
  errors.forEach((message) => console.error(`- ${message}`));
  process.exitCode = 1;
} else {
  console.log(`Content validation passed for ${canonicalProjects.length} projects and ${getUpdateHistory("en").length} updates.`);
}
