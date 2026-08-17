import { readFileSync } from "node:fs";
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
const COMPLETED_STATUSES = new Set(["Operational", "Designated", "Enacted"]);
const NON_MONETARY_VALUES = new Set(["Not disclosed", "Not applicable"]);
const LOCALIZED_NON_MONETARY_VALUES = new Set(["Tidak didedahkan", "Tidak berkenaan"]);
const MONETARY_VALUE = /^(?:RM|US\$|USD)\d+(?:\.\d+)?(?:-\d+(?:\.\d+)?)? (?:million|billion)$/;
const LOCALIZED_MONETARY_VALUE = /^(?:RM|US\$|USD)\d+(?:\.\d+)?(?:-\d+(?:\.\d+)?)? (?:juta|bilion)$/;
const INCLUSION_TIERS = new Set(["direct", "official_linked", "component", "unconfirmed"]);
const TRACKED_UNITS = new Set([
  "single_asset",
  "phase_or_package",
  "combined_card",
  "shared_system",
  "programme",
  "designation",
  "policy_implementation",
]);
const COMPONENT_APPROVALS = new Set([
  "SMD Semiconductor — GaN Chip Development",
  "Environment (Reduction of Greenhouse Gases Emission) Ordinance 2023",
  "Baram Agrovoltaic Project",
]);
const MONITORED_UNCONFIRMED = new Set([
  "FutureData — Kuching Data Centre Park",
  "Sarawak High Performance Centre",
]);
const APPROVED_INCLUSION_SCOPE = {
  auditedCardCount: 50,
  expectedActiveCount: 48,
  expectedMonitoredCount: 2,
  expectedManualComponentApprovalCount: 3,
};
const APPROVED_TIER_COUNTS = {
  direct: 33,
  official_linked: 12,
  component: 3,
  unconfirmed: 2,
};

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
    if (milestone.done && milestone.date === "TBD") {
      error(`${milestoneLabel} is completed but still uses a TBD date.`);
    }
    if (
      milestone.done === false &&
      hasText(milestone.text) &&
      /\b(?:achieved|added|announced|approved|awarded|commissioned|completed|obtained|published|scheduled|secured|signed)$/i.test(
        milestone.text.trim()
      )
    ) {
      error(`${milestoneLabel} is open but reads like a completed event: ${milestone.text}`);
    }
    if (milestone.done && foundOpenMilestone) {
      error(`${label} has a completed milestone after an open milestone; completed milestones must come first.`);
    }
    if (!milestone.done) foundOpenMilestone = true;
  }

  // The overview card is a long-range strategy framework, not a completed delivery
  // project, so its 2030 targets are intentionally left open.
  const hasOpenDeliveryMilestone = project.milestones.some(
    (milestone) => milestone?.done === false
  );
  if (!isOverview && COMPLETED_STATUSES.has(project.status)) {
    if (hasOpenDeliveryMilestone) {
      error(`${label} is completed (${project.status}) but still has an open delivery milestone.`);
    }
  }
  if (!isOverview && !COMPLETED_STATUSES.has(project.status) && !hasOpenDeliveryMilestone) {
    error(`${label} is not completed (${project.status}) but has no open milestone.`);
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
    if (
      hasText(source.url) &&
      (/(?:^|\/)docs\/source-pdfs\//i.test(source.url) ||
        /\.pdf(?:$|[?#])/i.test(source.url))
    ) {
      error(`${sourceLabel} must link to a public webpage rather than a PDF: ${source.url}`);
    }
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
    if (
      hasText(localized.value) &&
      !LOCALIZED_NON_MONETARY_VALUES.has(localized.value.trim()) &&
      !LOCALIZED_MONETARY_VALUE.test(localized.value)
    ) {
      error(
        `${projectLabel(project)} Bahasa Melayu value must be an amount-only monetary figure, Tidak didedahkan, or Tidak berkenaan: ${localized.value}`
      );
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

function checkInclusionRegister(activeProjects) {
  let register;
  try {
    register = JSON.parse(
      readFileSync(new URL("../audit/project-inclusion.json", import.meta.url), "utf8")
    );
  } catch (caught) {
    error(`Inclusion register could not be read: ${caught.message}`);
    return;
  }

  if (register.schemaVersion !== 1) error("Inclusion register schemaVersion must be 1.");
  if (!ISO_DATE.test(register.reviewedOn || "")) {
    error("Inclusion register reviewedOn must use ISO YYYY-MM-DD.");
  }
  if (!register.overview || register.overview.canonicalName !== "PCDS 2030 — Overarching Framework") {
    error("Inclusion register must keep the framework overview separate from card counts.");
  } else if (
    register.overview.categoryId !== OVERVIEW_ID ||
    register.overview.isOverview !== true ||
    register.overview.excludedFromCardCounts !== true
  ) {
    error("Inclusion register overview must be marked as an excluded overview record.");
  } else if (!Array.isArray(register.overview.inclusionBasis) || register.overview.inclusionBasis.length === 0) {
    error("Inclusion register overview must include an inclusion basis.");
  } else {
    register.overview.inclusionBasis.forEach((basis, index) => {
      checkText(basis?.source, `Inclusion overview, basis ${index + 1} source`);
      checkText(basis?.locator, `Inclusion overview, basis ${index + 1} locator`);
      checkText(basis?.relationship, `Inclusion overview, basis ${index + 1} relationship`);
    });
  }

  const cards = Array.isArray(register.cards) ? register.cards : [];
  if (!Array.isArray(register.cards)) error("Inclusion register cards must be an array.");
  const scope = register.scope || {};
  Object.entries(APPROVED_INCLUSION_SCOPE).forEach(([key, expected]) => {
    if (scope[key] !== expected) error(`Inclusion register scope ${key} must remain ${expected}.`);
  });
  if (cards.length !== APPROVED_INCLUSION_SCOPE.auditedCardCount) {
    error(`Inclusion register must contain ${APPROVED_INCLUSION_SCOPE.auditedCardCount} audited card records; found ${cards.length}.`);
  }

  const activeNames = new Set(activeProjects.map(({ project }) => project.name));
  const registerNames = new Set();
  const registeredActiveNames = new Set();
  const monitoredNames = new Set();
  const componentNames = new Set();
  const tierCounts = Object.fromEntries([...INCLUSION_TIERS].map((tier) => [tier, 0]));

  cards.forEach((card, index) => {
    const label = `Inclusion record ${index + 1}${hasText(card?.canonicalName) ? ` (${card.canonicalName})` : ""}`;
    checkText(card?.canonicalName, `${label} canonicalName`);
    checkText(card?.categoryId, `${label} categoryId`);
    if (!allowedCategoryIds.has(card?.categoryId) || card?.categoryId === OVERVIEW_ID) {
      error(`${label} must use a valid non-overview tracker category.`);
    }
    if (registerNames.has(card?.canonicalName)) error(`${label} duplicates a canonical name.`);
    registerNames.add(card?.canonicalName);
    if (!TRACKED_UNITS.has(card?.trackedUnit)) error(`${label} has an unsupported trackedUnit: ${card?.trackedUnit}`);
    if (!INCLUSION_TIERS.has(card?.inclusion?.tier)) {
      error(`${label} has an unsupported inclusion tier: ${card?.inclusion?.tier}`);
    } else {
      tierCounts[card.inclusion.tier] += 1;
    }
    if (!Array.isArray(card?.inclusion?.basis) || card.inclusion.basis.length === 0) {
      error(`${label} must include at least one inclusion basis.`);
    } else {
      card.inclusion.basis.forEach((basis, basisIndex) => {
        checkText(basis?.source, `${label}, basis ${basisIndex + 1} source`);
        checkText(basis?.locator, `${label}, basis ${basisIndex + 1} locator`);
        checkText(basis?.relationship, `${label}, basis ${basisIndex + 1} relationship`);
      });
    }
    if (card?.identityChecked !== true || card?.scopeResolved !== true) {
      error(`${label} must record resolved identity and scope.`);
    }
    if (card?.liveEvidencePresent !== true) error(`${label} must record live public evidence.`);
    checkHttpsUrl(card?.liveEvidenceUrl, `${label} liveEvidenceUrl`);
    if (hasText(card?.liveEvidenceUrl) && /\.pdf(?:$|[?#])/i.test(card.liveEvidenceUrl)) {
      error(`${label} live evidence must be a webpage rather than a PDF.`);
    }
    if (!ISO_DATE.test(card?.lastReviewed || "")) error(`${label} lastReviewed must use ISO YYYY-MM-DD.`);

    if (card?.disposition === "active") {
      registeredActiveNames.add(card.canonicalName);
      if (card?.inclusion?.decision !== "included") error(`${label} active disposition requires an included decision.`);
      if (card?.inclusion?.tier === "unconfirmed") error(`${label} active cards cannot use the unconfirmed tier.`);
      if (card?.evidenceGap !== null) error(`${label} active cards must not retain an inclusion evidence gap.`);
      if (!activeNames.has(card.canonicalName)) error(`${label} is active in the register but absent from trackerData.js.`);
      const matchingProject = activeProjects.find(({ project }) => project.name === card.canonicalName);
      if (matchingProject && matchingProject.sector.id !== card.categoryId) {
        error(`${label} categoryId does not match trackerData.js.`);
      }
    } else if (card?.disposition === "monitored_unconfirmed") {
      monitoredNames.add(card.canonicalName);
      if (card?.inclusion?.decision !== "defer_for_evidence" || card?.inclusion?.tier !== "unconfirmed") {
        error(`${label} monitored disposition requires defer_for_evidence and unconfirmed.`);
      }
      if (activeNames.has(card.canonicalName)) error(`${label} is monitored but still appears in trackerData.js.`);
      checkText(card?.evidenceGap, `${label} evidenceGap`);
      checkText(card?.followUp, `${label} followUp`);
    } else {
      error(`${label} has an unsupported disposition: ${card?.disposition}`);
    }

    if (card?.reviewClass === "manual_component_approval") {
      componentNames.add(card.canonicalName);
      if (card?.inclusion?.tier !== "component") error(`${label} component approval must use the component tier.`);
      if (!card?.manualApproval || !ISO_DATE.test(card.manualApproval.approvedOn || "")) {
        error(`${label} requires a dated manual approval.`);
      }
      checkText(card?.manualApproval?.rationale, `${label} manual approval rationale`);
    } else if (card?.reviewClass === "standard") {
      if (card?.manualApproval !== null) error(`${label} standard review must not contain a manual approval.`);
    } else {
      error(`${label} has an unsupported reviewClass: ${card?.reviewClass}`);
    }
  });

  if (registeredActiveNames.size !== APPROVED_INCLUSION_SCOPE.expectedActiveCount) {
    error(`Inclusion register must contain ${APPROVED_INCLUSION_SCOPE.expectedActiveCount} active records; found ${registeredActiveNames.size}.`);
  }
  if (monitoredNames.size !== APPROVED_INCLUSION_SCOPE.expectedMonitoredCount) {
    error(`Inclusion register must contain ${APPROVED_INCLUSION_SCOPE.expectedMonitoredCount} monitored records; found ${monitoredNames.size}.`);
  }
  if (componentNames.size !== APPROVED_INCLUSION_SCOPE.expectedManualComponentApprovalCount) {
    error(`Inclusion register must contain ${APPROVED_INCLUSION_SCOPE.expectedManualComponentApprovalCount} manual component approvals; found ${componentNames.size}.`);
  }
  Object.entries(APPROVED_TIER_COUNTS).forEach(([tier, expected]) => {
    if (tierCounts[tier] !== expected) {
      error(`Inclusion register tier ${tier} must remain ${expected}; found ${tierCounts[tier]}.`);
    }
  });
  if (activeNames.size !== registeredActiveNames.size || [...activeNames].some((name) => !registeredActiveNames.has(name))) {
    error("Every active tracker card must have exactly one active inclusion record.");
  }
  if (
    componentNames.size !== COMPONENT_APPROVALS.size ||
    [...COMPONENT_APPROVALS].some((name) => !componentNames.has(name))
  ) {
    error("Manual component approvals do not match the approved project set.");
  }
  if (
    monitoredNames.size !== MONITORED_UNCONFIRMED.size ||
    [...MONITORED_UNCONFIRMED].some((name) => !monitoredNames.has(name))
  ) {
    error("Monitored records do not match the approved unconfirmed project set.");
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
  if (
    hasText(project?.value) &&
    !NON_MONETARY_VALUES.has(project.value.trim()) &&
    !MONETARY_VALUE.test(project.value)
  ) {
    error(`${label} value must be an amount-only monetary figure, Not disclosed, or Not applicable: ${project.value}`);
  }
  checkMilestones(project, { isOverview: sector.id === OVERVIEW_ID });
  checkSources(project);
}

checkLocalization(canonicalProjects);
checkInclusionRegister(canonicalProjects.filter(({ sector }) => sector.id !== OVERVIEW_ID));

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
