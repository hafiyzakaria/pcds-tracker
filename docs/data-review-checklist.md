# Data Review Checklist

Use this checklist for a release that changes project facts, Bahasa Melayu project rendering, editorial updates, or tracked-project coverage. The [data methodology](data-methodology.md) is mandatory and remains the complete evidence standard; this is its release checklist.

## Evidence and content

- [ ] Read and followed `docs/data-methodology.md`; completed a dated record using the [project research template](project-research-template.md).
- [ ] The mandatory `"[exact project name]" project milestones` discovery pass was run for every reviewed live project and every triggered excluded or deferred candidate; ordinary web results were reviewed whether or not an AI Overview was available.
- [ ] Separate discovery searches covered value, status, milestones, lead or party roles, and newer contradictory evidence; AI Overview citations were collected when available.
- [ ] Every changed claim has a verified public source link; discovery snippets and AI Overviews were not treated as evidence, and every accepted underlying page was opened.
- [ ] AI-generated claims were compared with the visible source wording; generated scope changes, combinations, role assignments, dates, and currency conversions were not copied without source support.
- [ ] Every available AI Overview or search-summary citation group, including hidden `+n` links, was expanded before the discovery pass was considered complete.
- [ ] Source qualifiers such as `about`, `up to`, `over`, `between`, `allocated`, and `committed` were preserved rather than strengthened or converted into a different claim.
- [ ] Source-page publication dates, exact project/phase/location identity, claim wording, and affected fields were checked.
- [ ] The card's tracked unit and every monetary claim's scope were classified as project-only, combined-card, shared infrastructure, programme, portfolio, or economic impact before acceptance.
- [ ] Every monetary candidate was classified by value type, and rejecting an aggregate or unsuitable amount did not end the search for a project-specific value.
- [ ] Any `Not disclosed` value has a completed search-exhaustion record covering English and BM terms, aliases, official domains, numeric follow-ups, cited underlying pages, and newer project-specific evidence.
- [ ] Each live source contains a visible, attributable claim that names the exact project and directly supports a displayed field; broader speeches, releases, and reports were accepted when their project-specific passage carries evidence, while mere name-drops and unsupported context were excluded.
- [ ] Status, value, milestone completion, and completion language match the evidence strength; source conflicts and false positives are recorded.
- [ ] The reported-value field contains only a compact monetary figure, or the approved unknown label; estimate, allocation, investment, contract, phase, commitment, and year qualifiers appear in the summary or source label.
- [ ] Historical estimates identify their year and value type in the summary or source record; image-only official milestone evidence was inspected directly; supported and superseded claims from the same source were evaluated separately.
- [ ] Owner, developer, implementing agency, operator, contractor, investor, regulator, and partner roles were distinguished; the lead field does not infer responsibility from an announcement or passing association.
- [ ] Each non-completed card retains an evidence-supported open outcome, and an intermediate announcement, approval, agreement, design stage, or contract does not make the project appear fully complete.
- [ ] Open milestones read as pending outcomes rather than completed events; completed milestones use definitive past-tense wording.
- [ ] New project additions passed the template's stricter PCDS inclusion gate.
- [ ] Every active card has exactly one active record in `audit/project-inclusion.json`; no active
  record uses the `unconfirmed` tier, and every monitored record is absent from `src/trackerData.js`.
- [ ] Every `component` inclusion has explicit manual approval with a date and rationale, and every
  monitored deferral records an evidence gap and observable follow-up trigger.
- [ ] Every exclusion or deferral records its review date, evidence gap, exact identity or alias, and a follow-up date or observable re-review trigger.
- [ ] `LAST_UPDATED` in `src/trackerData.js` is updated when the dashboard data changed, and its methodology note remains accurate.
- [ ] Required BM entries in `src/localization.js` faithfully reflect the English evidence; missing translations safely fall back to English.
- [ ] The `src/updateHistory.js` decision is explicit: add an entry for a meaningful reflected public development, or record why none is needed.
- [ ] Source labels and URLs are valid, relevant, non-duplicative where practical, and accurately describe the linked publisher/page.
- [ ] Live-card sources are public webpages rather than PDF files; strategy and report PDFs remain in the research record only.
- [ ] Content shape and field-level consistency pass `npm run check:content`.

## Technical and release checks

- [ ] Run `npm run lint` successfully.
- [ ] Run `npm run build:preview` successfully.
- [ ] Review all four built routes locally: `/`, `/bm/`, `/updates/`, and `/bm/updates/`.
- [ ] Push the focused change to `preview` and review it at [preview.pcds2030.com](https://preview.pcds2030.com), including source links, language rendering, and responsive card behaviour as applicable.
- [ ] Obtain Preview review and explicit approval before merging or promoting to `main`.

Record any skipped check, failure, or exception with its reason and follow-up owner before release.
