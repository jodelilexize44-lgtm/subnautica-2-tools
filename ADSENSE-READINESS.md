# Subnautica 2 Tools AdSense Readiness

Use this checklist before applying for AdSense or adding live ad code. The site should stay useful and source-led first; ads come after Google can crawl, understand, and trust the pages.

## Current Decision

**Do not apply yet.**

The site shell is strong enough for ongoing operation, but AdSense should wait until Google Search Console shows stable indexing and real impressions. Applying too early risks a "needs attention" review loop before the site has enough proven search demand.

## Current Score

| Area | Status | Notes |
|---|---|---|
| Site ownership | Partial | GitHub Pages is live and GSC verification file exists. AdSense account/site connection still requires account access. |
| Indexable content | Good | Core pages, long-tail pages, sitemap, robots, canonical tags, and internal links are in place. |
| Trust pages | Good | About, Privacy, and Contact exist and explain editorial policy, correction workflow, local storage, and future ads/affiliate disclosure. |
| Content quality | Good but data-light | Pages are useful templates and tools, but exact resource/blueprint/map/save data still needs official, direct-test, or labeled community evidence. |
| Traffic proof | Not ready | GSC query/impression data has not been recorded yet. |
| Ad implementation | Not started | No live ad scripts. This is correct for the current stage. |
| Affiliate implementation | Not started | No affiliate links. This is correct until hardware/store queries prove demand. |

## Official AdSense Requirements To Track

| Requirement | Project action |
|---|---|
| Own or control the site you submit. | Use the verified GitHub Pages property or a future custom domain. Keep the Google verification file published. |
| Add the site in AdSense and complete required account tasks before review. | Requires user account access. After setup, check the site status in AdSense Sites. |
| Site must be accessible to AdSense crawlers. | Keep pages public, crawlable, and avoid blocking crawlers in `robots.txt`. |
| Follow AdSense program policies. | Do not encourage ad clicks, use deceptive placements, popups, auto-refresh, or artificial traffic. |
| Privacy disclosures must match active ads/analytics. | Update `legal/privacy.html` when Google ads, analytics, consent messages, or affiliate tracking goes live. |
| Wait for the site status to become Ready. | Do not add broad ad placements until AdSense marks the site ready. |

Official references:

- AdSense eligibility: https://support.google.com/adsense/answer/9724/eligibility-requirements-for-adsense
- Add/connect a site: https://support.google.com/adsense/answer/12169212
- Site status: https://support.google.com/adsense/answer/12170222
- Program policies: https://support.google.com/adsense/answer/48182
- Required privacy content: https://support.google.com/adsense/answer/1348695

## Apply / Do Not Apply Gate

| Gate | Apply only when |
|---|---|
| Indexed pages | 10+ important pages are indexed, not just legal pages. |
| GSC impressions | Search Console shows repeated impressions over several days. |
| Useful content | At least the high-intent pages answer their core query without thin placeholders. |
| Trust pages | About, Privacy, Contact, source policy, and correction policy are live. |
| No fake data | No unverified resource, blueprint, biome, room, material, save path, or compatibility claims are published as facts. |
| Traffic quality | Traffic comes from organic search, direct visits, or helpful community links, not paid-to-click or spam. |
| Ad placement plan | Ads are low-intrusion and not confused with navigation, download buttons, or tool controls. |

## Current Blockers

| Blocker | Owner | Action |
|---|---|---|
| GSC performance data needed | Codex + user account access | Export or screenshot Search Console Performance and Pages reports, then record in `GSC-QUERY-LOG.md`. |
| Real production contact email | User | Choose domain/email when the production domain is settled. |
| AdSense account/site connection | User account access | Create or open AdSense, add the site, complete account tasks, and share status. |
| Live ads privacy update | Codex after AdSense setup | Update Privacy with active provider, cookies, consent, and opt-out details before ad scripts go live. |
| `ads.txt` decision | Codex after AdSense approval | Add only if AdSense provides a publisher ID and requires it for this deployment. |

## Low-Intrusion Ad Placement Plan

Do not add ads to the top of urgent pages.

| Page type | Allowed later | Avoid |
|---|---|---|
| System / settings / handheld | Sidebar and after FAQ. | Fake download buttons or ad blocks near form controls. |
| Game Pass / release / roadmap | Sidebar and after comparison tables. | Ads above the main answer. |
| Crash fix / beginner | After troubleshooting tree or after FAQ only. | Ads before the player can solve the urgent problem. |
| Resource / base / map / blueprint | Between long sections after useful content. | Ads inside tracker controls or table headers. |

## Affiliate Gate

Affiliate links should wait longer than AdSense.

| Signal | Action |
|---|---|
| Specs/settings/handheld pages get repeat impressions | Research relevant SSD, controller, handheld, GPU/RAM categories. |
| No hardware query demand | Do not add affiliate links. |
| Affiliate links are added | Add clear disclosure near links and keep recommendations conservative. |
| Product data changes often | Re-check prices/specs before publishing. |

## Next Operating Steps

1. Record GSC Pages and Performance data in `GSC-QUERY-LOG.md`.
2. Fix pages with impressions but poor CTR or position 20-50.
3. Keep collecting official, direct-test, or repeated community data for co-op, saves, crashes, handhelds, resources, blueprints, and maps.
4. Re-run this readiness checklist after there are stable impressions.
5. Only then connect AdSense and request review.
