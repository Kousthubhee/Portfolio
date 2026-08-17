import type { CSSProperties } from "react";
import { CHAPTERS } from "../lib/data";
import { ACCENT, SectionHeading } from "./Shared";

export default function Chapters() {
  return (
    <section id="story" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="wrap">
        <SectionHeading
          num="02"
          label="The autobiography"
          accent="amber"
          title={
            <>
              Between systems
              <br />
              and <span className="text-transparent [-webkit-text-stroke:1.3px_#ffb224]">possibilities</span>
            </>
          }
          note="The full story is one of decisions, experiments, failures and moments of trying something slightly beyond my current capabilities."
        />

        <p className="max-w-2xl -mt-6 mb-12 text-[15px] leading-relaxed text-muted">
          My story has never followed a completely straight line — and the most
          important part of it is not any single degree, job or achievement. It
          is the gradual realization that I don't want to simply{" "}
          <span className="text-paper">maintain systems</span>. I want to
          understand them, improve them, and use data to make better decisions.
        </p>

        {/* stacked sticky cards */}
        <div className="relative">
          {CHAPTERS.map((c, i) => {
            const a = ACCENT[c.accent as "amber" | "teal" | "coral"];
            return (
              <div
                key={c.numeral}
                className="sticky"
                style={{ top: `${92 + i * 15}px`, zIndex: i + 1 }}
              >
                <article
                  className="tick-card border border-line bg-ink-850 px-6 sm:px-10 py-7 sm:py-9 shadow-[0_-18px_44px_rgba(3,8,15,0.66)]"
                  style={{ "--tick": a.stroke, marginBottom: i < CHAPTERS.length - 1 ? "2.25rem" : 0 } as CSSProperties}
                >
                  <div className="grid md:grid-cols-[150px_1fr] gap-5 md:gap-10 items-start">
                    <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-1">
                      <span
                        className={`font-display font-bold text-4xl sm:text-5xl leading-none ${a.text}`}
                      >
                        {c.numeral}
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-faint">
                        chapter
                      </span>
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <h3 className="font-display font-semibold text-xl sm:text-2xl text-paper">
                          {c.title}
                        </h3>
                        <span
                          className={`font-mono text-[10.5px] px-2.5 py-1 border ${a.border} ${a.text} ${a.bg} tracking-[0.06em]`}
                        >
                          “{c.quote}”
                        </span>
                      </div>
                      <p className="mt-3 max-w-3xl text-[14px] sm:text-[14.5px] leading-relaxed text-muted">
                        {c.body}
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
