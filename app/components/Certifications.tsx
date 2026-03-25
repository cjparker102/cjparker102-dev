import ScrollReveal from "./ScrollReveal";

const CERTS = [
  { issuer: "Okta",        certs: "Okta Certified Professional" },
  { issuer: "CompTIA",     certs: "Security+ · Network+ · A+ · Secure Infrastructure Specialist" },
  { issuer: "EC-Council",  certs: "Certified Encryption Specialist" },
  { issuer: "CIW",         certs: "Web Security Specialist" },
  { issuer: "Educate 360", certs: "Lean Six Sigma Black Belt" },
  { issuer: "LPI",         certs: "Linux Essentials" },
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

        <div className="flex flex-col">
          {CERTS.map((row, i) => (
            <ScrollReveal key={row.issuer} delay={i * 80}>
              <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-0 py-6 px-4 -mx-4 rounded-sm transition-colors duration-200 hover:bg-purple/[0.06]">
                <p className="text-teal text-base font-bold font-mono uppercase tracking-widest md:w-52 md:min-w-[13rem] shrink-0">
                  {row.issuer}
                </p>

                <div className="hidden md:block w-0.5 self-stretch mx-8" style={{ background: "#4A9EBF" }} />

                <p className="text-white font-mono text-base leading-loose">
                  {row.certs} <span className="text-purple">✓</span>
                </p>
              </div>
              <div
                className="h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0.15) 80%, transparent)" }}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
