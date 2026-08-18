import { MILESTONES } from "../lib/data";
import { Reveal, useInView } from "../lib/hooks";
import { ACCENT, SectionHeading } from "./Shared";

export default function Journey() {
  const { ref, inView } = useInView<HTMLDivElement>(0.08);

  return (
    <section id="journey" className="relative py-24 lg:py-32 scroll-mt-20">
      <div className="wrap">
        <SectionHeading
          num="01"
          label="The route"
          accent="teal"
          title={
            <>
              India <span className="text-teal">→</span> France{" "}
              <span className="text-teal">→</span> India{" "}
              <span className="text-teal">→</span>{" "}
              <span className="font-cursive font-semibold text-[1.2em] text-teal">next?</span>
            </>
          }
          note="A career rarely moves in a straight line. Mine moved across continents — systems first, then data, then the decisions behind the data."
        />

        {/* timeline */}
        <div ref={ref} className="relative mt-4 lg:mt-6">
          {/* rail */}
          <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-px bg-line" />
          <div
            className={`journey-fill absolute left-[6.5px] md:left-1/2 md:-translate-x-1/2 top-2 bottom-2 w-[2px] ${inView ? "in" : ""}`}
            style={{
              background: "linear-gradient(to bottom, #0d8a78, #c4830a 60%, #d4502f)",
            }}
          />

          <div className="space-y-10 lg:space-y-14">
            {MILESTONES.map((m, i) => {
              const a = ACCENT[m.accent as "amber" | "teal" | "coral"];
              const right = i % 2 === 1;
              return (
                <div
                  key={m.title}
                  className={`relative md:grid md:grid-cols-2 md:gap-16 ${i % 2 === 0 ? "" : ""}`}
                >
                  {/* node */}
                  <span
                    className={`absolute left-[7px] md:left-1/2 top-2 -translate-x-1/2 w-[13px] h-[13px] rotate-45 border-2 bg-ink-950 ${a.border} ${
                      m.current ? "pulse-dot" : ""
                    }`}
                    style={{ borderColor: a.stroke }}
                  />
                  <div
                    className={`pl-9 md:pl-0 ${right ? "md:col-start-2" : "md:col-start-1 md:text-right"}`}
                  >
                    <Reveal delay={60} y={30}>
                      <div
                        className={`group inline-block w-full text-left border border-line bg-ink-900/65 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:border-current ${
                          right ? "md:ml-auto" : "md:mr-auto"
                        }`}
                        style={{ color: a.stroke }}
                      >
                        <div className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 ${!right ? "md:justify-end" : ""}`}>
                          <span className="font-mono text-[10.5px] tracking-[0.18em] text-faint">
                            {m.period}
                          </span>
                          <span
                            className={`font-mono text-[9.5px] tracking-[0.2em] uppercase px-2 py-0.5 border ${a.border} ${a.text} ${a.bg}`}
                          >
                            {m.tag}
                          </span>
                        </div>
                        <h3 className="mt-2.5 font-display font-semibold text-lg sm:text-xl text-paper leading-snug">
                          {m.title}
                        </h3>
                        <p className={`font-mono text-[11.5px] ${a.text} mt-1`}>
                          {m.org} · {m.place}
                        </p>
                        <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">
                          {m.text}
                        </p>
                      </div>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
