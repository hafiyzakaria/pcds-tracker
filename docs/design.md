# Design Notes

## Current Design Direction

The current site is a compact civic-data tracker. It should feel clear, restrained, and evidence-oriented rather than promotional.

The design direction is:

- Light and dark theme surfaces built from the same restrained neutral palette.
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

1. Kicker with compact language and theme controls, followed by the title.
2. Two short introductory paragraphs covering the strategy and tracker purpose.
3. Linked last-updated pill with a `↗` symbol, which opens the matching-language update history.
4. Summary metrics.
5. Status filter buttons.
6. Two-column project-card grid on desktop.
7. One-column project-card grid on mobile.
8. Footer disclaimer and source-methodology note.

The PCDS context belongs near the title so readers understand the dashboard at first glance.
Keep it succinct and integrated with the introduction rather than placing a separate About section
below the project grid.

The introduction uses a maximum reading width of about `720px`. This keeps the text visually
connected to the compact title block and avoids an overly wide paragraph slab on desktop.

Filter controls provide simple status navigation before readers scan the project cards.

The language, theme, and navigation pills use one shared physical system: a fully rounded capsule,
an `11px` label, and a `36px` total height on desktop. The language control retains its segmented
outer shell. The status filters keep their established compact grouped treatment so they remain
visually secondary to the dashboard summary.

The update history uses the existing last-updated pill as its entry point. Do not add a separate
navigation line beneath it or let the link compete with the project summary metrics.

Badges, filters, sorting, and summary counts use the same public status. If a detailed source status such as `Operational`, `Designated`, or `Enacted` still has an unfinished delivery milestone, the card is presented as `Ongoing` until that milestone is completed or removed as routine operational work.

Collapsed project cards prioritize category, title, status, milestone count/progress, next milestone, and the details affordance. Expanded cards keep evidence, milestone history, and source links close to the claims they support. The next-or-completed milestone callout remains visible in both states. Expanded milestone lists omit the milestone already promoted into that callout so each milestone appears only once.

Expanded project facts show the reported-value column only when a monetary figure has been
published. Cards whose internal value remains `Not disclosed` omit the column entirely and let the
lead or parties fact span the available width. The column returns automatically when a verified
monetary value is added; the public interface does not display a `Not disclosed` placeholder.

Project titles use a short public-facing `displayName` when the canonical source name starts with a lead organisation, places an acronym before the full name, or needs a long descriptive suffix. Canonical `name` values remain available for stable project identity. Public titles should put the project or facility first, place acronyms in parentheses, and leave lead organisations to the `Lead / parties` field unless they are part of the official project name. The word `Project` is retained only when it is important to the recognised name.

Collapsed desktop titles reserve a shared two-line, `44px` title area at the existing `18px` size. This keeps status and milestone content aligned without making the project order depend on viewport-specific title wrapping. The All view sorts cards by the public status sequence `Planning`, `Ongoing`, then `Completed`, with titles alphabetised inside each group. Mobile remains a one-column layout.

Milestone dates are stored as compact source values but formatted consistently in the interface. Full dates use day, full month, and year; month targets use full month and year; quarter targets use `Quarter # YYYY` in English and `Suku # YYYY` in BM; milestones without a published date render as compact bullet points under the existing `Remaining Milestones` heading; and open-ended work displays as `Ongoing`. Do not add a second title for undated milestone lists. The next-milestone date is visually separated from its description so readers can scan timing and outcome independently.

Segmented milestone indicators follow the milestone-array order. Completed segments must remain
contiguous from the left, followed by open segments, so the visual sequence agrees with the
completed count shown beside it.

Collapsed desktop cards use a shared minimum height so every two-column row remains visually
aligned even when titles or milestone copy vary. The narrower two-column range from `761px` to
`980px` uses a slightly taller shared minimum to accommodate wrapped titles, milestone counts, and
BM copy. Mobile cards return to content-driven heights in the one-column layout, and their internal
grid and flex rows must be allowed to shrink so narrow screens do not clip card content.

## Typography

The app imports Inter from Google Fonts inside `src/App.jsx`, with system font fallbacks.

Current type style:

- Strong bold headings.
- Small uppercase labels for metadata.
- Compact body text for project summaries and milestones.
- Introductory copy at `16px` with a `1.6` line height and restrained dark-gray emphasis on only
  the most important strategy facts and the `project tracker` phrase.
- A compact `11px` linked last-updated pill so freshness metadata remains visible without competing
  with the introduction.
- No decorative display font.

## Color

Main interface colors:

- Light theme: white surfaces with deep navy and slate-gray text.
- Dark theme: charcoal `#121212` page background with lighter neutral surfaces, high-contrast
  slate, and near-white text. The neutral base keeps the teal brand and project category colours
  clear while retaining comfortable separation between the page and raised surfaces.
- Emphasized phrases in the introductory copy use white in dark mode so the key strategy facts
  remain visibly distinct from the muted body text.
- Brand/accent: teal `#0d9488` in light mode and a brighter teal treatment in dark mode.
- Development environment: orange `#f97316`.
- Preview environment: purple `#7c3aed`.

Project-card status badges display the project state, but their colour follows the project sector/enabler accent rather than an independent status colour.

Sector colors are stored in `src/trackerData.js` and appear on card accents, category pills, project-card status badges, milestone indicators, completed milestone dates, and source badges.

Category colour should be strongest on project identity and progress signals, especially category pills and milestone bars. Supporting elements such as status pills, next milestone surfaces, source badges, summary metric accents, and expand controls should use lighter tints, outlines, or thinner accents so the dashboard stays credible and scan-first.

## Components

The tracker UI is primarily implemented as React functions inside `src/App.jsx`. Shared route
controls and the update history have separate focused components.

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
- Shared route controls in `src/SiteControls.jsx`
- The editorial update history in `src/UpdatesPage.jsx`

Most component layout styling remains inline in `src/App.jsx`. Shared light/dark color tokens,
focus treatment, and theme-icon visibility live in `src/index.css`, with responsive and animation
rules in the inline `<style>` block in `App`.

## Interaction

Current interactions:

- `EN | BM` controls switch the hydrated presentation without a document reload and retain real
  route links for direct navigation and fallback. The same pill treatment appears on the tracker
  and update-history pages. The site
  kicker, main title, and project titles remain in English in both modes so the identity and project
  names stay consistent across the tracker and its sources. In BM copy, the borrowed English phrase
  `'Project tracker'` is enclosed in single quotation marks in the introduction and footer, while
  the category label `Enabler` is presented as `Pemboleh`.
- The icon theme button switches between light and dark modes and remembers the selection.
- Status filter buttons change the visible cards.
- Project cards expand and collapse.
- Source links open in a new tab.
- The linked last-updated pill opens the matching-language update history. Each update page keeps
  a visible top-left link back to its matching-language tracker, while entries link only to their
  supporting public sources.
- The last-updated pill uses the text-presentation sequence `U+2197 U+FE0E` for its `↗︎` symbol so
  mobile platforms do not substitute an emoji glyph.
- The BM introduction and footer quote the borrowed phrase `'Project tracker'`, while navigation
  pills use the unquoted label `Project tracker`.
- Environment badge is fixed at the bottom-right in non-production environments.

The expansion animation respects `prefers-reduced-motion`.

## Responsive Behavior

The app switches to a mobile layout below `760px`.

Current mobile changes:

- Header controls remain compact beside the kicker and may tighten their spacing.
- Main padding reduces.
- Project grid becomes one column.
- Project cards remove the fixed desktop minimum height.
- Summary metrics become two columns.
- Desktop milestone metric is hidden.
- Mobile milestone summary appears.
- Project fact blocks stack vertically.
- At widths up to `760px`, the shared language, theme, and navigation pill height increases to
  `40px`. This improves touch comfort while keeping their visual rhythm consistent.

The update history uses a date column and content column on desktop, then becomes a single-column
entry list below `760px`. It uses the same neutral surfaces, typography, theme control, and
environment badge as the tracker without reproducing the dashboard metrics or filters. Its return
link uses the same two-layer pill language as the header controls: neutral at rest, with the inner
selected treatment and brand text colour appearing on hover or keyboard focus. Every update reuses
the tracker card's joined classification badge for `Sector` or `Enabler` and the specific area.

## Environment Indicators

Environment indicators are intentionally small and unobtrusive:

- Development shows `DEV`.
- Preview shows `PREVIEW`.
- Production shows no badge.

This is a professional workflow pattern. It prevents the owner from mistaking a test build for the public website. It is recommended and common for internal, staging, and preview environments.

Development, Preview, and Production use the same project-card behavior so local review matches
both deployed sites. Environment-specific presentation is limited to the badge and favicon.

## Known Design Constraints

- Most layout styling is inline, so repeated non-color visual patterns remain harder to change consistently.
- Theme color tokens live in `src/index.css`; there is no separate JavaScript design-token module.
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
- Keep the update history editorial and source-led. Do not style it as a product changelog or
  promotional news feed.
- Test any card or typography change on mobile before release.
