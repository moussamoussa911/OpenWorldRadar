# OpenWorldRadar Source & Media Strategy

Last reviewed: 2026-05-02

This document defines how OpenWorldRadar should collect, classify, cite, and use sources and images without looking official, copying protected branding, or weakening trust.

## Editorial Source Hierarchy

### Tier 1: Primary Sources

Use these for any factual claim about release date, platforms, official setting, trailer releases, official screenshots, characters, and publisher statements.

| Source | Use | Notes |
| --- | --- | --- |
| Rockstar Games official GTA VI site | Product facts, setting, character names, platforms, official media references | Primary source for public-facing game information. |
| Rockstar Games GTA VI downloads page | Source reference for official trailers, screenshots, artwork, wallpapers | Do not blindly self-host in an affiliate/ads context. Prefer linking or embedding unless usage rights are reviewed. |
| Rockstar Games official YouTube | Trailer embeds and trailer analysis | Embed official uploads instead of reuploading or clipping. |
| Take-Two Investor Relations PDFs | Release-date changes, platform lists, corporate statements | Primary source for dated business/release statements. |
| BusinessWire versions of Take-Two releases | Backup source for press releases | Useful when Rockstar pages are JS-heavy or unavailable. |
| PlayStation / Xbox store pages | Wishlist links, platform availability, ratings/store metadata | Add only when live and checked. |

### Tier 2: Reputable Media Sources

Use these only for reporting context, interviews, interpretation, or industry framing. Do not use them to override primary sources.

Recommended outlets: GamesIndustry.biz, IGN, Eurogamer, PC Gamer, The Verge, Digital Foundry, GameSpot, Axios Gaming, VGC.

Rules:

- Attribute clearly.
- Prefer articles that link back to the primary source.
- Use media outlets for context, not as the only source for a hard official fact.
- Archive important URLs in the CMS/source notes later.

### Tier 3: Community and Social Sources

Use community posts only for "Gerüchtecheck", "Community-Theorie", or "Diskussionslage".

Rules:

- Never present community claims as confirmed.
- Avoid leaked footage, hacked material, private documents, account dumps, keys, or unreleased assets.
- Mark status as `rumor` or `speculation`.
- Include a moderation note when a claim is intentionally not embedded.

## Source Data Model

Current source fields live in `src/lib/types.ts` and `src/lib/data.ts`.

Every factual article should include:

- `title`
- `url`
- `publisher`
- `date`
- `type`
- `accessedAt`
- `trustLevel`
- `notes`

Recommended source-review workflow:

1. Find the primary source first.
2. Record access date.
3. Add a short note describing what the source supports.
4. Assign article status:
   - `official`: supported directly by Rockstar, Take-Two, platform storefronts, or rating bodies.
   - `analysis`: interpretation of official material.
   - `rumor`: unverified claim from community/social/media chatter.
   - `speculation`: reasoned theory with limited direct evidence.
5. Re-check official pages before publishing or updating release/platform claims.

## Image & Media Policy

OpenWorldRadar should use a layered media approach.

### Preferred: Own Editorial Visuals

Use original dark editorial visuals, abstract city-night compositions, original map grids, setup illustrations, charts, and UI-native graphics.

Best for:

- Home hero
- News cards
- Guide cards
- Map page
- Setup builder
- Newsletter and affiliate sections

Risk: low.

### Official Rockstar Media

Rockstar provides official GTA VI trailers, screenshots, artwork, wallpapers, and videos on its downloads page. These are useful primary references, but they remain protected IP.

Recommended use:

- Link to the official downloads page from source boxes.
- Embed official trailers from Rockstar channels.
- Use official media sparingly in editorial analysis only after checking current usage terms.
- Always credit: `Bild/Video: Rockstar Games / Take-Two Interactive`.

Avoid:

- Copying Rockstar logos into the site identity.
- Using official screenshots as generic thumbnails across commercial/affiliate pages.
- Rehosting large official media packs without a documented license/permission basis.
- Cropping official artwork into ads, affiliate cards, or product placements.
- Using leaked/pre-release footage or spoiler-heavy isolated scenes.

Commercial note: Rockstar's support policy is friendlier to occasional non-commercial fan use than to commercial exploitation. Because OpenWorldRadar is affiliate-ready, default to original visuals and remote official embeds/links unless legal review says otherwise.

### Trailer Screenshots

Use only when:

- The screenshot is necessary for commentary, criticism, or analysis.
- The article explains exactly what the frame demonstrates.
- The source is linked.
- The credit line is visible.
- The image is not used as decorative filler or affiliate promotion.

Safer alternative: use a timestamped link to the official trailer instead of hosting the frame.

### Product Images

For setup guides, use product images only from:

- Affiliate product feeds with image rights.
- Manufacturer press kits with clear permission.
- Retailer APIs that permit image display.
- Own photography.

Do not scrape product images from shops or Google Images.

## Recommended CMS Fields for Media

When a CMS is added, every media item should carry:

- `id`
- `title`
- `kind`
- `sourceUrl`
- `creditLine`
- `licenseStatus`
- `riskLevel`
- `allowedUse`
- `altText`
- `caption`
- `createdBy`
- `reviewedAt`
- `expiresAt`
- `notes`

## Practical Acquisition Plan

1. Keep all live site thumbnails original for launch.
2. Add official trailer embeds on trailer-analysis pages.
3. Create a curated "Official media links" block that points to Rockstar's GTA VI downloads page.
4. Build a CMS-ready media table before importing any official or product image.
5. For affiliate pages, source product data through an affiliate network/API and store image rights in the product record.
6. For screenshots in analysis, use a manual editorial review checklist before publishing.

## Current Primary Sources

- Rockstar Games GTA VI site: https://www.rockstargames.com/VI
- Rockstar Games GTA VI downloads: https://www.rockstargames.com/VI/downloads
- Rockstar Games Trailer 1: https://www.youtube.com/watch?v=QdBZY2fkU-0
- Take-Two Trailer 2 press release: https://ir.take2games.com/node/31186/pdf
- Take-Two FY2026 Q2 release update: https://ir.take2games.com/node/31811/pdf
- Rockstar copyrighted material policy: https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz/policy-on-posting-copyrighted-rockstar-games-material

## Decision

For the first production version, OpenWorldRadar should not self-host official GTA VI images as decorative site assets. Use original visuals for design, official links/embeds for source-backed analysis, and product-feed images only after affiliate rights are documented.
