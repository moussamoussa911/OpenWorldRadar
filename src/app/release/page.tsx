import type { Metadata } from "next";
import { SourceBox } from "@/components/content/source-box";
import { Countdown } from "@/components/interactive/countdown";
import { FAQAccordion } from "@/components/interactive/faq-accordion";
import { articles, milestones, releaseFaq } from "@/lib/data";
import { faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Release-Countdown",
  description: "GTA-6-Release-Countdown bis 19. November 2026 mit Timeline, FAQ und Quellenbereich.",
};

export default function ReleasePage() {
  const sources = articles[0]?.sources ?? [];
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(releaseFaq)) }} />
      <h1 className="text-4xl font-black text-white sm:text-6xl">Release-Countdown</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
        Countdown bis 19. November 2026. Offizielle Meilensteine und offene Fragen werden getrennt dokumentiert.
      </p>
      <div className="mt-10 rounded-md border border-cyan-200/20 bg-cyan-200/6 p-5 sm:p-8">
        <Countdown large />
      </div>
      <section className="mt-12 grid gap-4">
        <h2 className="text-3xl font-black text-white">Timeline</h2>
        {milestones.map((item) => (
          <article key={item.title} className="grid gap-3 rounded-md border border-white/10 bg-white/[0.045] p-5 sm:grid-cols-[160px_1fr]">
            <time className="font-mono text-sm text-cyan-200">{new Date(item.date).toLocaleDateString("de-DE")}</time>
            <div>
              <h3 className="font-black text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
            </div>
          </article>
        ))}
      </section>
      <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div>
          <h2 className="mb-5 text-3xl font-black text-white">FAQ</h2>
          <FAQAccordion items={releaseFaq} />
        </div>
        <SourceBox sources={sources} />
      </section>
    </div>
  );
}
