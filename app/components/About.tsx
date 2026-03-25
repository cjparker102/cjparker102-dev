import ScrollReveal from "./ScrollReveal";

// Static data — swap values here when details change
const STATS = [
  { label: "Current Role",  value: "IT Support Analyst @ ID.me"              },
  { label: "Location",      value: "McLean, VA  ·  Washington DC Area"        },
  { label: "Education",     value: "MS Computer Science · Texas A&M" },
  { label: "Mission",       value: "Transitioning to IAM Engineer"            },
];

const STATUS_LINES = [
  { key: "role",     text: "IT Support Analyst @ ID.me"                       },
  { key: "focus",    text: "Building AI-powered IAM tools"                    },
  { key: "studying", text: "MS CS · Texas A&M"                                },
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
          <ScrollReveal delay={300}>
            <div
              className="rounded-[10px] overflow-hidden h-full flex flex-col"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)" }}
            >

              {/* ── macOS title bar ─────────────────────────── */}
              <div
                className="flex items-center px-4 py-3"
                style={{ background: "#2d2d2d" }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <span className="flex-1 text-center text-muted/60 text-xs font-mono -ml-[52px]">
                  christopher@cjparker102 — zsh
                </span>
              </div>

              {/* ── Terminal body ────────────────────────────── */}
              <div
                className="flex-1 px-5 py-5 font-mono flex flex-col"
                style={{ background: "#1a1a1a" }}
              >

                {/* Command line */}
                <p className="text-base mb-4">
                  <span className="text-teal">$ </span>
                  <span className="text-purple">cat</span>
                  <span className="text-white"> status.txt</span>
                </p>

                {/* Status lines */}
                <div className="flex flex-col gap-3">
                  {STATUS_LINES.map(({ key, text }) => (
                    <div key={key} className="flex items-start gap-3 text-base">
                      <span className="text-purple mt-0.5">→</span>
                      <span className="text-white leading-relaxed">{text}</span>
                    </div>
                  ))}
                </div>

                {/* Currently active badge */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3">
                  <span
                    className="inline-block w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0"
                  />
                  <span className="text-xs text-muted">
                    status:{" "}
                    <span className="text-green-400">currently active</span>
                  </span>
                </div>

                {/* Blinking cursor */}
                <p className="mt-3 text-sm text-muted cursor-blink" />
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
