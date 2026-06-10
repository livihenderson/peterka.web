import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../_components/Contact";
import StatValue from "../../_components/StatValue";

export const metadata: Metadata = {
  title: "Pojištění — životní, majetkové, odpovědnost",
  description:
    "Pojistka, která dává smysl — bez balastu, který se nikdy nevyplatí. Ochrana příjmu a rodiny, majetek a domácnost, odpovědnost a podnikání. Peterka & Kolektiv.",
  keywords: [
    "pojištění",
    "životní pojištění",
    "pojištění nemovitosti",
    "pojištění domácnosti",
    "úrazové pojištění",
    "pojištění invalidity",
    "pojištění odpovědnosti",
    "revize pojistných smluv",
    "pojišťovací poradce",
    "Peterka pojištění",
  ],
  alternates: { canonical: "/sluzby/pojisteni" },
  openGraph: {
    title: "Pojištění · Peterka & Kolektiv",
    description:
      "Pojištění pro dny, které nikdo neplánuje — bez balastu, který se nikdy nevyplatí.",
    type: "article",
  },
};

const okruhy = [
  {
    n: "01",
    t: "Ochrana příjmu a rodiny",
    body:
      "Životní a&nbsp;úrazové pojištění postavené od&nbsp;největšího rizika: výpadek příjmu živitele. Invalidita, vážné nemoci, smrt — v&nbsp;tomto pořadí, protože v&nbsp;tomto pořadí přicházejí. Bez&nbsp;připojištění, která se nikdy nevyplatí.",
    from: "pro živitele rodin",
    horizon: "revize při životních změnách",
  },
  {
    n: "02",
    t: "Majetek a domácnost",
    body:
      "Dům, byt, domácnost, auto. Hlídáme hlavně pojistné částky — ceny staveb rostou rychleji, než&nbsp;se smlouvy aktualizují, a&nbsp;podpojištěný dům znamená krácené plnění přesně ve&nbsp;chvíli, kdy potřebujete celou částku.",
    from: "dům · byt · auto",
    horizon: "aktualizace 1× za 3 roky",
  },
  {
    n: "03",
    t: "Odpovědnost a podnikání",
    body:
      "Občanská i&nbsp;profesní odpovědnost, korporátní programy, pojištění podnikatelských rizik. A&nbsp;když se něco stane, řešíme škodní událost s&nbsp;vámi — od&nbsp;nahlášení po&nbsp;vyplacení.",
    from: "pro rodiny i firmy",
    horizon: "vedeme i škodní události",
  },
];

const realityNumbers = [
  {
    v: "4×",
    lbl: "pravděpodobnější je invalidita než smrt",
    sub: "v produktivním věku — a pojišťuje se nejméně",
  },
  {
    v: "60 %",
    lbl: "českých nemovitostí je podpojištěno",
    sub: "pojistné částky neodpovídají cenám staveb",
  },
  {
    v: "1/3",
    lbl: "pojistného často platí balast",
    sub: "připojištění s minimální šancí na plnění",
  },
  {
    v: "0 Kč",
    lbl: "stojí revize stávajících smluv",
    sub: "druhý názor na to, co už platíte",
  },
];

const mistakes = [
  {
    n: "I",
    t: "Investiční životko jako spoření",
    b: "Smíchat pojištění s&nbsp;investicí znamená přeplatit obojí. Pojištění má chránit, investice zhodnocovat — každé zvlášť, průhledně a&nbsp;za&nbsp;férový poplatek.",
  },
  {
    n: "II",
    t: "Pojištěná smrt, nepojištěná invalidita",
    b: "Invalidita je v&nbsp;produktivním věku výrazně pravděpodobnější než&nbsp;smrt — a&nbsp;finančně bolí déle: příjem zmizí, výdaje vzrostou. Přesto bývá v&nbsp;pojistkách na&nbsp;posledním místě.",
  },
  {
    n: "III",
    t: "Podpojištěný dům",
    b: "Pojistná částka z&nbsp;doby koupě dnes nepostaví ani&nbsp;hrubou stavbu. Při&nbsp;podpojištění pojišťovna krátí plnění — i&nbsp;malou škodu pak platíte z&nbsp;větší části sami.",
  },
  {
    n: "IV",
    t: "Smlouva, na kterou se nesahá",
    b: "Pojistka z&nbsp;roku 2012 nezná vaši hypotéku, děti ani&nbsp;podnikání. Život se mění každých pár let — smlouva, která se nemění s&nbsp;ním, chrání minulost, ne&nbsp;vás.",
  },
];

export default function PojisteniPage() {
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
            <span className="text-ink">Pojištění</span>
          </nav>

          <div className="grid grid-cols-12 gap-x-6 md:gap-x-12 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § Pojištění · 03 / 05
              </div>
              <h1
                className="mt-6 font-display text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.95] tracking-[-0.025em] text-ink"
              >
                <span className="block reveal">Pojištění pro dny,</span>
                <span
                  className="block italic text-moss reveal"
                  style={{
                    animationDelay: "120ms",
                  }}
                >
                  které nikdo neplánuje.
                </span>
              </h1>

              <p className="reveal mt-10 max-w-xl text-lg md:text-xl leading-[1.55] text-ink-soft" style={{ animationDelay: "260ms" }}>
                Dobrá pojistka se nepozná podle ceny ani&nbsp;podle počtu
                připojištění. Pozná se v&nbsp;jediný den — když má zaplatit.
                Stavíme smlouvy, které ten den ustojí, a&nbsp;škrtáme balast,
                který se nikdy nevyplatí.
              </p>

              <div
                className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
                style={{ animationDelay: "400ms" }}
              >
                <Link
                  href="/#kontakt"
                  className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[12.5px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
                >
                  Sjednat konzultaci o pojištění
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                    →
                  </span>
                </Link>
                <a
                  href="#okruhy"
                  className="group inline-flex items-center gap-3 border-b border-ink/40 pb-1 text-[13px] tracking-[0.18em] uppercase text-ink-soft hover:text-moss hover:border-moss transition-colors"
                >
                  Co pojišťujeme
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
                    src="/lukashorejsi_profilovka.webp"
                    alt="Lukáš Hořejší — pojištění a ochrana majetku"
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
                      <span>7 let</span>
                    </div>
                    <div
                      className="mt-2 font-display text-2xl md:text-3xl tracking-tight"
                    >
                      Lukáš Hořejší
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.28em] uppercase text-paper/70">
                      Tábor · Ochrana majetku
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
                Pojišťujeme <span className="italic text-moss">katastrofy, </span>
                ne&nbsp;nepříjemnosti.
              </h2>

              <div className="reveal mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
                <p className="dropcap text-lg leading-[1.65] text-ink-soft">
                  Rozbitý displej přežijete. Deset let invalidního důchodu
                  s&nbsp;hypotékou a&nbsp;dvěma dětmi nikoliv. Přesto se běžné
                  pojistky plní drobnostmi, které se dobře prodávají,
                  a&nbsp;šetří na&nbsp;rizicích, která umí rodinu skutečně
                  položit.
                </p>
                <p className="text-lg leading-[1.65] text-ink-soft">
                  Stavíme to obráceně: nejdřív velká rizika — příjem, střecha
                  nad&nbsp;hlavou, odpovědnost — pořádně a&nbsp;levně. Drobnosti
                  jen tam, kde dávají smysl. A&nbsp;když se něco stane, nejste
                  na&nbsp;telefonu s&nbsp;pojišťovnou sami — škodní událost
                  vedeme s&nbsp;vámi až&nbsp;do&nbsp;vyplacení.
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
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § 02 — Tři okruhy
              </div>
              <h2
                className="mt-6 font-display text-[clamp(2rem,4.2vw,3.6rem)] leading-[1.05] tracking-[-0.025em] text-ink"
              >
                Tři vrstvy <span className="italic text-moss">ochrany.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                Příjem, majetek, odpovědnost. Každá vrstva chrání jinou část
                života — a&nbsp;každá má svá pravidla, podle kterých se pozná
                dobrá smlouva od&nbsp;drahého papíru.
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
                  >
                    {s.n}
                  </span>
                  <div className="flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute text-right leading-snug">
                    <span>{s.from}</span>
                  </div>
                </div>
                <h3
                  className="mt-8 font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-[1] tracking-[-0.02em] text-ink"
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
              >
                Co pojistky kryjí —<br />
                <span className="italic text-brass-light">a co doopravdy hrozí.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
              <p className="text-paper/80 leading-relaxed max-w-md">
                Pojištění je matematika pravděpodobností, ne&nbsp;katalog
                produktů. Tahle čísla rozhodují o&nbsp;tom, jestli vaše
                smlouva chrání vás — nebo statistiku pojišťovny.
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
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="relative py-24 md:py-32 bg-bone-warm">
        <div className="mx-auto max-w-[88rem] px-6 md:px-10">
          <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 mb-12 md:mb-16 items-end">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § 04 — Chyby
              </div>
              <h2
                className="mt-6 font-display text-[clamp(2rem,4.4vw,3.8rem)] leading-[1.02] tracking-[-0.025em] text-ink"
              >
                Čtyři chyby, které <span className="italic text-moss">se neodpouštějí.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                U&nbsp;pojištění se chyba pozná až&nbsp;ve&nbsp;chvíli, kdy ji
                nelze napravit. Proto se vyplatí najít ji dnes — dokud je to
                jen řádek ve&nbsp;smlouvě.
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
                >
                  {m.n}
                </div>
                <h3
                  className="mt-6 font-display text-2xl md:text-3xl tracking-[-0.01em] text-ink"
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
            >
              Dobrá pojistka je ta, na&nbsp;kterou roky nesáhnete —
              a&nbsp;pak vás podrží.
            </p>
            <Link
              href="/#kontakt"
              className="group inline-flex items-center gap-3 self-start md:self-auto whitespace-nowrap bg-ink text-paper px-6 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
            >
              Konzultace o pojištění
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
