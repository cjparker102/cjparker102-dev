import ScrollReveal from "./ScrollReveal";

// Static data — swap values here when details change
const STATS = [
  { label: "Current Role",  value: "IT Support Analyst @ ID.me"              },
  { label: "Location",      value: "McLean, VA  ·  Washington DC Area"        },
  { label: "Education",     value: "MS Computer Science · Texas A&M (2025–26)" },
  { label: "Mission",       value: "Transitioning to IAM Engineer"            },
];

const STATUS_LINES = [
  { key: "role",     text: "IT Support Analyst @ ID.me"                       },
  { key: "focus",    text: "Building AI-powered IAM tools"                    },
  { key: "studying", text: "MS CS · Texas A&M Commerce"                       },
  { key: "goal",     text: "Full-time IAM / Identity Engineer by 2026"        },
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
              <p className="text-muted text-sm font-mono leading-relaxed">
                <span className="text-teal">$ </span>
                <span className="text-purple">cat</span> about.txt
              </p>
              <p className="mt-3 text-sm leading-7 text-[#c9d1d9]">
                I&apos;m a security-focused technologist working at{" "}
                <span className="text-purple">ID.me</span> — an identity
                verification platform trusted by government agencies and
                enterprises. My daily work sits at the crossroads of{" "}
                <span className="text-teal">identity</span>,{" "}
                <span className="text-teal">access management</span>, and
                user trust.
              </p>
              <p className="mt-3 text-sm leading-7 text-[#c9d1d9]">
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
                    className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm font-mono"
                  >
                    <span className="text-teal whitespace-nowrap">▸ {label}:</span>
                    <span className="text-[#c9d1d9]">{value}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* ── Right: Status card ─────────────────────────────── */}
          <ScrollReveal delay={300}>
            <div className="neon-card bg-surface rounded-sm p-6 h-full">

              {/* Terminal title bar */}
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-purple/20">
                <span className="w-3 h-3 rounded-full bg-red-500/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-muted text-xs font-mono">
                  status.txt
                </span>
              </div>

              {/* Command line */}
              <p className="text-sm font-mono mb-4">
                <span className="text-teal">$ </span>
                <span className="text-purple">cat</span>
                <span className="text-[#c9d1d9]"> status.txt</span>
              </p>

              {/* Status lines */}
              <div className="flex flex-col gap-3">
                {STATUS_LINES.map(({ key, text }) => (
                  <div key={key} className="flex items-start gap-3 text-sm font-mono">
                    <span className="text-purple mt-0.5">→</span>
                    <span className="text-[#c9d1d9] leading-relaxed">{text}</span>
                  </div>
                ))}
              </div>

              {/* Currently active badge */}
              <div className="mt-6 pt-4 border-t border-purple/20 flex items-center gap-3">
                {/* Pulsing green dot */}
                <span
                  className="inline-block w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0"
                />
                <span className="text-xs font-mono text-muted">
                  status:{" "}
                  <span className="text-green-400">currently active</span>
                </span>
              </div>

              {/* Blinking cursor */}
              <p className="mt-3 text-sm font-mono text-muted cursor-blink" />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
