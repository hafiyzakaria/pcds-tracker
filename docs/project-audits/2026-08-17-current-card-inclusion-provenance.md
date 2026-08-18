# Current Card Inclusion Provenance Audit

- Review date: 2026-08-17
- Review type: site-wide inclusion and tracked-unit audit
- Scope: the 50 project cards active before this review, excluding the separate PCDS framework overview
- Method: [data methodology](../data-methodology.md), [project research template](../project-research-template.md), and [data review checklist](../data-review-checklist.md)
- Decision authority: the three component relationships and the two monitored dispositions were approved by the site owner on 17 August 2026

> **18 August 2026 follow-up:** SMART and the combined CSTR programme were added as direct cards.
> The register now contains 52 audited identities: 50 active and two monitored, with 35 direct,
> 12 official-linked, three component and two unconfirmed records. The SMD GaN `trackedUnit` was
> corrected from `programme` to `component`; its approved inclusion tier did not change.

## Result

| Inclusion outcome | Count | Active after review |
| --- | ---: | ---: |
| Direct/core PCDS unit | 33 | 33 |
| Official PCDS-linked supplementary or Phase 2 unit | 12 | 12 |
| Manually approved component relationship | 3 | 3 |
| Unconfirmed PCDS relationship, monitored | 2 | 0 |
| **Audited identities** | **50** | **48** |

The three approved component cards are a subset of the 48 active cards. They are not an additional
category outside the active count. The two unconfirmed identities remain in
`audit/project-inclusion.json` so later evidence can trigger a review without presenting them as
confirmed PCDS cards.

## Inclusion tiers applied

- `direct`: the exact tracked unit is named in the core PCDS strategy, highlights, or AIP reports.
- `official_linked`: the exact unit appears in an official supplementary PCDS publication,
  Sustainability Vision 2030, or the Sarawak 13th Malaysia Plan as a PCDS-aligned continuation or
  delivery project.
- `component`: the exact card is a distinct, publicly trackable delivery component of a named PCDS
  programme or zone and has explicit manual approval.
- `unconfirmed`: the project exists and may align with Sarawak policy, but the reviewed sources do
  not establish an acceptable PCDS relationship.

The complete card-by-card basis, exact document locators, live evidence URLs, tracked-unit decisions,
approval records and monitoring triggers are stored in `audit/project-inclusion.json` and enforced
by `npm run check:content`.

## Manual component approvals

| Card | Authoritative relationship | Decision |
| --- | --- | --- |
| SMD Semiconductor — GaN Chip Development | The wider SMD semiconductor and chip-design programme is official; GaN is treated as a later public delivery output | Retain as an active component card |
| Environment (Reduction of Greenhouse Gases Emission) Ordinance 2023 | The ordinance is an implementation mechanism for PCDS and 13MP greenhouse-gas governance | Retain as an active policy-implementation card |
| Baram Agrovoltaic Project | The exact project is a public, trackable component of the officially named Baram Renewable Energy Economic Zone | Retain as an active component card |

## Moved to monitored candidates

| Identity | Evidence established | Missing inclusion evidence | Follow-up trigger |
| --- | --- | --- | --- |
| FutureData — Kuching Data Centre Park | The exact project, developer, first off-taker and Sarawak Digital Economy Blueprint relationship | No reviewed authoritative source names the exact project as part of PCDS 2030 or an approved PCDS delivery programme | Re-review when a PCDS, 13MP, Sarawak Government, InvestSarawak or delivery-owner publication explicitly connects the exact project to PCDS 2030 |
| Sarawak High Performance Centre | UKAS establishes the exact centre, Sarawak Sports Complex site, planning stage and MYSED delivery role; the 13MP separately names a Sarawak High Performance Sports Centre | No reviewed authoritative source conclusively resolves the 13MP unit as the exact UKAS project or otherwise connects the exact card to PCDS 2030 | Re-review when MYSED, UKAS, a budget document, PCDS report or 13MP implementation publication resolves the identity and relationship |

Both projects were `Planning`, so removing them changes the active tracker from 50 to 48 cards and
the public Planning count from 9 to 7. Their historical research remains in the repository, but
their active data, BM localization and active editorial-history references were removed.

## Corrections resolved during review

- Sarawak Delta Geopark is direct PCDS evidence, supported by the PCDS Highlights report on PDF
  pages 42 and 55. It is not merely an adjacent tourism designation.
- One-Stop Early Intervention Centre (OSEIC) Miri is direct PCDS evidence, supported by the PCDS
  Highlights report on PDF pages 66 and 72. The second locator lists it among significant
  initiatives and resolves the earlier uncertainty.

## Release and future-addition gate

After implementation, the active inventory contains 48 cards plus one separately excluded PCDS
framework overview. The provenance register preserves all 50 audited identities: 48 active and two
monitored.

Future card additions are paused until the candidate has:

1. a resolved tracked unit and exact identity;
2. an authoritative inclusion tier and locator;
3. explicit approval if the relationship is component-level;
4. at least one live public project-specific webpage;
5. evidence-supported status, value, milestones, lead roles and open outcome; and
6. a unique register record that passes `npm run check:content`.

No editorial update-history entry is added for this review. Moving the two cards is an evidence-scope
correction to the tracker, not a new public development in either project.
