import { SKILL_BARS, TOOLKIT } from "../lib/data";
import { Reveal, useInView } from "../lib/hooks";
import { SectionHeading } from "./Shared";

export default function Skills() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);

  return (
    <section id="skills" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="wrap">
        <SectionHeading
          num="06"
          label="Capabilities"
          accent="amber"
          title={
            <>
              A toolkit built to be
              <br />
              <span className="text-transparent [-webkit-text-stroke:1.3px_#ffb224]">recombined</span>
            </>
          }
          note="Tools change; the ability to learn the next one doesn't. These are the instruments I currently reach for — each one earned on real problems."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* bars */}
          <div ref={ref} className="lg:col-span-5 space-y-5">
            {SKILL_BARS.map((s, i) => (
              <Reveal key={s.name} delay={i * 60} y={18}>
                <div className="group">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-display font-medium text-[15px] text-paper">{s.name}</p>
                    <span className="font-mono text-[11.5px] text-amber tabular-nums">{s.level}</span>
                  </div>
                  <p className="font-mono text-[10px] tracking-[0.06em] text-faint mt-0.5">{s.note}</p>
                  <div className="mt-2 h-[5px] bg-ink-700/70 overflow-hidden">
                    <div
                      className="bar-fill h-full bg-gradient-to-r from-amber-deep to-amber"
                      style={{ width: inView ? `${s.level}%` : "0%" }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* toolkit */}
          <div className="lg:col-span-7">
            <Reveal y={24}>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-faint mb-5">
                <span className="text-amber">↳</span> technical toolkit
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-4">
              {TOOLKIT.map((g, i) => (
                <Reveal key={g.group} delay={i * 60} y={22}>
                  <div className="group h-full border border-line bg-ink-900/60 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:bg-ink-850">
                    <div className="flex items-center justify-between">
                      <h3 className="font-mono text-[11px] tracking-[0.18em] uppercase text-amber">
                        {g.group}
                      </h3>
                      <span className="font-mono text-[10px] text-faint">
                        {String(g.items.length).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {g.items.map((it) => (
                        <span
                          key={it}
                          className="font-mono text-[11px] px-2 py-[3px] border border-line/80 text-muted transition-colors hover:text-paper hover:border-muted"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
