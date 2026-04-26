import Image from "next/image";

const team = [
  {
    img: "/peterka_profile.png",
    name: "Tomáš Peterka",
    role: "Zakladatel · Privátní finance",
    years: "15",
    city: "Praha",
    note:
      "Strategie, mezigenerační péče, klienti s komplexním majetkem. Garant kvality v týmu.",
    accent: true,
  },
  {
    img: "/iva_petrikova.png",
    name: "Iva Petříková",
    role: "Investice · Privátní portfolia",
    years: "10",
    city: "Praha",
    note:
      "Diskreční mandáty, dlouhodobé portfolia rodin a&nbsp;podnikatelských skupin.",
  },
  {
    img: "/albrecht_josef.png",
    name: "Josef Albrecht",
    role: "Hypotéky · Nemovitosti",
    years: "9",
    city: "České Budějovice",
    note:
      "Komplexní financování bydlení a&nbsp;investičních nemovitostí. Vlastní realitní vertikála.",
  },
  {
    img: "/lukashorejsi_profilovka.png",
    name: "Lukáš Hořejší",
    role: "Pojištění · Ochrana majetku",
    years: "7",
    city: "Tábor",
    note:
      "Životní a&nbsp;majetkové pojištění, korporátní programy, řešení škodních událostí.",
  },
];

export default function Team() {
  return (
    <section id="tym" className="relative py-28 md:py-40 bg-bone overflow-hidden">
      <div className="mx-auto max-w-[88rem] px-6 md:px-10">
        {/* Header row */}
        <div className="grid grid-cols-12 gap-y-8 md:gap-x-10 items-end mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
              § 04 — Tým
            </div>
            <h2
              className="mt-6 font-display text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.02] tracking-[-0.025em] text-ink"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Čtyři lidé.<br />
              <span className="italic text-moss">Jeden&nbsp;standard.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-lg leading-[1.6] text-ink-soft max-w-md ml-auto">
              Každý člen kolektivu má svou doménu — investice, hypotéky,
              pojištění, nemovitosti. Spolu tvoří síť, která vás provází
              celým&nbsp;životem.
            </p>
          </div>
        </div>

        {/* Featured founder + 3 advisors grid */}
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Founder large */}
          <article className="reveal col-span-12 lg:col-span-7 group">
            <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden bg-moss-deep">
              <Image
                src={team[0].img}
                alt={team[0].name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover portrait-treatment-strong"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              {/* Brass tag */}
              <div className="absolute top-6 left-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-brass-light">
                <span className="inline-block w-3 h-px bg-brass" />
                Zakladatel · Praha
              </div>
              {/* Identity */}
              <div className="absolute left-7 right-7 bottom-7 text-paper">
                <div
                  className="font-display text-5xl md:text-7xl tracking-[-0.025em] leading-[0.95]"
                  style={{
                    fontVariationSettings:
                      "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                  }}
                >
                  Tomáš<br />
                  <span className="italic text-brass-light">Peterka</span>
                </div>
                <div className="mt-5 max-w-md text-paper/80 leading-relaxed">
                  {team[0].note}
                </div>
                <div className="mt-6 flex items-center gap-6 font-mono text-[10px] tracking-[0.3em] uppercase text-paper/65">
                  <span>{team[0].role}</span>
                  <span className="inline-block w-6 h-px bg-paper/40" />
                  <span className="num">15 let praxe</span>
                </div>
              </div>
            </div>
          </article>

          {/* 3 stacked advisors */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-1 gap-6 md:gap-8">
            {team.slice(1).map((m, i) => (
              <article
                key={m.name}
                className="reveal group grid grid-cols-12 gap-4 md:gap-6 items-stretch"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="col-span-5 sm:col-span-4 lg:col-span-5 relative aspect-[3/4] overflow-hidden bg-moss-deep">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    sizes="(max-width: 1024px) 40vw, 25vw"
                    className="object-cover portrait-treatment-strong"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                </div>
                <div className="col-span-7 sm:col-span-8 lg:col-span-7 flex flex-col justify-between py-1">
                  <div>
                    <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-brass-deep">
                      {m.city}
                    </div>
                    <h3
                      className="mt-3 font-display text-3xl md:text-[2.4rem] leading-[0.98] tracking-[-0.02em] text-ink"
                      style={{
                        fontVariationSettings:
                          "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                      }}
                    >
                      {m.name.split(" ")[0]}<br />
                      <span className="italic text-moss">
                        {m.name.split(" ").slice(1).join(" ")}
                      </span>
                    </h3>
                    <p
                      className="mt-3 text-sm leading-[1.55] text-ink-soft"
                      dangerouslySetInnerHTML={{ __html: m.note }}
                    />
                  </div>
                  <div className="mt-4 flex items-center gap-4 pt-3 border-t border-rule font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                    <span>{m.role.split(" · ")[0]}</span>
                    <span className="ml-auto num">{m.years} let</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom signature line */}
        <div
          className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-rule"
        >
          <p
            className="font-display italic text-2xl md:text-3xl text-ink max-w-3xl leading-[1.25]"
            style={{
              fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1",
            }}
          >
            Spolu více než <span className="num text-moss">41</span> let
            v&nbsp;oboru — a&nbsp;ani&nbsp;jeden den ve&nbsp;společnosti, kde&nbsp;by se
            kvótami platilo za&nbsp;pohodlí klienta.
          </p>
          <a
            href="#kontakt"
            className="group inline-flex items-center gap-3 self-start md:self-auto whitespace-nowrap border-b border-ink/40 pb-1 text-[12.5px] tracking-[0.18em] uppercase text-ink hover:text-moss hover:border-moss transition-colors"
          >
            Poznat tým osobně
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
