import { PROFILE, TARGET_ROLES } from "../lib/data";
import { Reveal } from "../lib/hooks";

export default function Contact() {
  return (
    <section id="contact" className="relative pt-24 lg:pt-32 scroll-mt-20">
      <div className="wrap">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] uppercase text-faint">
            <span className="text-amber">08</span>
            <span className="h-px w-10 bg-amber" />
            Next chapter — could include you
          </p>
        </Reveal>

        <Reveal delay={90}>
          <h2 className="mt-5 max-w-4xl font-display font-semibold text-4xl sm:text-5xl lg:text-[4.2rem] leading-[1.02] tracking-[-0.01em] text-paper">
            The most interesting part of the story{" "}
            <span className="text-transparent [-webkit-text-stroke:1.5px_#3ad6c3]">
              may still be ahead.
            </span>
          </h2>
        </Reveal>

        <Reveal delay={180}>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted">
            I'm looking for a team where data drives decisions — where someone
            who has maintained the systems, analyzed the data and shipped the
            dashboards can help decide what happens next. If that sounds like
            your team, let's talk.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap gap-2">
            {TARGET_ROLES.map((r) => (
              <span
                key={r}
                className="font-mono text-[11px] tracking-[0.1em] px-3 py-1.5 border border-line bg-ink-900/60 text-muted hover:text-amber hover:border-amber/50 transition-colors"
              >
                {r}
              </span>
            ))}
            <span className="font-mono text-[11px] tracking-[0.1em] px-3 py-1.5 border border-amber/40 bg-amber/10 text-amber">
              Open to relocation (India / International)
            </span>
            <span className="font-mono text-[11px] tracking-[0.1em] px-3 py-1.5 border border-teal/40 bg-teal/10 text-teal">
              Hybrid / Remote
            </span>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <a
            href={`mailto:${PROFILE.email}`}
            className="link-slide group mt-10 inline-block font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-paper hover:text-amber transition-colors break-all"
          >
            {PROFILE.email}
          </a>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={`mailto:${PROFILE.email}?subject=Opportunity%20for%20Kousthubhee`}
              className="group inline-flex items-center gap-3 bg-amber text-ink-950 font-mono text-[12px] font-semibold tracking-[0.14em] uppercase px-6 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,178,36,0.28)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <rect x="1.5" y="3" width="11" height="8" stroke="currentColor" strokeWidth="1.4" />
                <path d="m2 3.5 5 4 5-4" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              Write to me
            </a>
            <a
              href={PROFILE.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 bg-[#25D366] text-ink-950 font-mono text-[12px] font-semibold tracking-[0.14em] uppercase px-6 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(37,211,102,0.3)]"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M7 1.6a5.4 5.4 0 0 0-4.65 8.14L1.6 12.4l2.72-.71A5.4 5.4 0 1 0 7 1.6Z" stroke="currentColor" strokeWidth="1.25" strokeLinejoin="round" />
                <path d="M5.1 4.4c-.2.5-.2 1.5.7 2.7.8 1 1.9 1.5 2.5 1.5.4 0 .8-.2.9-.6l.2-.5-1-.5-.5.5c-.5-.2-1.2-.9-1.4-1.4l.5-.5-.6-1-.6.1c-.3.1-.6.3-.7.7Z" fill="currentColor" />
              </svg>
              WhatsApp me
            </a>
            {[
              {
                label: "LinkedIn",
                href: PROFILE.linkedin,
                icon: (
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <rect x="1.5" y="1.5" width="11" height="11" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M4.2 6.2v3.8M4.2 4.1v.1M6.8 10V7.6c0-.9.7-1.5 1.5-1.5s1.5.6 1.5 1.5V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: "GitHub",
                href: PROFILE.github,
                icon: (
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M5 12.5v-2c-2.2.5-2.8-1-2.8-1M9 12.5v-2.6c0-.6-.1-1-.3-1.3 1.8-.2 3.1-1.2 3.1-3.2 0-.9-.3-1.5-.7-2 .1-.3.3-1-.1-2 0 0-.7-.2-2 .8a6 6 0 0 0-3.4 0c-1.3-1-2-.8-2-.8-.4 1-.2 1.7-.1 2-.4.5-.7 1.1-.7 2 0 2 1.3 3 3.1 3.2-.2.3-.3.7-.3 1.3v2.6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 border border-line px-5 py-3.5 font-mono text-[12px] tracking-[0.12em] uppercase text-muted hover:text-ink-950 hover:bg-teal hover:border-teal transition-all"
              >
                {s.icon}
                {s.label}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <path d="M1.5 8.5 8.5 1.5M8.5 1.5H3.5M8.5 1.5v5" stroke="currentColor" strokeWidth="1.3" />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>
      </div>

      {/* footer */}
      <footer className="mt-24 border-t border-line bg-ink-950/70">
        <div className="wrap py-10 grid sm:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-8 h-8 border border-line font-display font-semibold text-amber text-base">
                K<sup className="text-[9px] -translate-y-1 text-teal">3</sup>
              </span>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-muted">
                Between systems &amp; possibilities
              </span>
            </div>
            <p className="mt-4 max-w-xs font-mono text-[10.5px] leading-relaxed text-faint">
              Not a story about having everything figured out — a story about
              continuously figuring things out.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 sm:justify-center">
            {["journey", "story", "experience", "work", "ai-lab", "skills"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="link-slide font-mono text-[10.5px] tracking-[0.16em] uppercase text-faint hover:text-amber transition-colors"
              >
                {id.replace("-", " ")}
              </a>
            ))}
          </nav>
          <div className="sm:text-right">
            <p className="font-mono text-[10.5px] text-faint">
              © 2026 Kousthubhee Krishna Kotte
            </p>
            <p className="mt-1 font-mono text-[10.5px] text-faint">
              India → France → India → <span className="text-amber">next: ?</span>
            </p>
            <a
              href="#top"
              className="group mt-3 inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[0.16em] uppercase text-muted hover:text-teal transition-colors"
            >
              Back to top
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true" className="transition-transform group-hover:-translate-y-0.5">
                <path d="M5 9V1M5 1 1.5 4.5M5 1l3.5 3.5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
