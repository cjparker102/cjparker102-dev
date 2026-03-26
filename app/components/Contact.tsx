import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* Section label */}
        <ScrollReveal>
          <p className="section-label mb-6 text-center">// LET&apos;S CONNECT</p>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={100}>
          <p className="text-white text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed mb-14">
            Ready to talk IAM, identity automation,
            <br className="hidden sm:block" />
            or AI-powered security tools?
          </p>
        </ScrollReveal>

        {/* Email CTA */}
        <ScrollReveal delay={200}>
          <a
            href="mailto:iam@cjparker102.dev"
            className="email-cta inline-block font-mono text-2xl sm:text-3xl lg:text-4xl tracking-wide mb-16 transition-all duration-300"
          >
            <span className="bracket text-teal">[</span>
            <span className="addr text-white/80"> iam@cjparker102.dev </span>
            <span className="bracket text-teal">]</span>
          </a>
        </ScrollReveal>

        {/* Links row */}
        <ScrollReveal delay={300}>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 font-mono text-sm mb-10">
            <a
              href="https://github.com/cjparker102"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple transition-colors duration-200 hover:text-white"
            >
              github.com/cjparker102
            </a>
            <span className="text-muted/30">·</span>
            <a
              href="https://linkedin.com/in/cjparker102"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple transition-colors duration-200 hover:text-white"
            >
              linkedin.com/in/cjparker102
            </a>
            <span className="text-muted/30">·</span>
            <span className="text-muted">McLean, VA</span>
          </div>
        </ScrollReveal>

        {/* Status */}
        <ScrollReveal delay={400}>
          <div className="flex items-center justify-center gap-2 mb-20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0" />
            <span className="text-muted text-sm font-mono">Open to opportunities</span>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={500}>
          <div
            className="h-px mb-8"
            style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent)" }}
          />
          <div className="flex items-center justify-between">
            <p className="text-muted/40 text-xs font-mono">
              cjparker102.dev — {new Date().getFullYear()}
            </p>
            <p className="text-muted/40 text-xs font-mono">
              built with Next.js + Tailwind
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
