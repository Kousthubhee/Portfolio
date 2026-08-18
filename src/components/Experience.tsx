import type { CSSProperties } from "react";
import { EXPERIENCE, PROFILE } from "../lib/data";
import { Reveal } from "../lib/hooks";
import { ACCENT, SectionHeading } from "./Shared";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="wrap">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* sticky rail */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] uppercase text-faint">
              <span className="text-coral">03</span>
              <span className="h-px w-10 bg-coral" />
              Work history
            </p>
            <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl leading-[1.05] text-paper">
              Four seasons,
              <br />
              one <span className="text-coral">direction</span>
            </h2>
            <p className="mt-5 text-[14.5px] leading-relaxed text-muted">
              From enterprise middleware operations to product analytics in a
              French incubator — every stop added a lens: how systems behave,
              how data explains them, and how people decide with both.
            </p>

            <div className="mt-7 rounded-xl border border-line bg-ink-900/60 divide-y divide-line overflow-hidden">
              {[
                { k: "Data & product lead", v: "5 months · NEOMA Venture Studio" },
                { k: "Data operations & BI", v: "2 years · Infosys" },
                { k: "Data analytics", v: "3 months · ShapeAI" },
                { k: "Deliberate upskilling", v: "1 year · self-directed" },
              ].map((r) => (
                <div key={r.k} className="flex items-center justify-between px-4 py-3">
                  <span className="font-mono text-[11px] tracking-[0.1em] uppercase text-faint">
                    {r.k}
                  </span>
                  <span className="font-mono text-[11.5px] text-paper">{r.v}</span>
                </div>
              ))}
            </div>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group mt-6 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.14em] uppercase text-coral hover:text-paper transition-colors"
            >
              Full history on LinkedIn
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                <path d="M2 10 10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
          </div>

          {/* entries */}
          <div className="lg:col-span-8 space-y-6">
            {EXPERIENCE.map((e, i) => {
              const a = ACCENT[e.accent as "amber" | "teal" | "coral"];
              return (
                <Reveal key={e.role} delay={i * 80} y={34}>
                  <article className="group tick-card border border-line bg-ink-900/65 px-6 sm:px-8 py-7 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-850/90 hover:shadow-[0_18px_44px_rgba(23,49,44,0.16)]" style={{ "--tick": a.stroke } as CSSProperties}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <div>
                        <h3 className="font-display font-semibold text-xl sm:text-[1.35rem] text-paper leading-snug">
                          {e.role}
                        </h3>
                        <p className={`mt-1 font-mono text-[12px] ${a.text}`}>
                          {e.org} <span className="text-faint">·</span>{" "}
                          <span className="text-muted">{e.place}</span>
                        </p>
                      </div>
                      <span className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-faint border border-line px-2.5 py-1 bg-ink-950/50">
                        {e.period}
                      </span>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-[13.5px] leading-relaxed text-muted">
                          <span className={`mt-[7px] w-1.5 h-1.5 shrink-0 ${a.dot}`} />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {e.stack.map((s) => (
                        <span
                          key={s}
                          className="rounded-md font-mono text-[10.5px] tracking-[0.06em] px-2.5 py-1 border border-line text-muted bg-ink-950/40 transition-colors group-hover:border-current group-hover:text-paper"
                          style={{ color: undefined }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
