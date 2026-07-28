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

## Legacy hostname migration

On 24 July 2026, the legacy `https://tracker.hafiy.my/` hostname was restored through an isolated
Vercel redirect project. HTTP requests upgrade to HTTPS, and HTTPS returns a permanent `301`
redirect to the canonical Production site at `https://pcds2030.com/`. Paths and query parameters
are preserved.

The `hafiy.my` domain property was verified in Google Search Console, and a temporary prefix
removal was submitted for `https://tracker.hafiy.my/`. The removal request helps suppress the old
hostname while Google processes the migration, but it does not replace the permanent redirect.

Keep the redirect and its `tracker` CNAME active until at least 24 July 2027. Keep the Google
ownership-verification TXT record indefinitely so the old-domain Search Console property remains
available. A retirement review is scheduled for 24 July 2027 at 09:00 Asia/Kuching. Remove the
redirect only when all of these conditions are confirmed:

- Google no longer indexes legacy-hostname URLs;
- the old-domain Search Console property shows no meaningful impressions, clicks, or other
  activity;
- no valuable incoming links or referrals still depend on the legacy hostname; and
- the live DNS and Vercel configuration have been checked immediately before removal.

If any condition remains uncertain, retain the redirect and schedule another review. The
verification TXT record must not be included in redirect cleanup.

## Performance review

Use rolling 28-day windows once enough Production data exists. Review:

- impressions;
- clicks;
- click-through rate;
- average position;
- queries and query breadth; and
- landing-page performance.

Compare `/` and `/bm/` separately so English and Malay search demand are not blended. Review
`/updates/` and `/bm/updates/` by both page and query to see whether the editorial history
is earning visibility for project names, sectors, status, and update-related searches in each
language.

Record the comparison period and data freshness with every review. Avoid conclusions from a few
days of volatile data, repeated indexing requests, or title changes made before a stable baseline
forms.
