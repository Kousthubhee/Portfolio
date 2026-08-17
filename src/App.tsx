import Backdrop from "./components/Backdrop";
import Nav from "./components/Nav";
import { PROFILE } from "./lib/data";

function WhatsAppFab() {
  return (
    <a
      href={PROFILE.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 grid place-items-center w-[52px] h-[52px] rounded-full bg-[#25D366] text-ink-950 shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-all hover:scale-110 hover:shadow-[0_14px_38px_rgba(37,211,102,0.5)]"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 2.7a9.3 9.3 0 0 0-8 14l-1.3 4.6 4.8-1.25A9.3 9.3 0 1 0 12 2.7Z" fill="currentColor" opacity="0.16" />
        <path d="M12 2.7a9.3 9.3 0 0 0-8 14l-1.3 4.6 4.8-1.25A9.3 9.3 0 1 0 12 2.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8.8 7.6c-.4.9-.3 2.7 1.3 4.8 1.5 1.9 3.4 2.8 4.5 2.8.7 0 1.4-.4 1.6-1l.3-1-1.8-.9-.8.9c-.9-.4-2.1-1.6-2.5-2.5l.9-.8-.9-1.8-1 .2c-.5.1-1 .5-1.2 1.1Z" fill="currentColor" />
      </svg>
      <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-sm border border-line bg-ink-900 px-2.5 py-1 font-mono text-[10.5px] tracking-[0.08em] uppercase text-teal opacity-0 translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
        WhatsApp me
      </span>
    </a>
  );
}
import Hero from "./components/Hero";
import Journey from "./components/Journey";
import Chapters from "./components/Chapters";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AILab from "./components/AILab";
import Skills from "./components/Skills";
import Credentials from "./components/Credentials";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Backdrop />
      <div className="noise-overlay" aria-hidden="true" />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Journey />
        <Chapters />
        <Experience />
        <Projects />
        <AILab />
        <Skills />
        <Credentials />
        <Contact />
      </main>
      <WhatsAppFab />
    </div>
  );
}
