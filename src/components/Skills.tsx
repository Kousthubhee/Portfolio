import { SKILL_AREAS, TOOLKIT } from "../lib/data";
import { Reveal } from "../lib/hooks";
import { SectionHeading } from "./Shared";

export default function Skills() {
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
              <span className="font-cursive font-semibold text-[1.18em] text-amber">recombined</span>
            </>
          }
          note="Tools change; the ability to learn the next one doesn't. These are the instruments I currently reach for — each one earned on real problems."
        />

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* competency areas */}
          <div className="lg:col-span-5">
            <Reveal y={24}>
              <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-faint mb-5">
                <span className="text-amber">↳</span> where I work best
              </p>
            </Reveal>
            <div className="space-y-3">
              {SKILL_AREAS.map((s, i) => (
                <Reveal key={s.name} delay={i * 70} y={18}>
                  <div className="group flex items-start gap-4 rounded-xl border border-line bg-ink-900/60 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-amber/50 hover:bg-ink-850">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="mt-1 shrink-0 text-amber transition-transform duration-300 group-hover:rotate-90">
                      <path d="M9 1.5 10.8 7.2 16.5 9l-5.7 1.8L9 16.5 7.2 10.8 1.5 9l5.7-1.8L9 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="font-display font-medium text-[15px] text-paper group-hover:text-amber transition-colors">
                        {s.name}
                      </p>
                      <p className="font-mono text-[10.5px] tracking-[0.04em] text-faint mt-1 leading-relaxed">
                        {s.note}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={380} y={16}>
              <p className="mt-6 font-mono text-[11px] leading-relaxed text-faint border-l-2 border-amber/50 pl-4">
                The honest bit: these are the tools I reach for today. The habit
                that matters is learning the next one before I'm asked to.
              </p>
            </Reveal>
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
                  <div className="group h-full rounded-xl border border-line bg-ink-900/60 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/50 hover:bg-ink-850">
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
                          className="rounded-md font-mono text-[11px] px-2 py-[3px] border border-line/80 text-muted transition-colors hover:text-paper hover:border-muted"
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
