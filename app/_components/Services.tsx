const services = [
  {
    n: "01",
    t: "Investice",
    short: "Tvorba a správa portfolia",
    body:
      "Dlouhodobá strategie postavená na vašich cílech, ne na produktovém katalogu. Diversifikace, daňová optimalizace, pravidelná revize.",
    detail: ["Akciová a dluhopisová portfolia", "Pravidelné investice", "Diskreční mandát"],
    cta: "Náš přístup k investicím",
    href: "/sluzby/investice",
  },
  {
    n: "02",
    t: "Hypotéky",
    short: "Vlastní bydlení i investiční",
    body:
      "Srovnání nabídek napříč všemi bankami. Refinancování, předhypotéční úvěry, americké hypotéky pro podnikatele.",
    detail: ["Hypotéka pro vlastní bydlení", "Investiční hypotéky", "Refinancování"],
    cta: "Jak vybíráme hypotéky",
    href: "/sluzby/hypoteky",
  },
  {
    n: "03",
    t: "Pojištění",
    short: "Životní, majetkové, podnikatelské",
    body:
      "Pojistka, která dává smysl — bez balastu, který nikdy nevyplatí. Pravidelná aktualizace dle životních situací.",
    detail: ["Životní a úrazové", "Nemovitosti a domácnost", "Odpovědnost a podnikání"],
    cta: "Domluvit konzultaci o pojištění",
    href: "/#kontakt",
  },
  {
    n: "04",
    t: "Nemovitosti",
    short: "Nákup, prodej, správa",
    body:
      "Spolupracujeme s vlastní realitní vertikálou. Od prohlídky přes právní servis až po hypotéku — jeden klient, jeden tým.",
    detail: ["Nákup a prodej", "Investiční portfolio", "Předání majetku"],
    cta: "Domluvit konzultaci o nemovitostech",
    href: "/#kontakt",
  },
  {
    n: "05",
    t: "Firmy",
    short: "Péče o majitele i podnik",
    body:
      "Optimalizace odměn, financování růstu, ochrana klíčových osob, mezigenerační předání. Pro majitele firem a&nbsp;jejich rodiny.",
    detail: ["Manažerské pojištění", "Firemní financování", "Předání majetku"],
    cta: "Domluvit konzultaci pro firmu",
    href: "/#kontakt",
  },
];

import Link from "next/link";

export default function Services() {
  return (
    <section
      id="sluzby"
      className="relative py-28 md:py-36 bg-bone-light"
    >
      <div className="mx-auto max-w-[88rem] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-y-10 md:gap-x-10 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-5">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-deep">
              § 03 — Komplexnost
            </div>
            <h2
              className="mt-6 font-display text-[clamp(2.4rem,5.4vw,4.8rem)] leading-[1.02] tracking-[-0.025em] text-ink"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Pět oblastí. <br />
              <span className="italic text-moss">Jedno&nbsp;místo.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex md:items-end">
            <p className="text-lg leading-[1.6] text-ink-soft max-w-md">
              Nestaráme se jen o&nbsp;jednu věc. Staráme se o&nbsp;celek.
              Klient, který si u&nbsp;nás kupuje hypotéku, často zjistí,
              že&nbsp;mu řešíme i&nbsp;pojištění auta otce, investice dětí
              a&nbsp;daňové optimalizace s.r.o. Jednou rozhovorem.
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
                className={`reveal group relative bg-bone p-8 md:p-10 min-h-[300px] flex flex-col ${span}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Number */}
                <div className="flex items-start justify-between">
                  <div
                    className="font-display num text-2xl text-brass-deep"
                    style={{
                      fontVariationSettings:
                        "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                    }}
                  >
                    {s.n}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-ink-mute">
                    {s.short}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="mt-10 font-display text-[clamp(2rem,3.6vw,3.4rem)] leading-[0.95] tracking-[-0.02em] text-ink transition-colors duration-500 group-hover:text-moss"
                  style={{
                    fontVariationSettings:
                      "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                  }}
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

                {/* Bottom CTA */}
                <div className="mt-auto pt-7 border-t border-rule/55">
                  <Link
                    href={s.href}
                    className="inline-flex items-baseline gap-3 group/cta"
                  >
                    <span
                      className="relative font-display italic text-moss text-lg md:text-xl leading-snug pb-1 border-b border-brass/0 group-hover/cta:border-brass transition-colors duration-500"
                      style={{
                        fontVariationSettings:
                          "'opsz' 144, 'SOFT' 100, 'WONK' 1",
                      }}
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
