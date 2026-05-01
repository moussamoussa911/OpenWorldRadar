"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/content/product-card";

const budgets = ["Budget", "Preis-Leistung", "Premium"] as const;
const platforms = ["PS5", "Xbox Series X/S", "Spaeter PC"] as const;
const styles = ["Casual", "Hardcore", "Streaming", "Content Creation"] as const;

export function SetupQuiz() {
  const [budget, setBudget] = useState<(typeof budgets)[number]>("Preis-Leistung");
  const [platform, setPlatform] = useState<(typeof platforms)[number]>("PS5");
  const [style, setStyle] = useState<(typeof styles)[number]>("Casual");

  const result = useMemo(() => {
    if (style === "Streaming" || style === "Content Creation") return products[2];
    if (budget === "Budget") return products[0];
    return products[1];
  }, [budget, style]);

  return (
    <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-md border border-white/10 bg-white/[0.045] p-5">
        <h2 className="text-2xl font-black text-white">Setup-Builder</h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">Waehle Budget, Plattform und Spielweise. Die Produktdaten sind affiliate-ready, aber aktuell bewusst ohne harte Links.</p>
        <fieldset className="mt-6">
          <legend className="text-sm font-bold text-cyan-100">Budget</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {budgets.map((item) => (
              <button key={item} onClick={() => setBudget(item)} className={`rounded-md border px-3 py-3 text-sm font-bold ${budget === item ? "border-cyan-200 bg-cyan-200/15 text-cyan-50" : "border-white/10 text-slate-300"}`}>
                {item}
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className="text-sm font-bold text-cyan-100">Plattform</legend>
          <div className="mt-3 grid gap-2">
            {platforms.map((item) => (
              <label key={item} className="flex items-center gap-3 rounded-md border border-white/10 px-3 py-3 text-sm text-slate-300">
                <input type="radio" checked={platform === item} onChange={() => setPlatform(item)} />
                {item}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className="mt-6">
          <legend className="text-sm font-bold text-cyan-100">Spielweise</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {styles.map((item) => (
              <button key={item} onClick={() => setStyle(item)} className={`rounded-md border px-3 py-3 text-sm font-bold ${style === item ? "border-fuchsia-200 bg-fuchsia-200/15 text-fuchsia-50" : "border-white/10 text-slate-300"}`}>
                {item}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <div>
        <p className="mb-3 text-sm font-bold text-slate-300">Empfehlung fuer {platform} · {style}</p>
        <ProductCard product={result} />
      </div>
    </section>
  );
}
