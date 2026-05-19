# Subnautica 2 Tools

Unofficial static guide and tool site for Subnautica 2 Early Access.

## Pages

- `index.html` - home and internal link hub
- `community.html` - community report and submission hub
- `tools/release-time.html` - availability, store links, and launch facts
- `guides/download-install.html` - Steam, Epic, Xbox, PC Game Pass, cloud, install, first-launch, and store-choice guide
- `guides/player-database.html` - full player hub index and evidence/status map
- `tools/system-requirements.html` - PC requirements checker
- `guides/best-settings.html` - conservative PC settings starting points
- `guides/game-content.html` - source-labeled game content, media, characters, soundtrack, and screenshot hub
- `guides/gallery.html` - official media, screenshot submission rules, high-end captures, builds, and ambience notes
- `guides/steam-deck.html` - Steam Deck and handheld PC report template
- `guides/save-backup.html` - save backup and co-op safety checklist
- `guides/roadmap.html` - Early Access roadmap watchlist
- `guides/co-op.html` - co-op setup guide
- `guides/beginner-guide.html` - spoiler-light beginner guide
- `tools/resource-tracker.html` - local-save checklist
- `tools/base-planner.html` - starter base planner
- `guides/updates.html` - update and known-issue log
- `legal/about.html`, `legal/privacy.html`, `legal/contact.html`, `legal/advertise.html` - trust, ad-review, and partnership pages

## Deploy

This is a plain static site. It can be deployed to Cloudflare Pages, GitHub Pages, Netlify, or Vercel without a build step.

Cloudflare Pages setup:

1. Create a new Pages project.
2. Connect the repository or upload this folder.
3. Build command: leave empty.
4. Output directory: `/`.
5. Add a custom domain.

## Before AdSense

- Replace the placeholder contact text with a real domain email.
- Add the production domain to all canonical URLs if canonical tags are introduced.
- Add Google Search Console and submit a sitemap after the domain is chosen.
- Add analytics only after updating `legal/privacy.html`.
- Do not add fake recipes, maps, or item names before verification.

## Current Content Tasks

The site shell and internal link structure are complete enough for ongoing operation. Remaining work is data-driven:

- Test co-op save ownership, invite flow, reconnects, and cross-platform behavior.
- Replace resource tracker research rows with verified resource names.
- Add real blueprint and base material tables.
- Log patch notes on `guides/updates.html`.
- Expand pages based on Google Search Console queries.
- Record Search Console query actions in `GSC-QUERY-LOG.md`.

## Business Roadmap

- `MONETIZATION-ROADMAP.md` - monetization stages, page priority, daily operating rhythm, and 14-day execution plan.
- `GSC-QUERY-LOG.md` - Search Console query log, page triage rules, and monetization gate.
- `ADSENSE-READINESS.md` - AdSense readiness checklist, blockers, and ad placement gate.
- `legal/advertise.html` - public advertising, sponsorship, affiliate, and brand safety policy.
- `OUTREACH-PLAN-2026-05-19.md` - current ethical promotion plan and reply templates.

## Source Policy

Facts should come from official store pages, developer posts, or direct in-game testing. Speculation should stay labeled.
