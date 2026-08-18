import type { CSSProperties } from "react";
import { CERTIFICATIONS, EDUCATION, LANGUAGES } from "../lib/data";
import { Reveal, useInView } from "../lib/hooks";
import { ACCENT, SectionHeading } from "./Shared";

export default function Credentials() {
  const { ref: langRef, inView: langInView } = useInView<HTMLDivElement>(0.3);
  return (
    <section id="credentials" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="wrap">
        <SectionHeading
          num="07"
          label="Credentials"
          accent="coral"
          title={
            <>
              Degrees, certificates
              <br />
              and <span className="text-coral">three languages</span>
            </>
          }
          note="Formal proof of the journey — but every credential here was chosen to serve the next problem, not to fill a shelf."
        />

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-7 items-start">
          {/* education */}
          <div className="lg:col-span-5 space-y-6">
            {EDUCATION.map((e, i) => {
              const a = ACCENT[e.accent as "amber" | "teal" | "coral"];
              return (
                <Reveal key={e.degree} delay={i * 100} y={30}>
                  <article
                    className="tick-card border border-line bg-ink-900/65 px-6 py-6 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-850/85"
                    style={{ "--tick": a.stroke } as React.CSSProperties}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className={`w-2 h-2 mt-2 ${a.dot}`} />
                      <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-faint">
                        {e.period}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display font-semibold text-xl text-paper leading-snug">
                      {e.degree}
                    </h3>
                    <p className={`mt-1 font-mono text-[12px] ${a.text}`}>{e.school}</p>
                    <p className="font-mono text-[11px] text-faint">{e.place}</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {e.coursework.map((c) => (
                        <span key={c} className="rounded-md font-mono text-[10px] px-2 py-[3px] border border-line text-muted hover:text-paper hover:border-muted transition-colors">
                          {c}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          {/* certifications */}
          <div className="lg:col-span-4">
            <Reveal y={24}>
              <div className="rounded-xl border border-line bg-ink-900/60 overflow-hidden">
                <div className="flex items-center justify-between px-5 h-11 border-b border-line bg-ink-850/70">
                  <span className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-coral">
                    Certifications · 09
                  </span>
                  <span className="font-mono text-[10px] text-faint">2020 → 2026</span>
                </div>
                <ul className="divide-y divide-line/70">
                  {CERTIFICATIONS.map((c, i) => (
                    <li
                      key={c.name}
                      className="group flex items-start gap-3.5 px-5 py-3 transition-colors hover:bg-ink-850/70"
                    >
                      <span className="font-mono text-[10px] text-faint mt-[3px] tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-[12.5px] leading-snug text-paper group-hover:text-coral transition-colors">
                          {c.name}
                        </p>
                        <p className="font-mono text-[10px] text-faint mt-0.5">
                          {c.issuer} · {c.date}
                        </p>
                      </div>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="mt-1.5 text-faint opacity-0 group-hover:opacity-100 group-hover:text-coral transition-all shrink-0">
                        <path d="M1.5 8.5 8.5 1.5M8.5 1.5H3.5M8.5 1.5v5" stroke="currentColor" strokeWidth="1.3" />
                      </svg>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* languages */}
          <div className="lg:col-span-3">
            <Reveal delay={120} y={24}>
              <div ref={langRef} className="tick-card border border-line bg-ink-900/60 px-6 py-6" style={{ "--tick": "#d4502f" } as CSSProperties}>
                <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase text-coral">
                  Languages
                </p>
                <div className="mt-5 space-y-5">
                  {LANGUAGES.map((l) => (
                    <div key={l.name}>
                      <div className="flex items-baseline justify-between">
                        <span className="font-display font-medium text-[15px] text-paper">{l.name}</span>
                        <span className="font-mono text-[10px] tracking-[0.08em] text-faint">{l.level}</span>
                      </div>
                      <div className="mt-2 h-[4px] bg-ink-700/70 overflow-hidden">
                        <div
                          className="bar-fill h-full bg-gradient-to-r from-coral to-amber"
                          style={{ width: langInView ? `${l.pct}%` : "0%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
