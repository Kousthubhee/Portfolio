import Backdrop from "./components/Backdrop";
import Nav from "./components/Nav";
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
    </div>
  );
}
