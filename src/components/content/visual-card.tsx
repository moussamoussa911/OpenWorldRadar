export function VisualCard({ name, className = "" }: { name: string; className?: string }) {
  const tones: Record<string, string> = {
    release: "from-cyan-300/30 via-fuchsia-400/15 to-slate-950",
    trailer: "from-coral-300/30 via-cyan-300/15 to-slate-950",
    map: "from-lime-300/25 via-cyan-300/10 to-slate-950",
    setup: "from-amber-300/25 via-fuchsia-400/12 to-slate-950",
    budget: "from-cyan-300/25 via-slate-700/30 to-slate-950",
    value: "from-lime-300/25 via-cyan-400/15 to-slate-950",
    creator: "from-fuchsia-300/25 via-cyan-400/15 to-slate-950",
  };

  return (
    <div className={`relative overflow-hidden rounded-md border border-white/10 bg-gradient-to-br ${tones[name] ?? tones.release} ${className}`}>
      <div className="city-grid absolute inset-0 opacity-60" />
      <div className="absolute left-6 top-6 h-24 w-24 rounded-full border border-white/15" />
      <div className="absolute bottom-0 right-0 h-28 w-40 border-l border-t border-cyan-200/20 bg-white/5" />
      <div className="absolute bottom-8 left-8 h-1 w-28 bg-cyan-200/60" />
      <div className="absolute bottom-12 left-8 h-1 w-16 bg-fuchsia-200/50" />
    </div>
  );
}
