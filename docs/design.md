# Design Notes

## Current Design Direction

The current site is a compact civic-data tracker. It should feel clear, restrained, and evidence-oriented rather than promotional.

The design direction is:

- White background.
- Editorial dashboard layout.
- Compact project cards.
- Clear status labels.
- Sector colors used as accents.
- Minimal decoration.
- Source links visible inside expanded cards.

Do not redesign this direction without explicit user approval.

## Layout

The page uses one centered column with a maximum width of about `1040px`.

Current layout order:

1. Kicker and title.
2. Two short introductory paragraphs covering the strategy and tracker purpose.
3. Last-updated indicator.
4. Summary metrics.
5. Filter buttons.
6. Two-column project-card grid on desktop.
7. One-column project-card grid on mobile.
8. Footer disclaimer and source-methodology note.

The PCDS context belongs near the title so readers understand the dashboard at first glance.
Keep it succinct and integrated with the introduction rather than placing a separate About section
below the project grid.

Filter controls provide status navigation before readers scan the project cards.

Collapsed project cards prioritize category, title, status, milestone count/progress, next milestone, and the details affordance. Expanded cards keep evidence, milestone history, and source links close to the claims they support.

Collapsed desktop cards use a shared minimum height so every two-column row remains visually
aligned even when titles or milestone copy vary. Mobile cards return to content-driven heights in
the one-column layout, and their internal grid and flex rows must be allowed to shrink so narrow
screens do not clip card content.

## Typography

The app imports Inter from Google Fonts inside `src/App.jsx`, with system font fallbacks.

Current type style:

- Strong bold headings.
- Small uppercase labels for metadata.
- Compact body text for project summaries and milestones.
- No decorative display font.

## Color

Main interface colors:

- Text: deep navy and slate grays.
- Brand/accent: teal `#0d9488`.
- Development environment: orange `#f97316`.
- Preview environment: purple `#7c3aed`.

Project-card status badges display the project state, but their colour follows the project sector/enabler accent rather than an independent status colour.

Sector colors are stored in `src/trackerData.js` and appear on card accents, category pills, project-card status badges, milestone indicators, completed milestone dates, and source badges.

Category colour should be strongest on project identity and progress signals, especially category pills and milestone bars. Supporting elements such as status pills, next milestone surfaces, source badges, summary metric accents, and expand controls should use lighter tints, outlines, or thinner accents so the dashboard stays credible and scan-first.

## Components

The UI is currently implemented as React functions inside `src/App.jsx`.

Important components:

- `EnvironmentBadge`
- `SummaryMetrics`
- `FilterBar`
- `ProjectGrid`
- `ProjectCard`
- `StatusBadge`
- `MilestoneIndicator`
- `NextMilestoneCallout`
- `SourceLinks`

Most styling is inline in `src/App.jsx`, with a small amount of global CSS in `src/index.css` and an inline `<style>` block in `App`.

## Interaction

Current interactions:

- Filter buttons change the visible cards.
- Project cards expand and collapse.
- Source links open in a new tab.
- Environment badge is fixed at the bottom-right in non-production environments.

The expansion animation respects `prefers-reduced-motion`.

## Responsive Behavior

The app switches to a mobile layout below `760px`.

Current mobile changes:

- Main padding reduces.
- Project grid becomes one column.
- Project cards remove the fixed desktop minimum height.
- Summary metrics become two columns.
- Desktop milestone metric is hidden.
- Mobile milestone summary appears.
- Project fact blocks stack vertically.

## Environment Indicators

Environment indicators are intentionally small and unobtrusive:

- Development shows `DEV`.
- Preview shows `PREVIEW`.
- Production shows no badge.

This is a professional workflow pattern. It prevents the owner from mistaking a test build for the public website. It is recommended and common for internal, staging, and preview environments.

Development and Preview use the same project-card behavior so local review matches the site that will deploy to `preview.pcds2030.com`.

## Known Design Constraints

- Most styling is inline, so repeated visual patterns are harder to change consistently.
- There is no formal design token file yet.
- There is no component library or Storybook.
- Empty sectors and enablers are not visually represented.

## Design Guardrails For Future Work

- Keep the existing scan-first tracker experience.
- Avoid large hero redesigns.
- Avoid decorative gradients or marketing-style sections.
- Keep status and milestone information easy to compare.
- Keep source links close to the claims they support.
- Keep the strategy context in the concise two-paragraph introduction; do not add a separate
  promotional About section without explicit approval.
- Test any card or typography change on mobile before release.
