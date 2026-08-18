import type { CSSProperties } from "react";
import { PROJECTS, PROFILE, type Project } from "../lib/data";
import { Reveal, useInView } from "../lib/hooks";
import { ACCENT, ArrowIcon, SectionHeading } from "./Shared";

/* deterministic mini bar-chart motif per project */
function MiniViz({ accent, seed }: { accent: string; seed: number }) {
  const bars = Array.from({ length: 14 }, (_, i) => {
    const v = Math.abs(Math.sin((i + 1) * (seed + 3) * 1.7)) * 62 + 12;
    return v;
  });
  return (
    <svg viewBox="0 0 280 90" className="w-full h-auto" aria-hidden="true">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 20 + 2}
          y={88 - h}
          width={12}
          height={h}
          fill={accent}
          opacity={0.16 + (i % 4) * 0.14}
        />
      ))}
      <polyline
        points={bars.map((h, i) => `${i * 20 + 8},${84 - h}`).join(" ")}
        fill="none"
        stroke={accent}
        strokeWidth="1.6"
        className="anim-dash"
        style={{ strokeDasharray: "4 6" }}
      />
    </svg>
  );
}

function FeaturedProject({ p, flip }: { p: Project; flip: boolean }) {
  const a = ACCENT[p.accent];
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <Reveal y={40}>
      <article
        ref={ref}
        className="group tick-card border border-line bg-ink-900/65 transition-all duration-300 hover:-translate-y-1.5 hover:bg-ink-900 hover:shadow-[0_22px_50px_rgba(23,49,44,0.18)]"
        style={{ "--tick": a.stroke } as CSSProperties}
      >
        <div className={`grid md:grid-cols-12 ${flip ? "" : ""}`}>
          {/* content */}
          <div className={`md:col-span-7 px-6 sm:px-9 py-7 sm:py-9 ${flip ? "md:order-2 md:border-l" : "md:border-r"} border-line`}>
            <div className="flex items-baseline justify-between gap-4">
              <span className={`font-mono text-[12px] tracking-[0.2em] ${a.text}`}>
                /{p.index}
              </span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-muted hover:text-paper transition-colors"
              >
                View on GitHub <ArrowIcon className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
            <h3 className="mt-3 font-display font-semibold text-2xl sm:text-[1.75rem] leading-tight text-paper">
              {p.title}
            </h3>
            <p className={`mt-1.5 font-mono text-[12px] ${a.text}`}>{p.subtitle}</p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-muted">
              <span className="text-faint font-mono text-[10.5px] tracking-[0.18em] uppercase mr-2">
                objective —
              </span>
              {p.objective}
            </p>
            <ul className="mt-4 space-y-2">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3 text-[13px] leading-relaxed text-muted">
                  <span className={`mt-[7px] w-1.5 h-1.5 shrink-0 ${a.dot}`} />
                  {pt}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                          className={`rounded-md font-mono text-[10.5px] px-2.5 py-1 border ${a.border} ${a.text} ${a.bg}`}                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* data panel */}
          <div className="md:col-span-5 px-6 sm:px-8 py-7 sm:py-9 flex flex-col justify-between gap-6 bg-ink-950/35">
            <div className="grid grid-cols-3 gap-3">
              {p.metrics.map((m) => (
                <div key={m.l} className="border border-line bg-ink-900/70 px-3 py-3 text-center transition-colors group-hover:border-current" style={{ color: a.stroke }}>
                  <p className="font-display font-semibold text-lg sm:text-xl text-paper leading-none tabular-nums">
                    {m.v}
                  </p>
                  <p className="mt-1.5 font-mono text-[9px] leading-tight tracking-[0.08em] uppercase text-faint">
                    {m.l}
                  </p>
                </div>
              ))}
            </div>
            <div className={`transition-opacity duration-700 ${inView ? "opacity-100" : "opacity-0"}`}>
              <MiniViz accent={a.stroke} seed={parseInt(p.index, 10)} />
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const compact = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="work" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="wrap">
        <SectionHeading
          num="04"
          label="Selected work"
          accent="coral"
          title={
            <>
              Projects that moved
              <br />
              from data to <span className="text-coral">decisions</span>
            </>
          }
          note="Not a list of tools — a record of problems. Each project below shows what was built, and more importantly, why it mattered."
        />

        <div className="space-y-7">
          {featured.map((p, i) => (
            <FeaturedProject key={p.title} p={p} flip={i % 2 === 1} />
          ))}
        </div>

        {/* compact pair */}
        <div className="mt-7 grid md:grid-cols-2 gap-7">
          {compact.map((p, i) => {
            const a = ACCENT[p.accent];
            return (
              <Reveal key={p.title} delay={i * 120} y={34}>
                <article
                  className="group tick-card h-full border border-line bg-ink-900/65 px-6 sm:px-8 py-7 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-850/85"
                  style={{ "--tick": a.stroke } as CSSProperties}
                >
                  <div className="flex items-baseline justify-between">
                    <span className={`font-mono text-[12px] tracking-[0.2em] ${a.text}`}>/{p.index}</span>
                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-faint hover:text-paper transition-colors"
                    >
                      GitHub ↗
                    </a>
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-xl text-paper leading-snug">
                    {p.title}
                  </h3>
                  <p className={`mt-1 font-mono text-[11.5px] ${a.text}`}>{p.subtitle}</p>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted">{p.objective}</p>
                  <ul className="mt-4 space-y-2">
                    {p.points.slice(0, 2).map((pt) => (
                      <li key={pt} className="flex gap-3 text-[12.5px] leading-relaxed text-muted">
                        <span className={`mt-[6px] w-1.5 h-1.5 shrink-0 ${a.dot}`} />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                        <span key={t} className="rounded-md font-mono text-[10px] px-2 py-0.5 border border-line text-muted">                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
