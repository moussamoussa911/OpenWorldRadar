import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktseite fuer OpenWorldRadar.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-white">Kontakt</h1>
      <p className="mt-5 text-lg leading-8 text-slate-300">
        Fuer Quellenhinweise, Korrekturen, Kooperationen oder spaetere Affiliate-Anfragen kann hier ein Formular angebunden werden.
      </p>
      <form className="mt-8 grid gap-4 rounded-md border border-white/10 bg-white/[0.045] p-5">
        <input className="rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white" placeholder="Name" />
        <input className="rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white" placeholder="E-Mail" />
        <textarea className="min-h-36 rounded-md border border-white/10 bg-black/25 px-4 py-3 text-white" placeholder="Nachricht" />
        <button className="rounded-md bg-cyan-300 px-5 py-3 font-black text-slate-950">Absenden vorbereiten</button>
      </form>
    </div>
  );
}
