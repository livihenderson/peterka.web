"use client";

import { useState } from "react";

const interests = [
  "Investice",
  "Hypotéky",
  "Pojištění",
  "Nemovitosti",
  "Firemní finance",
  "Komplexní revize",
];

export default function Contact() {
  const [picked, setPicked] = useState<string[]>(["Komplexní revize"]);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const toggle = (k: string) =>
    setPicked((p) => (p.includes(k) ? p.filter((x) => x !== k) : [...p, k]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Stub — would post to /api/contact
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSent(true);
  }

  return (
    <section
      id="kontakt"
      className="relative bg-ink text-paper py-28 md:py-40 overflow-hidden"
    >
      {/* Atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 -z-0 opacity-70"
        style={{
          background:
            "radial-gradient(60% 40% at 80% 0%, rgba(166,129,78,0.12) 0%, rgba(17,20,15,0) 70%), radial-gradient(50% 40% at 0% 100%, rgba(30,58,44,0.45) 0%, rgba(17,20,15,0) 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[88rem] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Left — invite */}
          <div className="col-span-12 lg:col-span-5">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass-light">
              § 09 — Kontakt
            </div>
            <h2
              className="mt-6 font-display text-[clamp(2.6rem,6vw,5.6rem)] leading-[0.98] tracking-[-0.025em]"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              První schůzka<br />
              <span className="italic text-brass-light">je&nbsp;na&nbsp;nás.</span>
            </h2>
            <p className="mt-8 text-paper/75 max-w-md text-lg leading-[1.6]">
              Napište nám pár vět o&nbsp;tom, kde stojíte a&nbsp;co řešíte.
              Do&nbsp;dvou pracovních dnů se ozveme s&nbsp;termíny.
              Nezávazně, diskrétně, bez&nbsp;katalogu produktů.
            </p>

            <div className="mt-12 space-y-7 pt-8 border-t border-rule-dark">
              <ContactRow label="Telefon" value="+420 777 000 000" href="tel:+420777000000" />
              <ContactRow label="E-mail" value="kolektiv@peterka.cz" href="mailto:kolektiv@peterka.cz" />
              <ContactRow label="Praha" value="Vinohradská 184" />
              <ContactRow label="Č. Budějovice" value="Lannova 16" />
              <ContactRow label="Tábor" value="9. května 1282" />
            </div>
          </div>

          {/* Right — form */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8">
            {sent ? (
              <div className="bg-paper/5 border border-rule-dark p-10 md:p-14 min-h-[480px] flex flex-col justify-center">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brass-light">
                  Zpráva odeslána
                </div>
                <h3
                  className="mt-6 font-display text-4xl md:text-5xl leading-tight"
                  style={{
                    fontVariationSettings:
                      "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                  }}
                >
                  Děkujeme.
                  <br />
                  <span className="italic text-brass-light">
                    Brzy se ozveme.
                  </span>
                </h3>
                <p className="mt-6 text-paper/70 max-w-md leading-relaxed">
                  Nejpozději do&nbsp;dvou pracovních dnů obdržíte odpověď
                  od&nbsp;jednoho z&nbsp;poradců. Mezitím si můžete
                  pročíst naši&nbsp;<a className="underline decoration-brass-light/50 underline-offset-4 hover:decoration-brass-light" href="#filozofie">filozofii</a>.
                </p>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="bg-paper/[0.04] border border-rule-dark p-8 md:p-12"
              >
                {/* Interest pills */}
                <fieldset>
                  <legend className="font-mono text-[10px] tracking-[0.3em] uppercase text-brass-light">
                    Co řešíte
                  </legend>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {interests.map((k) => {
                      const on = picked.includes(k);
                      return (
                        <button
                          key={k}
                          type="button"
                          onClick={() => toggle(k)}
                          className={`px-4 py-2 text-[12px] tracking-[0.14em] uppercase border transition-colors duration-300 ${
                            on
                              ? "bg-brass-light text-ink border-brass-light"
                              : "border-rule-dark text-paper/80 hover:border-brass-light/60 hover:text-paper"
                          }`}
                        >
                          {k}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Name */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Field label="Jméno" name="name" required />
                  <Field label="Telefon" name="phone" type="tel" required />
                </div>

                <div className="mt-8">
                  <Field label="E-mail" name="email" type="email" required />
                </div>

                {/* Message */}
                <div className="mt-8">
                  <label className="font-mono text-[10px] tracking-[0.3em] uppercase text-brass-light">
                    Krátká zpráva
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-3 w-full bg-transparent border-b border-rule-dark py-3 text-paper placeholder-paper/30 focus:outline-none focus:border-brass-light transition-colors resize-none font-sans"
                    placeholder="Pár vět o vaší situaci…"
                  />
                </div>

                <div className="mt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-paper/55 max-w-sm leading-relaxed">
                    Odesláním souhlasíte se&nbsp;zpracováním údajů pro&nbsp;účely
                    kontaktování. Diskrétnost je samozřejmostí.
                  </p>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center gap-3 self-start md:self-auto bg-brass-light text-ink px-7 py-4 text-[12.5px] tracking-[0.18em] uppercase hover:bg-paper transition-all duration-500 disabled:opacity-50"
                  >
                    {submitting ? "Odesílám…" : "Odeslat poptávku"}
                    <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                      →
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const Inner = (
    <div className="flex items-baseline justify-between gap-6 group">
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/55 min-w-[120px]">
        {label}
      </span>
      <span
        className="font-display text-xl md:text-2xl text-paper transition-colors group-hover:text-brass-light"
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1" }}
      >
        {value}
      </span>
    </div>
  );
  return href ? (
    <a href={href} className="block">
      {Inner}
    </a>
  ) : (
    <div>{Inner}</div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] tracking-[0.3em] uppercase text-brass-light">
        {label}
        {required && <span className="text-paper/40">&nbsp;*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full bg-transparent border-b border-rule-dark py-3 text-paper placeholder-paper/30 focus:outline-none focus:border-brass-light transition-colors font-sans"
      />
    </div>
  );
}
