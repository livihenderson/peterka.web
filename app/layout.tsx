import type { Metadata } from "next";
import { Fraunces, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";
import Footer from "./_components/Footer";
import { SITE_URL } from "./_lib/site";
import { organizationGraph, jsonLdString } from "./_lib/structuredData";

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
  // Decorative mono used only for small labels/eyebrows - keep it off the
  // critical path so it doesn't compete with the hero fonts on first paint.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Peterka & Kolektiv\u00A0- Privátní finanční dům",
    template: "%s · Peterka & Kolektiv",
  },
  description:
    "Komplexní soukromá péče o\u00A0Váš majetek, Vaši rodinu a\u00A0Vaše cíle. Investice, úvěry, pojištění a\u00A0nemovitosti pod jednou střechou. Praha · České Budějovice · Tábor · Soběslav.",
  keywords: [
    "finanční poradenství",
    "soukromé finance",
    "privátní bankovnictví",
    "hypotéky",
    "investice",
    "nemovitosti",
    "Praha",
    "Tábor",
    "Soběslav",
    "České Budějovice",
    "Peterka",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Peterka & Kolektiv\u00A0- Privátní finanční dům",
    description:
      "Komplexní péče o\u00A0Váš majetek a\u00A0Vaše cíle. 30\u00A0let zkušeností mezi 3\u00A0zakladateli.",
    type: "website",
    locale: "cs_CZ",
    url: SITE_URL,
    siteName: "Peterka & Kolektiv",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peterka & Kolektiv\u00A0- Privátní finanční dům",
    description:
      "Komplexní péče o\u00A0Váš majetek a\u00A0Vaše cíle. 30\u00A0let zkušeností mezi 3\u00A0zakladateli.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdString(organizationGraph()),
          }}
        />
        <Navigation />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
