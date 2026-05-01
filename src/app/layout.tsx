import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://openworldradar.de"),
  title: {
    default: "OpenWorldRadar - Inoffizieller deutscher GTA-6-Hub",
    template: "%s | OpenWorldRadar",
  },
  description:
    "OpenWorldRadar ist ein inoffizieller deutschsprachiger Hub fuer GTA-6-News, Release-Countdowns, Trailer-Analysen, Map-Theorien und Gaming-Setups.",
  openGraph: {
    title: "OpenWorldRadar",
    description:
      "Inoffizieller deutscher Fan-, News-, Guide- und Analyse-Hub rund um GTA 6 und kommende Open-World-Spiele.",
    siteName: "OpenWorldRadar",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#07090d] text-slate-50">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
