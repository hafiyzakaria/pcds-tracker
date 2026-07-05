# Backlog

This backlog documents known issues and recommended next tasks. It is not a promise that every item must be done immediately.

## Recommended Next Tasks

### 1. Display Data Freshness

Status: recommended

`src/trackerData.js` has `LAST_UPDATED`, but the UI does not currently display it.

Why this matters:

- Readers can see how fresh the tracker is.
- The owner is reminded to refresh stale project data.
- This is common for public data trackers.

Suggested implementation:

- Show "Last updated: 2026-07-02" near the footer or under the page description.

### 2. Add A Data Review Checklist

Status: recommended

Create a repeatable checklist for updating project data.

Why this matters:

- Prevents accidental unsourced claims.
- Helps a solo AI-assisted developer maintain consistency.
- Common in editorial and data-maintenance workflows.

Suggested checklist:

- Confirm the source URL still opens.
- Confirm the source date.
- Confirm whether the milestone is done or still open.
- Update `LAST_UPDATED`.
- Review Preview before merging to Production.

### 3. Add Automated Link Checking

Status: optional but useful

Source links are central to trust, but they are not checked automatically.

Why this matters:

- Broken source links reduce credibility.
- Manual link checking is easy to forget.
- Automated link checking is common for documentation and public trackers.

Suggested implementation:

- Add a lightweight link-check script later.
- Run it before production releases.

### 4. Add Basic Tests For Data Shape

Status: recommended

There are no automated tests for project data shape.

Why this matters:

- A missing `sources`, `milestones`, or `status` field can break the UI.
- A data-shape test catches mistakes before deployment.
- This is common in maintainable data-driven apps.

Suggested implementation:

- Add a small test script that checks every project has required fields.
- Keep it dependency-light if possible.

### 5. Split Large App File When Needed

Status: optional for now, recommended before major UI changes

Most UI currently lives in `src/App.jsx`.

Why this matters:

- Large files become harder for humans and AI agents to edit safely.
- Smaller components reduce accidental unrelated changes.
- Component splitting is common in React projects.

Suggested implementation:

- Split only when making related changes.
- Good first split candidates: `ProjectCard`, `SummaryMetrics`, `FilterBar`, and environment badge.

### 6. Extract Design Tokens

Status: optional

Colors, fonts, and spacing are currently repeated inline.

Why this matters:

- Reduces inconsistent future styling.
- Makes small visual maintenance safer.
- Common in mature design systems, but not required for a small solo project.

Suggested implementation:

- Start with a small `src/designTokens.js`.
- Move shared colors and font stack first.

### 7. Decide Whether Preview Should Differ From Production

Status: recommended decision

Preview currently enables preview-specific card behavior through `shouldUsePreviewCards(environment)`.

Why this matters:

- Preview is usually expected to match production as closely as possible before release.
- Environment-only visual differences can make review less reliable.
- Environment badges and favicons are good differences; product layout differences need a clear reason.

Suggested action:

- Keep current behavior for now because it already exists.
- Decide later whether Preview should exactly match Production except for badge and favicon.

### 8. Add Content Source Notes

Status: optional

The repository includes PCDS PDFs under `PCDS 2030/`, but there is no documentation explaining how they relate to tracker content.

Why this matters:

- Future maintainers need to know which sources are authoritative.
- It prevents mixing official strategy sources with news updates without context.

Suggested implementation:

- Add a future `docs/data-sources.md`.
- Explain official PCDS PDFs versus ongoing public news sources.

## Known Issues And Risks

- Data freshness is manual.
- Source links are not automatically checked.
- `LAST_UPDATED` is not displayed.
- Most UI and styling live in one large file.
- There are no data-shape tests.
- There is no automated visual regression check.
- Preview and Production may differ beyond environment indicators.

## Done Recently

- Added Development, Preview, and Production environment detection.
- Added environment favicons.
- Added Development and Preview badges.
- Added branch-based workflow documentation.
- Removed the old query-string preview URL behavior.
