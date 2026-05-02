import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über OpenWorldRadar",
  description: "Positionierung, redaktionelle Grundsaetze und rechtliche Einordnung von OpenWorldRadar.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-white">Über OpenWorldRadar</h1>
      <div className="editorial-prose mt-8">
        <p>
          OpenWorldRadar ist ein inoffizieller deutschsprachiger Fan-, News-, Guide-, Setup- und Analyse-Hub rund um GTA 6 und kommende Open-World-Spiele.
        </p>
        <p>
          Unser redaktioneller Kern ist Quellenklarheit: Offizielle Aussagen, Analysen, Gerüchte und Spekulationen werden sichtbar getrennt. Die Website ist nicht mit Rockstar Games oder Take-Two Interactive verbunden.
        </p>
      </div>
    </div>
  );
}
