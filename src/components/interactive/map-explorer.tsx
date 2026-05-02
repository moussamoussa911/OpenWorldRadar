"use client";

import { useMemo, useState } from "react";
import { mapPins } from "@/lib/data";
import { StatusBadge } from "@/components/content/status-badge";

const filters = ["Alle", "Städte", "Strände", "Sumpfgebiete", "Highways", "Trailer-Orte", "Spekulationen"];

export function MapExplorer() {
  const [filter, setFilter] = useState("Alle");
  const pins = useMemo(() => {
    if (filter === "Alle") return mapPins;
    if (filter === "Spekulationen") return mapPins.filter((pin) => pin.confidence === "speculation");
    if (filter === "Trailer-Orte") return mapPins.filter((pin) => pin.source.type === "official");
    return mapPins.filter((pin) => pin.category === filter);
  }, [filter]);
  const [active, setActive] = useState(pins[0]);
  const shownActive = pins.find((pin) => pin.id === active?.id) ?? pins[0];

  return (
    <section className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
      <div>
        <div className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button key={item} onClick={() => setFilter(item)} className={`rounded-md border px-3 py-2 text-sm font-bold ${filter === item ? "border-cyan-200 bg-cyan-200/15 text-cyan-50" : "border-white/10 text-slate-300"}`}>
              {item}
            </button>
          ))}
        </div>
        <div className="relative mt-5 aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-[#0a1118]">
          <div className="city-grid absolute inset-0 opacity-80" />
          <div className="absolute left-[18%] top-[18%] h-[62%] w-[54%] rotate-[-12deg] rounded-[38%] border border-cyan-200/30 bg-cyan-200/7" />
          <div className="absolute right-[12%] top-[28%] h-[52%] w-[22%] rounded-full border border-fuchsia-200/25 bg-fuchsia-200/7" />
          <div className="absolute bottom-[18%] left-[20%] h-2 w-[62%] rotate-[-18deg] bg-lime-200/25" />
          {pins.map((pin) => (
            <button
              key={pin.id}
              onClick={() => setActive(pin)}
              className="absolute grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/60 bg-cyan-300 text-xs font-black text-slate-950 shadow-[0_0_24px_rgba(45,212,191,0.45)]"
              style={{ left: `${pin.position.x}%`, top: `${pin.position.y}%` }}
              aria-label={pin.title}
            >
              {pin.title.slice(0, 1)}
            </button>
          ))}
        </div>
      </div>
      {shownActive ? (
        <aside className="rounded-md border border-white/10 bg-white/[0.045] p-5">
          <StatusBadge status={shownActive.confidence} />
          <h2 className="mt-4 text-2xl font-black text-white">{shownActive.title}</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">{shownActive.description}</p>
          <div className="mt-5 rounded-md border border-white/10 bg-black/20 p-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Quelle</p>
            <a href={shownActive.source.url} target="_blank" rel="noreferrer" className="mt-2 block font-semibold text-cyan-100 hover:underline">
              {shownActive.source.title}
            </a>
            <p className="mt-1 text-xs text-slate-500">{shownActive.source.publisher}</p>
          </div>
        </aside>
      ) : null}
    </section>
  );
}
