import Image, { type StaticImageData } from "next/image";
import TeamRest from "./TeamRest";
import peterkaPortrait from "../../public/peterka_profile.webp";
import kozelPortrait from "../../public/kozel.webp";
import lukasPortrait from "../../public/lukashorejsi_profilovka.webp";

type Member = {
  img: StaticImageData;
  name: string;
  role: string;
  years: string;
  city: string;
  note: string;
  accent?: boolean;
  web?: string;
  webHref?: string;
};

const team: Member[] = [
  {
    img: peterkaPortrait,
    name: "Tomáš Peterka",
    role: "Zakladatel · Privátní finance",
    years: "16",
    city: "Tábor",
    note:
      "Strategie, mezigenerační péče, klienti s komplexním majetkem. Garant kvality v týmu.",
    accent: true,
  },
  {
    img: kozelPortrait,
    name: "Dušan Kozel",
    role: "Úvěry · Pojištění",
    years: "7",
    city: "Soběslav",
    note:
      "Úvěry a&nbsp;pojištění rodin i&nbsp;podnikatelských skupin. Dlouhodobý dohled nad&nbsp;smlouvami.",
  },
  {
    img: lukasPortrait,
    name: "Lukáš Hořejší",
    role: "Investice · Privátní portfolia",
    years: "7",
    city: "Praha",
    note:
      "Investiční dohled nad&nbsp;portfolii, dlouhodobé strategie rodin a&nbsp;podnikatelských skupin.",
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
            >
              Dvanáct lidí.<br />
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

        {/* Featured founder + 2 co-founders grid */}
        <div className="grid grid-cols-12 gap-y-6 md:gap-y-8 lg:gap-x-8 lg:items-stretch">
          {/* Founder large */}
          <article className="reveal col-span-12 lg:col-span-7 group">
            <div className="relative aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden bg-moss-deep">
              <Image
                src={team[0].img}
                alt={`${team[0].name} — ${team[0].role}`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                placeholder="blur"
                unoptimized
                className="object-cover portrait-treatment-strong"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
              {/* Brass tag */}
              <div className="absolute top-6 left-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-brass-light">
                <span className="inline-block w-3 h-px bg-brass" />
                Zakladatel · Tábor
              </div>
              {/* Identity */}
              <div className="absolute left-7 right-7 bottom-7 text-paper">
                <div
                  className="font-display text-5xl md:text-7xl tracking-[-0.025em] leading-[0.95]"
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
                  <span className="num">16 let praxe</span>
                </div>
              </div>
            </div>
          </article>

          {/* 2 co-founders — overlay style on mobile/tablet, side-by-side on desktop */}
          <div className="col-span-12 lg:col-span-5 grid grid-cols-1 lg:grid-rows-2 gap-6 md:gap-8">
            {team.slice(1).map((m, i) => (
              <article
                key={m.name}
                className="reveal lg:h-full"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                {/* MOBILE / TABLET: full-bleed photo with text overlay */}
                <div className="lg:hidden group relative aspect-[4/5] sm:aspect-[16/9] w-full overflow-hidden bg-moss-deep">
                  <Image
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    fill
                    sizes="100vw"
                    placeholder="blur"
                    unoptimized
                    className="object-cover object-top portrait-treatment-strong"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
                  <div className="absolute top-5 left-5 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] uppercase text-brass-light">
                    <span className="inline-block w-3 h-px bg-brass" />
                    {m.city}
                  </div>
                  <div className="absolute left-6 right-6 bottom-6 text-paper">
                    <h3
                      className="font-display text-4xl sm:text-5xl tracking-[-0.025em] leading-[0.95]"
                    >
                      {m.name.split(" ")[0]}<br />
                      <span className="italic text-brass-light">
                        {m.name.split(" ").slice(1).join(" ")}
                      </span>
                    </h3>
                    <p
                      className="mt-4 max-w-md text-sm leading-[1.55] text-paper/80"
                      dangerouslySetInnerHTML={{ __html: m.note }}
                    />
                    {m.web && m.webHref && (
                      <a
                        href={m.webHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.28em] uppercase text-brass-light hover:text-paper transition-colors"
                      >
                        {m.web}
                        <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                      </a>
                    )}
                    <div className="mt-5 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-paper/65">
                      <span>{m.role.split(" · ")[0]}</span>
                      <span className="inline-block w-6 h-px bg-paper/40" />
                      <span className="num">{m.years} let praxe</span>
                    </div>
                  </div>
                </div>

                {/* DESKTOP: side-by-side photo + text */}
                <div className="hidden lg:grid grid-cols-12 gap-6 items-stretch group lg:h-full">
                  <div className="col-span-6 relative lg:h-full min-h-[300px] overflow-hidden bg-moss-deep">
                    <Image
                      src={m.img}
                      alt={`${m.name} — ${m.role}`}
                      fill
                      sizes="25vw"
                      placeholder="blur"
                      unoptimized
                      className="object-cover object-top portrait-treatment-strong"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                  </div>
                  <div className="col-span-6 flex flex-col justify-between py-1">
                    <div>
                      <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-brass-deep">
                        {m.city}
                      </div>
                      <h3
                        className="mt-3 font-display text-3xl xl:text-[2.4rem] leading-[0.98] tracking-[-0.02em] text-ink"
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
                      {m.web && m.webHref && (
                        <a
                          href={m.webHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.22em] uppercase text-brass-deep hover:text-moss transition-colors"
                        >
                          {m.web}
                          <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
                        </a>
                      )}
                    </div>
                    <div className="mt-4 flex items-center gap-4 pt-3 border-t border-rule font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                      <span>{m.role.split(" · ")[0]}</span>
                      <span className="ml-auto num">{m.years} let</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Rest of the team — expandable roster */}
        <TeamRest />

        {/* Bottom signature line */}
        <div
          className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-8 border-t border-rule"
        >
          <p
            className="font-display italic text-2xl md:text-3xl text-ink max-w-3xl leading-[1.25]"
          >
            Spolu <span className="num text-moss">30</span>{" "}let praxe
            mezi&nbsp;3&nbsp;zakladateli — a&nbsp;ani&nbsp;jeden den ve&nbsp;společnosti, kde&nbsp;by se
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
