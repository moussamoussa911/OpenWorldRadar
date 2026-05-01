import type { Metadata } from "next";
import { NewsletterCTA } from "@/components/content/newsletter-cta";
import { ProductCard } from "@/components/content/product-card";
import { SetupQuiz } from "@/components/interactive/setup-quiz";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Setup-Builder",
  description: "Affiliate-freundlicher GTA-6-Setup-Builder fuer Budget, Plattform, Spielweise und spaetere Produktdaten.",
};

export default function SetupBuilderPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-white sm:text-5xl">Setup-Builder</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
        Finde ein sinnvolles Setup-Profil fuer Konsole, spaetere PC-Planung, Streaming oder Content Creation. Affiliate-Links bleiben zentral in den Produktdaten.
      </p>
      <div className="mt-10">
        <SetupQuiz />
      </div>
      <section className="mt-12">
        <h2 className="text-3xl font-black text-white">Alle vorbereiteten Ergebnisprofile</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
      <div className="mt-12"><NewsletterCTA /></div>
    </div>
  );
}
