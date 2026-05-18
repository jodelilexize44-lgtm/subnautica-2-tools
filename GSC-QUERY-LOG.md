# Subnautica 2 Tools GSC Query Log

Use this file when Google Search Console starts showing impressions. The goal is to turn real search demand into focused page updates without guessing game data.

## Daily GSC Snapshot

| Date | Total clicks | Total impressions | Avg CTR | Avg position | Indexed pages | Notes |
|---|---:|---:|---:|---:|---:|---|
| 2026-05-18 | 364 | 14.1K | 2.6% | 8 | 11 | GSC Performance last update 3 hours ago. Page indexing shows 1 not indexed page: Alternate page with proper canonical tag. Sitemap `/sitemap.xml` was showing Couldn't fetch, but public URL returns 200 and sitemap was resubmitted successfully in GSC. |
|  |  |  |  |  |  |  |

## Query Action Log

| Date | Query | Landing page | Impressions | Clicks | Avg position | Intent | Action | Status |
|---|---|---|---:|---:|---:|---|---|---|
| 2026-05-18 | subnautica 2 crash | `guides/crash-fix.html` | 545 | 34 |  | Crash | Updated title/meta, symptom tree, known issues, exact startup error section, and FAQ. | Done |
| 2026-05-18 | subnautica 2 crashing | `guides/crash-fix.html` | 690 | 19 |  | Crash | Same cluster as above; crash page optimized first. | Done |
| 2026-05-18 | subnautica 2 crash on launch | `guides/crash-fix.html` | 210 | 12 |  | Crash | Added clearer launch/startup crash checklist. | Done |
| 2026-05-18 | subnautica 2 crashes | `guides/crash-fix.html` | 149 | 10 |  | Crash | Same cluster; monitor CTR after page update. | Watch |
| 2026-05-18 | subnautica 2 patch notes | `guides/updates.html` | 206 | 7 |  | Updates | Keep updates page fresh; link crash patch notes back to crash-fix. | Watch |
| 2026-05-18 | subnautica 2 crashing on startup | `guides/crash-fix.html` | 158 | 6 |  | Crash | Added startup-specific safe fix order. | Done |
| 2026-05-18 | subnautica 2 crash on startup | `guides/crash-fix.html` | 133 | 6 |  | Crash | Same startup cluster. | Done |
| 2026-05-18 | subnautica 2 your game might not have exited correctly the last time you played... | `guides/crash-fix.html` | 105 | 6 |  | Crash exact error | Added exact error-message section, kept fixes conservative. | Done |
| 2026-05-18 | subnautica 2 crashes on startup | `guides/crash-fix.html` | 101 | 6 |  | Crash | Same startup cluster. | Done |
| 2026-05-18 | subnautica 2 crashing on launch | `guides/crash-fix.html` | 143 | 5 |  | Crash | Same launch cluster. | Done |
|  |  |  |  |  |  | Specs / Store / Co-op / Crash / Beginner / Resource / Map |  | Todo / Done / Watch |

## Top Pages Snapshot

| Date | Page | Clicks | Impressions | Read |
|---|---|---:|---:|---|
| 2026-05-18 | `guides/crash-fix.html` | 328 | 12,315 | Main traffic page. Optimize first. |
| 2026-05-18 | `guides/updates.html` | 17 | 597 | Patch notes demand exists. Keep fresh and connect to crash fixes. |
| 2026-05-18 | `tools/system-requirements.html` | 8 | 774 | High impressions, low clicks. Review title/snippet after crash page. |
| 2026-05-18 | `/` | 5 | 97 | Homepage receives some branded/navigation traffic. |
| 2026-05-18 | `tools/release-time.html` | 4 | 151 | Launch query tail still present. |
| 2026-05-18 | `tools/base-planner.html` | 2 | 15 | Early signs only. |
| 2026-05-18 | `legal/privacy.html` | 0 | 76 | Legal page showing in search; monitor, but no action unless query is irrelevant. |
| 2026-05-18 | `guides/co-op.html` | 0 | 34 | Needs more verified co-op data before aggressive optimization. |
| 2026-05-18 | `tools/resource-tracker.html` | 0 | 7 | Wait for resource data/query demand. |
| 2026-05-18 | `legal/contact.html` | 0 | 1 | No action. |

## Page Triage Rules

| Signal | Meaning | Action |
|---|---|---|
| Impressions, low CTR | Google understands the topic but the snippet may not be compelling. | Improve title, meta description, H1, and first paragraph without changing the page promise. |
| Impressions, position 20-50 | Page is relevant but thin or underlinked. | Add a focused section that answers the query and add internal links from related pages. |
| Query maps to the wrong page | Search intent is being answered indirectly. | Add a bridge section or create a dedicated page if the intent repeats. |
| Crash/error query repeats | Player need is urgent. | Prioritize `guides/crash-fix.html`, but only add fixes with official, tested, or repeated detailed evidence. |
| Resource/blueprint/map query repeats | High long-term value, high accuracy risk. | Add only templates or verified rows; keep unverified names out of public tables. |

## Query Buckets

| Bucket | Example queries | Primary page | Secondary pages |
|---|---|---|---|
| Specs and performance | can i run subnautica 2, gtx 1650, low fps | `tools/system-requirements.html` | `guides/crash-fix.html`, `guides/updates.html` |
| Handhelds | steam deck, rog ally, legion go, handheld | `guides/steam-deck.html` | `guides/best-settings.html`, `tools/system-requirements.html` |
| Store and access | subnautica 2 game pass, xbox, steam price | `guides/game-pass.html` | `tools/release-time.html`, `guides/early-access.html` |
| Co-op and crossplay | co-op save, crossplay, invite, guest progress | `guides/co-op.html` | `guides/game-pass.html`, `guides/updates.html` |
| Saves and backups | save location, backup save, cloud save | `guides/save-backup.html` | `guides/co-op.html`, `guides/crash-fix.html` |
| First session | beginner guide, what to do first, first base | `guides/beginner-guide.html` | `tools/resource-tracker.html`, `tools/base-planner.html` |
| Resources and blueprints | resources, scanner, fragments, crafting | `tools/resource-tracker.html` | `guides/blueprints.html`, `tools/base-planner.html` |
| Map and biomes | map, biomes, locations, depth | `guides/map-biomes.html` | `tools/base-planner.html`, `guides/blueprints.html` |

## Page Update Template

Use this when a query deserves a content update.

| Field | Value |
|---|---|
| Date |  |
| Query |  |
| Target page |  |
| User intent |  |
| Current gap |  |
| Change made |  |
| Evidence source | Official / Direct test / Community report / Site structure only |
| Follow-up |  |

## Monetization Gate

Do not add live ads or affiliate links just because a query appears once.

| Condition | Decision |
|---|---|
| Under 500 visits/month and scattered impressions | Keep improving content. No live ads. |
| Stable impressions on specs, Game Pass, or hardware-adjacent queries | Consider disclosed affiliate research, but do not publish thin product lists. |
| 500+ visits/month with multiple useful pages indexed | Consider AdSense application and one low-intrusion test slot. |
| 5,000+ visits/month or repeat hardware queries | Consider dedicated hardware/settings pages with clear affiliate disclosure. |

## Weekly Review

| Week | Pages gaining impressions | Pages losing impressions | New query clusters | Content shipped | Next bet |
|---|---|---|---|---|---|
|  |  |  |  |  |  |
