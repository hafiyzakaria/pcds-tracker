# Data Review Checklist

Use this checklist for a release that changes project facts, Bahasa Melayu project rendering, editorial updates, or tracked-project coverage. The [data methodology](data-methodology.md) is mandatory and remains the complete evidence standard; this is its release checklist.

## Evidence and content

- [ ] Read and followed `docs/data-methodology.md`; completed a dated record using the [project research template](project-research-template.md).
- [ ] Every changed claim has a verified, project-specific public source link; discovery snippets and AI Overviews were not treated as evidence.
- [ ] Source-page publication dates, exact project/phase/location identity, claim wording, and affected fields were checked.
- [ ] Status, value, milestone completion, and completion language match the evidence strength; source conflicts and false positives are recorded.
- [ ] New project additions passed the template's stricter PCDS inclusion gate.
- [ ] `LAST_UPDATED` in `src/trackerData.js` is updated when the dashboard data changed, and its methodology note remains accurate.
- [ ] Required BM entries in `src/localization.js` faithfully reflect the English evidence; missing translations safely fall back to English.
- [ ] The `src/updateHistory.js` decision is explicit: add an entry for a meaningful reflected public development, or record why none is needed.
- [ ] Source labels and URLs are valid, relevant, non-duplicative where practical, and accurately describe the linked publisher/page.
- [ ] Content shape and field-level consistency pass `npm run check:content`.

## Technical and release checks

- [ ] Run `npm run lint` successfully.
- [ ] Run `npm run build:preview` successfully.
- [ ] Review all four built routes locally: `/`, `/bm/`, `/updates/`, and `/bm/updates/`.
- [ ] Push the focused change to `preview` and review it at [preview.pcds2030.com](https://preview.pcds2030.com), including source links, language rendering, and responsive card behaviour as applicable.
- [ ] Obtain Preview review and explicit approval before merging or promoting to `main`.

Record any skipped check, failure, or exception with its reason and follow-up owner before release.
