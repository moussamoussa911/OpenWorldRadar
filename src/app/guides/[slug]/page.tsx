import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/content/breadcrumbs";
import { RelatedArticles } from "@/components/content/related-articles";
import { SourceBox } from "@/components/content/source-box";
import { StatusBadge } from "@/components/content/status-badge";
import { VisualCard } from "@/components/content/visual-card";
import { guideArticles, siteUrl } from "@/lib/data";
import { articleJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guideArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = guideArticles.find((item) => item.slug === slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${siteUrl}/guides/${article.slug}` },
  };
}

export default async function GuideDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = guideArticles.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Guides", href: "/guides" }, { label: article.title }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }} />
      <article className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div>
          <StatusBadge status={article.status} />
          <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-6xl">{article.title}</h1>
          <p className="mt-5 text-xl leading-8 text-slate-300">{article.excerpt}</p>
          <VisualCard name={article.coverImage} className="mt-8 h-72 sm:h-96" />
          <div className="editorial-prose mt-10">
            <h2 id="kaufkriterien">Kaufkriterien</h2>
            {article.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <h2 id="redaktionelle-empfehlung">Redaktionelle Empfehlung</h2>
            <p>
              Kaufe nicht nach Hype. Prüfe zuerst Plattform, Sitzabstand, Display-Qualität, Audio, Garantie und echte Nutzung. Produktlinks sollten später transparent als Affiliate markiert werden.
            </p>
          </div>
        </div>
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
            <p className="font-black text-white">Guide-Struktur</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-400">
              <a href="#kaufkriterien">Kaufkriterien</a>
              <a href="#redaktionelle-empfehlung">Empfehlung</a>
            </div>
          </div>
          <SourceBox sources={article.sources} />
        </aside>
      </article>
      <RelatedArticles articles={guideArticles.filter((item) => item.slug !== article.slug)} hrefPrefix="/guides" />
    </div>
  );
}
