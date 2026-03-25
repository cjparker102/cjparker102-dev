import ScrollReveal from "./ScrollReveal";

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
                className="flex-1 px-4 py-4 font-mono text-sm flex flex-col gap-4"
                style={{ background: "#1a1a1a" }}
              >

                {/* whoami */}
                <div>
                  <p>
                    <span className="text-green-400">christopher@cjparker102</span>
                    <span className="text-muted"> ~ % </span>
                    <span className="text-white">whoami</span>
                  </p>
                  <p className="text-muted">christopher</p>
                </div>

                {/* cat roles.txt */}
                <div>
                  <p>
                    <span className="text-green-400">christopher@cjparker102</span>
                    <span className="text-muted"> ~ % </span>
                    <span className="text-white">cat roles.txt</span>
                  </p>
                  <p className="text-white">→ IT Support Analyst @ ID.me</p>
                  <p className="text-white">→ Okta Certified Professional</p>
                  <p className="text-white">→ MS CS · Texas A&amp;M</p>
                </div>

                {/* ls projects/ */}
                <div>
                  <p>
                    <span className="text-green-400">christopher@cjparker102</span>
                    <span className="text-muted"> ~ % </span>
                    <span className="text-white">ls projects/</span>
                  </p>
                  <p className="text-purple">okta-access-reviewer/</p>
                  <p className="text-purple">okta-chaos-generator/</p>
                  <p className="text-purple">it-command-dashboard/</p>
                  <p className="text-purple">iam-offboarding-assistant/</p>
                </div>

                {/* git status */}
                <div>
                  <p>
                    <span className="text-green-400">christopher@cjparker102</span>
                    <span className="text-muted"> ~ % </span>
                    <span className="text-white">git status</span>
                  </p>
                  <p className="text-muted">On branch main</p>
                  <p className="text-muted">nothing to commit, working tree clean</p>
                </div>

                {/* Status + active prompt */}
                <div>
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0" />
                    <span className="text-muted">
                      status: <span className="text-green-400">currently active</span>
                    </span>
                  </p>
                  <p className="mt-2">
                    <span className="text-green-400">christopher@cjparker102</span>
                    <span className="text-muted"> ~ % </span>
                    <span className="text-muted/30 cursor-blink" />
                  </p>
                </div>

              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
