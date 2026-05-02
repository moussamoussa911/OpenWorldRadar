import { Mail } from "lucide-react";

export function NewsletterCTA() {
  return (
    <section className="rounded-md border border-cyan-200/20 bg-gradient-to-br from-cyan-300/14 via-white/[0.045] to-fuchsia-300/10 p-6 sm:p-8">
      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <div className="flex items-center gap-3 text-cyan-100">
            <Mail size={20} />
            <p className="text-sm font-bold">Newsletter</p>
          </div>
          <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">
            Erhalte offizielle Updates, Analysen und Setup-Deals direkt per Mail.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            Integration vorbereitet für Brevo, Mailchimp, ConvertKit oder Supabase. Noch kein Versand ohne aktive Provider-Konfiguration.
          </p>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]" action="#" aria-label="Newsletter anmelden">
          <input
            type="email"
            required
            placeholder="deine@mail.de"
            className="min-h-12 rounded-md border border-white/12 bg-black/25 px-4 text-sm text-white outline-none ring-cyan-200/30 placeholder:text-slate-500 focus:ring-4"
          />
          <button className="min-h-12 rounded-md bg-cyan-300 px-5 text-sm font-black text-slate-950 hover:bg-cyan-200">
            Vormerken
          </button>
          <p className="sm:col-span-2 text-xs leading-5 text-slate-500">Double-Opt-in und Datenschutztext können beim Provider-Anschluss ergänzt werden.</p>
        </form>
      </div>
    </section>
  );
}
