import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* Stub anchors — sections will be filled in next commits */}
        <section id="experience"     className="min-h-screen" />
        <section id="skills"         className="min-h-screen" />
        <section id="projects"       className="min-h-screen" />
        <section id="certifications" className="min-h-screen" />
        <section id="contact"        className="min-h-screen" />
      </main>
    </>
  );
}
