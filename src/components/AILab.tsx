import type { CSSProperties } from "react";
import { AI_ALSO, AI_TOOLS, PIPELINE } from "../lib/data";
import { Reveal } from "../lib/hooks";
import { SectionHeading } from "./Shared";

function ToolMark({ mark }: { mark: string }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true as const,
  };
  switch (mark) {
    case "gpt":
      return (
        <svg {...common}>
          <path d="M12 2.8 20 7.4v9.2L12 21.2 4 16.6V7.4L12 2.8Z" stroke="currentColor" strokeWidth="1.4" />
          <path d="M12 7.6 15.8 9.8v4.4L12 16.4 8.2 14.2V9.8L12 7.6Z" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        </svg>
      );
    case "claude":
      return (
        <svg {...common}>
          <path d="M12 3.5v17M4.6 7.75l14.8 8.5M19.4 7.75l-14.8 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "n8n":
      return (
        <svg {...common}>
          <circle cx="5" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="15" cy="6" r="2.6" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="17.5" cy="16.5" r="2.6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M7.3 10.7 12.8 7.2M7.5 13.2l7.6 2.4" stroke="currentColor" strokeWidth="1.3" />
        </svg>
      );
    case "ollama":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="9" cy="11" r="1.2" fill="currentColor" />
          <circle cx="15" cy="11" r="1.2" fill="currentColor" />
          <path d="M9.5 15.2c1.6 1 3.4 1 5 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      );
    case "api":
      return (
        <svg {...common}>
          <path d="M8.5 5C6.8 5 7 8 5.5 8v8C7 16 6.8 19 8.5 19M15.5 5c1.7 0 1.5 3 3 3v8c-1.5 0-1.3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.4" fill="currentColor" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7.5" ry="3" stroke="currentColor" strokeWidth="1.4" />
          <path d="M4.5 6v12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V6" stroke="currentColor" strokeWidth="1.4" />
          <path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3" stroke="currentColor" strokeWidth="1.2" opacity="0.7" />
        </svg>
      );
  }
}

export default function AILab() {
  return (
    <section id="ai-lab" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="wrap">
        <SectionHeading
          num="05"
          label="The AI bench"
          accent="teal"
          title={
            <>
              Where AI sits <span className="text-teal">across</span>
              <br />
              the whole workflow
            </>
          }
          note="Hands-on with ChatGPT, Claude, n8n, LLM APIs and Ollama — not as toys, but as parts of measurable, automated analytics workflows."
        />

        <Reveal>
          <p className="max-w-3xl -mt-6 mb-14 text-[15px] leading-relaxed text-muted">
            I'm currently exploring how AI fits into everyday analytics:
            extraction, drafting, matching, summarizing. The loop below is the
            pattern I'm testing — the same shape I'd apply to a data pipeline,
            a report, or any repetitive workflow worth automating.
          </p>
        </Reveal>

        {/* pipeline */}
        <div className="relative">
          <div className="hidden lg:block absolute top-[7px] inset-x-8 h-px bg-line" aria-hidden="true">
            <svg className="w-full h-[2px] -mt-[0.5px]" preserveAspectRatio="none" viewBox="0 0 100 2" aria-hidden="true">
              <line x1="0" y1="1" x2="100" y2="1" stroke="#3ad6c3" strokeWidth="1.4" className="anim-dash" />
            </svg>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-3 lg:pt-9">
            {PIPELINE.map((s, i) => (
              <Reveal key={s.step} delay={i * 90} y={30}>
                <div className="group relative h-full border border-line bg-ink-900/70 px-4 pt-5 pb-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/60 hover:bg-ink-850">
                  <span className="hidden lg:block absolute -top-[35px] left-1/2 -translate-x-1/2 w-[13px] h-[13px] rotate-45 border-2 border-teal bg-ink-950 transition-colors group-hover:bg-teal" />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-teal">{s.step}</span>
                    <span className="w-1.5 h-1.5 bg-line group-hover:bg-teal transition-colors" />
                  </div>
                  <h3 className="mt-2 font-display font-semibold text-[1.05rem] text-paper">{s.name}</h3>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-muted">{s.desc}</p>
                  <p className="mt-2.5 font-mono text-[9.5px] tracking-[0.1em] uppercase text-faint border-t border-line/70 pt-2">
                    {s.tool}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* tools — marks & names, no sales pitch */}
        <div className="mt-14 grid grid-cols-3 sm:grid-cols-6 gap-3">
          {AI_TOOLS.map((t, i) => (
            <Reveal key={t.name} delay={i * 60} y={22}>
              <div className="group flex h-full flex-col items-center justify-center gap-3 border border-line bg-ink-900/60 px-3 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/60 hover:bg-ink-850">
                <span className="text-teal transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <ToolMark mark={t.mark} />
                </span>
                <span className="text-center font-mono text-[10.5px] leading-snug tracking-[0.06em] text-muted transition-colors group-hover:text-paper">
                  {t.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* also in rotation — kept deliberately low-key */}
        <Reveal delay={160}>
          <div className="mt-4 flex flex-wrap items-center gap-2 border border-dashed border-line bg-ink-950/40 px-4 py-3.5">
            <span className="mr-1 font-mono text-[10px] tracking-[0.22em] uppercase text-faint">
              also in rotation —
            </span>
            {AI_ALSO.map((n) => (
              <span
                key={n}
                className="font-mono text-[10.5px] px-2 py-0.5 border border-line/70 text-faint transition-colors hover:text-teal hover:border-teal/50"
              >
                {n}
              </span>
            ))}
          </div>
        </Reveal>

        {/* experiments strip */}
        <Reveal delay={120}>
          <div className="mt-10 tick-card border border-line bg-ink-850/70 px-6 sm:px-8 py-6 grid sm:grid-cols-3 gap-6" style={{ "--tick": "#3ad6c3" } as CSSProperties}>
            {[
              {
                t: "Knowledge-base chatbot",
                d: "FAQ assistant on structured data — resolved 60%+ of student queries at the NEOMA Incubator.",
              },
              {
                t: "Local LLM lab",
                d: "Ollama experiments for private inference — testing small models on extraction and summarization tasks.",
              },
              {
                t: "n8n automation loops",
                d: "LLM nodes chained with APIs and webhooks — the glue that turns a prompt into a repeatable process.",
              },
            ].map((x) => (
              <div key={x.t}>
                <h4 className="font-mono text-[11px] tracking-[0.16em] uppercase text-teal">{x.t}</h4>
                <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{x.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
