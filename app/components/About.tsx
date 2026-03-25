import ScrollReveal from "./ScrollReveal";
import Terminal from "./Terminal";

// Static data — swap values here when details change
const STATS = [
  { label: "Current Role",  value: "IT Support Analyst @ ID.me"              },
  { label: "Location",      value: "McLean, VA  ·  Washington DC Area"        },
  { label: "Education",     value: "MS Computer Science · Texas A&M" },
  { label: "Mission",       value: "Transitioning to IAM Engineer"            },
];


export default function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Section header */}
        <ScrollReveal>
          <p className="section-label mb-2">// ABOUT</p>
          <h2 className="text-3xl font-bold text-white mb-12">
            Who I Am<span className="text-purple">.</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">

          {/* ── Left: Bio + stats ──────────────────────────────── */}
          <div className="flex flex-col gap-6">

            <ScrollReveal delay={100}>
              <p className="text-muted text-base font-mono leading-relaxed">
                <span className="text-teal">$ </span>
                <span className="text-purple">cat</span> about.txt
              </p>
              <p className="mt-3 text-base leading-7 text-white">
                I&apos;m a security-focused technologist working at{" "}
                <span className="text-purple">ID.me</span> — an identity
                verification platform trusted by government agencies and
                enterprises. My daily work sits at the crossroads of{" "}
                <span className="text-teal">identity</span>,{" "}
                <span className="text-teal">access management</span>, and
                user trust.
              </p>
              <p className="mt-3 text-base leading-7 text-white">
                I&apos;m actively building toward a dedicated IAM engineering
                role — earning Okta certifications, exploring AI automation in
                identity workflows, and completing my MS in Computer Science at
                Texas A&amp;M.
              </p>
            </ScrollReveal>

            {/* Stats grid */}
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-1 gap-3 mt-2">
                {STATS.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-base font-mono"
                  >
                    <span className="text-teal whitespace-nowrap">▸ {label}:</span>
                    <span className="text-white">{value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: Status card ─────────────────────────────── */}
          <Terminal />

        </div>
      </div>
    </section>
  );
}
