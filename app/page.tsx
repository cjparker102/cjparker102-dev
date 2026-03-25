import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/* Stub anchors — sections will be filled in next commits */}
        <section id="about"          className="min-h-screen" />
        <section id="experience"     className="min-h-screen" />
        <section id="skills"         className="min-h-screen" />
        <section id="projects"       className="min-h-screen" />
        <section id="certifications" className="min-h-screen" />
        <section id="contact"        className="min-h-screen" />
      </main>
    </>
  );
}
