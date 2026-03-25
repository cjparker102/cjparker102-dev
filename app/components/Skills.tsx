import ScrollReveal from "./ScrollReveal";

const SKILLS = [
  {
    label: "Identity & Access",
    items: "Okta · AWS IAM · Azure AD · Active Directory · SAML · OAuth 2.0 · OIDC · Zero Trust · MFA · SSO · PAM · JAMF Pro",
  },
  {
    label: "Languages",
    items: "Python · Bash · Terraform · Git · Node.js",
  },
  {
    label: "Security",
    items: "Security+ · Network+ · Encryption · RBAC · ABAC · Least Privilege",
  },
  {
    label: "Platforms & Tools",
    items: "JIRA · Microsoft Purview · Docker · Linux · Asset Panda · ServiceNow",
  },
];

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

        <div className="flex flex-col">
          {SKILLS.map((row, i) => (
            <ScrollReveal key={row.label} delay={i * 80}>
              <div
                className={`
                  flex flex-col md:flex-row md:items-baseline gap-4 md:gap-0
                  py-6
                  ${i < SKILLS.length - 1 ? "border-b border-white/8" : ""}
                `}
              >
                <p
                  className="text-teal text-sm font-mono uppercase tracking-widest md:w-52 md:min-w-[13rem] shrink-0"
                >
                  {row.label}
                </p>

                <div className="hidden md:block w-px self-stretch bg-white/10 mx-8" />

                <p className="text-white font-mono text-base leading-relaxed">
                  {row.items}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
