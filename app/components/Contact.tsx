import ScrollReveal from "./ScrollReveal";

const LINKS = [
  {
    label: "email",
    display: "iam@cjparker102.dev",
    href: "mailto:iam@cjparker102.dev",
    accent: "purple" as const,
  },
  {
    label: "github",
    display: "github.com/cjparker102",
    href: "https://github.com/cjparker102",
    accent: "teal" as const,
  },
  {
    label: "linkedin",
    display: "linkedin.com/in/cjparker102",
    href: "https://linkedin.com/in/cjparker102",
    accent: "purple" as const,
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <p className="section-label mb-2">// CONTACT</p>
          <h2 className="text-3xl font-bold text-white mb-14">
            Let&apos;s Connect<span className="text-purple">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* Terminal contact card */}
          <ScrollReveal>
            <div className="neon-card bg-surface rounded-sm p-6 font-mono">

              {/* Terminal chrome */}
              <div className="flex items-center gap-1.5 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 text-muted/40 text-[10px] tracking-widest">
                  contact.sh
                </span>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-3">
                {LINKS.map((item) => (
                  <div key={item.label} className="flex items-center gap-2 group">
                    <span className="text-muted/50 text-xs select-none">$</span>
                    <span className="text-muted text-xs w-16 shrink-0">{item.label}</span>
                    <a
                      href={item.href}
                      target={item.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className={`
                        text-xs transition-colors duration-200
                        ${item.accent === "purple"
                          ? "text-purple/80 hover:text-white"
                          : "text-teal/80   hover:text-white"}
                      `}
                    >
                      <span className="opacity-50 mr-1">▸</span>
                      {item.display}
                    </a>
                  </div>
                ))}
              </div>

              {/* Prompt line */}
              <div className="mt-5 flex items-center gap-2">
                <span className="text-muted/50 text-xs select-none">$</span>
                <span className="text-muted/30 text-xs cursor-blink" />
              </div>
            </div>
          </ScrollReveal>

          {/* Location + status panel */}
          <ScrollReveal delay={120}>
            <div className="neon-card-teal bg-surface rounded-sm p-6 flex flex-col gap-5">

              <div>
                <p className="text-teal font-mono text-[10px] tracking-widest mb-2">
                  // LOCATION
                </p>
                <p className="text-white font-bold text-sm">McLean, VA</p>
                <p className="text-muted text-xs mt-0.5">Washington DC Area</p>
              </div>

              <div className="border-t border-teal/15" />

              <div>
                <p className="text-teal font-mono text-[10px] tracking-widest mb-2">
                  // STATUS
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-dot shrink-0" />
                  <p className="text-white text-xs font-mono">Open to opportunities</p>
                </div>
              </div>

              <div className="border-t border-teal/15" />

              <div>
                <p className="text-teal font-mono text-[10px] tracking-widest mb-2">
                  // FOCUS
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {["IAM", "Security Engineering", "Identity Automation"].map((tag) => (
                    <span
                      key={tag}
                      className="border border-teal/30 text-teal/70 bg-teal/5 text-[10px] font-mono px-2 py-0.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* Footer line */}
        <ScrollReveal delay={200}>
          <div className="mt-20 pt-8 border-t border-white/5 flex items-center justify-between">
            <p className="text-muted/40 text-[10px] font-mono">
              cjparker102.dev — {new Date().getFullYear()}
            </p>
            <p className="text-muted/40 text-[10px] font-mono">
              built with Next.js + Tailwind
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
