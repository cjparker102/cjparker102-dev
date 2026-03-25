import ScrollReveal from "./ScrollReveal";

const CERTS = [
  {
    name: "Okta Certified Professional",
    issuer: "Okta",
    date: "Dec 2025",
    accent: "teal" as const,
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    date: null,
    accent: "purple" as const,
  },
  {
    name: "CompTIA Network+",
    issuer: "CompTIA",
    date: null,
    accent: "purple" as const,
  },
  {
    name: "CompTIA A+",
    issuer: "CompTIA",
    date: null,
    accent: "purple" as const,
  },
  {
    name: "Secure Infrastructure Specialist",
    issuer: "CompTIA",
    date: null,
    accent: "purple" as const,
  },
  {
    name: "Certified Encryption Specialist",
    issuer: "EC-Council",
    date: null,
    accent: "teal" as const,
  },
  {
    name: "Web Security Specialist",
    issuer: "CIW",
    date: null,
    accent: "teal" as const,
  },
  {
    name: "Lean Six Sigma Black Belt",
    issuer: "Educate 360",
    date: "Feb 2025",
    accent: "purple" as const,
  },
  {
    name: "Linux Essentials",
    issuer: "LPI",
    date: null,
    accent: "teal" as const,
  },
] as const;

const ACCENT = {
  purple: {
    card:   "neon-card",
    label:  "text-purple",
    badge:  "border border-purple/30 text-purple/80 bg-purple/5",
    rule:   "border-purple/15",
  },
  teal: {
    card:   "neon-card-teal",
    label:  "text-teal",
    badge:  "border border-teal/30 text-teal/80 bg-teal/5",
    rule:   "border-teal/15",
  },
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <p className="section-label mb-2">// CERTIFICATIONS</p>
          <h2 className="text-3xl font-bold text-white mb-14">
            Verified Credentials<span className="text-purple">.</span>
          </h2>
        </ScrollReveal>

        {/* 3-col on lg, 2-col on md, 1-col on mobile */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((cert, i) => {
            const a = ACCENT[cert.accent];
            return (
              <ScrollReveal key={cert.name} delay={i * 70}>
                <div
                  className={`
                    ${a.card} scanline-card
                    bg-surface rounded-sm p-5 h-full
                    flex flex-col gap-3
                  `}
                >
                  {/* Issuer badge + date */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`
                        ${a.badge}
                        text-[10px] font-mono tracking-wider
                        px-2 py-0.5 rounded-sm
                      `}
                    >
                      {cert.issuer}
                    </span>
                    {cert.date && (
                      <span className="text-muted/60 text-[10px] font-mono">
                        {cert.date}
                      </span>
                    )}
                  </div>

                  {/* Divider */}
                  <div className={`border-t ${a.rule}`} />

                  {/* Cert name */}
                  <p className="text-white text-sm font-bold font-mono leading-snug flex-1">
                    {cert.name}
                  </p>

                  {/* Footer tick */}
                  <p className={`${a.label} text-[10px] font-mono tracking-widest`}>
                    ✓ CERTIFIED
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
