import type { Article, Author, FaqItem, GalleryImage, MapPin, Product, Source } from "./types";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://openworldradar.de";
export const releaseDate = "2026-11-19T00:00:00+01:00";

export const disclaimer =
  "Dies ist eine inoffizielle Fan-Website. Grand Theft Auto, GTA, Rockstar Games und zugehoerige Marken gehoeren ihren jeweiligen Eigentümern. Diese Website ist nicht mit Rockstar Games oder Take-Two Interactive verbunden.";

export const categories = [
  "Offizielle News",
  "Trailer & Analysen",
  "Map & Locations",
  "Gameplay & Features",
  "Hardware & Setup",
  "Geruechtecheck",
];

export const authors: Author[] = [
  {
    id: "redaktion",
    name: "OpenWorldRadar Redaktion",
    role: "Analyse & Guides",
    bio: "Redaktioneller Account fuer quellenbasierte Einordnungen, Release-Updates und Setup-Ratgeber.",
  },
  {
    id: "setup-desk",
    name: "Setup Desk",
    role: "Hardware & Affiliate-Struktur",
    bio: "Kuratiert Beispiel-Setups, Kaufkriterien und spaetere Affiliate-Daten ohne harte Produktversprechen.",
  },
];

const trailerSource: Source = {
  title: "Grand Theft Auto VI Trailer 1",
  url: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
  publisher: "Rockstar Games",
  date: "2023-12-05",
  type: "official",
};

const releaseSource: Source = {
  title: "Take-Two Interactive FY2025 business update",
  url: "https://www.take2games.com/ir",
  publisher: "Take-Two Interactive",
  date: "2025-05-02",
  type: "official",
};

export const articles: Article[] = [
  {
    id: "a1",
    slug: "release-datum-19-november-2026-einordnung",
    title: "GTA 6 Release am 19. November 2026: Was offiziell bekannt ist",
    excerpt:
      "Der aktuelle Release-Termin ist der wichtigste Fixpunkt fuer Planung, Plattformwahl und Setup-Fragen. Wir trennen bestaetigte Angaben von offenen Punkten.",
    content: [
      "Der derzeitige redaktionelle Stand fuer OpenWorldRadar fuehrt den 19. November 2026 als Zieltermin fuer den Release-Countdown. Konkrete Plattformdetails und spaetere Aenderungen muessen immer gegen offizielle Publisher-Quellen geprueft werden.",
      "Wichtig ist die Trennung zwischen bestaetigten Aussagen und naheliegenden Erwartungen. Ein Release-Fenster oder Termin sagt noch nichts ueber PC-Verfuegbarkeit, technische Modi, Performance-Ziele oder Editionsmodelle aus.",
      "Unsere Release-Seite bleibt deshalb bewusst konservativ: Offizielle Informationen stehen getrennt von Analyse, Spekulation und Community-Theorien. Jede konkrete Behauptung bekommt ein Quellenfeld.",
    ],
    category: "Offizielle News",
    tags: ["Release", "Plattformen", "Offiziell"],
    author: "redaktion",
    publishedAt: "2026-05-01",
    updatedAt: "2026-05-01",
    readingTime: "4 Min.",
    status: "official",
    sources: [releaseSource],
    coverImage: "release",
    gallery: ["city-countdown", "timeline"],
  },
  {
    id: "a2",
    slug: "trailer-analyse-leonida-ton-und-setting",
    title: "Trailer-Analyse: Leonida, Social-Media-Satire und die offene Welt",
    excerpt:
      "Der erste Trailer liefert Ton, Setting und viele visuelle Hinweise. Wir lesen die Bilder als Analyse, nicht als fertige Feature-Liste.",
    content: [
      "Der offizielle Trailer bestaetigt das Leonida-Setting und etabliert einen Mix aus Grossstadt, Kuestenregionen, Nachtleben und Social-Media-Satire. Darueber hinaus bleibt vieles Interpretation.",
      "Fuer Map-Theorien sind sichtbare Orte wertvoll, aber kein Beweis fuer die final spielbare Struktur. Trailer-Montagen koennen verdichten, verschieben oder gezielt inszeniert sein.",
      "OpenWorldRadar markiert solche Ableitungen als Analyse oder Spekulation. Das macht die Diskussion nuetzlicher, weil Leser sofort sehen, wie belastbar eine Aussage ist.",
    ],
    category: "Trailer & Analysen",
    tags: ["Trailer", "Leonida", "Analyse"],
    author: "redaktion",
    publishedAt: "2026-04-28",
    updatedAt: "2026-05-01",
    readingTime: "6 Min.",
    status: "analysis",
    sources: [trailerSource],
    coverImage: "trailer",
    gallery: ["editorial-board", "night-drive"],
  },
  {
    id: "a3",
    slug: "map-theorien-stadt-strand-sumpf",
    title: "Map-Theorien: Stadt, Strand, Sumpf und Highways sinnvoll einordnen",
    excerpt:
      "Welche Location-Typen sind plausibel, welche nur Wunschdenken? Ein quellenbewusster Blick auf aktuelle Theorien.",
    content: [
      "Map-Theorien funktionieren am besten, wenn sie einzelne Beobachtungen nicht zu gross machen. Ein sichtbarer Highway oder Strandabschnitt ist ein Hinweis auf Atmosphaere, nicht automatisch auf Massstab.",
      "Die staerksten Theorien kombinieren offizielle Trailer-Hinweise, erkennbare Motive und vorsichtige Parallelen zu bekannten Open-World-Strukturen.",
      "Unsere interaktive Map nutzt deshalb Wahrscheinlichkeitsstufen: offiziell, wahrscheinlich und Spekulation. So bleibt der Spass an Theorien erhalten, ohne sie als Fakten zu verkaufen.",
    ],
    category: "Map & Locations",
    tags: ["Map", "Locations", "Spekulation"],
    author: "redaktion",
    publishedAt: "2026-04-22",
    updatedAt: "2026-05-01",
    readingTime: "5 Min.",
    status: "speculation",
    sources: [trailerSource],
    coverImage: "map",
    gallery: ["map-grid", "coastline"],
  },
  {
    id: "a4",
    slug: "setup-vorbereiten-konsole-monitor-audio",
    title: "Setup bereit machen: Konsole, Monitor, Audio und Streaming sauber planen",
    excerpt:
      "Affiliate-freundlich, aber vertrauenswuerdig: Welche Setup-Fragen wirklich vor dem Release zaehlen.",
    content: [
      "Ein gutes Setup beginnt nicht mit dem teuersten Produkt, sondern mit der Spielweise. Casual-Spieler brauchen andere Prioritaeten als Streamer oder Content-Creator.",
      "Fuer Konsolenspieler sind Bildschirmgroesse, HDMI-Standards, HDR-Qualitaet, Sitzabstand und Audio oft wichtiger als reine Marketingzahlen.",
      "Die Produktkarten in OpenWorldRadar sind als Datenstruktur vorbereitet. Affiliate-Links koennen spaeter zentral gepflegt werden, ohne redaktionelle Texte umzubauen.",
    ],
    category: "Hardware & Setup",
    tags: ["Setup", "Affiliate", "Hardware"],
    author: "setup-desk",
    publishedAt: "2026-04-18",
    updatedAt: "2026-05-01",
    readingTime: "7 Min.",
    status: "analysis",
    sources: [],
    coverImage: "setup",
    gallery: ["desk", "audio"],
  },
];

export const guideArticles: Article[] = [
  {
    ...articles[3],
    id: "g1",
    slug: "ps5-oder-xbox-fuer-gta-6",
    title: "PS5 oder Xbox fuer GTA 6?",
    excerpt: "Ein ruhiger Vergleich fuer Spieler, die vor dem Release eine Plattformentscheidung planen.",
    category: "Hardware & Setup",
    tags: ["PS5", "Xbox", "Kaufberatung"],
  },
  {
    ...articles[3],
    id: "g2",
    slug: "bestes-setup-fuer-gta-6",
    title: "Bestes Setup fuer GTA 6",
    excerpt: "So denkst du Monitor, Sound, Sitzabstand und Streaming-Zubehoer zusammen.",
    tags: ["Setup", "Monitor", "Audio"],
  },
  {
    ...articles[3],
    id: "g3",
    slug: "beste-monitore-fuer-open-world-games",
    title: "Beste Monitore fuer Open-World-Games",
    excerpt: "Worauf es bei grossen Spielwelten ankommt: Panel, HDR, Input Lag und Alltagstauglichkeit.",
    tags: ["Monitore", "Open World", "Ratgeber"],
  },
  {
    ...articles[3],
    id: "g4",
    slug: "beste-headsets-fuer-gta-6",
    title: "Beste Headsets fuer GTA 6",
    excerpt: "Kaufkriterien fuer Immersion, Chat, Streaming und lange Sessions.",
    tags: ["Headsets", "Audio", "Setup"],
  },
  {
    ...articles[0],
    id: "g5",
    slug: "gta-6-release-alles-was-offiziell-bekannt-ist",
    title: "GTA 6 Release: Alles, was offiziell bekannt ist",
    excerpt: "Eine laufend erweiterbare Uebersicht fuer offizielle Release-Informationen.",
    tags: ["Release", "Offiziell", "FAQ"],
  },
  {
    ...articles[2],
    id: "g6",
    slug: "gta-6-map-was-wissen-wir-wirklich",
    title: "GTA 6 Map: Was wissen wir wirklich?",
    excerpt: "Was Trailer-Hinweise leisten koennen und wo Spekulation beginnt.",
    tags: ["Map", "Analyse", "Quellen"],
  },
];

export const products: Product[] = [
  {
    id: "budget-console",
    name: "Budget-Konsolen-Setup",
    category: "Konsole + Monitor",
    priceRange: "ca. 450-750 EUR",
    platform: ["PS5", "Xbox Series X/S"],
    affiliateUrl: "",
    image: "budget",
    pros: ["solide Einstiegskosten", "einfach aufzubauen", "gut fuer Couch- und Desk-Setups"],
    cons: ["weniger Reserven fuer Streaming", "HDR-Qualitaet haengt stark vom Display ab"],
    recommendationText: "Fuer Spieler, die GTA 6 moeglichst unkompliziert und preisbewusst erleben wollen.",
  },
  {
    id: "value-display",
    name: "Preis-Leistungs-Setup",
    category: "Display + Audio",
    priceRange: "ca. 800-1.300 EUR",
    platform: ["PS5", "Xbox Series X/S", "Spaeter PC"],
    affiliateUrl: "",
    image: "value",
    pros: ["starker Allround-Fokus", "gute Upgrade-Basis", "ausgewogene Audio- und Bildprioritaeten"],
    cons: ["Produktwahl muss sorgfaeltig sein", "nicht automatisch Premium-HDR"],
    recommendationText: "Fuer Spieler, die langfristig planen und keine reinen Marketingdaten kaufen wollen.",
  },
  {
    id: "creator-rig",
    name: "Streaming-Setup",
    category: "Creator",
    priceRange: "ca. 1.200-2.500 EUR",
    platform: ["PS5", "Xbox Series X/S", "Spaeter PC"],
    affiliateUrl: "",
    image: "creator",
    pros: ["Audio, Licht und Capture mitgedacht", "bereit fuer Clips und Streams", "skalierbar"],
    cons: ["mehr Kabel und Setup-Zeit", "Overkill fuer reine Casual-Sessions"],
    recommendationText: "Fuer Creator, die Analysen, Shorts oder Livestreams rund um Open-World-Games planen.",
  },
];

export const mapPins: MapPin[] = [
  {
    id: "leonida-core",
    title: "Leonida City Core",
    description: "Stilisierter Stadtkern fuer Trailer- und Skyline-Analysen. Offizielle Bildsprache, eigene Kartenform.",
    category: "Staedte",
    position: { x: 58, y: 42 },
    confidence: "official",
    source: trailerSource,
    image: "city",
  },
  {
    id: "coastline-strip",
    title: "Coastline Strip",
    description: "Kuesten- und Strandzone als plausible Ableitung aus Trailer-Motiven.",
    category: "Straende",
    position: { x: 72, y: 68 },
    confidence: "likely",
    source: trailerSource,
    image: "coast",
  },
  {
    id: "wetland-route",
    title: "Wetland Route",
    description: "Sumpfgebiet-Theorie mit Fokus auf Atmosphaere, Tierwelt und Nebenstrassen. Nicht als finaler Map-Ausschnitt zu verstehen.",
    category: "Sumpfgebiete",
    position: { x: 35, y: 58 },
    confidence: "speculation",
    source: trailerSource,
    image: "wetland",
  },
  {
    id: "north-highway",
    title: "North Highway",
    description: "Highway-Achse als Designannahme fuer schnelle Verbindungen zwischen Location-Typen.",
    category: "Highways",
    position: { x: 45, y: 24 },
    confidence: "speculation",
    source: trailerSource,
    image: "highway",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "city-countdown",
    title: "City-Night Countdown",
    category: "Redaktionelle Illustration",
    credit: "OpenWorldRadar, generative Platzhaltergrafik",
    image: "city-countdown",
    description: "Eigene redaktionelle Grafik fuer Release- und Countdown-Inhalte.",
  },
  {
    id: "map-grid",
    title: "LeonidaRadar Kartenraster",
    category: "Map-Theorie",
    credit: "OpenWorldRadar, eigene abstrakte Illustration",
    image: "map-grid",
    description: "Keine offizielle Karte, sondern eine neutrale Struktur fuer Pins und Theorien.",
  },
  {
    id: "desk",
    title: "Setup Desk",
    category: "Setup",
    credit: "OpenWorldRadar, eigene Illustration",
    image: "desk",
    description: "Platzhalter fuer spaetere lizenzierte Produkt- oder Studiofotos.",
  },
  {
    id: "editorial-board",
    title: "Trailer Analyse Board",
    category: "Analyse",
    credit: "OpenWorldRadar, eigene Illustration",
    image: "editorial-board",
    description: "Visual fuer quellenbasierte Trailer-Notizen ohne kopierte Screenshots.",
  },
];

export const releaseFaq: FaqItem[] = [
  {
    question: "Wann erscheint GTA 6?",
    answer:
      "OpenWorldRadar zaehlt aktuell auf den 19. November 2026 herunter. Aenderungen werden nur nach offizieller Quelle in den redaktionellen Daten aktualisiert.",
  },
  {
    question: "Fuer welche Plattformen erscheint GTA 6?",
    answer:
      "Plattformangaben muessen an offiziellen Publisher-Informationen gespiegelt werden. Diese Website trennt bestaetigte Angaben von Analyse und Erwartung.",
  },
  {
    question: "Gibt es eine PC-Version?",
    answer:
      "Eine PC-Version wird in der Community stark erwartet, aber konkrete Termine oder Details sollten nicht ohne offizielle Quelle als Fakt dargestellt werden.",
  },
  {
    question: "Ist diese Website offiziell?",
    answer:
      "Nein. OpenWorldRadar ist eine inoffizielle Fan- und Info-Website und nicht mit Rockstar Games oder Take-Two Interactive verbunden.",
  },
];

export const milestones = [
  { date: "2023-12-05", title: "Trailer 1", text: "Offizieller erster Trailer als Grundlage fuer Setting- und Tonanalyse." },
  { date: "2026-05-01", title: "Redaktioneller Hub", text: "OpenWorldRadar startet als quellenbewusstes deutsches Fundament." },
  { date: "2026-11-19", title: "Release-Countdown", text: "Zieltermin fuer Countdown, Guides und Setup-Planung." },
];

export const allArticles = [...articles, ...guideArticles];
