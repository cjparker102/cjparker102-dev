import ScrollReveal from "./ScrollReveal";

const PROJECTS = [
  {
    name: "okta-access-reviewer",
    status: "ACTIVE" as const,
    description:
      "AI-powered tool that analyzes Okta access patterns, flags inactive users, over-provisioned accounts, and anomalies.",
    stack: ["Python", "Okta SDK", "Claude API"],
    github: "https://github.com/cjparker102/okta-access-reviewer",
  },
  {
    name: "it-command-dashboard",
    status: "INTERNAL" as const,
    description:
      "AI-powered IT operations dashboard with JIRA, Confluence, and OpsGenie integrations. AI ticket creation, response generation, and similar ticket search.",
    stack: ["Python", "Node.js", "HTML/CSS/JS", "Claude API"],
    github: null,
    note: "Internal project — no public link",
  },
  {
    name: "okta-chaos-generator",
    status: "PUBLIC" as const,
    description:
      "Creates 100–200 randomized Okta users with hidden IAM security issues for CTF-style access review practice. Pairs with okta-access-reviewer as a complete attack/defense training ecosystem.",
    stack: ["Python", "Okta SDK"],
    github: "https://github.com/cjparker102/okta-chaos-generator",
  },
  {
    name: "iam-offboarding-assistant",
    status: "COMING SOON" as const,
    description:
      "Intelligent offboarding automation with AI-generated deprovisioning checklists.",
    stack: ["Python", "Okta", "AWS IAM"],
    github: null,
  },
  {
    name: "okta-policy-explainer",
    status: "COMING SOON" as const,
    description:
      "Paste any Okta policy → AI explains it in plain English.",
    stack: ["Python", "Claude API"],
    github: null,
  },
] as const;

const STATUS_STYLE: Record<string, { className: string; dot?: boolean }> = {
  ACTIVE:        { className: "text-green-400", dot: true },
  PUBLIC:        { className: "text-purple" },
  INTERNAL:      { className: "text-teal" },
  "COMING SOON": { className: "text-muted" },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <p className="section-label mb-2">// PROJECTS</p>
          <h2 className="text-3xl font-bold text-white mb-14">
            What I&apos;ve Built<span className="text-purple">.</span>
          </h2>
        </ScrollReveal>

        {/* Card grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const status = STATUS_STYLE[project.status];
            return (
              <ScrollReveal key={project.name} delay={i * 90}>
                <div
                  className="project-card rounded-sm p-6 h-full flex flex-col gap-4"
                >

                  {/* Header — name + status */}
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-white font-bold text-sm font-mono leading-snug">
                      {project.name}
                    </p>
                    <span
                      className={`
                        ${status.className}
                        flex-shrink-0 flex items-center gap-1.5
                        text-[11px] font-mono tracking-wider whitespace-nowrap
                      `}
                    >
                      {status.dot && (
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0" />
                      )}
                      {project.status}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-white/8" />

                  {/* Description */}
                  <p className="text-muted text-sm leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Stack — plain text with dots */}
                  <p className="text-muted/60 text-xs font-mono">
                    {project.stack.join(" · ")}
                  </p>

                  {/* Footer */}
                  <div className="border-t border-white/8 pt-3">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple text-xs font-mono transition-colors duration-200 hover:text-white flex items-center gap-1.5"
                      >
                        <span className="opacity-60">▸</span>
                        github.com/cjparker102/{project.name}
                      </a>
                    ) : (
                      <p className="text-muted/40 text-xs font-mono italic">
                        {"note" in project ? project.note : "// coming soon"}
                      </p>
                    )}
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
