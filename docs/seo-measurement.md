# SEO Measurement After Production Release

This checklist applies only after an approved Production release. Local and Preview builds can
verify technical implementation, but they cannot provide live Google impressions, clicks, or
indexing results.

## Release and crawl checks

1. Confirm these Production URLs return indexable `200` HTML:
   - `https://pcds2030.com/`
   - `https://pcds2030.com/bm/`
   - `https://pcds2030.com/updates/`
   - `https://pcds2030.com/bm/updates/`
2. Confirm each page has the intended title, description, self-referencing canonical, and rendered
   page content in the initial HTML.
3. Confirm both the tracker and update-history language pairs expose reciprocal `en-MY`, `ms-MY`,
   and `x-default` `hreflang` links.
4. Confirm `https://pcds2030.com/sitemap.xml` lists all four routes.
5. In Google Search Console, inspect the four URLs after deployment. Record whether Google has
   crawled and indexed them, which canonical Google selected, and whether language alternates are
   understood.

Do not report a Search Console result until the route is live on Production and Google has had an
opportunity to discover or crawl it. A successful build or sitemap entry is not evidence of
indexing.

## Performance review

Use rolling 28-day windows once enough Production data exists. Review:

- impressions;
- clicks;
- click-through rate;
- average position;
- queries and query breadth; and
- landing-page performance.

Compare `/` and `/bm/` separately so English and Malay search demand are not blended. Review
Compare `/updates/` and `/bm/updates/` by both page and query to see whether the editorial history
is earning visibility for project names, sectors, status, and update-related searches in each
language.

Record the comparison period and data freshness with every review. Avoid conclusions from a few
days of volatile data, repeated indexing requests, or title changes made before a stable baseline
forms.
