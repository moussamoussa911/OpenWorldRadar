import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum-Platzhalter für OpenWorldRadar.",
};

export default function ImpressumPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-white">Impressum</h1>
      <div className="editorial-prose mt-8">
        <p>Bitte vor Livegang die vollständigen gesetzlichen Anbieterangaben ergänzen.</p>
        <p>OpenWorldRadar ist eine inoffizielle Fan-Website und nicht mit Rockstar Games oder Take-Two Interactive verbunden.</p>
      </div>
    </div>
  );
}
