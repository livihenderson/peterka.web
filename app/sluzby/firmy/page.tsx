import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../_components/Contact";
import { servicePageGraph, jsonLdString } from "../../_lib/structuredData";
import peterkaPortrait from "../../../public/peterka_profile.webp";
import StatValue from "../../_components/StatValue";

export const metadata: Metadata = {
  title: "Firmy\u00A0- péče o\u00A0majitele i\u00A0podnik",
  description:
    "Optimalizace odměn, firemní financování, ochrana klíčových osob a\u00A0mezigenerační předání. Finanční péče pro majitele firem a\u00A0jejich rodiny. Peterka & Kolektiv.",
  keywords: [
    "firemní finance",
    "finanční poradce pro firmy",
    "optimalizace odměn jednatele",
    "firemní financování",
    "manažerské pojištění",
    "pojištění klíčových osob",
    "předání firmy",
    "nástupnictví",
    "mezigenerační předání majetku",
    "Peterka firmy",
  ],
  alternates: { canonical: "/sluzby/firmy" },
  openGraph: {
    title: "Firmy · Peterka & Kolektiv",
    description:
      "Majitel a\u00A0podnik nejsou dva oddělené světy. Staráme se o\u00A0ně jako o\u00A0celek.",
    type: "article",
  },
};

const okruhy = [
  {
    n: "01",
    t: "Optimalizace odměn",
    body:
      "Jak nastavit poměr mzdy, podílů na zisku a\u00A0benefitů s\u00A0ohledem na daňové i\u00A0dlouhodobé finanční dopady. Spolupracujeme přitom s\u00A0Vaším daňovým poradcem nebo účetním.",
  },
  {
    n: "02",
    t: "Firemní financování",
    body:
      "Provozní úvěry, financování strojů, hal i\u00A0firemních nemovitostí. Nabídky porovnáváme napříč bankami a\u00A0hledáme řešení odpovídající potřebám a\u00A0možnostem firmy.",
  },
  {
    n: "03",
    t: "Ochrana a revize",
    body:
      "Pojištění klíčových osob, manažerské odpovědnosti i\u00A0ochrana rodiny majitele. Smlouvy a\u00A0nastavení krytí pravidelně revidujeme, aby odpovídaly aktuální situaci firmy i\u00A0jejímu dalšímu vývoji.",
  },
];

const realityNumbers = [
  {
    v: "54 %",
    lbl: "podnikových úvěrů tvoří dlouhodobé financování",
    sub: "podle dat ČNB",
  },
  {
    v: "1\u00A0628\u00A0mld. Kč",
    lbl: "činil objem úvěrů českým nefinančním podnikům",
    sub: "v\u00A0červenci 2026",
  },
  {
    v: "1,4 mil.",
    lbl: "pojistných událostí řešily pojišťovny v\u00A0neživotním pojištění",
    sub: "neživotní pojištění jako celek, nadřazené podnikovému",
  },
  {
    v: "0\u00A0Kč",
    lbl: "stojí druhý názor",
    sub: "na Vaše stávající firemní úvěry a\u00A0pojistky",
  },
];

export default function FirmyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            servicePageGraph({
              slug: "firmy",
              name: "Firemní finance",
              description:
                "Komplexní finanční řízení firem\u00A0- financování, pojištění, zaměstnanecké benefity a\u00A0daňová optimalizace.",
            }),
          ),
        }}
      />
      {/* HERO */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
        <div className="grain absolute inset-0 pointer-events-none" />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(120% 80% at 12% 0%, rgba(201,164,113,0.15) 0%, rgba(242,235,221,0) 55%), radial-gradient(80% 60% at 100% 100%, rgba(30,58,44,0.10) 0%, rgba(242,235,221,0) 60%)",
          }}
        />

        <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-3 mb-12 font-mono text-[11px] tracking-[0.28em] uppercase text-ink-mute">
            <Link href="/" className="hover:text-moss">Domů</Link>
            <span>›</span>
            <Link href="/#sluzby" className="hover:text-moss">Služby</Link>
            <span>›</span>
            <span className="text-ink">Firmy</span>
          </nav>

          <div className="grid grid-cols-12 md:gap-x-12 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <h1
                className="mt-6 font-display text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.95] tracking-[-0.025em] text-ink"
              >
                <span className="block reveal">Firma a&nbsp;osobní finance</span>
                <span
                  className="block italic text-moss reveal"
                  style={{
                    animationDelay: "120ms",
                  }}
                >
                  spolu souvisejí.
                </span>
              </h1>

              <div className="reveal mt-10 max-w-xl text-lg md:text-xl leading-[1.55] text-ink-soft" style={{ animationDelay: "260ms" }}>
                <p>
                  <em>Majitel firmy nemá oddělené finanční světy.</em> Odměna
                  jednatele, financování firmy, ochrana klíčových lidí
                  i&nbsp;majetek rodiny spolu souvisejí. Dává proto smysl řešit
                  je v&nbsp;širším kontextu a&nbsp;s&nbsp;dlouhodobým pohledem.
                </p>
                <p className="mt-4">
                  Propojujeme pohled na&nbsp;firmu a&nbsp;osobní finance
                  majitele. Díky spolupráci s&nbsp;naším korporátním oddělením
                  dokážeme řešit jak každodenní potřeby firmy, tak dlouhodobé
                  finanční záměry jejího majitele.
                </p>
              </div>

              <div
                className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
                style={{ animationDelay: "400ms" }}
              >
                <Link
                  href="/#kontakt"
                  className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[12.5px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
                >
                  Sjednat konzultaci pro firmu
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
                <a
                  href="#okruhy"
                  className="group inline-flex items-center gap-3 border-b border-ink/40 pb-1 text-[13px] tracking-[0.18em] uppercase text-ink-soft hover:text-moss hover:border-moss transition-colors"
                >
                  Co řešíme nejčastěji
                </a>
              </div>
            </div>

            {/* Lead advisor portrait */}
            <div className="col-span-12 lg:col-span-5 reveal-slow">
              <div className="relative aspect-[3/4] w-full max-w-[440px] ml-auto">
                <div className="absolute -top-3 -left-3 w-10 h-10 border-t border-l border-brass z-10" />
                <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b border-r border-brass z-10" />
                <div className="relative w-full h-full overflow-hidden bg-moss-deep">
                  <Image
                    src={peterkaPortrait}
                    alt="Tomáš Peterka\u00A0- péče o\u00A0majitele firem"
                    fill
                    sizes="(max-width: 1024px) 90vw, 440px"
                    className="object-cover portrait-treatment"
                    placeholder="blur"
                    preload
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                  <div className="absolute left-5 bottom-5 right-5 text-paper">
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase opacity-80">
                      <span>Vede oblast</span>
                      <span className="w-6 h-px bg-paper/60" />
                      <span>16&nbsp;let</span>
                    </div>
                    <div
                      className="mt-2 font-display text-2xl md:text-3xl tracking-tight"
                    >
                      Tomáš Peterka
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.28em] uppercase text-paper/70">
                      Tábor · Zakladatel
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="relative py-24 md:py-32 bg-bone">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10">
          <div className="grid grid-cols-12 md:gap-x-12 gap-y-10">
            <aside className="col-span-12 lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div
                  className="mt-3 font-display text-3xl italic text-moss"
                >
                  Filozofie
                </div>
                <div className="mt-6 h-px w-16 bg-rule rule-draw" />
              </div>
            </aside>

            <div className="col-span-12 lg:col-span-9 lg:pl-6 xl:pl-12">
              <h2
                className="reveal font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.025em] text-ink max-w-[24ch]"
              >
                Nejdřív <span className="italic text-moss">majitel, </span>
                potom produkty.
              </h2>

              <div className="reveal mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
                <p className="dropcap text-lg leading-[1.65] text-ink-soft">
                  <em>Začínáme u&nbsp;majitele, ne&nbsp;u&nbsp;konkrétního
                  produktu.</em> Nejprve potřebujeme rozumět firmě, rodinné
                  situaci a&nbsp;Vašim dlouhodobým záměrům. Teprve potom hledáme
                  vhodné řešení.
                </p>
                <p className="text-lg leading-[1.65] text-ink-soft">
                  Společně řešíme financování, ochranu klíčových lidí, nastavení
                  odměňování i&nbsp;plánování budoucího předání firmy. Jedna
                  strategie propojuje jednotlivá rozhodnutí a&nbsp;pomáhá držet
                  celý finanční obraz pohromadě.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OKRUHY */}
      <section id="okruhy" className="relative py-20 md:py-28 bg-bone-light">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 mb-12 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <h2
                className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] tracking-[-0.025em] text-ink"
              >
                Co s&nbsp;majiteli <span className="italic text-moss">řešíme </span>nejčastěji.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                <em>Každá firma má jiné potřeby a&nbsp;nachází se v&nbsp;jiné
                fázi svého vývoje.</em> Někdo investuje a&nbsp;roste, jiný
                konsoliduje nebo připravuje firmu na&nbsp;další generaci.
                Společným tématem je vždy majitel a&nbsp;rozhodnutí, která
                ovlivňují jeho firmu i&nbsp;osobní finance.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
            {okruhy.map((s, i) => (
              <article
                key={s.n}
                className="reveal relative bg-bone p-8 md:p-10 min-h-[320px] flex flex-col"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <span
                  className="font-display num text-2xl text-brass-deep"
                >
                  {s.n}
                </span>
                <h3
                  className="mt-8 font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-[1] tracking-[-0.02em] text-ink"
                >
                  {s.t}
                </h3>
                <p
                  className="mt-4 text-[15px] leading-[1.65] text-ink-soft max-w-md"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REALISTIC NUMBERS */}
      <section className="relative py-24 md:py-32 bg-moss text-paper overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-0 opacity-50"
          style={{
            background:
              "radial-gradient(60% 50% at 80% 0%, rgba(201,164,113,0.10) 0%, rgba(30,58,44,0) 70%)",
          }}
        />
        <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-12 mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-5">
              <h2
                className="mt-6 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.025em]"
              >
                Čísla jsou důležitá,<br />
                <span className="italic text-brass-light">ještě důležitější je vědět, co znamenají pro&nbsp;Vaši firmu.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
              <p className="text-paper/80 leading-relaxed max-w-md">
                Každý majitel dobře zná čísla své firmy. Stejnou pozornost si
                ale zaslouží i&nbsp;otázky, které se v&nbsp;běžném provozu neřeší
                každý den: ochrana klíčových lidí, finanční rizika
                a&nbsp;budoucnost vlastnictví firmy.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-rule-dark">
            {realityNumbers.map((s, i) => (
              <div
                key={i}
                className="reveal bg-moss p-7 md:p-8 flex flex-col justify-between min-h-[200px]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="font-display num text-5xl md:text-6xl leading-[0.9] tracking-[-0.02em]"
                >
                  <StatValue value={s.v} delay={i * 120} />
                </div>
                <div className="mt-6">
                  <div className="font-display italic text-base md:text-lg text-brass-light leading-snug">
                    {s.lbl}
                  </div>
                  <div className="mt-1.5 font-mono text-[10px] tracking-[0.22em] uppercase text-paper/55 leading-snug">
                    {s.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-paper/55">
            Zdroje: ČNB, ČAP
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
