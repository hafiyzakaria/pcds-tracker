# x.ai design study

Local concept requested on 5 September 2026. Open `/?concept=xai` with the Vite development server.

The reference homepage was reviewed in the in-app browser. Its white surface, centred large headline,
wide spacing, rounded actions and softly outlined panels inform this study. PCDS retains teal accents,
its existing copy, real project data, search, category filters, status metrics and card expansion.

The navigation uses the production PCDS favicon without a text title. The home link retains an
accessible name. The reference navigation measures 64px high with 1232px of centred content at a
1470px viewport. The concept matches these dimensions and uses smaller side margins on mobile.

The concept supports light and dark themes. Language and theme controls appear at the right of the
navigation bar on desktop. On mobile, the language control moves into the hamburger menu and is
centred with the menu links, while the theme control remains beside the menu button. Language and
page changes retain the concept query parameter and search query.
The language selector has one outer border and a soft teal active fill, without a separator or
inner outline. Desktop mouse controls are 32px high to match the logo. Touch devices retain
44px language targets and 46px theme/menu buttons.
The description uses the full content width so each sentence can occupy one desktop line.
Text wraps naturally on smaller screens; there is no forced no-wrap or smaller type.
At widths up to 760px, Projects, Updates, About and the language control move into a small menu
below the navigation.
The menu closes on selection, outside press, Escape, or return to desktop width. Escape returns
focus to its button. Desktop links remain visible. These changes are local pending review.
The last-updated date is plain text with no link, border or animation.
It uses semibold weight for subtle emphasis. The kicker is a plain, spaced uppercase label,
with no capsule border or background.
The two title lines rise and fade in once, 100ms apart. A teal underline reveals from left to
right and the description fades in. The sequence finishes within 950ms. These effects run
only when reduced motion is not requested. The date and project data remain static.
The hero uses reduced vertical spacing while retaining the headline size: desktop padding is
48px above and 24px below; mobile padding is 32px above and 20px below. The gap after the date
is 36px on desktop and 24px on mobile.
It is not the public release design. The query switch is development-only. A separate v2 build
sets `VITE_DESIGN_CONCEPT=xai` and runs `npm run build:preview`. Both client and server rendering
use this flag. Normal builds without the flag retain the existing design.
The planned unlisted address is `v2.pcds2030.com`, on a separate Vercel project. It is not private.
Preview builds and the Vercel response header use noindex. Do not link v2 from the public site.

The left-aligned comparison was rejected. The kicker, title, underline, description and update
date are centred again. Type sizes, spacing and motion are unchanged.
Cards retain the original 3px hover lift, stronger border and hover shadow while keeping the
concept's rounded shape. Keyboard focus receives the same border and shadow. Existing
touch-device and reduced-motion rules remain in effect. This adjustment is local pending review.

## Review deployment

The hero now uses 72px top and 32px bottom padding on desktop, and 48px top
and 24px bottom on mobile. This adds breathing room without matching the much
taller reference hero. The name reveal uses clipping and translation, not text
compression. Navigation entrance completion is retained in Site state; keyboard
focus ends it permanently for that page load, so route focus cannot restart it.
The Projects hero now uses the reference-style word entrance for its product
title after the navigation finishes its logo transformation. Project and
Tracker rise from 42% below with a -28 degree X rotation, scale from 96%, and
clear a 2px blur as they settle over 680ms. Tracker uses 720ms and follows
120ms after Project. A restrained overshoot keeps the movement visible without
changing the final layout. Reduced-motion preferences show the title without
the effect.

On initial load, the hero leads for 800ms. The full PCDS 2030 Project Tracker
name then appears, holds briefly, and contracts towards the logo over a 1600ms
sequence. Project Tracker is teal. The logo settles to its normal size.
Desktop links and utility controls fade in over 300ms after the logo sequence.
Keyboard focus skips the decorative sequence so navigation remains usable.
Their layout positions do not change. The persistent navigation does not replay this
effect during page changes. Mobile menu links appear without an entrance delay.
Reduced-motion preferences disable the navigation entrance effects.
The About heading retains programmatic focus without a browser outline after navigation.

Navigation uses the same DOM and visual order: Projects, Updates, About. The current page
has `aria-current="page"` and a thin teal underline, including in the mobile menu.

Cards reveal once per page visit as they enter the viewport: a 20px rise and fade over 450ms,
with a 70ms delay for the second card in a row. The effect does not block rendering, does not
replace hover transforms, and is skipped during filter transitions or with reduced motion.

Navigation links show a soft rounded neutral highlight on hover and keyboard focus, without
moving the text. Hovering or focusing the alternate language removes the selected language's
fill and highlights the alternate. The selected fill returns when interaction ends; selection
does not change until activation. Hover effects are limited to mouse/trackpad devices.

The local v2 hero no longer shows the Sarawak Development Monitor kicker. Desktop hero
padding is 32px above and 20px below. Footer navigation matches Projects, Updates, About
and Contact, with Malay labels and concept-preserving links. V1 footer labels are unchanged.

The v2 navigation stays at the top while scrolling on desktop and mobile. It keeps its
64px layout space, with a full-width page-colour background and a thin bottom border.
Anchor scrolling reserves 80px so targets are not hidden behind the navigation. The mobile
menu opens below the sticky bar. This refinement is local pending review.

Projects in the concept navigation opens the tracker at the top, without a `#projects`
anchor. Selecting it while already on the tracker also returns to the top. The mobile
menu uses the same link and closes on selection.

The local Updates hero shares the Projects title scale, centred layout and teal second line.
Its English title is PCDS 2030 / Tracker Updates. The redundant back-control row is hidden
only in the concept, and the introduction is centred across the content width.
Project Tracker also uses teal. The original non-concept Updates layout remains available.

Local refinement: About introduction and body use the same full content width as the footer.
About and Updates have a stronger one-time entrance: titles rise 32px and fade in, followed
by the introduction and staggered content. Delays stop at 340ms, so long update lists do not
wait progressively longer. Reduced-motion preferences disable these effects.

The About page is available in English and Malay from desktop navigation and the mobile menu.
The language control retains the About route. Source content and project data are unchanged.
Use the `codex/v2-review` branch for this review design, separate from routine preview releases.

The concept is deployed to the separate `pcds-tracker-v2` Vercel project:
https://pcds-tracker-v2.vercel.app . Public access returns HTTP 200 with
`X-Robots-Tag: noindex, nofollow`. The centred concept was verified in the browser.
The existing production and preview projects were not changed.

`v2.pcds2030.com` is assigned to the new project. Cloudflare has an A record named `v2`
pointing to `76.76.21.21`, DNS only, TTL Auto. Vercel confirms valid DNS and verified
ownership. HTTPS was still pending at the initial check. The root domain, preview record
and nameservers were not changed.
