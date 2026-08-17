import { useEffect, useMemo, useState } from "react";
import {
  HERO_QUERY,
  HERO_ROWS,
  KPIS,
  PROFILE,
  TICKER,
} from "../lib/data";
import { Reveal, useCountUp, useInView, usePRM, useScramble } from "../lib/hooks";

/* ---------------- terminal ---------------- */
function TerminalInner({ replayKey }: { replayKey: number }) {
  const prm = usePRM();
  const [typed, setTyped] = useState(prm ? HERO_QUERY.length : 0);
  const [rows, setRows] = useState(prm ? HERO_ROWS.length : 0);
  const [done, setDone] = useState(prm);

  useEffect(() => {
    if (prm) {
      setTyped(HERO_QUERY.length);
      setRows(HERO_ROWS.length);
      setDone(true);
      return;
    }
    setTyped(0);
    setRows(0);
    setDone(false);
    let rowTimer: ReturnType<typeof setInterval> | undefined;
    const typeTimer = setInterval(() => {
      setTyped((t) => {
        if (t >= HERO_QUERY.length) {
          clearInterval(typeTimer);
          setTimeout(() => {
            rowTimer = setInterval(() => {
              setRows((r) => {
                if (r >= HERO_ROWS.length) {
                  if (rowTimer) clearInterval(rowTimer);
                  setDone(true);
                  return r;
                }
                return r + 1;
              });
            }, 140);
          }, 380);
          return t;
        }
        return t + 2;
      });
    }, 16);
    return () => {
      clearInterval(typeTimer);
      if (rowTimer) clearInterval(rowTimer);
    };
  }, [prm, replayKey]);

  const q = HERO_QUERY.slice(0, typed);
  const firstLine = q.split("\n")[0] ?? "";
  const rest = q.slice(firstLine.length);

  return (
    <div className="font-mono text-[12.5px] leading-[1.75]">
      <pre className="whitespace-pre-wrap break-words">
        <span className="text-teal">{firstLine}</span>
        {rest && <span className="text-[#c8dcee]">{rest}</span>}
        {!done && rows === 0 && <span className="caret text-amber">▍</span>}
      </pre>

      {rows > 0 && (
        <div className="mt-4 border border-line bg-ink-900/70">
          {HERO_ROWS.slice(0, rows).map((r) => (
            <div
              key={r.k}
              className={`grid grid-cols-[86px_1fr] gap-3 px-3.5 py-1.5 border-b border-line/60 last:border-b-0 ${
                r.accent ? "bg-amber/[0.07]" : ""
              }`}
            >
              <span className="text-faint">{r.k}</span>
              <span
                className={
                  r.accent
                    ? "text-amber font-semibold inline-flex items-center gap-2"
                    : "text-paper"
                }
              >
                {r.accent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber pulse-dot" />
                )}
                {r.v}
              </span>
            </div>
          ))}
        </div>
      )}

      {done && (
        <p className="mt-3 text-faint">
          1 row returned · 0.042s<span className="caret text-amber ml-2">▍</span>
        </p>
      )}
    </div>
  );
}

/* ---------------- KPI cell ---------------- */
function KpiCell({
  value,
  suffix,
  label,
  decimals,
  start,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
  start: boolean;
  delay: number;
}) {
  const v = useCountUp(value, start, { decimals: decimals ?? 0, duration: 1400 + delay });
  return (
    <div className="group px-5 py-6 sm:py-7 bg-ink-900 hover:bg-ink-850 transition-colors">
      <p className="font-display font-semibold text-3xl sm:text-4xl text-paper tabular-nums">
        {decimals ? v.toFixed(decimals) : Math.round(v)}
        <span className="text-amber">{suffix}</span>
      </p>
      <p className="mt-1.5 font-mono text-[10.5px] leading-snug tracking-[0.08em] uppercase text-faint group-hover:text-muted transition-colors">
        {label}
      </p>
    </div>
  );
}

/* ---------------- hero ---------------- */
export default function Hero() {
  const prm = usePRM();
  const first = useScramble(PROFILE.firstName, true, 250);
  const last = useScramble(PROFILE.lastName, true, 950);
  const [replay, setReplay] = useState(0);
  const { ref: kpiRef, inView: kpiInView } = useInView<HTMLDivElement>(0.3);

  const tickerItems = useMemo(() => [...TICKER, ...TICKER], []);

  return (
    <section id="top" className="relative pt-28 lg:pt-36">
      <div className="wrap grid lg:grid-cols-12 gap-10 lg:gap-8 items-start">
        {/* left — identity */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="font-mono text-[11px] sm:text-xs text-teal tracking-[0.22em] uppercase">
              <span className="text-faint">~/</span>portfolio
              <span className="text-faint"> · </span>data &amp; bi analyst
              <span className="text-faint"> · </span>2026
            </p>
          </Reveal>

          <h1 className="mt-5 font-display font-semibold leading-[0.96] tracking-[-0.015em] text-[13.5vw] sm:text-6xl md:text-7xl xl:text-[5.4rem]">
            <span className="block text-paper">{first}</span>
            <span className="block text-transparent [-webkit-text-stroke:1.5px_#ffb224]">
              {last}
            </span>
          </h1>

          <Reveal delay={150}>
            <p className="mt-6 max-w-xl text-[15px] sm:text-base leading-relaxed text-muted">
              {PROFILE.summary}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 border border-line bg-ink-850/80 px-3.5 py-2 font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M6 11C6 11 10.5 7.2 10.5 4.5a4.5 4.5 0 1 0-9 0C1.5 7.2 6 11 6 11Z" stroke="#3ad6c3" strokeWidth="1.3" />
                  <circle cx="6" cy="4.5" r="1.6" stroke="#3ad6c3" strokeWidth="1.3" />
                </svg>
                India · Hyderabad
              </span>
              <span className="inline-flex items-center gap-2 border border-line bg-ink-850/80 px-3.5 py-2 font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="4.6" stroke="#ffb224" strokeWidth="1.2" />
                  <path d="M1.4 6h9.2M6 1.4c-2.6 2.6-2.6 6.6 0 9.2 2.6-2.6 2.6-6.6 0-9.2Z" stroke="#ffb224" strokeWidth="1.1" />
                </svg>
                Open to relocation
              </span>
              <span className="inline-flex items-center gap-2 border border-line bg-ink-850/80 px-3.5 py-2 font-mono text-[11px] tracking-[0.1em] uppercase text-muted">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <rect x="1.5" y="3.5" width="9" height="6" stroke="#ff6d5a" strokeWidth="1.2" />
                  <path d="M4 6.5l1.4 1.4L8 5.3" stroke="#ff6d5a" strokeWidth="1.2" />
                </svg>
                Remote / international
              </span>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-amber text-ink-950 font-mono text-[12px] font-semibold tracking-[0.14em] uppercase px-6 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,178,36,0.28)]"
              >
                Explore selected work
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-y-0.5">
                  <path d="M6.5 1v11M6.5 12l-4-4M6.5 12l4-4" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
              <a
                href="#story"
                className="group inline-flex items-center gap-3 border border-line px-6 py-3.5 font-mono text-[12px] tracking-[0.14em] uppercase text-muted hover:text-paper hover:border-teal transition-all"
              >
                Read my story
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path d="M1 6.5h11M12 6.5L8 2.5M12 6.5 8 10.5" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>

        {/* right — query console */}
        <div className="lg:col-span-5">
          <Reveal delay={300} y={34}>
            <div className="tick-card border border-line bg-ink-900/85 backdrop-blur-sm shadow-[0_24px_60px_rgba(3,8,15,0.55)]">
              <div className="flex items-center justify-between px-4 h-11 border-b border-line bg-ink-850/80">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-coral/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-teal/80" />
                </div>
                <span className="font-mono text-[10.5px] text-faint tracking-[0.14em]">
                  kotte@analytics — zsh
                </span>
                <button
                  onClick={() => setReplay((r) => r + 1)}
                  aria-label="Replay query"
                  className="grid place-items-center w-7 h-7 border border-line text-faint hover:text-amber hover:border-amber transition-colors"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M10.5 6a4.5 4.5 0 1 1-1.4-3.25M10.5 1v2.5H8" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
              </div>
              <div className="p-4 sm:p-5">
                <TerminalInner key={`${replay}-${prm}`} replayKey={replay} />
              </div>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="floaty mt-5 border border-line bg-ink-850/80 px-4 py-3.5 flex items-start gap-3">
              <span className="mt-0.5 w-2 h-2 bg-teal shrink-0" />
              <p className="font-mono text-[11.5px] leading-relaxed text-muted">
                <span className="text-teal">currently:</span> building AI-assisted
                analytics workflows with <span className="text-paper">n8n</span>,{" "}
                <span className="text-paper">Claude API</span> &{" "}
                <span className="text-paper">Ollama</span> — and looking for the
                right team to bring them to.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      {/* KPI strip */}
      <div className="mt-16 lg:mt-20 border-y border-line bg-ink-900/40">
        <div ref={kpiRef} className="wrap">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-line">
            {KPIS.map((k, i) => (
              <KpiCell key={k.label} {...k} start={kpiInView} delay={i * 90} />
            ))}
          </div>
        </div>
      </div>

      {/* tech ticker */}
      <div className="marquee py-4 border-b border-line/60">
        <div className="marquee-track items-center">
          {tickerItems.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="flex items-center gap-6 pr-6 font-mono text-[11.5px] tracking-[0.2em] uppercase text-faint whitespace-nowrap"
            >
              {t}
              <svg width="7" height="7" viewBox="0 0 7 7" aria-hidden="true">
                <rect x="1.2" y="1.2" width="4.6" height="4.6" transform="rotate(45 3.5 3.5)" fill={i % 3 === 0 ? "#ffb224" : i % 3 === 1 ? "#3ad6c3" : "#ff6d5a"} opacity="0.75" />
              </svg>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
