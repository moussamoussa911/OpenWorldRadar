"use client";

import { X } from "lucide-react";
import { useMemo, useState } from "react";
import type { GalleryImage } from "@/lib/types";
import { VisualCard } from "@/components/content/visual-card";

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [category, setCategory] = useState("Alle");
  const [active, setActive] = useState<GalleryImage | null>(null);
  const categories = ["Alle", ...Array.from(new Set(images.map((image) => image.category)))];
  const filtered = useMemo(() => (category === "Alle" ? images : images.filter((image) => image.category === category)), [category, images]);

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {categories.map((item) => (
          <button key={item} onClick={() => setCategory(item)} className={`rounded-md border px-3 py-2 text-sm font-bold ${category === item ? "border-cyan-200 bg-cyan-200/15 text-cyan-50" : "border-white/10 text-slate-300"}`}>
            {item}
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((image) => (
          <button key={image.id} onClick={() => setActive(image)} className="rounded-md border border-white/10 bg-white/[0.045] p-3 text-left transition hover:border-cyan-200/35">
            <VisualCard name={image.image} className="h-52" />
            <h3 className="mt-4 font-black text-white">{image.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{image.description}</p>
            <p className="mt-3 text-xs text-slate-500">Credit: {image.credit}</p>
          </button>
        ))}
      </div>
      {active ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/80 p-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-4xl rounded-md border border-white/10 bg-[#0b1018] p-4">
            <button className="ml-auto grid h-10 w-10 place-items-center rounded-md border border-white/10 text-white" onClick={() => setActive(null)} aria-label="Lightbox schliessen">
              <X size={18} />
            </button>
            <VisualCard name={active.image} className="mt-3 h-[52vh]" />
            <h3 className="mt-4 text-2xl font-black text-white">{active.title}</h3>
            <p className="mt-2 text-slate-400">{active.description}</p>
            <p className="mt-3 text-sm text-slate-500">Credit: {active.credit}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
