import type { Source } from "@/lib/types";

export function SourceBox({ sources }: { sources: Source[] }) {
  return (
    <aside className="rounded-md border border-cyan-200/20 bg-cyan-200/6 p-5">
      <h2 className="text-base font-black text-white">Quellen & Einordnung</h2>
      {sources.length ? (
        <ul className="mt-4 grid gap-3">
          {sources.map((source) => (
            <li key={`${source.title}-${source.url}`} className="rounded-md border border-white/10 bg-black/20 p-3">
              <a href={source.url} target="_blank" rel="noreferrer" className="font-semibold text-cyan-100 hover:underline">
                {source.title}
              </a>
              <p className="mt-1 text-xs text-slate-400">
                {source.publisher} · {new Date(source.date).toLocaleDateString("de-DE")} · {source.type}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Fuer diesen redaktionellen Beispielinhalt ist noch keine externe Quelle hinterlegt. Vor Livegang bitte ergaenzen oder den Inhalt als Meinung markieren.
        </p>
      )}
    </aside>
  );
}
