export default function Authority() {
  return (
    <section className="relative bg-moss text-paper overflow-hidden">
      {/* Edge hairlines */}
      <div className="absolute inset-x-0 top-0 h-px bg-brass/40" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-brass/40" />

      <div className="mx-auto max-w-[88rem] px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-y-12 md:gap-x-10">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[10px] tracking-[0.32em] uppercase text-brass">
              § 01 — Výchozí body
            </div>
            <h2
              className="mt-6 font-display text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]"
              style={{
                fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
              }}
            >
              Čísla, která <span className="italic">stojí </span>za přístupem.
            </h2>
            <p className="mt-6 max-w-md text-paper/75 leading-relaxed">
              Naši klienti nepřicházejí pro produkt. Přicházejí proto, že hledají
              tým, který bude jejich dlouhodobým partnerem — v dobrých i&nbsp;složitých
              chvílích života.
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-px bg-rule-dark">
            {[
              { v: "41+", lbl: "let zkušeností", sub: "v součtu napříč týmem" },
              { v: "100%", lbl: "nezávislost", sub: "v doporučeních klientům" },
              { v: "5", lbl: "oblastí péče", sub: "pod jednou střechou" },
              { v: "0", lbl: "kvótních cílů", sub: "na úkor klienta" },
            ].map((s, i) => (
              <div
                key={i}
                className="reveal bg-moss p-7 md:p-8 flex flex-col justify-between min-h-[180px]"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div
                  className="font-display num text-5xl md:text-6xl leading-[0.9] tracking-[-0.02em]"
                  style={{
                    fontVariationSettings: "'opsz' 144, 'SOFT' 30, 'WONK' 1",
                  }}
                >
                  {s.v}
                </div>
                <div className="mt-6">
                  <div className="font-display text-lg italic text-brass-light">
                    {s.lbl}
                  </div>
                  <div className="mt-1 font-mono text-[10px] tracking-[0.22em] uppercase text-paper/60">
                    {s.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
