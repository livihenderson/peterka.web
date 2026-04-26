import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Peterka & Kolektiv — Privátní finanční dům",
    template: "%s · Peterka & Kolektiv",
  },
  description:
    "Komplexní soukromá péče o váš majetek, vaši rodinu a vaše záměry. Investice, hypotéky, pojištění a nemovitosti pod jednou střechou. Praha · České Budějovice · Tábor.",
  keywords: [
    "finanční poradenství",
    "soukromé finance",
    "privátní bankovnictví",
    "hypotéky",
    "investice",
    "nemovitosti",
    "Praha",
    "Tábor",
    "České Budějovice",
    "Peterka",
  ],
  openGraph: {
    title: "Peterka & Kolektiv — Privátní finanční dům",
    description:
      "Komplexní péče o váš majetek a vaše záměry. 41+ let zkušeností v jednom týmu.",
    type: "website",
    locale: "cs_CZ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${fraunces.variable} ${instrument.variable} ${jetbrains.variable}`}
    >
      <body className="min-h-screen bg-bone text-ink antialiased">
        <Navigation />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
