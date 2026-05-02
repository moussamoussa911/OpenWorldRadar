import type { Metadata } from "next";
import { GalleryGrid } from "@/components/interactive/gallery-grid";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Rechtlich saubere Galerie mit eigenen Illustrationen, Credits, Quellenfeldern und Lightbox-Funktion.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black text-white sm:text-5xl">Galerie</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
        Eigene Illustrationen und redaktionelle Platzhalter. Trailer-Screens sollten später nur sauber eingebettet, lizenziert oder korrekt referenziert werden.
      </p>
      <div className="mt-10">
        <GalleryGrid images={galleryImages} />
      </div>
    </div>
  );
}
