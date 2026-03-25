import ScrollReveal from "./ScrollReveal";

const PROJECTS = [
  {
    name: "okta-access-reviewer",
    status: "ACTIVE" as const,
    description:
      "AI-powered tool that analyzes Okta access patterns, flags inactive users, over-provisioned accounts, and anomalies.",
    stack: ["Python", "Okta SDK", "Claude API"],
    github: "https://github.com/cjparker102/okta-access-reviewer",
    accent: "purple" as const,
  },
  {
    name: "it-command-dashboard",
    status: "INTERNAL" as const,
    description:
      "AI-powered IT operations dashboard with JIRA, Confluence, and OpsGenie integrations. AI ticket creation, response generation, and similar ticket search.",
    stack: ["Python", "Node.js", "HTML/CSS/JS", "Claude API"],
    github: null,
    note: "Internal project — no public link",
    accent: "teal" as const,
  },
  {
    name: "okta-chaos-generator",
    status: "PUBLIC" as const,
    description:
      "Creates 100–200 randomized Okta users with hidden IAM security issues for CTF-style access review practice. Pairs with okta-access-reviewer as a complete attack/defense training ecosystem.",
    stack: ["Python", "Okta SDK"],
    github: "https://github.com/cjparker102/okta-chaos-generator",
    accent: "purple" as const,
  },
  {
    name: "iam-offboarding-assistant",
    status: "COMING SOON" as const,
    description:
      "Intelligent offboarding automation with AI-generated deprovisioning checklists.",
    stack: ["Python", "Okta", "AWS IAM"],
    github: null,
    accent: "teal" as const,
  },
  {
    name: "okta-policy-explainer",
    status: "COMING SOON" as const,
    description:
      "Paste any Okta policy → AI explains it in plain English.",
    stack: ["Python", "Claude API"],
    github: null,
    accent: "purple" as const,
  },
] as const;

// Badge styles per status
const BADGE: Record<string, string> = {
  ACTIVE:        "text-green-400  border-green-400/40  bg-green-400/10",
  PUBLIC:        "text-teal       border-teal/40        bg-teal/10",
  INTERNAL:      "text-amber-400  border-amber-400/40   bg-amber-400/10",
  "COMING SOON": "text-muted      border-white/15       bg-white/5",
};

// Neon card + stack badge classes per accent
const ACCENT = {
  purple: {
    card:  "neon-card",
    tag:   "border border-purple/30 text-muted hover:border-purple hover:text-white",
    link:  "text-purple hover:text-white",
    rule:  "border-purple/15",
  },
  teal: {
    card:  "neon-card-teal",
    tag:   "border border-teal/30  text-muted hover:border-teal  hover:text-white",
    link:  "text-teal   hover:text-white",
    rule:  "border-teal/15",
  },
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

        {/* Card grid — 3 cols on lg, 2 on md, 1 on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => {
            const a = ACCENT[project.accent];
            return (
              <ScrollReveal key={project.name} delay={i * 90}>
                <div
                  className={`
                    ${a.card} scanline-card
                    bg-surface rounded-sm p-6 h-full
                    flex flex-col gap-4
                  `}
                >

                  {/* Header — name + status badge */}
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-white font-bold text-sm font-mono leading-snug">
                      {project.name}
                    </p>

                    <span
                      className={`
                        ${BADGE[project.status]}
                        flex-shrink-0 flex items-center gap-1.5
                        border text-[10px] font-mono tracking-wider
                        px-2 py-0.5 rounded-sm whitespace-nowrap
                      `}
                    >
                      {project.status === "ACTIVE" && (
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0" />
                      )}
                      {project.status}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className={`border-t ${a.rule}`} />

                  {/* Description */}
                  <p className="text-muted text-xs leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className={`
                          ${a.tag}
                          bg-bg px-2.5 py-0.5 text-[10px] font-mono rounded-sm
                          transition-all duration-200 cursor-default select-none
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer — GitHub link or internal note */}
                  <div className={`border-t ${a.rule} pt-3`}>
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`
                          ${a.link}
                          text-xs font-mono
                          transition-colors duration-200
                          flex items-center gap-1.5
                        `}
                      >
                        <span className="opacity-60">▸</span>
                        <span>
                          github.com/cjparker102/{project.name}
                        </span>
                      </a>
                    ) : (
                      <p className="text-muted/50 text-[10px] font-mono italic">
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
