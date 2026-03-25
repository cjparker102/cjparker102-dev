import ScrollReveal from "./ScrollReveal";

const SKILL_GROUPS = [
  {
    category: "// IDENTITY & ACCESS",
    accent: "purple" as const,
    tags: [
      "Okta",
      "AWS IAM",
      "Azure AD",
      "Active Directory",
      "SAML",
      "OAuth 2.0",
      "Zero Trust",
      "JAMF Pro",
    ],
  },
  {
    category: "// LANGUAGES & AUTOMATION",
    accent: "teal" as const,
    tags: ["Python", "Bash", "Terraform", "Git", "Node.js"],
  },
  {
    category: "// PLATFORMS & TOOLS",
    accent: "purple" as const,
    tags: [
      "JIRA",
      "ServiceNow",
      "Microsoft Purview",
      "Docker",
      "Linux",
      "Asset Panda",
    ],
  },
  {
    category: "// SECURITY",
    accent: "teal" as const,
    tags: [
      "Security+",
      "Network+",
      "Encryption",
      "MFA",
      "SSO",
      "Zero Trust",
    ],
  },
];

// Tailwind class sets keyed by accent colour
const ACCENT = {
  purple: {
    header:  "text-teal",
    card:    "neon-card",
    badge:   "border border-purple/30 text-muted hover:border-purple hover:text-white",
    glow:    "hover:shadow-[0_0_10px_rgba(123,66,188,0.55)]",
  },
  teal: {
    header:  "text-teal",
    card:    "neon-card-teal",
    badge:   "border border-teal/30 text-muted hover:border-teal hover:text-white",
    glow:    "hover:shadow-[0_0_10px_rgba(29,158,117,0.55)]",
  },
};

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

        {/* 2-col grid on md+, single col on mobile */}
        <div className="grid md:grid-cols-2 gap-6">
          {SKILL_GROUPS.map((group, i) => {
            const a = ACCENT[group.accent];
            return (
              <ScrollReveal key={group.category} delay={i * 100}>
                <div className={`${a.card} bg-surface rounded-sm p-6 h-full`}>

                  {/* Category header */}
                  <p className={`${a.header} font-mono text-xs tracking-widest mb-4`}>
                    {group.category}
                  </p>

                  {/* Badge cloud */}
                  <div className="flex flex-wrap gap-2">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`
                          ${a.badge} ${a.glow}
                          bg-bg px-3 py-1 text-xs font-mono rounded-sm
                          transition-all duration-200 cursor-default select-none
                        `}
                      >
                        {tag}
                      </span>
                    ))}
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
