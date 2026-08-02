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
3. Data-freshness link immediately above the summary metrics, with a subtle `↗` cue that opens the
   matching-language update history.
4. Summary metrics, which also provide the primary status filters.
5. Two-column project-card grid on desktop.
6. One-column project-card grid on mobile.
7. Footer disclaimer and source-methodology note.

The PCDS context belongs near the title so readers understand the dashboard at first glance.
Keep it succinct and integrated with the introduction rather than placing a separate About section
below the project grid.

The introduction uses a maximum reading width of about `720px`. This keeps the text visually
connected to the compact title block and avoids an overly wide paragraph slab on desktop.

Summary metric boxes provide simple status navigation before readers scan the project cards. Their
active, hover, focus, and press states make the filtering behavior discoverable without duplicating
the same choices in a second pill group. The active classification-clear chip remains separate because
category filters originate inside the project cards.

The language, theme, and navigation pills use one shared physical system: a fully rounded capsule,
an `11px` label, and a `36px` total height on desktop. The language control retains its segmented
outer shell. Status filtering belongs to the summary metrics, while the Milestones metric resets
filters and provides a bulk expand/collapse control for all projects.

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

Milestone dates are stored as compact source values but formatted consistently in the interface. Full dates use day, full month, and year; month targets use full month and year; and quarter targets use `Quarter # YYYY` in English and `Suku # YYYY` in BM. Milestones without a published date, including continuous work without a single completion date, omit the date label and render as compact bullet points under the existing `Remaining Milestones` heading. Reserve `Ongoing` for project status rather than milestone timing. Do not add a second title for undated milestone lists. The next-milestone date is visually separated from its description so readers can scan timing and outcome independently.

Segmented milestone indicators follow the milestone-array order. Completed segments must remain
contiguous from the left, followed by open segments, so the visual sequence agrees with the
completed count shown beside it. On mobile, the count stays beside the label and segments, shrinking
the segments slightly and wrapping within the remaining inline space instead of dropping below the
indicator row.

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
  the most important strategy facts, including the explicitly named Sarawak GDP-growth target,
  and the `project tracker` phrase. When emphasized copy changes, update the exact emphasis phrase
  mappings in `src/App.jsx` for both English and Bahasa Melayu so the treatment remains aligned.
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

Project-card status badges display the project state using the shared neutral treatment. Category colour is
reserved for the classification pill so the filterable identity remains easy to scan.

Sector colors are stored in `src/trackerData.js` and appear primarily on the classification pills and
their interactive filter states.

Category colour should be reserved for project identity and filtering, especially the joined classification
pill. Status badges, milestone indicators, dates, next milestone surfaces, source badges, and expand
controls use a shared neutral palette so the dashboard stays credible and scan-first. Summary metrics
use separate neutral surfaces, modest gaps, and quiet borders so the dashboard hierarchy stays calm.

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
  and update-history pages. Each language option gently lifts and gains a tinted surface on
  hover or keyboard focus, with a small press response. When the alternate option is being
  hovered or focused, the selected option temporarily flattens so attention follows the
  alternate choice. The site
  kicker, main title, and project titles remain in English in both modes so the identity and project
  names stay consistent across the tracker and its sources. In BM copy, the borrowed English phrase
  `'Project tracker'` is enclosed in single quotation marks in the introduction and footer, while
  the category label `Enabler` is presented as `Pemboleh`.
- The icon theme button switches between light and dark modes and remembers the selection. Its
  icon crossfades and rotates between moon and sun states, while the button lifts into a soft
  tinted surface with a subtle shadow on hover or keyboard focus and gives a small press response.
- The `Projects`, `Planning`, `Ongoing`, and `Completed` summary metrics are interactive status
  filters. They use `aria-pressed`, a restrained hover/focus lift, and a persistent active treatment;
  the active `Projects` metric stays neutral and flat, while the narrower status metrics retain the
  pressed treatment. Hovering another metric temporarily flattens the selected metric so attention
  follows the target.
  On initial load or refresh, metric values count up with a short eased reveal; reduced-motion
  preferences show the final values immediately.
  The `Milestones` metric uses `aria-expanded` to reset status and category filters, show all projects,
  and expand their details; clicking it again collapses all projects. While it is active, the status
  metrics remain available but are visually unselected. Choosing another status or category filter
  collapses expanded cards before applying the new filter. The separate status pill
  group is intentionally omitted so the dashboard has one primary status-filtering path. Applying a
  status or category filter briefly fades the current card grid out, then reveals the filtered cards
  with a short lead-in, a row-aware stagger, and a restrained scale transition; reduced-motion
  preferences bypass this transition.
- Each project card's joined classification pill morphs into two separated filter buttons on hover
  or keyboard focus. The solid `Sector` or `Enabler` half filters the broad group, while the named
  half filters the specific category. The two halves stay in flow and ease through their overlap
  over `440ms`, creating a small separation without an abrupt positioning reflow. The card grid does
  not move, while touch layouts keep the joined geometry for the same two targets. Mobile cards reserve
  only the chevron's space for this control and let long category labels wrap inside the pill rather
  than hiding them behind an ellipsis. The interaction is disabled when reduced motion is requested. A
  compact active-filter pill remains above the grid so a classification filter can always be cleared,
  including when its combination with a status filter returns no cards.
- Project cards expand and collapse. A collapsed card's `View details` control rests as a bare down
  chevron inside a fixed hit area; expanded cards use the same control with an up chevron. Hover or
  keyboard focus on hover-capable devices, including hovering the card itself, reveals a soft neutral
  rounded-square surface and slight lift without changing the control's size. On touch devices, the
  same control treatment appears briefly while the card is pressed, while the parent card button
  preserves the localized accessible expand/collapse label.
- Whole cards use a restrained neutral hover/focus treatment on pointer devices: a small lift, stronger
  neutral border, and soft shadow while their white surface and category classification colours remain
  unchanged. Touch presses mirror that lift and shadow for immediate feedback, then return to the
  resting state after release instead of retaining a browser-dependent hover state.
- Source links open in a new tab.
- The linked last-updated control rests as plain metadata in the standard muted text colour, aligned with
  the hero text. Hover or keyboard focus reveals one soft tinted pill aligned with the summary metrics and
  filters while its label eases slightly right into the pill. The low-opacity `↗︎` cue becomes fully
  visible on hover or focus. The fixed hit area prevents flicker, resizing, or a nested inner surface.
  Each update page keeps a visible top-left link back to its matching-language tracker, while entries
  link only to their supporting public sources.
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
- On touch or coarse-pointer devices, project-card classification controls stay separated so both
  filter targets remain discoverable without relying on hover.

The update history uses a date column and content column on desktop, then becomes a single-column
entry list below `760px`. It uses the same neutral surfaces, typography, theme control, and
environment badge as the tracker without reproducing the dashboard metrics or filters. Its return
link uses the same two-layer pill language as the header controls: neutral at rest, with the inner
selected treatment and brand text colour appearing on hover or keyboard focus. Every update reuses
the tracker card's joined classification badge for `Sector` or `Enabler` and the specific area, but
keeps it non-interactive because filtering is scoped to the tracker grid.

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
