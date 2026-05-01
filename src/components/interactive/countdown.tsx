"use client";

import { useEffect, useMemo, useState } from "react";
import { releaseDate } from "@/lib/data";

function getRemaining(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const days = Math.floor(diff / 86_400_000);
  const hours = Math.floor((diff / 3_600_000) % 24);
  const minutes = Math.floor((diff / 60_000) % 60);
  const seconds = Math.floor((diff / 1_000) % 60);
  return { days, hours, minutes, seconds };
}

export function Countdown({ large = false }: { large?: boolean }) {
  const [remaining, setRemaining] = useState(() => getRemaining(releaseDate));
  const units = useMemo(
    () => [
      ["Tage", remaining.days],
      ["Stunden", remaining.hours],
      ["Minuten", remaining.minutes],
      ["Sekunden", remaining.seconds],
    ],
    [remaining],
  );

  useEffect(() => {
    const id = window.setInterval(() => setRemaining(getRemaining(releaseDate)), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={`grid grid-cols-2 gap-3 ${large ? "md:grid-cols-4" : "sm:grid-cols-4"}`}>
      {units.map(([label, value]) => (
        <div key={label} className="rounded-md border border-white/10 bg-black/28 p-4 text-center">
          <p className={`${large ? "text-4xl sm:text-6xl" : "text-3xl"} font-black text-white`}>{String(value).padStart(2, "0")}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">{label}</p>
        </div>
      ))}
    </div>
  );
}
