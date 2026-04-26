export default function Manifesto() {
  return (
    <section
      id="filozofie"
      className="relative py-28 md:py-36 overflow-hidden"
    >
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-12 gap-y-16">
          {/* Sticky chapter mark */}
          <aside className="col-span-12 lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
                § 02
              </div>
              <div className="mt-3 font-display text-3xl italic text-moss"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}>
                Filozofie
              </div>
              <div className="mt-6 h-px w-16 bg-rule rule-draw" />
              <div className="mt-6 max-w-[14rem] text-sm leading-relaxed text-ink-mute">
                O&nbsp;tom, proč Tomáš Peterka opustil zaběhnutou kariéru —
                a&nbsp;začal znovu, po svém.
              </div>
            </div>
          </aside>

          {/* Main editorial column */}
          <div className="col-span-12 lg:col-span-9 lg:pl-6 xl:pl-12">
            <h2
              className="reveal font-display text-[clamp(2.4rem,5.6vw,5.2rem)] leading-[1.02] tracking-[-0.025em] text-ink max-w-[20ch]"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Není to <span className="italic text-moss">poradenství.</span>
              <br />
              Je to <span className="italic text-moss">vztah.</span>
            </h2>

            <div className="reveal mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl">
              <p className="dropcap text-lg leading-[1.65] text-ink-soft">
                Tomáš Peterka strávil patnáct let ve světě financí. Patnáct
                let, ve kterých pozoroval, jak se lidský přístup k&nbsp;penězům
                drolí pod tlakem produktových kvót, čtvrtletních cílů
                a&nbsp;rotujících poradců. V&nbsp;jednu chvíli to nešlo dál.
                Ne se ctí, ne pro klienty.
              </p>
              <p className="text-lg leading-[1.65] text-ink-soft">
                Odešel z poslední společnosti s jediným cílem: postavit
                tým lidí, kteří k&nbsp;povolání přistupují stejně. Tým, kde
                rozhodují roky zkušeností, ne týdenní žebříček prodejů. Tak
                vzniklo Peterka&nbsp;&amp;&nbsp;Kolektiv — pod střechou skupiny
                Edo&nbsp;Finance, která dává nezávislosti reálnou strukturu.
              </p>
            </div>

            {/* Pull quote */}
            <figure className="reveal mt-20 md:mt-28 relative max-w-4xl">
              {/* Brass open-quote ornament */}
              <span
                className="absolute -top-12 -left-2 md:-left-6 font-display text-[10rem] md:text-[14rem] leading-none text-brass/40 select-none"
                style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 100, 'WONK' 1" }}
                aria-hidden
              >
                “
              </span>
              <blockquote
                className="relative font-display italic text-ink text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[1.25] tracking-[-0.01em]"
                style={{
                  fontVariationSettings:
                    "'opsz' 144, 'SOFT' 100, 'WONK' 1",
                }}
              >
                Lidé si nepamatují produkt, který jste jim prodali.
                Pamatují si, jak se vedle vás cítili — ve&nbsp;chvíli, kdy se
                rozhodovali o&nbsp;věcech, které je přesahují.
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 font-mono text-[11px] tracking-[0.28em] uppercase text-ink-mute">
                <span className="inline-block w-10 h-px bg-brass" />
                Tomáš Peterka, zakladatel
              </figcaption>
            </figure>

            {/* Three principles row */}
            <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-3 gap-px bg-rule">
              {[
                {
                  n: "I.",
                  t: "Komplexnost",
                  b: "Jeden tým pro celý život — finance, bydlení, ochrana, předání majetku. Bez tříštění do agentur.",
                },
                {
                  n: "II.",
                  t: "Nezávislost",
                  b: "Doporučujeme to, co je nejlepší pro vás. Ne to, co má dnes nejvyšší provizi.",
                },
                {
                  n: "III.",
                  t: "Důvěra",
                  b: "Klienta převezmou kolegové, ne nový poradce každého půl roku. Vztah se buduje desetiletími.",
                },
              ].map((p, i) => (
                <div
                  key={p.n}
                  className="reveal bg-bone p-8 md:p-10"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div
                    className="font-display num text-3xl text-brass-deep"
                    style={{
                      fontVariationSettings:
                        "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                    }}
                  >
                    {p.n}
                  </div>
                  <div
                    className="mt-4 font-display text-2xl text-ink"
                    style={{
                      fontVariationSettings:
                        "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                    }}
                  >
                    {p.t}
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                    {p.b}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
