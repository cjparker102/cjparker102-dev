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
                className="flex items-center h-9 px-5"
                style={{ background: "#2d2d2d" }}
              >
                <div className="flex items-center gap-[7px]">
                  <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#FF5F57" }} />
                  <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#FFBD2E" }} />
                  <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#28C840" }} />
                </div>
                <span className="flex-1 text-center text-muted/60 text-sm font-mono -ml-[60px]">
                  okta-access-reviewer — python3
                </span>
              </div>

              {/* ── Terminal body ────────────────────────────── */}
              <div
                className="flex-1 px-4 py-4 font-mono text-sm flex flex-col gap-4"
                style={{ background: "#1a1a1a" }}
              >

                {/* Command */}
                <p>
                  <span className="text-green-400">christopher@cjparker102</span>
                  <span className="text-muted"> ~/projects/okta-access-reviewer % </span>
                  <span className="text-white">python3 main.py</span>
                </p>

                {/* Init checks */}
                <div>
                  <p><span className="text-green-400">[✓]</span> <span className="text-muted">Connecting to Okta API...</span></p>
                  <p><span className="text-green-400">[✓]</span> <span className="text-muted">Fetching users...</span> <span className="text-white">247 found</span></p>
                  <p><span className="text-green-400">[✓]</span> <span className="text-muted">Analyzing access patterns...</span></p>
                </div>

                {/* Progress bar */}
                <p>
                  <span className="text-teal">[■■■■■■■■■■]</span>
                  <span className="text-muted"> 100%</span>
                </p>

                {/* Scan results box */}
                <div>
                  <p className="text-muted">── <span className="text-white">SCAN RESULTS</span> ──────────────────</p>
                  <p><span className="text-yellow-400">⚠</span>  <span className="text-muted">12 inactive users (90+ days)</span></p>
                  <p><span className="text-yellow-400">⚠</span>  <span className="text-muted">3 over-provisioned accounts</span></p>
                  <p><span className="text-yellow-400">⚠</span>  <span className="text-muted">1 suspicious admin escalation</span></p>
                  <p><span className="text-green-400">✓</span>  <span className="text-muted">MFA enforcement: <span className="text-green-400">enabled</span></span></p>
                  <p><span className="text-green-400">✓</span>  <span className="text-muted">Zero Trust policies: <span className="text-green-400">compliant</span></span></p>
                  <p className="text-muted">──────────────────────────────────</p>
                </div>

                {/* Report saved */}
                <div>
                  <p><span className="text-purple">[!]</span> <span className="text-muted">Report saved →</span> <span className="text-white">access-review.md</span></p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0" />
                    <span className="text-muted">scan complete · <span className="text-white">2.3s</span></span>
                  </p>
                </div>

                {/* Fresh prompt */}
                <p className="mt-1">
                  <span className="text-green-400">christopher@cjparker102</span>
                  <span className="text-muted"> ~/projects % </span>
                  <span className="text-muted/30 cursor-blink" />
                </p>

              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
