import type { Metadata } from "next";
import { NewsCard } from "@/components/content/news-card";
import { NewsletterCTA } from "@/components/content/newsletter-cta";
import { articles, categories } from "@/lib/data";

export const metadata: Metadata = {
  title: "News",
  description: "Deutschsprachige GTA-6-News, Trailer-Analysen, Map-Theorien und Geruechtechecks mit sichtbarem Quellenstatus.",
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-white sm:text-5xl">News</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
        Redaktionelle Uebersicht mit Kategorien, Lesedauer, Quellenfeld und Status: offiziell bestaetigt, plausibel analysiert, Spekulation oder Geruecht.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <a key={category} href={`#${category}`} className="rounded-md border border-white/10 px-3 py-2 text-sm font-bold text-slate-300 hover:border-cyan-200/35">
            {category}
          </a>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => <NewsCard key={article.id} article={article} />)}
      </div>
      <div className="mt-12"><NewsletterCTA /></div>
    </div>
  );
}
