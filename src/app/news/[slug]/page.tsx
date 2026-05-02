import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { RelatedArticles } from "@/components/content/related-articles";
import { SourceBox } from "@/components/content/source-box";
import { StatusBadge } from "@/components/content/status-badge";
import { VisualCard } from "@/components/content/visual-card";
import { allArticles, articles, authors, siteUrl } from "@/lib/data";
import { articleJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${siteUrl}/news/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const author = authors.find((item) => item.id === article.author) ?? authors[0];
  const related = allArticles.filter((item) => item.slug !== article.slug && item.category === article.category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: article.title }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }} />
      <article className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <StatusBadge status={article.status} />
          <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">{article.title}</h1>
          <p className="mt-5 text-xl leading-8 text-slate-300">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-500">
            <time dateTime={article.publishedAt}>{new Date(article.publishedAt).toLocaleDateString("de-DE")}</time>
            <span>{article.readingTime}</span>
            <span>{article.category}</span>
          </div>
          <VisualCard name={article.coverImage} className="mt-8 h-72 sm:h-96" />
          {article.status === "speculation" || article.status === "rumor" ? (
            <div className="mt-8 rounded-md border border-amber-200/25 bg-amber-200/8 p-5 text-sm leading-6 text-amber-100">
              Dieser Artikel enthaelt spekulative Einordnungen. Bitte nicht als offiziell bestätigte Information lesen.
            </div>
          ) : null}
          <div className="editorial-prose mt-10">
            <h2 id="überblick">Überblick</h2>
            {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <h2 id="quellenlogik">Quellenlogik</h2>
            <p>
              OpenWorldRadar fuehrt Quellen sichtbar am Artikel. Offizielle Aussagen, Analyse und Spekulation werden getrennt, damit Leser die Belastbarkeit jeder Aussage einschaetzen können.
            </p>
            <h2 id="naechste-schritte">Nächste Schritte</h2>
            <p>
              Vor einer Live-Veröffentlichung sollten aktuelle offizielle Meldungen geprüft, Quellen aktualisiert und bei Bedarf Medien sauber eingebettet statt kopiert werden.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {article.tags.map((tag) => <span key={tag} className="rounded-md border border-white/10 px-3 py-1 text-sm text-slate-300">{tag}</span>)}
          </div>
          <div className="mt-8 rounded-md border border-white/10 bg-white/[0.045] p-5">
            <p className="text-sm font-bold text-white">{author.name}</p>
            <p className="mt-1 text-xs text-cyan-200">{author.role}</p>
            <p className="mt-3 text-sm leading-6 text-slate-400">{author.bio}</p>
          </div>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <p className="font-black text-white">Inhaltsverzeichnis</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-400">
              <a href="#überblick">Überblick</a>
              <a href="#quellenlogik">Quellenlogik</a>
              <a href="#naechste-schritte">Nächste Schritte</a>
            </div>
          </div>
          <SourceBox sources={article.sources} />
        </aside>
      </article>
      <RelatedArticles articles={related.length ? related : allArticles.filter((item) => item.slug !== article.slug)} />
    </div>
  );
}
