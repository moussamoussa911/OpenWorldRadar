import Link from "next/link";
import { ArrowRight, CheckCircle2, Gamepad2, Map, ShieldCheck } from "lucide-react";
import { AdSlot } from "@/components/content/ad-slot";
import { NewsCard } from "@/components/content/news-card";
import { NewsletterCTA } from "@/components/content/newsletter-cta";
import { ProductCard } from "@/components/content/product-card";
import { VisualCard } from "@/components/content/visual-card";
import { Countdown } from "@/components/interactive/countdown";
import { articles, products } from "@/lib/data";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="city-grid absolute inset-0 opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#07090d] to-transparent" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="min-w-0">
            <h1 className="w-full max-w-[calc(100vw-2rem)] text-[2.35rem] font-black leading-[1.08] tracking-tight text-white break-words sm:max-w-4xl sm:text-6xl">
              Der inoffizielle deutsche Hub für GTA-6-News, Trailer-Analysen, Map-Theorien und Gaming-Setups.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              OpenWorldRadar trennt offizielle Informationen, Analyse, Gerüchte und Spekulation sichtbar voneinander. Für Leser, Creator und Spieler, die vorbereitet sein wollen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/release" className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 py-3 text-sm font-black text-slate-950 hover:bg-cyan-200">
                Zum Countdown <ArrowRight size={16} />
              </Link>
              <Link href="/news" className="inline-flex items-center justify-center rounded-md border border-white/15 px-5 py-3 text-sm font-bold text-white hover:bg-white/8">
                News lesen
              </Link>
            </div>
          </div>
          <div className="min-w-0 rounded-md border border-white/10 bg-white/[0.055] p-5 shadow-2xl shadow-cyan-950/30">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-bold text-cyan-100">Release-Countdown</p>
              <p className="text-xs text-slate-400">19. November 2026</p>
            </div>
            <div className="mt-5">
              <Countdown />
            </div>
            <VisualCard name="release" className="mt-5 h-56" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-black text-white">Aktuelle News & Analysen</h2>
            <p className="mt-2 max-w-2xl text-slate-400">Jede Meldung fuehrt Status, Quellenfeld und Lesedauer mit.</p>
          </div>
          <Link href="/news" className="hidden text-sm font-bold text-cyan-200 hover:underline sm:block">Alle News</Link>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => <NewsCard key={article.id} article={article} />)}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black text-white">Was ist offiziell bestätigt?</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">Diese Box ist bewusst konservativ. Nur Angaben mit offizieller Quelle gehören hier hinein.</p>
          </div>
          <div className="grid gap-4 lg:col-span-2 md:grid-cols-3">
            {[
              ["Setting-Ton", "Der offizielle Trailer etabliert Leonida und die satirische Social-Media-Perspektive."],
              ["Quellenpflicht", "Konkrete Behauptungen werden mit Quelle und Status gepflegt."],
              ["Inoffiziell", "OpenWorldRadar kopiert keine offiziellen Logos oder Kartenbilder."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-md border border-white/10 bg-[#0c121b] p-5">
                <CheckCircle2 className="text-cyan-200" size={22} />
                <h3 className="mt-4 font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Link href="/map" className="group rounded-md border border-white/10 bg-white/[0.045] p-5 hover:border-cyan-200/35">
          <Map className="text-lime-200" />
          <h2 className="mt-4 text-2xl font-black text-white">Interaktive Map-Theorien</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">Eigene stilisierte Karte mit Pins für Städte, Strände, Sumpfgebiete, Highways und Trailer-Orte.</p>
          <VisualCard name="map" className="mt-5 h-64" />
        </Link>
        <Link href="/setup-builder" className="group rounded-md border border-white/10 bg-white/[0.045] p-5 hover:border-cyan-200/35">
          <Gamepad2 className="text-fuchsia-200" />
          <h2 className="mt-4 text-2xl font-black text-white">Setup-Builder</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">Quiz für Budget, Plattform, Spielweise und spätere Affiliate-Produktdaten.</p>
          <VisualCard name="setup" className="mt-5 h-64" />
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center gap-3">
          <ShieldCheck className="text-cyan-200" />
          <h2 className="text-3xl font-black text-white">Mach dein Setup bereit</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
        <div className="mt-6"><AdSlot /></div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <NewsletterCTA />
      </section>
    </div>
  );
}
