import type { ReactNode } from "react";
import { Reveal } from "../lib/hooks";

export const ACCENT: Record<
  "amber" | "teal" | "coral",
  {
    text: string;
    border: string;
    bg: string;
    dot: string;
    stroke: string;
    bar: string;
  }
> = {
  amber: {
    text: "text-amber",
    border: "border-amber/45",
    bg: "bg-amber/10",
    dot: "bg-amber",
    stroke: "#ffb224",
    bar: "bg-amber",
  },
  teal: {
    text: "text-teal",
    border: "border-teal/45",
    bg: "bg-teal/10",
    dot: "bg-teal",
    stroke: "#3ad6c3",
    bar: "bg-teal",
  },
  coral: {
    text: "text-coral",
    border: "border-coral/45",
    bg: "bg-coral/10",
    dot: "bg-coral",
    stroke: "#ff6d5a",
    bar: "bg-coral",
  },
};

export function SectionHeading({
  num,
  label,
  title,
  note,
  accent = "amber",
}: {
  num: string;
  label: string;
  title: ReactNode;
  note?: string;
  accent?: "amber" | "teal" | "coral";
}) {
  const a = ACCENT[accent];
  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-end mb-12 lg:mb-16">
      <div className="lg:col-span-8">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.24em] uppercase text-faint">
            <span className={a.text}>{num}</span>
            <span className={`h-px w-10 ${a.bar}`} />
            {label}
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="mt-4 font-display font-semibold text-3xl sm:text-4xl lg:text-[2.9rem] leading-[1.04] tracking-[-0.01em] text-paper">
            {title}
          </h2>
        </Reveal>
      </div>
      {note && (
        <Reveal delay={160} className="lg:col-span-4">
          <p className="font-mono text-[12px] leading-relaxed text-muted lg:text-right">
            {note}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" className={className}>
      <path d="M2 11 11 2M11 2H5M11 2v6" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
