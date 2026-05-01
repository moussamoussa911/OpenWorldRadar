import type { ContentStatus, Confidence } from "@/lib/types";

const labels: Record<ContentStatus | Confidence, string> = {
  official: "Offiziell",
  analysis: "Analyse",
  rumor: "Geruecht",
  speculation: "Spekulation",
  likely: "Wahrscheinlich",
};

const classes: Record<ContentStatus | Confidence, string> = {
  official: "border-emerald-300/50 bg-emerald-300/12 text-emerald-200",
  analysis: "border-cyan-300/45 bg-cyan-300/10 text-cyan-200",
  rumor: "border-amber-300/45 bg-amber-300/10 text-amber-200",
  speculation: "border-fuchsia-300/45 bg-fuchsia-300/10 text-fuchsia-200",
  likely: "border-lime-300/45 bg-lime-300/10 text-lime-200",
};

export function StatusBadge({ status }: { status: ContentStatus | Confidence }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${classes[status]}`}>
      {labels[status]}
    </span>
  );
}
