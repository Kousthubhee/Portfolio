import { useEffect, useState } from "react";
import { NAV_LINKS, PROFILE } from "../lib/data";
import { useScrollSpy } from "../lib/hooks";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink-950/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="wrap h-16 flex items-center justify-between gap-4">
        {/* brand */}
        <a href="#top" className="flex items-center gap-3 group" aria-label="Back to top">
          <span className="relative grid place-items-center w-9 h-9 border border-line bg-ink-850 font-display font-semibold text-amber text-lg transition-colors group-hover:border-amber">
            K<sup className="text-[10px] -translate-y-1.5 text-teal">3</sup>
            <span className="absolute -bottom-px -right-px w-1.5 h-1.5 bg-amber" />
          </span>
          <span className="hidden sm:block leading-tight">
            <span className="block font-display font-semibold text-[15px] tracking-wide">
              Kousthubhee K. Kotte
            </span>
            <span className="block font-mono text-[10px] text-faint tracking-[0.18em] uppercase">
              Data &amp; BI Analyst
            </span>
          </span>
        </a>

        {/* desktop links */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`link-slide font-mono text-[11.5px] tracking-[0.14em] uppercase transition-colors ${
                active === l.id ? "text-amber" : "text-muted hover:text-paper"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-2 border border-amber/40 bg-amber/10 text-amber font-mono text-[10.5px] tracking-[0.16em] uppercase px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-amber pulse-dot" />
            Open to work
          </span>
          <a
            href={`mailto:${PROFILE.email}`}
            className="hidden sm:inline-flex items-center gap-2 bg-amber text-[#fdfcf7] font-mono text-[11.5px] font-semibold tracking-[0.12em] uppercase px-4 py-2 transition-all hover:bg-teal hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(196,131,10,0.3)]"
          >
            Hire me
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </a>
          {/* mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="lg:hidden grid place-items-center w-9 h-9 border border-line text-paper hover:border-amber transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              {open ? (
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" />
              ) : (
                <path d="M2 4h12M2 8h12M2 12h8" stroke="currentColor" strokeWidth="1.6" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* mobile panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ease-out bg-ink-950/95 backdrop-blur-md border-b border-line ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="wrap py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-2.5 border-b border-line/60 font-mono text-xs tracking-[0.16em] uppercase text-muted hover:text-amber transition-colors"
            >
              {l.label}
              <span className="text-faint">→</span>
            </a>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="mt-3 inline-flex justify-center bg-amber text-[#fdfcf7] font-mono text-xs font-semibold tracking-[0.14em] uppercase px-4 py-2.5"
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
