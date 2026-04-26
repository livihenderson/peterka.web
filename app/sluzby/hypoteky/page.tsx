import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../_components/Contact";
import HypotekaCalculator from "./_HypotekaCalculator";

export const metadata: Metadata = {
  title: "Hypotéky — vlastní bydlení i investiční",
  description:
    "Hypotéka, která vám slouží 30 let. Srovnání všech 12 bank na trhu, refinancování, investiční a americké hypotéky. Privátní finanční dům Peterka & Kolektiv.",
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
      "Hypotéka, která vám slouží 30 let — ne jenom v den podpisu.",
    type: "article",
  },
};

const types = [
  {
    n: "01",
    t: "Hypotéka pro vlastní bydlení",
    body:
      "Klasická účelová hypotéka na pořízení, výstavbu nebo rekonstrukci. Daňový odpočet úroků, možnost zákonné fixace, varianty s předhypotečním úvěrem.",
    ltv: "do 90 % LTV",
    fix: "fixace 3–10 let",
  },
  {
    n: "02",
    t: "Investiční hypotéka",
    body:
      "Pro nákup nemovitosti, kterou budete pronajímat. Bance se prokazuje výnos z nájmu, jiné scoring podmínky, jiná daňová logika. Souhra s portfolem majitele.",
    ltv: "do 80 % LTV",
    fix: "fixace 5–10 let",
  },
  {
    n: "03",
    t: "Refinancování",
    body:
      "Když končí fixace nebo když na trhu nabízejí podstatně výhodnější podmínky. Spočítáme reálný přínos po započtení sankcí, poplatků a&nbsp;fixačního okna.",
    ltv: "podle stávajícího úvěru",
    fix: "nová fixace 3–10 let",
  },
  {
    n: "04",
    t: "Americká hypotéka",
    body:
      "Neúčelový úvěr zajištěný nemovitostí. Pro podnikatele, na konsolidaci, na výkup spoluvlastníků, na přechodné financování.",
    ltv: "do 70 % LTV",
    fix: "fixace 5–10 let",
  },
];

const banks = [
  "Česká spořitelna",
  "ČSOB",
  "Komerční banka",
  "UniCredit",
  "Raiffeisenbank",
  "MONETA",
  "Hypoteční banka",
  "Air Bank",
  "Fio",
  "Equa bank",
  "mBank",
  "Wüstenrot",
];

const mistakes = [
  {
    n: "I",
    t: "Volba podle nejnižší sazby",
    b: "Rozdíl 0,2 % zní málo. Při hypotéce 6&nbsp;mil. Kč na 30&nbsp;let to znamená 250&nbsp;000 Kč. Ale ještě větší rozdíl umí udělat sankce za&nbsp;předčasné splacení nebo podmínky fixace — a&nbsp;ty sazba neukazuje.",
  },
  {
    n: "II",
    t: "Spěch jedné nabídky",
    b: `„Sazba platí jen do&nbsp;pátku“ je nejstarší trik. Banky nabídku obnoví. Lepší je mít na&nbsp;stole 4–5 nabídek a&nbsp;vybrat z&nbsp;nich, než&nbsp;si vzít první proto, že&nbsp;vás postrkují.`,
  },
  {
    n: "III",
    t: "Nepojištěná hypotéka",
    b: "Pojistka schopnosti splácet je často odmítaná pro&nbsp;připlatek. Statisticky se ale životní událost (úraz, nemoc, ztráta zaměstnání) v&nbsp;30letém horizontu týká skoro každé rodiny. Levnější je řešit teď&nbsp;než&nbsp;pak.",
  },
  {
    n: "IV",
    t: "Stará hypotéka po 5+ letech",
    b: "Mnoho klientů má hypotéku z&nbsp;období sazeb 2–3 % a&nbsp;nikdy ji od&nbsp;té&nbsp;doby neaktualizovali. Po&nbsp;skončení fixace běží často na&nbsp;tržní sazbě bez&nbsp;upozornění — a&nbsp;přeplatí desítky tisíc ročně.",
  },
];

export default function HypotekyPage() {
  return (
    <>
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

          <div className="grid grid-cols-12 gap-x-6 md:gap-x-12 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § Hypotéky · 02 / 05
              </div>
              <h1
                className="mt-6 font-display text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.95] tracking-[-0.025em] text-ink"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                <span className="block reveal">Hypotéka,</span>
                <span
                  className="block italic text-moss reveal"
                  style={{
                    animationDelay: "120ms",
                    fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1",
                  }}
                >
                  která vás přežije.
                </span>
              </h1>

              <p className="reveal mt-10 max-w-xl text-lg md:text-xl leading-[1.55] text-ink-soft" style={{ animationDelay: "260ms" }}>
                Banky vám prodají hypotéku za&nbsp;hodinu. My ji s&nbsp;vámi
                navrhneme tak, aby vám sloužila třicet let — a&nbsp;pomohla vám
                něco vybudovat, ne jen dlužit.
              </p>

              <div
                className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
                style={{ animationDelay: "400ms" }}
              >
                <Link
                  href="/#kontakt"
                  className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[12.5px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
                >
                  Sjednat schůzku k hypotéce
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
                    src="/albrecht_josef.png"
                    alt="Josef Albrecht — hypotéky a nemovitosti"
                    fill
                    sizes="(max-width: 1024px) 90vw, 440px"
                    className="object-cover portrait-treatment"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                  <div className="absolute left-5 bottom-5 right-5 text-paper">
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase opacity-80">
                      <span>Vede oblast</span>
                      <span className="w-6 h-px bg-paper/60" />
                      <span>9 let</span>
                    </div>
                    <div
                      className="mt-2 font-display text-2xl md:text-3xl tracking-tight"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
                    >
                      Josef Albrecht
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.28em] uppercase text-paper/70">
                      České Budějovice · Praha
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
          <div className="grid grid-cols-12 gap-x-6 md:gap-x-12 gap-y-10">
            <aside className="col-span-12 lg:col-span-3">
              <div className="lg:sticky lg:top-32">
                <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                  § 01
                </div>
                <div
                  className="mt-3 font-display text-3xl italic text-moss"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
                >
                  Filozofie
                </div>
                <div className="mt-6 h-px w-16 bg-rule rule-draw" />
              </div>
            </aside>

            <div className="col-span-12 lg:col-span-9 lg:pl-6 xl:pl-12">
              <h2
                className="reveal font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.025em] text-ink max-w-[22ch]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Dobrá hypotéka v&nbsp;den podpisu
                <br />
                <span className="italic text-moss">
                  není dobrá hypotéka v&nbsp;pátém roce.
                </span>
              </h2>

              <div className="reveal mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
                <p className="dropcap text-lg leading-[1.65] text-ink-soft">
                  Hypotéka je největší finanční rozhodnutí většiny rodin. Zároveň
                  je to rozhodnutí, ke&nbsp;kterému je dnes nejjednodušší si zalovat
                  sazby on-line, podepsat papír a&nbsp;zapomenout. Tím to ale
                  nekončí — dvojnásobně, pokud máte fixaci na&nbsp;3 nebo 5 let.
                </p>
                <p className="text-lg leading-[1.65] text-ink-soft">
                  Hypotéka je živý úvěr. Mění se s&nbsp;vámi, s&nbsp;trhem,
                  s&nbsp;daňovou legislativou. Naše práce nekončí podpisem
                  smlouvy — pokračuje při každém konci fixace, při každé změně
                  rodinné situace, při každém zlomu na&nbsp;trhu sazeb. To je
                  rozdíl, který dělá z&nbsp;hypotéky nástroj, ne&nbsp;břemeno.
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
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § 02 — Druhy
              </div>
              <h2
                className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] tracking-[-0.025em] text-ink"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Čtyři druhy hypoték — <span className="italic text-moss">každá pro jinou situaci.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                Banka vám zpravidla nabídne ten produkt, který má aktuálně
                v&nbsp;kampani. My začínáme u&nbsp;otázky, který typ hypotéky se
                k&nbsp;vám hodí — a&nbsp;teprve pak vybíráme banku.
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
                <div className="flex items-baseline justify-between">
                  <span
                    className="font-display num text-2xl text-brass-deep"
                    style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
                  >
                    {s.n}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                    <span>{s.ltv}</span>
                    <span className="inline-block w-2 h-px bg-rule" />
                    <span>{s.fix}</span>
                  </div>
                </div>
                <h3
                  className="mt-8 font-display text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1] tracking-[-0.02em] text-ink"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
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
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-light">
                § 03 — Postup
              </div>
              <h2
                className="mt-6 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.025em]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Jak vybíráme<br />
                <span className="italic text-brass-light">banku za vás.</span>
              </h2>
              <p className="mt-6 max-w-md text-paper/75 leading-relaxed">
                Srovnáváme všech 12 hypotečních věřitelů na&nbsp;trhu — ne&nbsp;tři,
                kteří dnes zrovna mají kampaň. Hodnotíme šest kritérií, ne&nbsp;jen
                sazbu. Připravujeme alternativy, ne&nbsp;jednu nabídku.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-light">
                Co srovnáváme
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10">
                {[
                  "Úroková sazba & RPSN",
                  "Délka a podmínky fixace",
                  "Sankce za předčasné splacení",
                  "Možnost mimořádných splátek",
                  "Pojištění schopnosti splácet",
                  "Daňové a doplňkové benefity",
                ].map((c, i) => (
                  <li key={c} className="flex items-baseline gap-3">
                    <span
                      className="font-display num text-brass-light text-base mt-0.5"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
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
                  Banky, se&nbsp;kterými pracujeme
                </div>
                <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 text-sm text-paper/80">
                  {banks.map((b, i) => (
                    <span key={b} className="flex items-center gap-3">
                      {b}
                      {i < banks.length - 1 && (
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
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § 04 — Hypoteční kalkulačka
              </div>
              <h2
                className="mt-6 font-display text-[clamp(2rem,4.4vw,3.8rem)] leading-[1.02] tracking-[-0.025em] text-ink"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Spočítejte si <span className="italic text-moss">měsíční splátku.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                Modelová kalkulačka pro&nbsp;představu rozpočtu. Skutečnou
                nabídku vám připravíme po&nbsp;hodinové schůzce, ve&nbsp;které
                projdeme i&nbsp;věci, které tato kalkulačka nezná.
              </p>
            </div>
          </div>

          <HypotekaCalculator />
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="relative py-24 md:py-32 bg-bone-warm">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 mb-12 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § 05 — Chyby
              </div>
              <h2
                className="mt-6 font-display text-[clamp(2rem,4.4vw,3.8rem)] leading-[1.02] tracking-[-0.025em] text-ink"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Čtyři chyby, které <span className="italic text-moss">stojí statisíce.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                S&nbsp;klienty, kteří k&nbsp;nám přicházejí na&nbsp;refinancování,
                vidíme tyto čtyři chyby opakovaně. Jsou to drahé chyby — ale
                naštěstí téměř všechny lze ještě napravit.
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
            {mistakes.map((m, i) => (
              <li
                key={m.n}
                className="reveal bg-bone-warm p-8 md:p-10"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div
                  className="font-display num text-4xl text-brass leading-none"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
                >
                  {m.n}
                </div>
                <h3
                  className="mt-6 font-display text-2xl md:text-3xl tracking-[-0.01em] text-ink"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
                >
                  {m.t}
                </h3>
                <p
                  className="mt-3 text-[15px] leading-[1.65] text-ink-soft max-w-md"
                  dangerouslySetInnerHTML={{ __html: m.b }}
                />
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-col md:flex-row md:items-center justify-between gap-6 pt-8 border-t border-rule">
            <p
              className="font-display italic text-xl md:text-2xl text-ink max-w-3xl leading-[1.3]"
              style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
            >
              Pokud máte hypotéku starší pěti let, stojí za&nbsp;to s&nbsp;námi
              probrat, jestli ještě dává smysl.
            </p>
            <Link
              href="/#kontakt"
              className="group inline-flex items-center gap-3 self-start md:self-auto whitespace-nowrap bg-ink text-paper px-6 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
            >
              Revize hypotéky zdarma
              <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Contact />
    </>
  );
}
