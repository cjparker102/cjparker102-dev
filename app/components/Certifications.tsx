import ScrollReveal from "./ScrollReveal";

const CERTS = [
  { name: "Okta Certified Professional",      issuer: "Okta",        date: "Dec 2025" },
  { name: "CompTIA Security+",                issuer: "CompTIA",     date: null },
  { name: "CompTIA Network+",                 issuer: "CompTIA",     date: null },
  { name: "CompTIA A+",                       issuer: "CompTIA",     date: null },
  { name: "Secure Infrastructure Specialist", issuer: "CompTIA",     date: null },
  { name: "Certified Encryption Specialist",  issuer: "EC-Council",  date: null },
  { name: "Web Security Specialist",          issuer: "CIW",         date: null },
  { name: "Lean Six Sigma Black Belt",        issuer: "Educate 360", date: "Feb 2025" },
  { name: "Linux Essentials",                 issuer: "LPI",         date: null },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <p className="section-label mb-2">// CERTIFICATIONS</p>
          <h2 className="text-3xl font-bold text-white mb-14">
            Verified Credentials<span className="text-purple">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={i * 70}>
              <div className="cert-card rounded-lg p-5 h-full flex flex-col gap-3">

                {/* Issuer + date */}
                <div className="flex items-center justify-between">
                  <p className="text-teal text-xs font-mono uppercase tracking-widest">
                    {cert.issuer}
                  </p>
                  {cert.date && (
                    <p className="text-muted/50 text-xs font-mono">
                      {cert.date}
                    </p>
                  )}
                </div>

                {/* Divider */}
                <div
                  className="h-px"
                  style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent)" }}
                />

                {/* Cert name */}
                <p className="text-white text-base font-bold leading-snug flex-1">
                  {cert.name}
                </p>

                {/* Verified */}
                <p className="text-purple text-xs font-mono tracking-widest">
                  ✓ CERTIFIED
                </p>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
