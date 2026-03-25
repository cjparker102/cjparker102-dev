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
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <p className="section-label mb-2">// EXPERIENCE</p>
          <h2 className="text-3xl font-bold text-white mb-20">
            Where I&apos;ve Worked<span className="text-purple">.</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">

          {/* Center spine — hidden on mobile, visible md+ */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #4A9EBF 4%, #4A9EBF 96%, transparent)",
            }}
          />

          <div className="flex flex-col gap-20 md:gap-24">
            {EXPERIENCE.map((job, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={job.company + job.dates} delay={i * 60}>
                  <div className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-10 items-start">

                    {/* Left content area */}
                    <div className={`${isLeft ? "md:text-right" : "md:order-3"}`}>
                      {isLeft && (
                        <EntryContent job={job} align="right" />
                      )}
                      {!isLeft && <div className="hidden md:block" />}
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex items-start justify-center pt-2">
                      <span className="w-3 h-3 rounded-full bg-purple flex-shrink-0" />
                    </div>

                    {/* Right content area */}
                    <div className={`${isLeft ? "md:order-3" : ""}`}>
                      {!isLeft && (
                        <EntryContent job={job} align="left" />
                      )}
                      {isLeft && <div className="hidden md:block" />}
                    </div>

                    {/* Mobile-only: no grid, just render content */}
                    <div className="md:hidden">
                      <EntryContent job={job} align="left" />
                    </div>

                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

function EntryContent({
  job,
  align,
}: {
  job: (typeof EXPERIENCE)[number];
  align: "left" | "right";
}) {
  const textAlign = align === "right" ? "md:text-right" : "";
  const bulletAlign = align === "right" ? "md:justify-end" : "";

  return (
    <div className={textAlign}>
      <h3 className="text-teal text-2xl font-bold mb-1">
        {job.company}
      </h3>
      <p className="text-white text-lg font-medium mb-2">
        {job.role}
      </p>
      <p className="text-muted text-sm font-mono mb-5">
        {job.dates} · {job.location}
      </p>
      <ul className="flex flex-col gap-2.5">
        {job.bullets.map((b, j) => (
          <li
            key={j}
            className={`flex items-start gap-2.5 text-base leading-relaxed ${bulletAlign}`}
          >
            <span className="text-teal mt-1 flex-shrink-0 text-sm">▸</span>
            <span className="text-muted">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
