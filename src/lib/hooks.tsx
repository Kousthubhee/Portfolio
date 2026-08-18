import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/* ---------------- prefers-reduced-motion ---------------- */
export function usePRM(): boolean {
  const [prm, setPrm] = useState<boolean>(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setPrm(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return prm;
}

/* ---------------- in-view observer ---------------- */
export function useInView<T extends HTMLElement>(
  threshold = 0.15,
  rootMargin = "0px 0px -6% 0px"
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin]);
  return { ref, inView };
}

/* ---------------- scroll reveal wrapper ---------------- */
export function Reveal({
  children,
  delay = 0,
  y = 26,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const prm = usePRM();
  const { ref, inView } = useInView<HTMLDivElement>();
  const show = prm || inView;
  const style: CSSProperties = {
    transitionDelay: prm ? "0ms" : `${delay}ms`,
    ["--rv-y" as string]: `${y}px`,
  };
  return (
    <div
      ref={ref}
      className={`reveal ${show ? "reveal-in" : ""} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ---------------- scramble / decode text ---------------- */
const GLYPHS = "█▓▒<>/{}[]#=+*·01";

export function useScramble(text: string, active: boolean, delay = 0) {
  const prm = usePRM();
  const [out, setOut] = useState(prm ? text : "\u00A0");
  useEffect(() => {
    if (prm) {
      setOut(text);
      return;
    }
    if (!active) return;
    let frame = 0;
    let interval: ReturnType<typeof setInterval> | undefined;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        frame += 1;
        const revealed = Math.floor(frame / 2);
        if (revealed >= text.length) {
          setOut(text);
          if (interval) clearInterval(interval);
          return;
        }
        let s = "";
        for (let i = 0; i < text.length; i++) {
          if (i < revealed || text[i] === " ") s += text[i];
          else s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
        setOut(s);
      }, 30);
    }, delay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, active, delay, prm]);
  return out;
}

/* ---------------- count-up ---------------- */
export function useCountUp(
  target: number,
  start: boolean,
  opts: { duration?: number; decimals?: number } = {}
) {
  const prm = usePRM();
  const { duration = 1500, decimals = 0 } = opts;
  const [value, setValue] = useState(prm ? target : 0);
  useEffect(() => {
    if (prm) {
      setValue(target);
      return;
    }
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(parseFloat((target * eased).toFixed(decimals)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration, decimals, prm]);
  return value;
}

/* ---------------- scroll spy ---------------- */
export function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-38% 0px -55% 0px" }
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, [ids.join(",")]);
  return active;
}
