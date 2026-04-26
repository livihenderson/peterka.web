const items = [
  {
    quote: `Po patnácti letech si dovedu představit jen málo lidí, kterým bych svěřil rodinný majetek. Tomáš je jeden z nich.`,
    by: "Manželé H.",
    where: "Praha",
    ctx: "Klient od r. 2017 · investice & nemovitosti",
  },
  {
    quote: `Nikdy jsme neslyšeli „prodejte“, když to nedávalo smysl. Slyšíme „počkáme“ a jsme za to vděční.`,
    by: "Rodina K.",
    where: "České Budějovice",
    ctx: "Klient od r. 2019 · komplexní finance",
  },
  {
    quote: `Hypotéku jsme řešili napříč třemi bankami. Nakonec jsme si jenom podali ruce — celý zbytek vyřídili oni.`,
    by: "Ing. M. & manželka",
    where: "Tábor",
    ctx: "Klient od r. 2022 · hypotéka & ochrana",
  },
];

export default function Testimonials() {
  return (
    <section
      id="reference"
      className="relative py-28 md:py-40 bg-bone-light overflow-hidden"
    >
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 mb-16 md:mb-20 items-end">
          <div className="col-span-12 md:col-span-7">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
              § 08 — Reference
            </div>
            <h2
              className="mt-6 font-display text-[clamp(2.4rem,5.4vw,5rem)] leading-[1.02] tracking-[-0.025em] text-ink"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Slova, která <br />
              <span className="italic text-moss">znamenají&nbsp;víc </span>než&nbsp;recenze.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5">
            <p className="text-base leading-[1.6] text-ink-soft max-w-md">
              Většinu klientů u&nbsp;nás drží jediná věc — doporučení od&nbsp;jiných
              klientů. Vybrané reference jsou anonymizované z&nbsp;úcty
              k&nbsp;diskrétnosti.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {items.map((t, i) => (
            <figure
              key={i}
              className="reveal relative bg-bone border border-rule p-8 md:p-10 flex flex-col"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <span
                aria-hidden
                className="absolute -top-2 left-6 font-display text-7xl leading-none text-brass/50 select-none"
                style={{
                  fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1",
                }}
              >
                “
              </span>
              <blockquote
                className="mt-4 font-display text-xl md:text-[1.45rem] italic leading-[1.4] text-ink"
                style={{
                  fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1",
                }}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-10 pt-8 border-t border-rule">
                <div className="font-display text-base text-moss">{t.by}</div>
                <div className="mt-1 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
                  {t.where} · {t.ctx}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Edo Finance affiliation */}
        <div className="mt-20 md:mt-28 grid grid-cols-12 gap-6 md:gap-10 items-center pt-10 border-t border-rule">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
              Pod střechou
            </div>
            <h3
              className="mt-4 font-display text-3xl md:text-4xl leading-[1.05] tracking-[-0.02em] text-ink"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Edo&nbsp;Finance
            </h3>
          </div>
          <div className="col-span-12 md:col-span-7">
            <p className="text-[15px] leading-[1.7] text-ink-soft max-w-2xl">
              Peterka&nbsp;&amp;&nbsp;Kolektiv působí pod nezávislou skupinou
              Edo&nbsp;Finance — etablovanou strukturou, která&nbsp;dává
              naší práci dohled, regulaci a&nbsp;přístup k&nbsp;celému trhu
              produktů. <span className="italic text-moss">Byrokracie tedy zůstává nám.</span>
              <br />Vám zůstává čas a klid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
