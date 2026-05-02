import type { Article } from "@/lib/types";
import { NewsCard } from "./news-card";

export function RelatedArticles({ articles, hrefPrefix = "/news" }: { articles: Article[]; hrefPrefix?: string }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-black text-white">Ähnliche Artikel</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {articles.slice(0, 3).map((article) => (
          <NewsCard key={article.id} article={article} hrefPrefix={hrefPrefix} />
        ))}
      </div>
    </section>
  );
}
