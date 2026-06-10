import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../_components/Contact";
import StatValue from "../../_components/StatValue";

export const metadata: Metadata = {
  title: "Firmy — péče o majitele i podnik",
  description:
    "Optimalizace odměn, firemní financování, ochrana klíčových osob a mezigenerační předání. Finanční péče pro majitele firem a jejich rodiny. Peterka & Kolektiv.",
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
      "Majitel a podnik nejsou dva oddělené světy. Staráme se o ně jako o celek.",
    type: "article",
  },
};

const okruhy = [
  {
    n: "01",
    t: "Optimalizace odměn",
    body:
      "Jak si ze&nbsp;své firmy platit chytře — poměr mzdy, podílů na&nbsp;zisku a&nbsp;benefitů, který dává smysl daňově i&nbsp;dlouhodobě. Nastavujeme ve&nbsp;spolupráci s&nbsp;vaším daňovým poradcem či&nbsp;účetní.",
    from: "pro jednatele a majitele",
    horizon: "revize 1× ročně",
  },
  {
    n: "02",
    t: "Firemní financování",
    body:
      "Provozní úvěry, financování strojů, hal i&nbsp;firemních nemovitostí. Nabídky srovnáváme napříč bankami stejně důsledně jako u&nbsp;hypoték — banka má být dodavatel, ne&nbsp;rozhodčí.",
    from: "od 1 mil. Kč",
    horizon: "provozní i investiční",
  },
  {
    n: "03",
    t: "Ochrana a předání",
    body:
      "Pojištění klíčových osob a&nbsp;manažerské odpovědnosti, zajištění rodiny majitele — a&nbsp;včasná příprava mezigeneračního předání firmy. Nástupnictví je proces na&nbsp;roky, ne&nbsp;na&nbsp;jednu schůzku u&nbsp;notáře.",
    from: "klíčové osoby i rodina",
    horizon: "horizont 10+ let",
  },
];

const realityNumbers = [
  {
    v: "70 %",
    lbl: "rodinných firem nepřežije předání",
    sub: "do druhé generace — bez plánu nástupnictví",
  },
  {
    v: "1",
    lbl: "klíčový člověk umí zastavit firmu",
    sub: "výpadek majitele či technologa bez pojistky",
  },
  {
    v: "2 světy",
    lbl: "firemní a rodinné finance",
    sub: "u majitele jsou vždy jedna rozvaha",
  },
  {
    v: "0 Kč",
    lbl: "stojí druhý názor",
    sub: "na vaše stávající firemní úvěry a pojistky",
  },
];

const mistakes = [
  {
    n: "I",
    t: "Všechno v jednom s.r.o.",
    b: "Provoz, nemovitosti i&nbsp;úspory v&nbsp;jedné entitě znamenají, že&nbsp;jeden neúspěšný kontrakt ohrožuje všechno. Oddělení majetku od&nbsp;provozu je základ, ne&nbsp;nadstandard.",
  },
  {
    n: "II",
    t: "Majitel jako jediný klíč",
    b: "Firma, kterou bez&nbsp;majitele nikdo neumí řídit ani&nbsp;podepsat, je pro&nbsp;banku i&nbsp;rodinu rizikem. Pojištění klíčové osoby a&nbsp;jasné plné moci stojí zlomek toho, co jejich absence.",
  },
  {
    n: "III",
    t: "Firma jako spořicí účet",
    b: "Nechávat celý zisk ležet ve&nbsp;firmě se zdá bezpečné — dokud nepřijde spor, exekuce odběratele nebo změna trhu. Majetek majitele má&nbsp;růst i&nbsp;mimo firemní rozvahu.",
  },
  {
    n: "IV",
    t: "Předání bez plánu",
    b: "Nástupnictví řešené až&nbsp;dědickým řízením je nejdražší varianta — daňově, právně i&nbsp;rodinně. Promyšlené předání trvá roky, a&nbsp;proto začíná dnes, ne&nbsp;v&nbsp;důchodu.",
  },
];

export default function FirmyPage() {
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
            <span className="text-ink">Firmy</span>
          </nav>

          <div className="grid grid-cols-12 gap-x-6 md:gap-x-12 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § Firmy · 05 / 05
              </div>
              <h1
                className="mt-6 font-display text-[clamp(2.6rem,6.6vw,6rem)] leading-[0.95] tracking-[-0.025em] text-ink"
              >
                <span className="block reveal">Firma i rodina.</span>
                <span
                  className="block italic text-moss reveal"
                  style={{
                    animationDelay: "120ms",
                  }}
                >
                  Jedna rozvaha.
                </span>
              </h1>

              <p className="reveal mt-10 max-w-xl text-lg md:text-xl leading-[1.55] text-ink-soft" style={{ animationDelay: "260ms" }}>
                Majitel firmy nemá oddělené světy. Odměna jednatele, úvěr
                na&nbsp;halu, pojistka klíčového člověka i&nbsp;budoucí předání —
                to&nbsp;všechno jsou jedny peníze. Staráme se o&nbsp;ně
                jako&nbsp;o&nbsp;celek.
              </p>

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
                    src="/peterka_profile.png"
                    alt="Tomáš Peterka — péče o majitele firem"
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
                      <span>15 let</span>
                    </div>
                    <div
                      className="mt-2 font-display text-2xl md:text-3xl tracking-tight"
                    >
                      Tomáš Peterka
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.28em] uppercase text-paper/70">
                      Praha · Zakladatel
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
                Nejdřív <span className="italic text-moss">majitel, </span>
                potom produkty.
              </h2>

              <div className="reveal mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
                <p className="dropcap text-lg leading-[1.65] text-ink-soft">
                  Majiteli firmy se obvykle prodává po&nbsp;kouskách: banka
                  nabídne úvěr, pojišťovna pojistku, účetní spočítá daně.
                  Nikdo z&nbsp;nich ale nesedí nad&nbsp;celkem — nad&nbsp;tím,
                  jak spolu souvisí odměna jednatele, rezervy firmy, majetek
                  rodiny a&nbsp;den, kdy firmu jednou někdo převezme.
                </p>
                <p className="text-lg leading-[1.65] text-ink-soft">
                  Naše práce začíná u&nbsp;majitele, ne&nbsp;u&nbsp;produktu.
                  Nejdřív rozumíme firmě, rodině a&nbsp;záměrům — teprve potom
                  skládáme řešení: financování, ochranu klíčových lidí,
                  daňově rozumnou výplatu a&nbsp;plán předání. Jeden tým,
                  jedna strategie, žádné slepé místo.
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
                Co s majiteli <span className="italic text-moss">řešíme </span>nejčastěji.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                Každá firma je jinde — někdo roste a&nbsp;potřebuje kapitál,
                někdo konsoliduje, někdo začíná přemýšlet o&nbsp;předání.
                Společné mají jedno: majitele, na&nbsp;kterém všechno stojí.
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
                Co majitelé znají —<br />
                <span className="italic text-brass-light">a neřeší.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
              <p className="text-paper/80 leading-relaxed max-w-md">
                Většina majitelů má perfektní přehled o&nbsp;maržích
                a&nbsp;cash&nbsp;flow. Slepá místa bývají jinde — v&nbsp;tom,
                co se stane, když vypadne klíčový člověk, a&nbsp;v&nbsp;tom,
                jak firma jednou změní ruce.
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
                Čtyři chyby, na&nbsp;které <span className="italic text-moss">firmy doplácejí.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                Žádná z&nbsp;nich nebolí dnes. Všechny umí bolet za&nbsp;pět
                let — a&nbsp;všechny se dají vyřešit dřív, než&nbsp;nastanou.
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
              Nejlepší chvíle nastavit firemní finance byla při&nbsp;založení.
              Druhá nejlepší je&nbsp;tento týden.
            </p>
            <Link
              href="/#kontakt"
              className="group inline-flex items-center gap-3 self-start md:self-auto whitespace-nowrap bg-ink text-paper px-6 py-3 text-[12px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
            >
              Konzultace pro firmu
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
