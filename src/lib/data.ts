import type { Article, Author, FaqItem, GalleryImage, MapPin, MediaAsset, Product, Source } from "./types";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://openworldradar.de";
export const releaseDate = "2026-11-19T00:00:00+01:00";

export const disclaimer =
  "Dies ist eine inoffizielle Fan-Website. Grand Theft Auto, GTA, Rockstar Games und zugehörige Marken gehören ihren jeweiligen Eigentümern. Diese Website ist nicht mit Rockstar Games oder Take-Two Interactive verbunden.";

export const categories = [
  "Offizielle News",
  "Trailer & Analysen",
  "Map & Locations",
  "Gameplay & Features",
  "Hardware & Setup",
  "Gerüchtecheck",
];

export const officialSources = {
  rockstarVI: {
    title: "Grand Theft Auto VI - Offizielle Website",
    url: "https://www.rockstargames.com/VI",
    publisher: "Rockstar Games",
    date: "2026-05-02",
    type: "official",
    accessedAt: "2026-05-02",
    trustLevel: "primary",
    notes: "Primäre Produktseite für Release-Datum, Plattformen, Setting, Figuren und offizielle Medienverweise.",
  },
  rockstarDownloads: {
    title: "Grand Theft Auto VI - Downloads",
    url: "https://www.rockstargames.com/VI/downloads",
    publisher: "Rockstar Games",
    date: "2026-05-02",
    type: "official",
    accessedAt: "2026-05-02",
    trustLevel: "primary",
    notes: "Offizielle Download-Seite für Trailer, Screenshots, Artwork und Wallpapers. Nutzung nur mit Credit und Rechtsprüfung für kommerzielle Kontexte.",
  },
  trailer1: {
    title: "Grand Theft Auto VI Trailer 1",
    url: "https://www.youtube.com/watch?v=QdBZY2fkU-0",
    publisher: "Rockstar Games",
    date: "2023-12-05",
    type: "official",
    accessedAt: "2026-05-02",
    trustLevel: "primary",
    notes: "Offizieller Trailer-1-Upload von Rockstar Games auf YouTube.",
  },
  trailer2PressRelease: {
    title: "Rockstar Games Releases Trailer 2 for Grand Theft Auto VI",
    url: "https://ir.take2games.com/node/31186/pdf",
    publisher: "Take-Two Interactive / Rockstar Games",
    date: "2025-05-06",
    type: "official",
    accessedAt: "2026-05-02",
    trustLevel: "primary",
    notes: "Offizielle Pressemitteilung zu Trailer 2, Plattformen und Capture-Hinweis.",
  },
  takeTwoQ2FY2026: {
    title: "Take-Two Interactive Reports Results for Fiscal Second Quarter 2026",
    url: "https://ir.take2games.com/node/31811/pdf",
    publisher: "Take-Two Interactive",
    date: "2025-11-06",
    type: "official",
    accessedAt: "2026-05-02",
    trustLevel: "primary",
    notes: "Investor-Relations-Quelle mit Release-Datum 19. November 2026 und Plattformliste.",
  },
  copyrightPolicy: {
    title: "Policy on posting copyrighted Rockstar Games material",
    url: "https://support.rockstargames.com/articles/7bNaeoMFTV0iUDGhStTXvz/policy-on-posting-copyrighted-rockstar-games-material",
    publisher: "Rockstar Games Support",
    date: "2025-01-10",
    type: "official",
    accessedAt: "2026-05-02",
    trustLevel: "primary",
    notes: "Rechtliche Leitplanken für Fan-Nutzung, Spoiler, Cheats, Mods und kommerzielle Kontexte.",
  },
} satisfies Record<string, Source>;

export const authors: Author[] = [
  {
    id: "redaktion",
    name: "OpenWorldRadar Redaktion",
    role: "Analyse & Guides",
    bio: "Redaktioneller Account für quellenbasierte Einordnungen, Release-Updates und Setup-Ratgeber.",
  },
  {
    id: "setup-desk",
    name: "Setup Desk",
    role: "Hardware & Affiliate-Struktur",
    bio: "Kuratiert Beispiel-Setups, Kaufkriterien und spätere Affiliate-Daten ohne harte Produktversprechen.",
  },
];

export const mediaAssets: MediaAsset[] = [
  {
    id: "original-editorial-visuals",
    title: "Eigene redaktionelle Illustrationen",
    kind: "original-illustration",
    recommendedUse: "Hero-Bilder, News-Thumbnails, Map-Visuals, Setup-Visuals und Newsletter-Flächen.",
    riskLevel: "low",
    creditLine: "OpenWorldRadar, eigene redaktionelle Illustration",
    storage: "local",
    notes: "Bevorzugte Standardlösung für ein monetarisierbares Fan-Projekt, weil keine offiziellen Logos, Screenshots oder Karten kopiert werden.",
  },
  {
    id: "rockstar-downloads-reference",
    title: "Offizielle GTA-VI-Downloads von Rockstar",
    kind: "official-download",
    recommendedUse: "Nur als verlinkte Quelle, für Quellenboxen und ggf. nach Rechtsprüfung für einzelne redaktionelle Einbettungen.",
    riskLevel: "medium",
    creditLine: "Bild/Video: Rockstar Games / Take-Two Interactive",
    source: officialSources.rockstarDownloads,
    storage: "remote-link-only",
    notes: "Die Seite bietet offizielle Trailer, Screenshots, Artwork und Wallpaper. Für Affiliate-/Werbeumfelder nicht blind lokal hosten.",
  },
  {
    id: "official-trailer-embed",
    title: "Offizielle Trailer-Einbettung",
    kind: "official-embed",
    recommendedUse: "Artikelanalyse mit eingebettetem offiziellen YouTube-Video statt kopierter Screenshots.",
    riskLevel: "medium",
    creditLine: "Video: Rockstar Games",
    source: officialSources.trailer1,
    storage: "remote-link-only",
    notes: "Embed bevorzugen, keine isolierten Spoiler-Clips und keine Reuploads.",
  },
  {
    id: "future-product-photos",
    title: "Lizenzierte Produktbilder für Setup-Guides",
    kind: "affiliate-product",
    recommendedUse: "Produktkarten, Vergleichstabellen und Kaufberatung nach Freigabe durch Affiliate-Netzwerk oder Herstellerfeed.",
    riskLevel: "medium",
    creditLine: "Hersteller / Händler / Affiliate-Netzwerk",
    storage: "future-cms",
    notes: "Produktbilder erst nutzen, wenn Nutzungsrechte aus Feed, API oder Hersteller-Pressebereich klar dokumentiert sind.",
  },
];

export const articles: Article[] = [
  {
    id: "a1",
    slug: "release-datum-19-november-2026-einordnung",
    title: "GTA 6 Release am 19. November 2026: Was offiziell bekannt ist",
    excerpt:
      "Der aktuelle Release-Termin ist der wichtigste Fixpunkt für Planung, Plattformwahl und Setup-Fragen. Wir trennen bestätigte Angaben von offenen Punkten.",
    content: [
      "Der aktuelle Quellenstand für OpenWorldRadar führt den 19. November 2026 als Release-Termin. Diese Angabe stützt sich auf die offizielle Produktseite von Rockstar Games und Take-Two-Investor-Relations-Material.",
      "Offiziell genannt sind PlayStation 5 und Xbox Series X|S. Eine PC-Version ist damit nicht ausgeschlossen, aber ein konkreter PC-Termin gehört erst auf die Seite, wenn Rockstar oder Take-Two ihn offiziell bestätigen.",
      "Unsere Release-Seite bleibt bewusst konservativ: Offizielle Informationen stehen getrennt von Analyse, Spekulation und Community-Theorien. Jede konkrete Behauptung bekommt ein Quellenfeld.",
    ],
    category: "Offizielle News",
    tags: ["Release", "Plattformen", "Offiziell"],
    author: "redaktion",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-02",
    readingTime: "4 Min.",
    status: "official",
    sources: [officialSources.rockstarVI, officialSources.takeTwoQ2FY2026],
    coverImage: "release",
    gallery: ["city-countdown", "timeline"],
  },
  {
    id: "a2",
    slug: "trailer-analyse-leonida-ton-und-setting",
    title: "Trailer-Analyse: Leonida, Social-Media-Satire und die offene Welt",
    excerpt:
      "Die offiziellen Trailer liefern Ton, Setting und viele visuelle Hinweise. Wir lesen die Bilder als Analyse, nicht als fertige Feature-Liste.",
    content: [
      "Die offiziellen Quellen beschreiben Vice City und den Bundesstaat Leonida als zentrale Bühne für Jason und Lucia. Trailer und Website liefern starke Signale für Küste, Stadt, Nachtleben und Social-Media-Satire.",
      "Für Map-Theorien sind sichtbare Orte wertvoll, aber kein Beweis für die finale spielbare Struktur. Trailer-Montagen können verdichten, verschieben oder gezielt inszeniert sein.",
      "OpenWorldRadar markiert solche Ableitungen als Analyse oder Spekulation. Das macht die Diskussion nützlicher, weil Leser sofort sehen, wie belastbar eine Aussage ist.",
    ],
    category: "Trailer & Analysen",
    tags: ["Trailer", "Leonida", "Analyse"],
    author: "redaktion",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-02",
    readingTime: "6 Min.",
    status: "analysis",
    sources: [officialSources.rockstarVI, officialSources.trailer1, officialSources.trailer2PressRelease],
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
      "Map-Theorien funktionieren am besten, wenn sie einzelne Beobachtungen nicht zu groß machen. Ein sichtbarer Highway oder Strandabschnitt ist ein Hinweis auf Atmosphäre, nicht automatisch auf Maßstab.",
      "Die stärksten Theorien kombinieren offizielle Trailer-Hinweise, erkennbare Motive und vorsichtige Parallelen zu bekannten Open-World-Strukturen.",
      "Unsere interaktive Map nutzt deshalb Wahrscheinlichkeitsstufen: offiziell, wahrscheinlich und Spekulation. So bleibt der Spaß an Theorien erhalten, ohne sie als Fakten zu verkaufen.",
    ],
    category: "Map & Locations",
    tags: ["Map", "Locations", "Spekulation"],
    author: "redaktion",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-02",
    readingTime: "5 Min.",
    status: "speculation",
    sources: [officialSources.rockstarVI, officialSources.trailer2PressRelease],
    coverImage: "map",
    gallery: ["map-grid", "coastline"],
  },
  {
    id: "a4",
    slug: "setup-vorbereiten-konsole-monitor-audio",
    title: "Setup bereit machen: Konsole, Monitor, Audio und Streaming sauber planen",
    excerpt:
      "Affiliate-freundlich, aber vertrauenswürdig: Welche Setup-Fragen wirklich vor dem Release zählen.",
    content: [
      "Ein gutes Setup beginnt nicht mit dem teuersten Produkt, sondern mit der Spielweise. Casual-Spieler brauchen andere Prioritäten als Streamer oder Content-Creator.",
      "Für Konsolenspieler sind Bildschirmgröße, HDMI-Standards, HDR-Qualität, Sitzabstand und Audio oft wichtiger als reine Marketingzahlen.",
      "Die Produktkarten in OpenWorldRadar sind als Datenstruktur vorbereitet. Affiliate-Links können später zentral gepflegt werden, ohne redaktionelle Texte umzubauen.",
    ],
    category: "Hardware & Setup",
    tags: ["Setup", "Affiliate", "Hardware"],
    author: "setup-desk",
    publishedAt: "2026-05-02",
    updatedAt: "2026-05-02",
    readingTime: "7 Min.",
    status: "analysis",
    sources: [officialSources.rockstarVI],
    coverImage: "setup",
    gallery: ["desk", "audio"],
  },
];

export const guideArticles: Article[] = [
  {
    ...articles[3],
    id: "g1",
    slug: "ps5-oder-xbox-fuer-gta-6",
    title: "PS5 oder Xbox für GTA 6?",
    excerpt: "Ein ruhiger Vergleich für Spieler, die vor dem Release eine Plattformentscheidung planen.",
    category: "Hardware & Setup",
    tags: ["PS5", "Xbox", "Kaufberatung"],
  },
  {
    ...articles[3],
    id: "g2",
    slug: "bestes-setup-fuer-gta-6",
    title: "Bestes Setup für GTA 6",
    excerpt: "So denkst du Monitor, Sound, Sitzabstand und Streaming-Zubehör zusammen.",
    tags: ["Setup", "Monitor", "Audio"],
  },
  {
    ...articles[3],
    id: "g3",
    slug: "beste-monitore-fuer-open-world-games",
    title: "Beste Monitore für Open-World-Games",
    excerpt: "Worauf es bei großen Spielwelten ankommt: Panel, HDR, Input Lag und Alltagstauglichkeit.",
    tags: ["Monitore", "Open World", "Ratgeber"],
  },
  {
    ...articles[3],
    id: "g4",
    slug: "beste-headsets-fuer-gta-6",
    title: "Beste Headsets für GTA 6",
    excerpt: "Kaufkriterien für Immersion, Chat, Streaming und lange Sessions.",
    tags: ["Headsets", "Audio", "Setup"],
  },
  {
    ...articles[0],
    id: "g5",
    slug: "gta-6-release-alles-was-offiziell-bekannt-ist",
    title: "GTA 6 Release: Alles, was offiziell bekannt ist",
    excerpt: "Eine laufend erweiterbare Übersicht für offizielle Release-Informationen.",
    tags: ["Release", "Offiziell", "FAQ"],
  },
  {
    ...articles[2],
    id: "g6",
    slug: "gta-6-map-was-wissen-wir-wirklich",
    title: "GTA 6 Map: Was wissen wir wirklich?",
    excerpt: "Was Trailer-Hinweise leisten können und wo Spekulation beginnt.",
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
    pros: ["solide Einstiegskosten", "einfach aufzubauen", "gut für Couch- und Desk-Setups"],
    cons: ["weniger Reserven für Streaming", "HDR-Qualität hängt stark vom Display ab"],
    recommendationText: "Für Spieler, die GTA 6 möglichst unkompliziert und preisbewusst erleben wollen.",
  },
  {
    id: "value-display",
    name: "Preis-Leistungs-Setup",
    category: "Display + Audio",
    priceRange: "ca. 800-1.300 EUR",
    platform: ["PS5", "Xbox Series X/S", "Später PC"],
    affiliateUrl: "",
    image: "value",
    pros: ["starker Allround-Fokus", "gute Upgrade-Basis", "ausgewogene Audio- und Bildprioritäten"],
    cons: ["Produktwahl muss sorgfältig sein", "nicht automatisch Premium-HDR"],
    recommendationText: "Für Spieler, die langfristig planen und keine reinen Marketingdaten kaufen wollen.",
  },
  {
    id: "creator-rig",
    name: "Streaming-Setup",
    category: "Creator",
    priceRange: "ca. 1.200-2.500 EUR",
    platform: ["PS5", "Xbox Series X/S", "Später PC"],
    affiliateUrl: "",
    image: "creator",
    pros: ["Audio, Licht und Capture mitgedacht", "bereit für Clips und Streams", "skalierbar"],
    cons: ["mehr Kabel und Setup-Zeit", "Overkill für reine Casual-Sessions"],
    recommendationText: "Für Creator, die Analysen, Shorts oder Livestreams rund um Open-World-Games planen.",
  },
];

export const mapPins: MapPin[] = [
  {
    id: "leonida-core",
    title: "Leonida City Core",
    description: "Stilisierter Stadtkern für Trailer- und Skyline-Analysen. Offizielle Bildsprache, eigene Kartenform.",
    category: "Städte",
    position: { x: 58, y: 42 },
    confidence: "official",
    source: officialSources.rockstarVI,
    image: "city",
  },
  {
    id: "coastline-strip",
    title: "Coastline Strip",
    description: "Küsten- und Strandzone als plausible Ableitung aus offiziellen Trailer- und Website-Motiven.",
    category: "Strände",
    position: { x: 72, y: 68 },
    confidence: "likely",
    source: officialSources.rockstarVI,
    image: "coast",
  },
  {
    id: "wetland-route",
    title: "Wetland Route",
    description: "Sumpfgebiet-Theorie mit Fokus auf Atmosphäre, Tierwelt und Nebenstraßen. Nicht als finaler Map-Ausschnitt zu verstehen.",
    category: "Sumpfgebiete",
    position: { x: 35, y: 58 },
    confidence: "speculation",
    source: officialSources.trailer2PressRelease,
    image: "wetland",
  },
  {
    id: "north-highway",
    title: "North Highway",
    description: "Highway-Achse als Designannahme für schnelle Verbindungen zwischen Location-Typen.",
    category: "Highways",
    position: { x: 45, y: 24 },
    confidence: "speculation",
    source: officialSources.trailer2PressRelease,
    image: "highway",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "city-countdown",
    title: "City-Night Countdown",
    category: "Redaktionelle Illustration",
    credit: "OpenWorldRadar, eigene redaktionelle Illustration",
    image: "city-countdown",
    description: "Eigene Grafik für Release- und Countdown-Inhalte. Keine offiziellen Screenshots oder Logos.",
  },
  {
    id: "map-grid",
    title: "LeonidaRadar Kartenraster",
    category: "Map-Theorie",
    credit: "OpenWorldRadar, eigene abstrakte Illustration",
    image: "map-grid",
    description: "Keine offizielle Karte, sondern eine neutrale Struktur für Pins und Theorien.",
  },
  {
    id: "desk",
    title: "Setup Desk",
    category: "Setup",
    credit: "OpenWorldRadar, eigene Illustration",
    image: "desk",
    description: "Platzhalter für spätere lizenzierte Produkt- oder Studiofotos.",
  },
  {
    id: "editorial-board",
    title: "Trailer Analyse Board",
    category: "Analyse",
    credit: "OpenWorldRadar, eigene Illustration",
    image: "editorial-board",
    description: "Visual für quellenbasierte Trailer-Notizen ohne kopierte Screenshots.",
  },
];

export const releaseFaq: FaqItem[] = [
  {
    question: "Wann erscheint GTA 6?",
    answer:
      "OpenWorldRadar zählt aktuell auf den 19. November 2026 herunter. Diese Angabe wird über Rockstar Games und Take-Two Interactive gegengeprüft.",
  },
  {
    question: "Für welche Plattformen erscheint GTA 6?",
    answer:
      "Offiziell genannt sind PlayStation 5 und Xbox Series X|S. Weitere Plattformen werden erst ergänzt, wenn Rockstar oder Take-Two sie offiziell bestätigen.",
  },
  {
    question: "Gibt es eine PC-Version?",
    answer:
      "Zum aktuellen Quellenstand ist kein konkreter PC-Termin offiziell belegt. Community-Erwartungen werden deshalb nur als Analyse oder Spekulation markiert.",
  },
  {
    question: "Ist diese Website offiziell?",
    answer:
      "Nein. OpenWorldRadar ist eine inoffizielle Fan- und Info-Website und nicht mit Rockstar Games oder Take-Two Interactive verbunden.",
  },
];

export const milestones = [
  { date: "2023-12-05", title: "Trailer 1", text: "Offizieller erster Trailer als Grundlage für Setting- und Tonanalyse." },
  { date: "2025-05-06", title: "Trailer 2", text: "Take-Two/Rockstar veröffentlichen Trailer 2 und neue offizielle Website-Informationen." },
  { date: "2025-11-06", title: "Release-Update", text: "Take-Two nennt den 19. November 2026 als neuen Launch-Termin." },
  { date: "2026-11-19", title: "Release-Countdown", text: "Zieltermin für Countdown, Guides und Setup-Planung." },
];

export const allArticles = [...articles, ...guideArticles];
