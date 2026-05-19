# Subnautica 2 Tools AdSense Readiness

Use this checklist before applying for AdSense or adding live ad code. The site should stay useful and source-led first; ads come after Google can crawl, understand, and trust the pages.

## Current Decision

**Prepare, but do not apply yet.**

The site shell is strong enough for ongoing operation, and Search Console now shows real impressions and clicks. A real contact inbox is now listed. AdSense should still wait until the sitemap status refreshes from "Couldn't fetch" and the AdSense account/site connection is ready.

## 2026-05-19 Monetization Audit

| Area | Current read | What still needs to happen |
|---|---|---|
| Content depth | Stronger than before. The site now has a player hub, download/install guide, database index, gallery/media rules, and database evidence framework. | Keep replacing research queues with verified rows as official, direct-test, or labeled community evidence appears. Do not submit thin placeholder-only pages as if they are finished databases. |
| Search proof | Good early signal. GSC snapshot recorded 364 clicks and 14.1K impressions over the selected 3-month view, mostly crash traffic. Public live crawl checks now pass for robots, sitemap, contact page, and Googlebot sitemap access. | 2026-05-19 15:22 GSC detail still says Sitemap could not be read, but the correct sitemap URL is being used and XML/public fetch tests pass. Sitemap was resubmitted successfully; wait for the new processing result before applying. |
| Trust pages | About, Privacy, Contact, Advertise exist and explain source policy, corrections, local storage, future ads, and sponsorship rules. | Done: reachable inbox listed as `jodelilexize44@gmail.com`. Replace with a custom-domain inbox later if desired. |
| Empty ad slots | Pages contain future ad containers, but live ad code is not active. | Keep placeholders hidden from the user until AdSense is approved or a direct campaign exists. Do not show blank ad boxes during review. |
| Privacy and consent | Privacy page says no ad provider is active yet. | Before live Google ads, disclose Google/third-party cookies, personalization, user controls, consent handling for EEA/UK users, and opt-out links. |
| `ads.txt` | Not present. This is correct until a publisher ID exists. | Add only after AdSense provides the exact publisher ID, then verify it from the deployed root URL. |
| Affiliate | Not active. This is correct. | Wait for stable hardware/store-intent queries, then add clear disclosure near any affiliate link and in privacy notes. |
| Direct sponsorship | Policy page exists. | Needs real traffic proof, contact inbox, and brand-safe placement inventory before outreach. |

## Current Score

| Area | Status | Notes |
|---|---|---|
| Site ownership | Partial | GitHub Pages is live and GSC verification file exists. AdSense account/site connection still requires account access. |
| Indexable content | Good | Core pages, long-tail pages, sitemap, robots, canonical tags, and internal links are in place. |
| Trust pages | Good | About, Privacy, Contact, and Advertise exist and explain editorial policy, correction workflow, local storage, future ads/affiliate disclosure, and a reachable inbox. |
| Content quality | Good but data-light | Pages are useful templates, tools, and database frameworks, but exact resource/blueprint/map/save data still needs official, direct-test, or labeled community evidence. |
| Traffic proof | Good | GSC shows 364 clicks, 14.1K impressions, 2.6% CTR, and average position 8 over the selected 3-month view. Traffic is concentrated on crash queries. |
| Ad implementation | Not started | No live ad scripts. Empty ad placeholders should stay hidden until approval or real inventory exists. |
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
| Maintain a good user experience. | Do not show fake download buttons, blank ad boxes, popups, sticky overlays, or ads before urgent crash/beginner answers. |

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
| GSC performance data needed | Done | 2026-05-18 GSC snapshot recorded in `GSC-QUERY-LOG.md`. |
| Sitemap status stale | Codex | 2026-05-19 15:22 GSC detail says Sitemap could not be read. Correct URL confirmed, XML validates locally, Googlebot GET returns 200 application/xml, and UI resubmission succeeded. Wait for GSC to process the new submission. |
| Real production contact email | Done | Reachable inbox configured: `jodelilexize44@gmail.com`. A custom-domain inbox can replace it later. |
| Public crawlability | Done | 2026-05-19 live checks: robots.txt 200, sitemap.xml 200, contact page 200, Googlebot user-agent gets 200 for sitemap, sitemap has 26 URLs. |
| AdSense account/site connection | User account access | Create or open AdSense, add the site, complete account tasks, and share status. |
| Live ads privacy update | Codex after AdSense setup | Privacy has been prepared with future Google ads/cookie language, but must be updated again with active provider, consent, and deployment-specific details before ad scripts go live. |
| `ads.txt` decision | Codex after AdSense approval | Add only if AdSense provides a publisher ID and requires it for this deployment. |
| Empty ad placeholders | Done | Hide empty ad slots before approval; show only after a real ad provider or sponsorship exists. |

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

1. Recheck GSC Pages, Sitemaps, and Performance inside Search Console; record the current snapshot in `GSC-QUERY-LOG.md`.
2. Contact blocker is resolved with `jodelilexize44@gmail.com`; replace with a custom-domain inbox later if desired.
3. Keep empty ad placeholders hidden until AdSense approval or direct sponsorship inventory exists.
4. Fix pages with impressions but poor CTR or position 20-50.
5. Keep collecting official, direct-test, or repeated community data for co-op, saves, crashes, handhelds, resources, blueprints, and maps.
6. When sitemap/indexing/contact/privacy are ready, connect AdSense and request review.
7. After approval, add `ads.txt` only with the exact publisher ID, then add one or two low-intrusion placements.
