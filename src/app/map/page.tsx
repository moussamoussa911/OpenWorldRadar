import type { Metadata } from "next";
import { MapExplorer } from "@/components/interactive/map-explorer";

export const metadata: Metadata = {
  title: "Map- und Location-Theorien",
  description: "Interaktive, eigene Kartenstruktur fuer GTA-6-Location-Theorien mit Quellen, Filter und Wahrscheinlichkeitsstufen.",
};

export default function MapPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-white sm:text-5xl">Map- und Location-Theorien</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
        Keine kopierte offizielle Karte: Diese Ansicht ist eine eigene abstrakte Struktur fuer Pins, Quellen und Wahrscheinlichkeiten.
      </p>
      <div className="mt-10">
        <MapExplorer />
      </div>
    </div>
  );
}
