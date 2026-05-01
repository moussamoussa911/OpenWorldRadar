export function AdSlot({ label = "Anzeige / Affiliate-Platzhalter" }: { label?: string }) {
  return (
    <div className="rounded-md border border-dashed border-white/18 bg-white/[0.03] p-5 text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
      {label}
    </div>
  );
}
