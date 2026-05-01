import type { Metadata } from "next";
import { NewsCard } from "@/components/content/news-card";
import { guideArticles } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ratgeber",
  description: "SEO-orientierte Ratgeber rund um Plattformwahl, Setup, Monitore, Headsets, Release und Map-Wissen.",
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-white sm:text-5xl">Ratgeber</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
        Vorbereitete SEO-Landingpages mit echter redaktioneller Richtung statt Thin Content. Texte und Quellen koennen pro Guide erweitert werden.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {guideArticles.map((article) => <NewsCard key={article.id} article={article} hrefPrefix="/guides" />)}
      </div>
    </div>
  );
}
