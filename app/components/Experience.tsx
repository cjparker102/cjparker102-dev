import ScrollReveal from "./ScrollReveal";

const EXPERIENCE = [
  {
    company:   "ID.me",
    role:      "IT Support Analyst",
    dates:     "2025 – Present",
    location:  "McLean, VA",
    bullets: [
      "Support identity verification workflows for government and enterprise clients, troubleshooting SSO, MFA, and Okta integration issues.",
      "Collaborate with IAM engineers to investigate access anomalies and improve helpdesk escalation paths for identity-related incidents.",
    ],
  },
  {
    company:   "U.S. Small Business Administration",
    role:      "IT Support Intern",
    dates:     "2024",
    location:  "Washington, DC",
    bullets: [
      "Provided technical support for federal employees across multiple DC offices, resolving hardware, software, and network issues.",
      "Assisted with Active Directory account lifecycle management and access provisioning under federal IT security policies.",
    ],
  },
  {
    company:   "Apple",
    role:      "Technical Support Engineer",
    dates:     "2018 – 2021",
    location:  "Austin, TX",
    bullets: [
      "Resolved complex hardware and software issues for consumer and enterprise customers, consistently maintaining 95 %+ satisfaction scores.",
      "Mentored junior technicians and contributed to internal knowledge-base articles adopted across multiple support teams.",
    ],
  },
  {
    company:   "IBM",
    role:      "Deskside Support Technician",
    dates:     "2018",
    location:  "Mountain View, CA",
    bullets: [
      "Delivered on-site endpoint support for enterprise clients in Silicon Valley, managing hardware deployments and asset lifecycle tracking.",
      "Coordinated with infrastructure teams to streamline imaging and provisioning workflows, reducing deployment time by ~30 %.",
    ],
  },
  {
    company:   "SCL Health",
    role:      "IT Support Specialist",
    dates:     "2017 – 2018",
    location:  "Denver, CO",
    bullets: [
      "Supported clinical and administrative IT infrastructure across multiple hospital locations in a HIPAA-regulated environment.",
      "Managed EHR system access provisioning and account management, ensuring compliance with health-sector security standards.",
    ],
  },
  {
    company:   "Geek Squad",
    role:      "IT Advanced Repair Agent",
    dates:     "2017",
    location:  "Denver, CO",
    bullets: [
      "Diagnosed and repaired hardware and software failures across a wide range of consumer and small-business devices.",
      "Delivered technical consultations that improved customer retention and increased repeat-service bookings.",
    ],
  },
  {
    company:   "Amazon",
    role:      "Problem Solver / ICQA",
    dates:     "2013 – 2017",
    location:  "Breinigsville, PA",
    bullets: [
      "Led inventory control and quality assurance processes inside a high-volume fulfillment center, owning defect-rate reduction initiatives.",
      "Identified and resolved recurring workflow bottlenecks, contributing to measurable improvements in pick-and-pack throughput.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <p className="section-label mb-2">// EXPERIENCE</p>
          <h2 className="text-3xl font-bold text-white mb-16">
            Where I&apos;ve Worked<span className="text-purple">.</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical spine */}
          <div
            className="absolute left-3 top-2 bottom-2 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #7B42BC 8%, #7B42BC 92%, transparent)",
            }}
          />

          <div className="flex flex-col gap-12">
            {EXPERIENCE.map((job, i) => (
              <ScrollReveal key={job.company + job.dates} delay={i * 80}>
                <div className="flex gap-8">

                  {/* Timeline dot */}
                  <div className="flex-shrink-0 flex flex-col items-center" style={{ width: "1.75rem" }}>
                    <span
                      className="mt-1 w-3.5 h-3.5 rounded-full bg-surface border-2 border-purple animate-glow-pulse flex-shrink-0"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  </div>

                  {/* Card */}
                  <div className="neon-card scanline-card bg-surface rounded-sm p-5 flex-1 min-w-0">

                    {/* Header row */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <span className="text-teal text-xs font-mono">[</span>
                        <span className="text-purple font-bold text-sm font-mono">
                          {job.company}
                        </span>
                        <span className="text-teal text-xs font-mono">]</span>
                        <h3 className="text-white font-bold text-base mt-1">
                          {job.role}
                        </h3>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="text-teal text-xs font-mono">{job.dates}</p>
                        <p className="text-muted text-xs font-mono mt-0.5">
                          {job.location}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-purple/15 mb-3" />

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                          <span className="text-purple mt-0.5 flex-shrink-0">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
