import Link from "next/link";
import { disclaimer } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#06080c]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-lg font-black text-white">OpenWorldRadar</p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">{disclaimer}</p>
        </div>
        <div>
          <p className="text-sm font-bold text-white">Projekt</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-400">
            <Link href="/about">Ueber uns</Link>
            <Link href="/contact">Kontakt</Link>
            <Link href="/impressum">Impressum</Link>
            <Link href="/datenschutz">Datenschutz</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-white">Redaktion</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Keine Cheats, Keys, Accounts oder Ingame-Waehrung. Fokus auf News, Quellen, Guides und saubere Setup-Beratung.
          </p>
        </div>
      </div>
    </footer>
  );
}
