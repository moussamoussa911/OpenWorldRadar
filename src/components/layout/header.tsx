"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Radar, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { href: "/news", label: "News" },
  { href: "/release", label: "Release" },
  { href: "/map", label: "Map" },
  { href: "/gallery", label: "Galerie" },
  { href: "/setup-builder", label: "Setup" },
  { href: "/guides", label: "Guides" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090d]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="OpenWorldRadar Startseite">
          <span className="grid h-10 w-10 place-items-center rounded-md border border-cyan-300/40 bg-cyan-300/10 text-cyan-200 shadow-[0_0_28px_rgba(45,212,191,0.18)]">
            <Radar size={21} />
          </span>
          <span>
            <span className="block text-base font-black tracking-tight text-white">OpenWorldRadar</span>
            <span className="block text-xs text-slate-400">Inoffizieller Open-World-Hub</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                  active ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/7 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/setup-builder"
          className="hidden rounded-md bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-cyan-200 lg:inline-flex"
        >
          Setup finden
        </Link>

        <button
          className="grid h-10 w-10 place-items-center rounded-md border border-white/10 text-slate-100 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Mobile Navigation öffnen"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-[#0b1018] px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-slate-100 hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
