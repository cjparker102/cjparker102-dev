import ScrollReveal from "./ScrollReveal";
import SkillsTerminal from "./SkillsTerminal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <p className="section-label mb-2">// SKILLS</p>
          <h2 className="text-3xl font-bold text-white mb-14">
            What I Work With<span className="text-purple">.</span>
          </h2>
        </ScrollReveal>

        <SkillsTerminal />

      </div>
    </section>
  );
}
