import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../_components/Contact";
import Calculator from "../../_components/Calculator";

export const metadata: Metadata = {
  title: "Investice — privátní portfolia, pravidelné investice, diskreční mandát",
  description:
    "Dlouhodobá investiční strategie, kterou jste schopni dodržet i ve špatném roce. Privátní portfolia, pravidelné investice, diskreční mandát. Peterka & Kolektiv.",
  keywords: [
    "investice",
    "investiční poradce",
    "pravidelné investice",
    "diskreční mandát",
    "akcie",
    "ETF",
    "investiční portfolio",
    "privátní investice",
    "investiční poradce Praha",
    "Peterka investice",
  ],
  alternates: { canonical: "/sluzby/investice" },
  openGraph: {
    title: "Investice · Peterka & Kolektiv",
    description:
      "Strategie, kterou stojí za to dodržet — i ve chvíli, kdy zprávy panikaří.",
    type: "article",
  },
};

const okruhy = [
  {
    n: "01",
    t: "Pravidelná investice",
    body:
      "Začínáte budovat. Měsíční úložky, dlouhý horizont, jednoduché a&nbsp;levné nástroje (zpravidla ETF). Ideální pro&nbsp;rodiče, kteří spoří dětem, nebo pro&nbsp;klienty před padesátkou se&nbsp;střednědobým cílem.",
    from: "od 1 000 Kč / měs.",
    horizon: "horizont 7+ let",
  },
  {
    n: "02",
    t: "Privátní portfolio",
    body:
      "Máte volné prostředky a&nbsp;hledáte strategii. Sestavujeme strukturované portfolio přizpůsobené vašemu cíli, horizontu a&nbsp;rizikové toleranci. Pravidelná revize a&nbsp;rebalancování.",
    from: "od 500 000 Kč",
    horizon: "horizont 5+ let",
  },
  {
    n: "03",
    t: "Diskreční mandát",
    body:
      "Plnou správu přenášíte na&nbsp;nás. Vy schvalujete strategii a&nbsp;limity, my obstaráváme každodenní rozhodnutí. Vhodné pro&nbsp;klienty s&nbsp;velkým majetkem, kteří chtějí svůj čas věnovat něčemu jinému.",
    from: "od 5 mil. Kč",
    horizon: "horizont 10+ let",
  },
];

const realityNumbers = [
  {
    v: "7–9 %",
    lbl: "průměrný roční výnos akciového trhu",
    sub: "dlouhodobý průměr za 100+ let, MSCI World",
  },
  {
    v: "−40 %",
    lbl: "nejhorší pokles, který musíte ustát",
    sub: "v průměru jednou za 10–15 let — vždy se vrátí",
  },
  {
    v: "8×",
    lbl: "kolikrát se peníze zhodnotí",
    sub: "při 7 % p.a. za 30 let — síla složeného úročení",
  },
  {
    v: "0",
    lbl: "lidí, kteří umí trh načasovat",
    sub: "akademický výzkum 60 let mlčky souhlasí",
  },
];

const mistakes = [
  {
    n: "I",
    t: "Snaha o načasování trhu",
    b: `„Počkám, až to spadne.“ Statisticky největší ztráty si investoři způsobují tím, že stojí mimo trh během deseti nejlepších dní v&nbsp;dekádě. Pravidelnost dlouhodobě poráží odhady.`,
  },
  {
    n: "II",
    t: "Drahé aktivně řízené fondy",
    b: `Fond s&nbsp;poplatkem 2,5 % p.a. musí trh každý rok porazit o&nbsp;víc než&nbsp;2,5 %, jen aby vám něco vydělal. Většina nedokáže ani to. Levné ETF s&nbsp;poplatkem 0,1 % zpravidla výkon poměřuje, ne&nbsp;kazí.`,
  },
  {
    n: "III",
    t: "Příliš mnoho fondů",
    b: "Klient s&nbsp;deseti fondy v&nbsp;portfoliu obvykle drží stejné akcie třikrát zaplacené třem správcům. Diversifikace je&nbsp;v&nbsp;tom, co fondy obsahují, ne&nbsp;v&nbsp;jejich počtu.",
  },
  {
    n: "IV",
    t: "Daňová slepota",
    b: "Tříletý časový test, daňová ztráta z&nbsp;jiných investic, zápočet — to&nbsp;všechno mění reálný výnos o&nbsp;jednotky procent. Nejde o&nbsp;optimalizaci, jde o&nbsp;to neplatit dvakrát to, co se dá zaplatit jednou.",
  },
];

export default function InvesticePage() {
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
            <span className="text-ink">Investice</span>
          </nav>

          <div className="grid grid-cols-12 gap-x-6 md:gap-x-12 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § Investice · 01 / 05
              </div>
              <h1
                className="mt-6 font-display text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.95] tracking-[-0.025em] text-ink"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                <span className="block reveal">Strategie,</span>
                <span
                  className="block italic text-moss reveal"
                  style={{
                    animationDelay: "120ms",
                    fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1",
                  }}
                >
                  kterou stojí za to dodržet.
                </span>
              </h1>

              <p className="reveal mt-10 max-w-xl text-lg md:text-xl leading-[1.55] text-ink-soft" style={{ animationDelay: "260ms" }}>
                Investování není o&nbsp;hledání zázračných akcií. Je to disciplína —
                pravidelnost, čas, daňová efektivita a&nbsp;klid během poklesů.
                To&nbsp;poslední vás v&nbsp;bance nenaučí.
              </p>

              <div
                className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
                style={{ animationDelay: "400ms" }}
              >
                <Link
                  href="/#kontakt"
                  className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[12.5px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
                >
                  Sjednat investiční konzultaci
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
                <a
                  href="#kalkulacka"
                  className="group inline-flex items-center gap-3 border-b border-ink/40 pb-1 text-[13px] tracking-[0.18em] uppercase text-ink-soft hover:text-moss hover:border-moss transition-colors"
                >
                  Spočítat zhodnocení
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
                    src="/iva_petrikova.png"
                    alt="Iva Petříková — investice a privátní portfolia"
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
                      <span>10 let</span>
                    </div>
                    <div
                      className="mt-2 font-display text-2xl md:text-3xl tracking-tight"
                      style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30" }}
                    >
                      Iva Petříková
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.28em] uppercase text-paper/70">
                      Praha · Privátní portfolia
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
                className="reveal font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.025em] text-ink max-w-[24ch]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Trh poráží <span className="italic text-moss">nudná </span>strategie<br />
                dodržovaná deset let v&nbsp;kuse.
              </h2>

              <div className="reveal mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
                <p className="dropcap text-lg leading-[1.65] text-ink-soft">
                  Většina investorů neprohrává kvůli špatné volbě nástroje, ale
                  kvůli své vlastní psychologii. Vystoupí v&nbsp;krizi, vrátí se
                  po&nbsp;vrcholu, hledají zkratky, kupují to, o&nbsp;čem se píše,
                  a&nbsp;prodávají to, co bolí. Ne proto, že&nbsp;jsou hloupí —
                  proto, že&nbsp;jsou lidé.
                </p>
                <p className="text-lg leading-[1.65] text-ink-soft">
                  Naše práce je dvojí: postavit s&nbsp;vámi strategii, která
                  matematicky dává smysl, a&nbsp;potom stát vedle vás
                  ve&nbsp;chvíli, kdy hlavní zprávy panikaří. Investice
                  bez&nbsp;disciplíny je sázka. Investice s&nbsp;disciplínou je
                  spořicí účet, který se násobí časem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OKRUHY */}
      <section className="relative py-20 md:py-28 bg-bone-light">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 mb-12 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § 02 — Tři okruhy
              </div>
              <h2
                className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] tracking-[-0.025em] text-ink"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Tři způsoby, jak <span className="italic text-moss">začít </span>nebo&nbsp;pokračovat.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                Každý klient přichází z&nbsp;jiného místa. Někdo začíná, někdo
                spravuje rodinný kapitál, někdo by se rád zbavil každodenního
                rozhodování. Pro&nbsp;každého z&nbsp;nich máme přiměřený formát.
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
                <div className="flex items-baseline justify-between">
                  <span
                    className="font-display num text-2xl text-brass-deep"
                    style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
                  >
                    {s.n}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute text-right leading-snug">
                    <span>{s.from}</span>
                  </div>
                </div>
                <h3
                  className="mt-8 font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-[1] tracking-[-0.02em] text-ink"
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
                >
                  {s.t}
                </h3>
                <p
                  className="mt-4 text-[15px] leading-[1.65] text-ink-soft max-w-md"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />
                <div className="mt-auto pt-6 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                  {s.horizon}
                </div>
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
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-light">
                § 03 — Pravdivá čísla
              </div>
              <h2
                className="mt-6 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.025em]"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
              >
                Co byste měli<br />
                <span className="italic text-brass-light">opravdu očekávat.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
              <p className="text-paper/80 leading-relaxed max-w-md">
                Slibovat 15 % ročně bez&nbsp;rizika je byznys jiných firem.
                My vám raději hned na&nbsp;začátku ukážeme, jak vypadá
                realistický průběh. Disciplína se tvoří z&nbsp;nepříjemných
                pravd, ne&nbsp;z&nbsp;katalogových.
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
                  style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
                >
                  {s.v}
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
        </div>
      </section>

      {/* CALCULATOR (reused) */}
      <Calculator />

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
                Čtyři chyby, které <span className="italic text-moss">krájejí výnos.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                Na&nbsp;rozdíl od&nbsp;hypoték nelze investiční chyby vždy zpětně
                napravit — proto je důležité vědět o&nbsp;nich dřív, než&nbsp;začnou.
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
              Pokud váháte mezi „začít teď" a&nbsp;„počkat na&nbsp;lepší dobu" —
              první z&nbsp;nich téměř vždy vyhrává.
            </p>
            <Link
              href="/#kontakt"
              className="group inline-flex items-center gap-3 self-start md:self-auto whitespace-nowrap bg-ink text-paper px-6 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
            >
              Začít s investováním
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
