import { useEffect, useRef } from "react";
import { usePRM } from "../lib/hooks";

type P = { x: number; y: number; vx: number; vy: number; c: string; r: number };

export default function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prm = usePRM();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let particles: P[] = [];
    const colors = ["rgba(13,138,120,", "rgba(196,131,10,", "rgba(76,101,90,"];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(
        80,
        Math.max(36, Math.floor((window.innerWidth * window.innerHeight) / 26000))
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22 - 0.05,
        c: colors[Math.floor(Math.random() * colors.length)],
        r: Math.random() * 1.6 + 0.6,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = window.innerWidth + 20;
        if (p.x > window.innerWidth + 20) p.x = -20;
        if (p.y < -20) p.y = window.innerHeight + 20;
        if (p.y > window.innerHeight + 20) p.y = -20;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `${p.c}0.42)`;
        ctx.fill();
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            const alpha = (1 - Math.sqrt(d2) / 120) * 0.1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `${a.c}${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (prm) {
      draw(); // single static frame
    } else {
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("resize", resize);
    const onVisibility = () => {
      if (prm) return;
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(loop);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [prm]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
      {/* soft daylight wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% -10%, #fbfcf7 0%, #edf0e7 58%)",
        }}
      />
      {/* ambient glows */}
      <div
        className="absolute -top-40 right-[-15%] w-[42rem] h-[42rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(13,138,120,0.10) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-[55%] left-[-18%] w-[46rem] h-[46rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(196,131,10,0.10) 0%, transparent 65%)",
        }}
      />
      <div className="absolute inset-0 bg-grid-faint" />
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
