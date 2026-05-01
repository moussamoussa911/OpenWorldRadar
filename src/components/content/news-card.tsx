import Link from "next/link";
import type { Article } from "@/lib/types";
import { StatusBadge } from "./status-badge";
import { VisualCard } from "./visual-card";

export function NewsCard({ article, hrefPrefix = "/news" }: { article: Article; hrefPrefix?: string }) {
  return (
    <article className="group overflow-hidden rounded-md border border-white/10 bg-white/[0.045] transition hover:-translate-y-1 hover:border-cyan-200/35 hover:bg-white/[0.07]">
      <VisualCard name={article.coverImage} className="h-44 rounded-none border-0" />
      <div className="p-5">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge status={article.status} />
          <span className="text-xs font-medium text-slate-400">{article.category}</span>
          <span className="text-xs text-slate-500">{article.readingTime}</span>
        </div>
        <h3 className="mt-4 text-xl font-black leading-tight text-white">
          <Link href={`${hrefPrefix}/${article.slug}`} className="after:absolute after:inset-0">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">{article.excerpt}</p>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-slate-500">
          <time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString("de-DE")}</time>
          <span>{article.sources.length ? `${article.sources.length} Quelle(n)` : "Quellenfeld offen"}</span>
        </div>
      </div>
    </article>
  );
}
