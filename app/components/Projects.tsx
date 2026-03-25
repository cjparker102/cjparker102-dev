import ScrollReveal from "./ScrollReveal";

const PROJECTS = [
  {
    name: "okta-access-reviewer",
    status: "ACTIVE" as const,
    description:
      "AI-powered Okta access pattern analyzer — flags inactive users, over-provisioned accounts, and anomalies.",
    stack: ["Python", "Okta SDK", "Claude API"],
    github: "https://github.com/cjparker102/okta-access-reviewer",
  },
  {
    name: "it-command-dashboard",
    status: "INTERNAL" as const,
    description:
      "AI-powered IT ops dashboard with JIRA, Confluence, and OpsGenie integrations.",
    stack: ["Python", "Node.js", "HTML/CSS/JS", "Claude API"],
    github: null,
    note: "Internal — no public link",
  },
  {
    name: "okta-chaos-generator",
    status: "PUBLIC" as const,
    description:
      "Generates 100–200 randomized Okta users with hidden IAM issues for CTF-style practice.",
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

const STATUS_CFG: Record<string, { color: string; dot?: boolean }> = {
  ACTIVE:        { color: "text-purple", dot: true },
  PUBLIC:        { color: "text-purple" },
  INTERNAL:      { color: "text-purple" },
  "COMING SOON": { color: "text-muted" },
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

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => {
            const cfg = STATUS_CFG[project.status];
            return (
              <ScrollReveal key={project.name} delay={i * 80}>
                <div
                  className={`
                    pl-6 py-6
                    ${i < PROJECTS.length - 1 ? "border-b border-white/8" : ""}
                  `}
                  style={{ borderLeft: "3px solid #4A9EBF" }}
                >

                  {/* Name + status */}
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-teal text-2xl font-bold">
                      {project.name}
                    </h3>
                    <span
                      className={`${cfg.color} flex items-center gap-1.5 text-sm font-mono tracking-wider`}
                    >
                      {cfg.dot && (
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0" />
                      )}
                      {project.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white text-base leading-relaxed mb-2">
                    {project.description}
                  </p>

                  {/* Stack + link */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                    <p className="text-muted text-sm font-mono">
                      {project.stack.join(" · ")}
                    </p>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple text-xs font-mono transition-colors duration-200 hover:text-white"
                      >
                        ▸ github.com/cjparker102/{project.name}
                      </a>
                    ) : (
                      "note" in project && (
                        <p className="text-muted/30 text-xs font-mono italic">
                          {project.note}
                        </p>
                      )
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
