import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../_components/Contact";
import HypotekaCalculator from "./_HypotekaCalculator";
import { servicePageGraph, jsonLdString } from "../../_lib/structuredData";
import { PARTNER_BANKS } from "../../_lib/site";
import ivaPortrait from "../../../public/iveta_petrikova_nova.webp";

export const metadata: Metadata = {
  title: "Hypotéky\u00A0- vlastní bydlení i\u00A0investiční",
  description:
    "Hypotéka srozumitelně a\u00A0bez zbytečných starostí. Srovnání všech hypotečních věřitelů na trhu, retence a\u00A0refinancování, investiční i\u00A0americké hypotéky. Peterka & Kolektiv.",
  keywords: [
    "hypotéka",
    "hypotéky",
    "refinancování hypotéky",
    "investiční hypotéka",
    "americká hypotéka",
    "hypoteční kalkulačka",
    "hypotéka Praha",
    "hypotéka České Budějovice",
    "Peterka hypotéky",
  ],
  alternates: { canonical: "/sluzby/hypoteky" },
  openGraph: {
    title: "Hypotéky · Peterka & Kolektiv",
    description:
      "Hypotéka srozumitelně a\u00A0bez zbytečných starostí.",
    type: "article",
  },
};

const types = [
  {
    n: "01",
    t: "Hypotéka pro vlastní bydlení",
    body:
      "Klasická účelová hypotéka na pořízení, výstavbu nebo rekonstrukci. Daňový odpočet úroků, možnosti fixací, varianty s\u00A0předhypotečním úvěrem.",
  },
  {
    n: "02",
    t: "Investiční hypotéka",
    body:
      "Pro nákup nemovitosti, kterou budete pronajímat. Scoring podmínky, jiná daňová logika. Souhra s\u00A0portfoliem klienta.",
  },
  {
    n: "03",
    t: "Retence i\u00A0refinancování",
    body:
      "Retenci či refinancování řešíme na konci fixace i\u00A0v\u00A0jejím průběhu. Porovnáváme, co je pro Vás v\u00A0danou chvíli výhodnější.",
  },
  {
    n: "04",
    t: "Úvěry na míru",
    body:
      "Kromě klasiky řešíme i\u00A0méně obvyklé situace: úvěry ze&nbsp;stavebního spoření, podnikatelský i&nbsp;spotřebitelský úvěr, offset hypotéku, americkou hypotéku, hypotéku bez&nbsp;nemovitosti i&nbsp;štafetovou hypotéku.",
  },
];

export default function HypotekyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            servicePageGraph({
              slug: "hypoteky",
              name: "Hypotéky",
              description:
                "Hypotéka, která Vám slouží 30\u00A0let\u00A0- srovnání všech bank na trhu, refinancování, investiční a\u00A0americké hypotéky.",
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
            <span className="text-ink">Hypotéky</span>
          </nav>

          <div className="grid grid-cols-12 md:gap-x-12 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <h1
                className="mt-6 font-display text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.95] tracking-[-0.025em] text-ink"
              >
                <span className="block reveal">Hypotéka srozumitelně</span>
                <span
                  className="block italic text-moss reveal"
                  style={{
                    animationDelay: "120ms",
                    }}
                >
                  a&nbsp;bez zbytečných starostí.
                </span>
              </h1>

              <p className="reveal mt-10 max-w-xl text-lg md:text-xl leading-[1.55] text-ink-soft" style={{ animationDelay: "260ms" }}>
                Dobrá hypotéka má dávat smysl dnes i&nbsp;za&nbsp;desítky let.
                Pomůžeme Vám ji nastavit tak, aby odpovídala Vašim možnostem,
                plánům i&nbsp;dlouhodobým cílům.
              </p>

              <div
                className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
                style={{ animationDelay: "400ms" }}
              >
                <Link
                  href="/#kontakt"
                  className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[12.5px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
                >
                  Sjednat schůzku k&nbsp;hypotéce
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
                <a
                  href="#kalkulacka"
                  className="group inline-flex items-center gap-3 border-b border-ink/40 pb-1 text-[13px] tracking-[0.18em] uppercase text-ink-soft hover:text-moss hover:border-moss transition-colors"
                >
                  Spočítat splátku
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
                    src={ivaPortrait}
                    alt="Iva Petříková\u00A0- úvěry a\u00A0hypotéky"
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
                      <span>10&nbsp;let</span>
                    </div>
                    <div
                      className="mt-2 font-display text-2xl md:text-3xl tracking-tight"
                    >
                      Iva Petříková
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.28em] uppercase text-paper/70">
                      Tábor · Úvěry a&nbsp;hypotéky
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
                className="reveal font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.025em] text-ink max-w-[22ch]"
              >
                Výhodná hypotéka dnes
                <br />
                <span className="italic text-moss">
                  nemusí znamenat to samé za&nbsp;5&nbsp;let.
                </span>
              </h2>

              <div className="reveal mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
                <p className="dropcap text-lg leading-[1.65] text-ink-soft">
                  Hypotéka patří mezi nejvýznamnější finanční rozhodnutí, která
                  většina rodin během života dělá. Nejde přitom jen o&nbsp;výběr
                  úrokové sazby a&nbsp;podpis smlouvy. Hypotéka je dlouhodobý
                  závazek, který se v&nbsp;průběhu let může měnit spolu s&nbsp;Vaší
                  životní situací i&nbsp;podmínkami na&nbsp;trhu.
                </p>
                <p className="text-lg leading-[1.65] text-ink-soft">
                  Proto naše práce podpisem smlouvy nekončí. Pomáháme Vám
                  hypotéku průběžně řešit a&nbsp;vyhodnocovat: při konci fixace,
                  změně Vašich potřeb i&nbsp;při významných změnách na&nbsp;finančním
                  trhu. Naším cílem je, aby Vaše financování dlouhodobě
                  odpovídalo Vašim možnostem a&nbsp;plánům.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="relative py-20 md:py-28 bg-bone-light">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 mb-12 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <h2
                className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] tracking-[-0.025em] text-ink"
              >
                Čtyři druhy řešení, <span className="italic text-moss">každé pro jinou situaci.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                Nenabízíme produkt, který je aktuálně v&nbsp;kampani. Začínáme
                u&nbsp;otázky, který typ úvěru se k&nbsp;Vám hodí, a&nbsp;teprve
                pak vybíráme banku.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
            {types.map((s, i) => (
              <article
                key={s.n}
                className="reveal relative bg-bone p-8 md:p-10 min-h-[280px] flex flex-col"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span
                  className="font-display num text-2xl text-brass-deep"
                >
                  {s.n}
                </span>
                <h3
                  className="mt-8 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1] tracking-[-0.02em] text-ink"
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

      {/* JAK VYBÍRÁME BANKY */}
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
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-12">
            <div className="col-span-12 lg:col-span-5">
              <h2
                className="mt-6 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.025em]"
              >
                Jak s&nbsp;Vámi<br />
                <span className="italic text-brass-light">vybíráme hypotéku.</span>
              </h2>
              <p className="mt-6 max-w-md text-paper/75 leading-relaxed">
                Srovnáváme všechny hypoteční věřitele na&nbsp;trhu. Hodnotíme
                šest kritérií, ne&nbsp;jen sazbu. Připravujeme alternativy,
                ne&nbsp;jednu nabídku.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-light">
                Co srovnáváme
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
                {[
                  "Úroková sazba & RPSN",
                  "Délka a\u00A0podmínky fixace",
                  "Sankce za předčasné splacení",
                  "Možnost mimořádných splátek",
                  "Pojištění schopnosti splácet",
                  "Daňové a\u00A0doplňkové benefity",
                ].map((c, i) => (
                  <li key={c} className="flex items-baseline gap-3">
                    <span
                      className="font-display num text-brass-light text-base mt-0.5"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-paper/90 leading-snug">{c}</span>
                  </li>
                ))}
              </ul>

              {/* Bank list */}
              <div className="mt-12 pt-8 border-t border-rule-dark">
                <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-light">
                  Banky, se&nbsp;kterými spolupracujeme
                </div>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm text-paper/80">
                  {PARTNER_BANKS.map((b, i) => (
                    <span key={b} className="flex items-center gap-3">
                      {b}
                      {i < PARTNER_BANKS.length - 1 && (
                        <span className="text-brass-light/40">·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="kalkulacka" className="relative py-24 md:py-32 bg-bone">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 mb-12 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <h2
                className="mt-6 font-display text-[clamp(2rem,4.4vw,3.8rem)] leading-[1.02] tracking-[-0.025em] text-ink"
              >
                Spočítejte si <span className="italic text-moss">měsíční splátku.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                Modelová kalkulačka pro&nbsp;představu rozpočtu. Skutečnou
                nabídku Vám připravíme po&nbsp;hodinové schůzce, ve&nbsp;které
                projdeme i&nbsp;věci, které tato kalkulačka nezná.
              </p>
            </div>
          </div>

          <HypotekaCalculator />
        </div>
      </section>

      <Contact />
    </>
  );
}
