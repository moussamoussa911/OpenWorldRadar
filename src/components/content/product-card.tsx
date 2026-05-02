import { ExternalLink } from "lucide-react";
import type { Product } from "@/lib/types";
import { VisualCard } from "./visual-card";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="rounded-md border border-white/10 bg-white/[0.045] p-4">
      <VisualCard name={product.image} className="h-36" />
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{product.category}</p>
          <h3 className="mt-2 text-lg font-black text-white">{product.name}</h3>
        </div>
        <p className="rounded-md border border-white/10 px-2 py-1 text-xs text-slate-300">{product.priceRange}</p>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-400">{product.recommendationText}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div>
          <p className="text-xs font-bold text-emerald-200">Vorteile</p>
          <ul className="mt-2 grid gap-1 text-xs text-slate-400">
            {product.pros.map((item) => <li key={item}>+ {item}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold text-amber-200">Grenzen</p>
          <ul className="mt-2 grid gap-1 text-xs text-slate-400">
            {product.cons.map((item) => <li key={item}>- {item}</li>)}
          </ul>
        </div>
      </div>
      <a
        href={product.affiliateUrl || "#"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-cyan-200/25 px-4 py-3 text-sm font-bold text-cyan-100 hover:bg-cyan-200/10"
      >
        Affiliate-Link später verbinden <ExternalLink size={15} />
      </a>
    </article>
  );
}
