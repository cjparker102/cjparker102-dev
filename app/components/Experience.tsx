import ScrollReveal from "./ScrollReveal";

const EXPERIENCE = [
  {
    company:   "ID.me",
    role:      "IT Support Analyst",
    dates:     "2025 – Present",
    location:  "McLean, VA",
    bullets: [
      "Support identity verification workflows for government and enterprise clients, troubleshooting SSO, MFA, and Okta integration issues. Collaborate with IAM engineers to investigate access anomalies and improve helpdesk escalation paths.",
    ],
  },
  {
    company:   "U.S. SBA",
    role:      "IT Support Intern",
    dates:     "2024",
    location:  "Washington, DC",
    bullets: [
      "Automated FOIA request processing using Python and Microsoft Purview APIs — reducing processing time by 70% across 500+ monthly requests. Trained 10 team members on Power Automate and SharePoint, cutting onboarding time to 5 days.",
    ],
  },
  {
    company:   "Apple",
    role:      "Technical Support Engineer",
    dates:     "2018 – 2021",
    location:  "Austin, TX",
    bullets: [
      "Managed XML/SQL metadata pipelines for Apple TV+ achieving zero delivery errors across global platforms. Developed Python scripts automating 20+ daily support checks, saving resolution time by 60%. Onboarded 1,000+ titles at launch.",
    ],
  },
  {
    company:   "IBM",
    role:      "Deskside Support Technician",
    dates:     "2018",
    location:  "Mountain View, CA",
    bullets: [
      "Managed Active Directory for 60,000+ employees across US and Shanghai offices. Created Bash automation scripts cutting system maintenance time by 40%.",
    ],
  },
  {
    company:   "SCL Health",
    role:      "IT Support Specialist",
    dates:     "2017 – 2018",
    location:  "Denver, CO",
    bullets: [
      "Supported clinical IT infrastructure across 33 hospitals in a HIPAA-regulated environment. Managed EHR system access provisioning under federal health security standards.",
    ],
  },
  {
    company:   "Geek Squad",
    role:      "IT Advanced Repair Agent",
    dates:     "2017",
    location:  "Denver, CO",
    bullets: [
      "Diagnosed and repaired hardware and software failures across consumer and small-business devices.",
    ],
  },
  {
    company:   "Amazon",
    role:      "Problem Solver / ICQA",
    dates:     "2013 – 2017",
    location:  "Breinigsville, PA",
    bullets: [
      "Led inventory control and quality assurance in a high-volume fulfillment center. Identified workflow bottlenecks contributing to measurable throughput improvements.",
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

          <div className="flex flex-col gap-3 md:gap-4">
            {EXPERIENCE.map((job, i) => {
              const onRight = i % 2 === 1;
              return (
                <ScrollReveal key={job.company + job.dates} delay={i * 60}>
                  <div className="relative md:flex">

                    {/* Left half */}
                    <div className={`md:w-1/2 ${onRight ? "hidden md:block md:pr-10" : "md:pr-10"}`}>
                      {!onRight && (
                        <div>
                          <h3 style={{ textAlign: "right" }} className="text-teal text-2xl font-bold mb-1">{job.company}</h3>
                          <p style={{ textAlign: "right" }} className="text-white text-lg font-medium mb-1">{job.role}</p>
                          <p style={{ textAlign: "right" }} className="text-muted text-sm font-mono mb-3">{job.dates} · {job.location}</p>
                          {job.bullets.map((b, j) => (
                            <p style={{ textAlign: "right" }} key={j} className="text-muted text-base leading-relaxed mb-1">{b}</p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-teal" />

                    {/* Right half */}
                    <div className={`md:w-1/2 ${onRight ? "md:pl-10" : "hidden md:block md:pl-10"}`}>
                      {onRight && (
                        <div>
                          <h3 style={{ textAlign: "left" }} className="text-teal text-2xl font-bold mb-1">{job.company}</h3>
                          <p style={{ textAlign: "left" }} className="text-white text-lg font-medium mb-1">{job.role}</p>
                          <p style={{ textAlign: "left" }} className="text-muted text-sm font-mono mb-3">{job.dates} · {job.location}</p>
                          {job.bullets.map((b, j) => (
                            <p style={{ textAlign: "left" }} key={j} className="text-muted text-base leading-relaxed mb-1">{b}</p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Mobile fallback */}
                    <div className="md:hidden">
                      <h3 className="text-teal text-2xl font-bold mb-1">{job.company}</h3>
                      <p className="text-white text-lg font-medium mb-1">{job.role}</p>
                      <p className="text-muted text-sm font-mono mb-3">{job.dates} · {job.location}</p>
                      {job.bullets.map((b, j) => (
                        <p key={j} className="text-muted text-base leading-relaxed mb-1">{b}</p>
                      ))}
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
