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
    <section id="skills" className="relative py-20 px-6">
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
                className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-0 py-6 px-4 -mx-4 rounded-sm transition-colors duration-200 hover:bg-purple/[0.06]"
              >
                <p
                  className="text-teal text-base font-bold font-mono uppercase tracking-widest md:w-52 md:min-w-[13rem] shrink-0"
                >
                  {row.label}
                </p>

                <div className="hidden md:block w-0.5 self-stretch mx-8" style={{ background: "#4A9EBF" }} />

                <p className="text-white font-mono text-base leading-loose">
                  {row.items}
                </p>
              </div>
              <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
