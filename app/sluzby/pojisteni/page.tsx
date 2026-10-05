import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Contact from "../../_components/Contact";
import { servicePageGraph, jsonLdString } from "../../_lib/structuredData";
import kozelPortrait from "../../../public/kozel.webp";
import StatValue from "../../_components/StatValue";

export const metadata: Metadata = {
  title: "Pojištění\u00A0- životní, majetkové, odpovědnost",
  description:
    "Pojistka, která dává smysl\u00A0- bez balastu, který se nikdy nevyplatí. Ochrana příjmu a\u00A0rodiny, majetek a\u00A0domácnost, odpovědnost a\u00A0podnikání. Peterka & Kolektiv.",
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
      "Pojištění pro dny, které nikdo neplánuje\u00A0- bez balastu, který se nikdy nevyplatí.",
    type: "article",
  },
};

const okruhy = [
  {
    n: "01",
    t: "Ochrana příjmu a\u00A0rodiny",
    body:
      "Životní a\u00A0úrazové pojištění zaměřujeme především na rizika, která mohou nejvíce ovlivnit Váš příjem a\u00A0finanční stabilitu. Invalidita, vážná onemocnění a\u00A0úmrtí tvoří základ ochrany. Doplňková rizika nastavujeme podle Vašich skutečných potřeb.",
    from: "pro živitele rodin",
    horizon: "revize při životních změnách",
  },
  {
    n: "02",
    t: "Majetek a\u00A0domácnost",
    body:
      "Dům, byt, domácnost i\u00A0auto potřebují odpovídající pojistné krytí. Zaměřujeme se především na správné pojistné částky a\u00A0jejich pravidelnou aktualizaci, aby pojištění odpovídalo aktuální hodnotě majetku a\u00A0poskytlo dostatečnou ochranu v\u00A0případě škody.",
    from: "dům · byt · auto",
    horizon: "aktualizace 1× za 3 roky",
  },
  {
    n: "03",
    t: "Odpovědnost a\u00A0podnikání",
    body:
      "Občanská a\u00A0profesní odpovědnost, podnikatelská rizika i\u00A0korporátní pojištění. Nastavujeme ochranu podle velikosti a\u00A0charakteru Vašeho podnikání a\u00A0průběžně ji přizpůsobujeme tomu, jak se Vaše firma vyvíjí.",
    from: "pro rodiny i firmy",
    horizon: "revize pojistných smluv",
  },
];

const realityNumbers = [
  {
    v: "324 tis.",
    lbl: "pojistných událostí v\u00A0životním pojištění za první pololetí 2026",
    sub: "vyplaceno 18,56\u00A0miliardy Kč",
  },
  {
    v: "70 %",
    lbl: "českých nemovitostí je podpojištěno",
    sub: "v\u00A0průměru o\u00A042\u00A0%",
  },
  {
    v: "1/4",
    lbl: "Čechů si aktualizovala pojištění nemovitosti",
    sub: "v\u00A0loňském roce",
  },
  {
    v: "0\u00A0Kč",
    lbl: "stojí revize stávajících smluv",
    sub: "druhý názor na to, co už platíte",
  },
];

export default function PojisteniPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdString(
            servicePageGraph({
              slug: "pojisteni",
              name: "Pojištění",
              description:
                "Životní i\u00A0neživotní pojištění\u00A0- ochrana příjmu, majetku i\u00A0odpovědnosti rodin i\u00A0podnikatelů.",
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
            <span className="text-ink">Pojištění</span>
          </nav>

          <div className="grid grid-cols-12 md:gap-x-12 gap-y-12">
            <div className="col-span-12 lg:col-span-7">
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
                Kvalitní pojištění se nepozná podle ceny ani počtu
                připojištění. Jeho hodnotu ukáže až situace, kdy ho skutečně
                potřebujete. Nastavujeme pojištění tak, aby poskytlo
                odpovídající ochranu v&nbsp;důležitých životních situacích
                a&nbsp;zároveň neobsahovalo zbytečná krytí.
              </p>

              <div
                className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
                style={{ animationDelay: "400ms" }}
              >
                <Link
                  href="/#kontakt"
                  className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[12.5px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
                >
                  Sjednat konzultaci o&nbsp;pojištění
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
                    src={kozelPortrait}
                    alt="Dušan Kozel\u00A0- pojištění a\u00A0úvěry"
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
                      <span>7&nbsp;let</span>
                    </div>
                    <div
                      className="mt-2 font-display text-2xl md:text-3xl tracking-tight"
                    >
                      Dušan Kozel
                    </div>
                    <div className="mt-1 font-mono text-[10px] tracking-[0.28em] uppercase text-paper/70">
                      Soběslav · Pojištění a&nbsp;úvěry
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
                Chráníme to, <span className="italic text-moss">co je pro&nbsp;Vás důležité.</span>
              </h2>

              <div className="reveal mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
                <p className="dropcap text-lg leading-[1.65] text-ink-soft">
                  Pojištění má především chránit to, co je pro&nbsp;Vás skutečně
                  důležité. Proto se nejprve zaměřujeme na&nbsp;zásadní rizika,
                  jako je výpadek příjmu, zajištění bydlení nebo odpovědnost.
                  Doplňková rizika řešíme podle Vašich skutečných potřeb.
                </p>
                <p className="text-lg leading-[1.65] text-ink-soft">
                  Pojištění navíc pravidelně revidujeme, aby odpovídalo Vašemu
                  aktuálnímu životu, příjmům a&nbsp;závazkům, nejen situaci,
                  která platila v&nbsp;den podpisu smlouvy.
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
                Tři vrstvy <span className="italic text-moss">ochrany.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-base leading-[1.6] text-ink-soft max-w-md">
                Příjem, majetek a&nbsp;odpovědnost představují tři klíčové
                oblasti, které má pojištění chránit. Každá z&nbsp;nich má svá
                specifika a&nbsp;vyžaduje správně nastavené krytí podle Vaší
                konkrétní situace.
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
              <h2
                className="mt-6 font-display text-[clamp(2.2rem,4.6vw,4rem)] leading-[1.02] tracking-[-0.025em]"
              >
                Co pojistky kryjí -<br />
                <span className="italic text-brass-light">a&nbsp;co doopravdy hrozí.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
              <p className="text-paper/80 leading-relaxed max-w-md">
                Pojištění není o&nbsp;počtu produktů, ale o&nbsp;správném
                nastavení rizik. Pracujeme s&nbsp;pravděpodobností a&nbsp;finančním
                dopadem jednotlivých rizik, aby Vaše pojištění poskytovalo
                smysluplnou ochranu tam, kde ji skutečně potřebujete.
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
