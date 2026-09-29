const services = [
  {
    n: "01",
    t: "Investice",
    short: "Tvorba portfolia a dohled",
    body:
      "Dlouhodobá strategie postavená na Vašich cílech, ne na produktovém katalogu. Diversifikace, aktivní i\u00A0pasivní správa, pravidelná revize.",
    detail: ["Akciová a\u00A0dluhopisová portfolia", "Pravidelné investice", "Investiční dohled"],
    cta: "Náš přístup k\u00A0investicím",
    href: "/sluzby/investice",
  },
  {
    n: "02",
    t: "Úvěry",
    short: "Hypotéky i\u00A0podnikatelské úvěry",
    body:
      "Srovnání nabídek napříč všemi bankami. Hypotéky, retence, podnikatelské i&nbsp;spotřebitelské úvěry.",
    banks: PARTNER_BANKS,
    detail: ["Hypotéka pro vlastní bydlení", "Investiční hypotéky", "Podnikatelský, spotřebitelský úvěr"],
    cta: "Jak vybíráme úvěry",
    href: "/sluzby/hypoteky",
  },
  {
    n: "03",
    t: "Pojištění",
    short: "Životní, majetkové, podnikatelské",
    body:
      "Pojistka, která dává smysl\u00A0- bez balastu, který nikdy nevyplatí. Pravidelná aktualizace dle životních situací.",
    detail: ["Životní a\u00A0úrazové", "Nemovitosti a\u00A0domácnost", "Odpovědnost a\u00A0podnikání"],
    cta: "Jak stavíme pojištění",
    href: "/sluzby/pojisteni",
  },
  {
    n: "04",
    t: "Nemovitosti",
    short: "Nákup, prodej, správa",
    body:
      "Spolupracujeme s\u00A0vlastní realitní společností. Od prohlídky přes právní servis až po hypotéku\u00A0- jeden klient, jeden tým.",
    detail: ["Nákup a\u00A0prodej", "Investiční portfolio", "Předání majetku"],
    cta: "Domluvit konzultaci o nemovitostech",
    href: "/#kontakt",
  },
  {
    n: "05",
    t: "Firmy",
    short: "Péče o\u00A0majitele i\u00A0podnik",
    body:
      "Optimalizace odměn, financování růstu, ochrana klíčových osob. Stojí za námi korporátní oddělení\u00A0- pro majitele firem i&nbsp;jejich rodiny.",
    detail: ["Likvidace pojistných událostí", "Firemní financování", "Pojištění manažerů"],
    cta: "Jak pečujeme o\u00A0firmy",
    href: "/sluzby/firmy",
  },
];

import Link from "next/link";
import { PARTNER_BANKS } from "../_lib/site";

export default function Services() {
  return (
    <section
      id="sluzby"
      className="relative py-28 md:py-36 bg-bone-light"
    >
      <div className="mx-auto max-w-[88rem] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <h2
              className="mt-6 font-display text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[1.02] tracking-[-0.025em] text-ink"
            >
              Pět oblastí. <br />
              <span className="italic text-moss">Jedno&nbsp;místo.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-lg leading-[1.6] text-ink-soft max-w-md">
              Nestaráme se jen o&nbsp;jednu věc, staráme se o&nbsp;celek.
              Klient, který s&nbsp;námi řeší hypotéku, často zjistí,
              že&nbsp;mu pomůžeme vyřešit i&nbsp;pojištění auta, investice,
              zajištění dětí i&nbsp;daňové optimalizace jedním rozhovorem.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-px bg-rule border border-rule">
          {services.map((s, i) => {
            // Top row: 3 cards × col-span-4 (Investice, Hypotéky, Pojištění)
            // Bottom row: 2 cards × col-span-6 (Nemovitosti, Firmy)
            const span =
              i < 3 ? "col-span-12 md:col-span-4" : "col-span-12 md:col-span-6";
            return (
              <article
                key={s.n}
                className={`reveal group relative bg-bone p-8 md:p-12 md:min-h-[520px] flex flex-col ${span}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Number */}
                <div className="flex items-start justify-between gap-5">
                  <div
                    className="font-display num text-2xl text-brass-deep shrink-0"
                  >
                    {s.n}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-mute leading-relaxed text-right">
                    {s.short}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="mt-10 font-display text-[clamp(2rem,3.6vw,3.4rem)] leading-[0.95] tracking-[-0.02em] text-ink transition-colors duration-500 group-hover:text-moss"
                >
                  {s.t}
                </h3>

                {/* Body */}
                <p
                  className="mt-5 text-[15px] leading-[1.65] text-ink-soft max-w-md"
                  dangerouslySetInnerHTML={{ __html: s.body }}
                />

                {/* Detail list */}
                <ul className="mt-6 flex flex-col gap-1.5 font-mono text-[11px] tracking-[0.18em] uppercase text-ink-mute">
                  {s.detail.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <span className="inline-block w-3 h-px bg-brass" />
                      {d}
                    </li>
                  ))}
                </ul>

                {s.banks && (
                  <div className="mt-8">
                    <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-brass-deep">
                      Banky, se kterými spolupracujeme
                    </div>
                    <p className="mt-3 text-[13px] leading-[1.7] text-ink-soft">
                      {s.banks.join(" · ")}
                    </p>
                  </div>
                )}

                {/* Bottom CTA */}
                <div className="mt-10 md:mt-auto pt-9 border-t border-rule/55">
                  <Link
                    href={s.href}
                    className="inline-flex items-baseline gap-3 group/cta"
                  >
                    <span
                      className="relative font-display italic text-moss text-lg md:text-xl leading-snug pb-1 border-b border-brass/0 group-hover/cta:border-brass transition-colors duration-500"
                    >
                      {s.cta}
                    </span>
                    <span className="font-display not-italic text-moss text-xl md:text-2xl leading-none translate-y-px inline-block transition-transform duration-500 group-hover/cta:translate-x-2">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
