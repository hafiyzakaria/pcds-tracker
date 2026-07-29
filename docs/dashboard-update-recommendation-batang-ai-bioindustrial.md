# Dashboard Update Recommendation: Batang Ai and Sarawak Bioindustrial Park

Prepared: 2026-07-08

Superseded for Batang Ai on 2026-07-29: a direct recheck of The Star's 6 October 2025 article
verified its explicit retrospective statement that the 50MW facility was commissioned in
December 2024. The current recommendation is recorded in
`docs/project-audits/2026-07-29-full-milestone-audit.md`. The Sarawak Bioindustrial Park
research below remains useful historical evidence.

Scope: decide what the dashboard should show for the two newly added project cards, using current `src/trackerData.js`, `docs/manual-review-project-addition-plan.md`, `docs/latest-update-check-batang-ai-bioindustrial.md`, and the latest public evidence check.

## Batang Ai Floating Solar Farm

### Current Dashboard Card

- Status: `In Progress`
- Summary: `Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Official sources describe a 50MW facility intended to hybridise hydropower and solar generation and support Sarawak's renewable-energy expansion. Commissioning was targeted for end-October 2024, so the next tracker milestone should verify actual operational status.`
- Milestones:
  - `{ date: "2023-06-20", text: "Construction officially began", done: true }`
  - `{ date: "2024-06-20", text: "Sarawak Energy reported 35 percent construction completion", done: true }`
  - `{ date: "2024-10", text: "Target: commissioning by end-October 2024", done: false }`
  - `{ date: "TBD", text: "Confirm commercial operation or latest commissioning status", shortText: "Confirm operational status", done: false }`
- Current next milestone: `Target: commissioning by end-October 2024`
- Sources:
  - `Sarawak Energy - Floating solar commissioning target (Jun 2024)` - https://www.sarawakenergy.com/media-info/media-releases/2024/sarawak-energys-first-floating-solar-farm-on-track-for-commissioning-by-october-2024
- Cautious/provisional wording: The card already treats October 2024 commissioning as a target and leaves confirmation open.

### Latest Evidence Found

- Title: Sarawak Energy's First Floating Solar Farm On Track For Commissioning By October 2024
- URL: https://www.sarawakenergy.com/media-info/media-releases/2024/sarawak-energys-first-floating-solar-farm-on-track-for-commissioning-by-october-2024
- Publisher: Sarawak Energy
- Date: 20 June 2024
- Claim: The project had reached 35 percent construction completion, was targeted for commissioning by end-October 2024, had 50MW capacity, was being developed by a joint venture involving Sarawak Energy, China Power International Holdings, and Trina Solar, and had officially begun construction on 20 June 2023.
- Dashboard field supported: status, lead / parties, reported value, completed construction-start milestone, completed 35 percent progress milestone, open commissioning-target milestone, source
- Confidence: high

- Title: Batang Ai Dam
- URL: https://en.wikipedia.org/wiki/Batang_Ai_Dam
- Publisher: Wikipedia
- Date: Page observed in latest-update check as edited 10 November 2025
- Claim: Mentions a 50MW floating solar project installed at Batang Ai in 2025 and cites a CNN Business item. This is not an official or primary source and should not be used as dashboard evidence unless the underlying cited report or an official confirmation is reviewed directly.
- Dashboard field supported: none recommended
- Confidence: low

- Title: Sarawak and Malaysia news-site search pass
- URL: Search only; no suitable source found
- Publisher: DayakDaily, The Borneo Post, New Sarawak Tribune, Bernama, The Star, New Straits Times, Malay Mail, The Edge Malaysia
- Date: Search performed 2026-07-08
- Claim: Targeted news-site searches did not find a reliable article confirming commissioning, commercial operation, completion, or grid export for the Batang Ai Floating Solar Farm.
- Dashboard field supported: cautious wording for status and milestone treatment
- Confidence: medium

### Recommended Dashboard Changes

- Field: `status`
- Current value: `In Progress`
- Recommended value: keep `In Progress`
- Reason: Official evidence supports construction progress and a commissioning target, but does not confirm commissioning or operation.
- Source: Sarawak Energy, 20 June 2024
- Confidence: high
- Risk: low

- Field: `summary`
- Current value: `Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Official sources describe a 50MW facility intended to hybridise hydropower and solar generation and support Sarawak's renewable-energy expansion. Commissioning was targeted for end-October 2024, so the next tracker milestone should verify actual operational status.`
- Recommended value: `Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Official sources describe a 50MW facility intended to hybridise hydropower and solar generation and support Sarawak's renewable-energy expansion. Commissioning was targeted for end-October 2024, but no official commissioning confirmation has been found, so the next tracker milestone should verify operational status.`
- Reason: The public evidence supports the target but not completion. This wording prevents a past target from reading like achieved status.
- Source: Sarawak Energy, 20 June 2024; latest search pass documented in `docs/latest-update-check-batang-ai-bioindustrial.md`
- Confidence: high
- Risk: low

- Field: `milestones[2].text`
- Current value: `Target: commissioning by end-October 2024`
- Recommended value: `Target: commissioning by end-October 2024; confirmation pending`
- Reason: The target is now in the past, and no reliable confirmation source was found. The milestone should remain open.
- Source: Sarawak Energy, 20 June 2024; latest search pass documented in `docs/latest-update-check-batang-ai-bioindustrial.md`
- Confidence: high
- Risk: low

- Field: `milestones[2].done`
- Current value: `false`
- Recommended value: keep `false`
- Reason: No source clearly says the plant was commissioned, launched, completed, or operational.
- Source: Sarawak Energy, 20 June 2024; latest search pass documented in `docs/latest-update-check-batang-ai-bioindustrial.md`
- Confidence: high
- Risk: low

- Field: `sources`
- Current value: Sarawak Energy source only
- Recommended value: keep unchanged
- Reason: No higher-confidence newer public source was found. Wikipedia/CNN-derived references should not be added without direct verification.
- Source: Sarawak Energy, 20 June 2024
- Confidence: high
- Risk: low

### Final Recommendation

Keep cautious wording.

The card should remain `In Progress`, no milestones should be marked `done: true`, and no new source should be added. The only recommended high-confidence dashboard update is a wording update to make the unconfirmed commissioning status explicit.

### Proposed src/trackerData.js Changes

Do not apply yet.

```js
{
  name: "Batang Ai Floating Solar Farm",
  status: "In Progress",
  statusColor: "#d97706",
  lead: "Sarawak Energy / China Power International Holdings / Trina Solar",
  value: "50MW",
  summary:
    "Sarawak Energy's first floating solar farm on the Batang Ai HEP reservoir, developed with China Power International Holdings and Trina Solar. Official sources describe a 50MW facility intended to hybridise hydropower and solar generation and support Sarawak's renewable-energy expansion. Commissioning was targeted for end-October 2024, but no official commissioning confirmation has been found, so the next tracker milestone should verify operational status.",
  milestones: [
    { date: "2023-06-20", text: "Construction officially began", done: true },
    { date: "2024-06-20", text: "Sarawak Energy reported 35 percent construction completion", done: true },
    { date: "2024-10", text: "Target: commissioning by end-October 2024; confirmation pending", done: false },
    {
      date: "TBD",
      text: "Confirm commercial operation or latest commissioning status",
      shortText: "Confirm operational status",
      done: false,
    },
  ],
  sources: [
    { label: "Sarawak Energy - Floating solar commissioning target (Jun 2024)", url: "https://www.sarawakenergy.com/media-info/media-releases/2024/sarawak-energys-first-floating-solar-farm-on-track-for-commissioning-by-october-2024" },
  ],
}
```

## Sarawak Bioindustrial Park

### Current Dashboard Card

- Status: `Planning`
- Summary: `Bioindustry and commercialisation hub intended to turn Sarawak biodiversity research into scalable bio-based production. Official and public sources describe a 100-acre park with industrial plots, pilot bioprocessing, analytical laboratories, GMP manufacturing, and a 2025 BioVerde mandate covering SBP operations.`
- Milestones:
  - `{ date: "Official report", text: "Sarawak Bioindustrial Park listed as a PCDS 2030 bioindustry platform", done: true }`
  - `{ date: "2025", text: "BioVerde Technologies established with SBP operations mandate", done: true }`
  - `{ date: "2027-Q3", text: "Target: Phase 1 construction completion from official report", shortText: "Phase 1 completion target", done: false }`
  - `{ date: "2035", text: "Target: full operations from official report", shortText: "Full operations target", done: false }`
- Current next milestone: `Target: Phase 1 construction completion from official report`
- Sources:
  - `SBC - Sarawak Bioindustrial Park commercialisation` - https://www.sbc.org.my/index.php/commercialisation
  - `BioVerde - Bioindustrial hub and SBP operations` - https://www.bioverde.com.my/
- Cautious/provisional wording: The card uses `Planning`, keeps construction/full-operation targets open, and does not claim physical progress.

### Latest Evidence Found

- Title: Commercialisation - The Official Website of Sarawak Biodiversity Centre
- URL: https://www.sbc.org.my/index.php/commercialisation
- Publisher: Sarawak Biodiversity Centre
- Date: No publication date shown; page footer copyright 2026
- Claim: Identifies Sarawak Bioindustrial Park as a catalytic PCDS 2030 project, describes its bioeconomy role, and lists investment opportunities including 27 industrial plots across four phases.
- Dashboard field supported: category, summary, reported value / scale, source, official-report-listed milestone context
- Confidence: high

- Title: Sarawak Bioindustrial Park
- URL: https://www.bioverde.com.my/sbp
- Publisher: BioVerde Technologies
- Date: No publication date shown; page footer copyright 2026
- Claim: Describes the park as under development; presents the 100-acre masterplan, pilot bioprocessing, analytical labs, GMP manufacturing, hydroelectric power, halal-ready infrastructure, and says anchor and research partners are being selected.
- Dashboard field supported: summary, next milestone wording, source, scale
- Confidence: high for current public-facing project positioning; medium for physical implementation progress because it does not confirm construction start or completion.

- Title: About BioVerde Technologies
- URL: https://www.bioverde.com.my/about
- Publisher: BioVerde Technologies
- Date: No publication date shown; page footer copyright 2026; content says BioVerde was established in 2025
- Claim: Says BioVerde Technologies was established in 2025 as a subsidiary of the Sarawak Biodiversity Council; says BioVerde manages Sarawak Bioindustrial Park and is developing and operating a 100-acre hub.
- Dashboard field supported: lead / parties, 2025 BioVerde milestone, source, summary
- Confidence: high for BioVerde's role and establishment; medium for implementation progress because no construction milestone is confirmed.

- Title: Sarawak and Malaysia news-site search pass
- URL: Search only; no suitable source found
- Publisher: DayakDaily, The Borneo Post, New Sarawak Tribune, Bernama, The Star, New Straits Times, Malay Mail, The Edge Malaysia
- Date: Search performed 2026-07-08
- Claim: Targeted news-site searches did not find a reliable article confirming construction start, physical progress, tenant signings, investment commitment, or operation for Sarawak Bioindustrial Park.
- Dashboard field supported: cautious status and milestone treatment
- Confidence: medium

### Recommended Dashboard Changes

- Field: `status`
- Current value: `Planning`
- Recommended value: keep `Planning`
- Reason: BioVerde's "under development" wording supports active project positioning but does not clearly confirm construction start, physical works, or operations.
- Source: BioVerde SBP page; SBC commercialisation page
- Confidence: high
- Risk: low

- Field: `summary`
- Current value: `Bioindustry and commercialisation hub intended to turn Sarawak biodiversity research into scalable bio-based production. Official and public sources describe a 100-acre park with industrial plots, pilot bioprocessing, analytical laboratories, GMP manufacturing, and a 2025 BioVerde mandate covering SBP operations.`
- Recommended value: `Bioindustry and commercialisation hub intended to turn Sarawak biodiversity research into scalable bio-based production. Official and public sources describe a 100-acre park with industrial plots, pilot bioprocessing, analytical laboratories, and GMP manufacturing; BioVerde describes the park as under development and says anchor and research partners are being selected.`
- Reason: The dedicated BioVerde SBP page is more specific than the homepage and supports cautious current-status wording without claiming construction completion.
- Source: BioVerde SBP page; SBC commercialisation page
- Confidence: high
- Risk: low

- Field: `milestones`
- Current value: official report listed; 2025 BioVerde mandate; 2027-Q3 Phase 1 target; 2035 full operations target
- Recommended value: keep all existing milestones unchanged
- Reason: The latest public evidence does not clearly supersede the official-report target dates and does not confirm a new completed milestone. Partner selection is useful context, but it is not enough to add a dated milestone without a clearer public announcement.
- Source: BioVerde SBP page; BioVerde About page; SBC commercialisation page
- Confidence: high
- Risk: low

- Field: `milestones[*].done`
- Current value: first two `true`, future targets `false`
- Recommended value: keep unchanged
- Reason: The 2025 BioVerde establishment/mandate remains supported, but no construction or operation milestone should be marked complete.
- Source: BioVerde About page; BioVerde SBP page
- Confidence: high
- Risk: low

- Field: `sources`
- Current value:
  - `SBC - Sarawak Bioindustrial Park commercialisation`
  - `BioVerde - Bioindustrial hub and SBP operations`
- Recommended value:
  - `SBC - Sarawak Bioindustrial Park commercialisation`
  - `BioVerde - Sarawak Bioindustrial Park under development`
  - `BioVerde - About BioVerde Technologies`
- Reason: The dedicated SBP page is the best source for the "under development" and partner-selection wording; the About page directly supports the 2025 BioVerde establishment and SBP management mandate. The generic homepage is less precise.
- Source: BioVerde SBP page; BioVerde About page
- Confidence: high
- Risk: low

### Final Recommendation

Update card now.

This should be a cautious update: keep `Planning`, keep milestone completion flags unchanged, replace the less-specific BioVerde homepage source with specific BioVerde SBP/About sources, and adjust the summary to reflect "under development" plus partner selection without claiming construction progress.

### Proposed src/trackerData.js Changes

Do not apply yet.

```js
{
  name: "Sarawak Bioindustrial Park",
  status: "Planning",
  statusColor: "#4f46e5",
  lead: "Sarawak Biodiversity Centre / BioVerde Technologies",
  value: "100-acre bioindustrial hub",
  summary:
    "Bioindustry and commercialisation hub intended to turn Sarawak biodiversity research into scalable bio-based production. Official and public sources describe a 100-acre park with industrial plots, pilot bioprocessing, analytical laboratories, and GMP manufacturing; BioVerde describes the park as under development and says anchor and research partners are being selected.",
  milestones: [
    { date: "Official report", text: "Sarawak Bioindustrial Park listed as a PCDS 2030 bioindustry platform", done: true },
    { date: "2025", text: "BioVerde Technologies established with SBP operations mandate", done: true },
    {
      date: "2027-Q3",
      text: "Target: Phase 1 construction completion from official report",
      shortText: "Phase 1 completion target",
      done: false,
    },
    { date: "2035", text: "Target: full operations from official report", shortText: "Full operations target", done: false },
  ],
  sources: [
    { label: "SBC - Sarawak Bioindustrial Park commercialisation", url: "https://www.sbc.org.my/index.php/commercialisation" },
    { label: "BioVerde - Sarawak Bioindustrial Park under development", url: "https://www.bioverde.com.my/sbp" },
    { label: "BioVerde - About BioVerde Technologies", url: "https://www.bioverde.com.my/about" },
  ],
}
```

## End Summary

1. What should change for Batang Ai: keep the card cautious; update only the summary and October 2024 target milestone wording to make the lack of commissioning confirmation explicit.
2. What should change for Sarawak Bioindustrial Park: keep `Planning`; update the summary to use BioVerde's "under development" / partner-selection evidence; replace the generic BioVerde homepage source with the dedicated SBP and About pages.
3. High-confidence updates: Batang Ai caution wording; Sarawak Bioindustrial Park summary/source updates; all status and milestone-completion flags staying unchanged.
4. Risky updates: marking Batang Ai commissioned or operational; changing Sarawak Bioindustrial Park to `In Progress`; marking any construction/full-operation milestone done; using Wikipedia/CNN-derived Batang Ai information without direct primary confirmation.
5. Recommended implementation prompt: Apply only the high-confidence data updates from `docs/dashboard-update-recommendation-batang-ai-bioindustrial.md` to `src/trackerData.js`: Batang Ai cautious wording only, Sarawak Bioindustrial Park summary/source updates only, no status changes, and no milestone `done` flag changes.
