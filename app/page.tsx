import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
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
