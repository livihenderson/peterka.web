import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bone border-t border-rule">
      <div className="mx-auto max-w-[88rem] px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
          {/* Wordmark */}
          <div className="col-span-12 md:col-span-5">
            <div
              className="font-display text-6xl md:text-7xl tracking-[-0.025em] text-ink leading-[0.9]"
              style={{
                fontVariationSettings:
                  "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Peterka
              <br />
              <span className="italic text-moss">&amp;&nbsp;Kolektiv</span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-[1.6] text-ink-soft">
              Privátní finanční dům — komplexní péče o&nbsp;váš majetek
              a&nbsp;vaši rodinu. Praha · České Budějovice · Tábor.
            </p>
            <div className="mt-6 font-mono text-[10px] tracking-[0.28em] uppercase text-ink-mute">
              Pod střechou Edo&nbsp;Finance · Est.&nbsp;MMX
            </div>
          </div>

          {/* Sitemap */}
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
              Stránka
            </div>
            <ul className="mt-5 flex flex-col gap-2.5">
              {[
                { l: "Filozofie", h: "/#filozofie" },
                { l: "Služby", h: "/#sluzby" },
                { l: "Hypotéky", h: "/sluzby/hypoteky" },
                { l: "Investice", h: "/sluzby/investice" },
                { l: "Tým", h: "/#tym" },
                { l: "Pobočky", h: "/#mapa" },
                { l: "Proces", h: "/#proces" },
                { l: "Kalkulačka", h: "/#kalkulacka" },
                { l: "Kontakt", h: "/#kontakt" },
              ].map((i) => (
                <li key={i.h}>
                  <Link
                    href={i.h}
                    className="font-display text-lg text-ink hover:text-moss transition-colors"
                    style={{
                      fontVariationSettings:
                        "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                    }}
                  >
                    {i.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-6 md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
              Kontakt
            </div>
            <ul className="mt-5 flex flex-col gap-3 text-ink">
              <li>
                <a className="hover:text-moss" href="tel:+420777000000">
                  +420 777 000 000
                </a>
              </li>
              <li>
                <a
                  className="hover:text-moss underline decoration-rule underline-offset-4"
                  href="mailto:kolektiv@peterka.cz"
                >
                  kolektiv@peterka.cz
                </a>
              </li>
            </ul>

            <div className="mt-8 font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
              Pobočky
            </div>
            <ul className="mt-3 text-sm text-ink-soft space-y-1.5">
              <li>Praha — Vinohradská 184</li>
              <li>České Budějovice — Lannova 16</li>
              <li>Tábor — 9. května 1282</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-rule flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-[10px] tracking-[0.22em] uppercase text-ink-mute">
          <span>© MMXXVI · Peterka &amp; Kolektiv · Všechna práva vyhrazena</span>
          <span className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="hover:text-moss">Zásady ochrany údajů</a>
            <a href="#" className="hover:text-moss">Cookies</a>
            <a href="#" className="hover:text-moss">Reklamační řád</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
