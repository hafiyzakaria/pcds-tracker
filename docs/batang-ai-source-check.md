# Batang Ai Source Check

Prepared: 2026-07-08

Update, 2026-07-29: The Star page was opened again and its retrospective claim was verified
directly: the 50MW floating solar farm "was commissioned in December last year." Because the
article is dated 6 October 2025, this supports a December 2024 commissioning milestone. The
earlier conservative recommendation below is superseded by
`docs/project-audits/2026-07-29-full-milestone-audit.md`. The card remains `In Progress` because
the additional 120MW expansion is not confirmed complete.

Scope: review two user-provided sources for Batang Ai Floating Solar Farm and decide whether they support updating the dashboard card in `src/trackerData.js`.

## Sources Reviewed

### The Star, 6 Oct 2025

- URL: https://www.thestar.com.my/news/nation/2025/10/06/sarawak-expands-solar-capacity-in-push-for-renewable-energy-says-abang-johari
- Relevant claims:
  - Sarawak will expand solar capacity as part of future renewable-energy plans.
  - Batang Ai floating solar capacity will increase from 50MW to 170MW.
  - Sarawak Energy Bhd will add 120MW at Batang Ai.
  - The expanded Batang Ai installation would become the biggest installed solar-energy facility in Malaysia.
  - The article says the floating solar farm was commissioned in December last year.
  - It describes the plant as Malaysia's first major hybrid generation facility combining hydro and solar.
  - The extra 120MW at Batang Ai is scheduled to roll out next year.
- Dashboard fields supported:
  - Source: yes.
  - Reported value / capacity: supports 50MW existing capacity and planned expansion to 170MW.
  - Lead / parties: supports Sarawak Energy role in the planned 120MW expansion.
  - Summary: supports hydro-solar hybrid positioning and expansion plan.
  - Milestones: may support a commissioning milestone and a future expansion rollout milestone, but the commissioning date conflicts with the MEESty-hosted August 2025 source below.
  - Status: possible support for `Operational`, but not safe alone because of date conflict.
- Confidence: medium to high for the expansion plan; medium for commissioning status because the timing conflicts with the MEESty-hosted source.

### MEESty Sarawak

- URL: https://meesty.sarawak.gov.my/web/subpage/news_view/54
- Relevant claims:
  - MEESty hosts a news page titled `Minister: Batang Ai floating solar plant set for December launch`.
  - Posted on 19 August 2025.
  - Source of news: The Borneo Post.
  - The page says the 50MW facility at Batang Ai Dam is scheduled to begin operations this December.
  - It says the facility covers only three percent of the dam surface area, leaving room for expansion to other hydro reservoirs such as Murum and Bakun.
  - It quotes Utility and Telecommunication Minister Dato Sri Julaihi Narawi and frames the project as supporting Sarawak's green-energy hub ambition.
- Dashboard fields supported:
  - Source: yes.
  - Reported value / capacity: supports 50MW.
  - Milestone: supports a December operations-launch target, but not completion.
  - Summary: supports green-energy hub / reservoir-floating-solar positioning.
  - Status: supports keeping the project as not-yet-confirmed operational as of 19 August 2025.
- Confidence: high that MEESty published the item and that the page supports a December 2025 operations target; medium for current operational status because it is still a forward-looking claim.

## Current Dashboard Card

- Status: `In Progress`
- Summary: `Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Official sources describe a 50MW facility intended to hybridise hydropower and solar generation and support Sarawak's renewable-energy expansion. Commissioning was targeted for end-October 2024, but no official commissioning confirmation has been found, so the next tracker milestone should verify operational status.`
- Milestones:
  - `{ date: "2023-06-20", text: "Construction officially began", done: true }`
  - `{ date: "2024-06-20", text: "Sarawak Energy reported 35 percent construction completion", done: true }`
  - `{ date: "2024-10", text: "Target: commissioning by end-October 2024; confirmation pending", done: false }`
  - `{ date: "TBD", text: "Confirm commercial operation or latest commissioning status", shortText: "Confirm operational status", done: false }`
- Sources:
  - `Sarawak Energy - Floating solar commissioning target (Jun 2024)` - https://www.sarawakenergy.com/media-info/media-releases/2024/sarawak-energys-first-floating-solar-farm-on-track-for-commissioning-by-october-2024

## Recommended Dashboard Changes

- Field: `status`
- Current value: `In Progress`
- Recommended value: keep `In Progress`
- Supporting source: MEESty Sarawak, The Star, Sarawak Energy
- Reason: The new sources strengthen the evidence that the project moved beyond the old 2024 target window, but MEESty says operations were scheduled for December 2025 while The Star says the facility was commissioned in December last year. Because the timing conflicts, do not move to `Operational` until a clearer official Sarawak Energy or ministry confirmation is reviewed.
- Confidence: medium
- Risk: medium

- Field: `summary`
- Current value: `Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Official sources describe a 50MW facility intended to hybridise hydropower and solar generation and support Sarawak's renewable-energy expansion. Commissioning was targeted for end-October 2024, but no official commissioning confirmation has been found, so the next tracker milestone should verify operational status.`
- Recommended value: `Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Public sources describe a 50MW hydro-solar hybrid facility and later reporting points to a December operations or commissioning milestone, but the exact commissioning confirmation date needs review. Sarawak Energy is also reported to be planning an additional 120MW expansion at Batang Ai.`
- Supporting source: MEESty Sarawak; The Star, 6 Oct 2025; Sarawak Energy, 20 June 2024
- Reason: The old wording says no confirmation was found. The user-provided sources now provide stronger evidence of later operations/commissioning reporting, but the exact date remains unresolved.
- Confidence: medium
- Risk: medium

- Field: `value`
- Current value: `50MW`
- Recommended value: `50MW; 170MW planned`
- Supporting source: The Star, 6 Oct 2025; MEESty Sarawak
- Reason: MEESty supports the 50MW facility; The Star reports a planned increase from 50MW to 170MW with an additional 120MW by Sarawak Energy.
- Confidence: medium
- Risk: low to medium

- Field: `milestones[2]`
- Current value: `{ date: "2024-10", text: "Target: commissioning by end-October 2024; confirmation pending", done: false }`
- Recommended value: `{ date: "2025-12", text: "Reported operations or commissioning milestone; exact confirmation date needs review", shortText: "Operations/commissioning review", done: false }`
- Supporting source: MEESty Sarawak; The Star, 6 Oct 2025
- Reason: The 2024 target is outdated. The newer sources point to a December operations/commissioning milestone, but conflict on whether this was December 2024 or December 2025.
- Confidence: medium
- Risk: medium

- Field: `milestones`
- Current value: no expansion milestone
- Recommended value: add `{ date: "2026", text: "Target: additional 120MW Batang Ai floating solar expansion rollout", shortText: "120MW expansion rollout", done: false }`
- Supporting source: The Star, 6 Oct 2025
- Reason: The Star reports Sarawak Energy will add 120MW at Batang Ai and that the extra 120MW is scheduled to roll out next year. Since it is a target, keep `done: false`.
- Confidence: medium
- Risk: medium

- Field: `milestones[*].done`
- Current value: construction start and 35 percent progress `true`; commissioning and confirmation milestones `false`
- Recommended value: keep all existing and proposed commissioning/expansion completion flags as `false`
- Supporting source: MEESty Sarawak; The Star, 6 Oct 2025
- Reason: The Star may support a commissioned claim, but the date conflict means it should not be marked complete until manually reviewed or confirmed by a clearer official source.
- Confidence: high
- Risk: low

- Field: `sources`
- Current value: Sarawak Energy June 2024 source only
- Recommended value: add MEESty Sarawak and The Star sources
- Supporting source: MEESty Sarawak; The Star, 6 Oct 2025
- Reason: Both are relevant newer public sources. MEESty is an official ministry-hosted page and The Star adds expansion and commissioning context.
- Confidence: high
- Risk: low

## Final Recommendation

Manual review first.

The new sources are useful and should likely be added, but they are not clean enough to update the card to `Operational` or mark commissioning `done: true` without a human decision. The safest path is to manually review the December commissioning/operations date conflict, then apply a conservative update that:

- keeps status as `In Progress`;
- does not mark any new milestone `done: true`;
- replaces the outdated October 2024 commissioning target with a December operations/commissioning review milestone;
- adds an open 2026 expansion rollout target;
- adds the MEESty and The Star sources.

## Proposed src/trackerData.js Changes

Do not apply yet. This is a conservative implementation candidate if the reviewer accepts keeping the status cautious while adding the newer sources.

```js
{
  name: "Batang Ai Floating Solar Farm",
  status: "In Progress",
  statusColor: "#d97706",
  lead: "Sarawak Energy / China Power International Holdings / Trina Solar",
  value: "50MW; 170MW planned",
  summary:
    "Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Public sources describe a 50MW hydro-solar hybrid facility and later reporting points to a December operations or commissioning milestone, but the exact commissioning confirmation date needs review. Sarawak Energy is also reported to be planning an additional 120MW expansion at Batang Ai.",
  milestones: [
    { date: "2023-06-20", text: "Construction officially began", done: true },
    { date: "2024-06-20", text: "Sarawak Energy reported 35 percent construction completion", done: true },
    {
      date: "2025-12",
      text: "Reported operations or commissioning milestone; exact confirmation date needs review",
      shortText: "Operations/commissioning review",
      done: false,
    },
    {
      date: "2026",
      text: "Target: additional 120MW Batang Ai floating solar expansion rollout",
      shortText: "120MW expansion rollout",
      done: false,
    },
    {
      date: "TBD",
      text: "Confirm commercial operation date or latest commissioning status",
      shortText: "Confirm operational status",
      done: false,
    },
  ],
  sources: [
    { label: "Sarawak Energy - Floating solar commissioning target (Jun 2024)", url: "https://www.sarawakenergy.com/media-info/media-releases/2024/sarawak-energys-first-floating-solar-farm-on-track-for-commissioning-by-october-2024" },
    { label: "MEESty Sarawak - Batang Ai floating solar December launch target (Aug 2025)", url: "https://meesty.sarawak.gov.my/web/subpage/news_view/54" },
    { label: "The Star - Sarawak solar expansion and Batang Ai capacity (Oct 2025)", url: "https://www.thestar.com.my/news/nation/2025/10/06/sarawak-expands-solar-capacity-in-push-for-renewable-energy-says-abang-johari" },
  ],
}
```
