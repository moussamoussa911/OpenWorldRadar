# OpenWorldRadar

OpenWorldRadar ist ein inoffizieller deutschsprachiger Fan-, News-, Guide-, Setup- und Analyse-Hub rund um GTA 6 und kommende Open-World-Games.

Die erste Version nutzt lokale TypeScript-Daten statt CMS, ist aber so strukturiert, dass später Sanity, Strapi, Contentful, Directus oder Supabase angeschlossen werden können.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lokale Content-Daten in `src/lib/data.ts`
- SEO-Metadaten, Sitemap, robots.txt, JSON-LD für Artikel und FAQ

## Lokales Setup

```bash
npm install
npm run dev
```

Die App läuft lokal standardmäßig auf `http://localhost:3000`.

## Produktionsbefehle

```bash
npm run build
npm start
```

Render setzt den Port über `PORT`. `next start` nutzt diesen Port automatisch, wenn Render ihn bereitstellt.

## Environment Variables

Siehe `.env.example`.

`NEXT_PUBLIC_SITE_URL` sollte im Produktivbetrieb auf die echte Domain gesetzt werden, damit Canonicals, Sitemap und robots.txt korrekt generiert werden.

Newsletter-Provider und Affiliate-Daten sind vorbereitet, aber noch nicht aktiv integriert. Keine Secrets in Git committen.

## Deploying on Render

1. GitHub-Repository in Render verbinden.
2. Neuen Web Service aus dem Repository erstellen.
3. Environment auf `Node` setzen.
4. Install command: `npm install`
5. Build command: `npm run build`
6. Start command: `npm start`
7. Environment Variable setzen: `NEXT_PUBLIC_SITE_URL=https://deine-domain.de`
8. Deploy starten und nach dem Build `/`, `/news`, `/release` und `/setup-builder` prüfen.

## Content pflegen

Alle Beispielinhalte liegen aktuell in `src/lib/data.ts`.

- Artikel: `articles`
- Ratgeber: `guideArticles`
- Quellen: `Source`-Objekte an Artikeln oder Map-Pins
- Galerie: `galleryImages`
- Map-Pins: `mapPins`
- Produkte: `products`
- Autoren: `authors`
- FAQ: `releaseFaq`

Wichtig: Jede konkrete Behauptung zu GTA 6 sollte ein Quellenfeld bekommen. Spekulationen müssen als `speculation`, Gerüchte als `rumor`, Analysen als `analysis` und offizielle Informationen als `official` markiert werden.

## Rechtliche Leitplanken

- Keine offiziellen Logos kopieren.
- Keine urheberrechtlich geschützten Bilder übernehmen.
- Keine Cheats, Hacks, Keys, Accounts oder Ingame-Währung anbieten.
- Trailer-Screens nur rechtlich sauber einbetten, lizenzieren oder korrekt referenzieren.
- Disclaimer bleibt im Footer jeder Seite sichtbar.

## Nächste Schritte

- Echte Quellen laufend aktualisieren und prüfen.
- CMS-Schicht für Artikel, Quellen, Produkte und Map-Pins anbinden.
- Newsletter-Provider mit Double-Opt-in integrieren.
- Affiliate-Daten zentral und transparent pflegen.
- Rechtstexte vor Livegang finalisieren.
