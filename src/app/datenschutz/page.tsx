import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutz-Platzhalter fuer OpenWorldRadar.",
};

export default function DatenschutzPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-white">Datenschutz</h1>
      <div className="editorial-prose mt-8">
        <p>
          Diese Seite ist als Struktur vorbereitet. Vor Livegang muessen Newsletter-Provider, Analytics, Hosting, Cookies und Kontaktformular technisch und rechtlich konkret dokumentiert werden.
        </p>
        <p>Es werden keine API-Keys oder privaten Tokens im Repository gespeichert.</p>
      </div>
    </div>
  );
}
