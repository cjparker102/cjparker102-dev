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

const STATUS_COLOR: Record<string, { className: string; dot?: boolean }> = {
  ACTIVE:        { className: "text-purple", dot: true },
  PUBLIC:        { className: "text-purple" },
  INTERNAL:      { className: "text-purple" },
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

        <div className="flex flex-col">
          {/* Group projects into rows of 2 */}
          {Array.from({ length: Math.ceil(PROJECTS.length / 2) }, (_, row) => {
            const pair = PROJECTS.slice(row * 2, row * 2 + 2);
            return (
              <div key={row}>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 py-10">

                {pair.map((project, j) => {
                  const status = STATUS_COLOR[project.status];
                  return (
                    <ScrollReveal key={project.name} delay={(row * 2 + j) * 80}>
                      <div>
                        <h3 className="text-teal text-2xl font-bold mb-1">
                          {project.name}
                        </h3>

                        <span
                          className={`${status.className} flex items-center gap-1.5 text-xs font-mono tracking-wider mb-3`}
                        >
                          {status.dot && (
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0" />
                          )}
                          {project.status}
                        </span>

                        <p className="text-white text-base leading-relaxed mb-3">
                          {project.description}
                        </p>

                        <p className="text-muted text-sm font-mono mb-2">
                          {project.stack.join(" · ")}
                        </p>

                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple text-sm font-mono transition-colors duration-200 hover:text-white"
                          >
                            ▸ github.com/cjparker102/{project.name}
                          </a>
                        ) : (
                          "note" in project && (
                            <p className="text-muted/30 text-sm font-mono italic">
                              {project.note}
                            </p>
                          )
                        )}
                      </div>
                    </ScrollReveal>
                  );
                })}
                </div>
                <div
                  className="h-px"
                  style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent)" }}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
