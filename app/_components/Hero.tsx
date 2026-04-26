import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden"
    >
      {/* Background grain */}
      <div className="grain absolute inset-0 pointer-events-none" />

      {/* Subtle radial gradient — warm light from top-left */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 12% 0%, rgba(201,164,113,0.18) 0%, rgba(242,235,221,0) 55%), radial-gradient(80% 60% at 100% 100%, rgba(30,58,44,0.10) 0%, rgba(242,235,221,0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
        {/* Top eyebrow line — date + position */}
        <div className="flex items-center justify-between mb-10 md:mb-14">
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
            <span className="inline-block w-8 h-px bg-rule" />
            <span>MMXXVI · Praha</span>
          </div>
          <div className="hidden md:flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-ink-mute">
            <span>Privátní finanční dům</span>
            <span className="inline-block w-8 h-px bg-rule" />
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 md:gap-x-10 gap-y-10">
          {/* Left — Headline & lede */}
          <div className="col-span-12 lg:col-span-7">
            <h1
              className="font-display text-ink text-[clamp(2.6rem,7vw,6.4rem)] leading-[0.92] tracking-[-0.025em]"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              <span className="block reveal" style={{ animationDelay: "0ms" }}>
                Vaše finance
              </span>
              <span
                className="block italic text-moss reveal"
                style={{
                  animationDelay: "120ms",
                  fontVariationSettings:
                    "'opsz' 144, 'SOFT' 100, 'WONK' 1",
                }}
              >
                v rukou,&nbsp;
              </span>
              <span className="block reveal" style={{ animationDelay: "240ms" }}>
                kterým záleží.
              </span>
            </h1>

            <div
              className="reveal mt-10 md:mt-14 max-w-[32rem]"
              style={{ animationDelay: "420ms" }}
            >
              <p className="font-sans text-lg md:text-xl leading-[1.55] text-ink-soft">
                Komplexní privátní péče o váš majetek, vaši rodinu a vaše záměry —
                investice, hypotéky, pojištění a&nbsp;nemovitosti pod jednou
                střechou. Bez kompromisů v kvalitě.
              </p>
            </div>

            <div
              className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
              style={{ animationDelay: "560ms" }}
            >
              <a
                href="#kontakt"
                className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-[12.5px] tracking-[0.18em] uppercase hover:bg-moss transition-all duration-500"
              >
                Nezávazná konzultace
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
              <a
                href="#filozofie"
                className="group inline-flex items-center gap-3 border-b border-ink/40 pb-1 text-[13px] tracking-[0.18em] uppercase text-ink-soft hover:text-moss hover:border-moss transition-colors"
              >
                Naše filozofie
              </a>
            </div>

            {/* Stats line */}
            <div
              className="reveal mt-16 md:mt-20 grid grid-cols-3 gap-6 max-w-xl border-t border-rule pt-8"
              style={{ animationDelay: "720ms" }}
            >
              {[
                { v: "41", lbl: "let zkušeností v týmu" },
                { v: "04", lbl: "specializovaní poradci" },
                { v: "03", lbl: "pobočky v Česku" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div
                    className="font-display num text-4xl md:text-5xl text-ink leading-none"
                    style={{
                      fontVariationSettings:
                        "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                    }}
                  >
                    {s.v}
                  </div>
                  <div className="mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute leading-snug">
                    {s.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Founder portrait */}
          <div className="col-span-12 lg:col-span-5 lg:pl-6 xl:pl-12">
            <div className="relative reveal-slow">
              {/* Frame */}
              <div className="relative aspect-[3/4] w-full max-w-[480px] ml-auto">
                {/* Brass corner accents */}
                <div className="absolute -top-4 -left-4 w-10 h-10 border-t border-l border-brass z-10" />
                <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b border-r border-brass z-10" />

                <div className="relative w-full h-full overflow-hidden bg-moss-deep">
                  <Image
                    src="/peterka_profile.png"
                    alt="Tomáš Peterka, zakladatel"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 480px"
                    className="object-cover portrait-treatment"
                  />
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                  {/* Caption */}
                  <div className="absolute left-5 bottom-5 right-5 text-paper">
                    <div className="flex items-center gap-2 font-mono text-[10px] tracking-[0.3em] uppercase opacity-80">
                      <span>Zakladatel</span>
                      <span className="w-6 h-px bg-paper/60" />
                      <span>15 let</span>
                    </div>
                    <div
                      className="mt-2 font-display text-2xl md:text-3xl tracking-tight"
                      style={{
                        fontVariationSettings:
                          "'opsz' 144, 'SOFT' 30",
                      }}
                    >
                      Tomáš Peterka
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical caption */}
              <div className="hidden lg:block absolute -left-3 top-2 vcap text-ink-mute">
                Est. MMX · Edo Finance partner
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          className="reveal mt-20 md:mt-28 flex items-center gap-4 font-mono text-[10px] tracking-[0.3em] uppercase text-ink-mute"
          style={{ animationDelay: "900ms" }}
        >
          <span className="inline-block w-px h-12 bg-rule animate-pulse" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}
