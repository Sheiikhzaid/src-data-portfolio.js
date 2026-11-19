import About from "./components/About";
import Contact from "./components/Contact";
import Credentials from "./components/Credentials";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MotionToggle from "./components/MotionToggle";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Stats from "./components/Stats";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-zinc-50 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950"
      >
        Skip to content
      </a>
      <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 z-0 opacity-[0.035] mix-blend-overlay" />
      <Navbar />
      <main id="main" className="relative z-10">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <MotionToggle />
    </>
  );
}
