"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const PROMPT = "christopher@cjparker102";
const CWD = " ~ % ";
const CMD = "./run-access-review.sh --target=christopher";

// Each line: [delay_ms, type, text]
type Line = { type: string; text: string };

const INIT_LINES: Line[] = [
  { type: "check", text: "[✓] Scanning identity..." },
  { type: "check", text: "[✓] Auditing permissions..." },
  { type: "check", text: "[✓] Generating report..." },
];

const REPORT_HEADER: Line[] = [
  { type: "divider", text: "── ACCESS REVIEW REPORT ──────────────────" },
  { type: "field", text: "  SUBJECT  : christopher@cjparker102.dev" },
  { type: "field", text: "  ROLE     : IAM Engineer (in progress)" },
  { type: "field-pass", text: "  MFA      : ENABLED ✓" },
  { type: "field-pass", text: "  RISK     : LOW ✓" },
];

const PERMISSIONS: Line[] = [
  { type: "label", text: "PERMISSIONS GRANTED:" },
  { type: "perm", text: "  → Okta (Certified Professional) ✓" },
  { type: "perm", text: "  → AWS IAM · Azure AD · Active Directory ✓" },
  { type: "perm", text: "  → SAML 2.0 · OAuth 2.0 · OIDC ✓" },
  { type: "perm", text: "  → Zero Trust · MFA · SSO · PAM ✓" },
  { type: "perm", text: "  → JAMF Pro · MDM ✓" },
  { type: "perm", text: "  → Python · Bash · Terraform · Git ✓" },
  { type: "perm", text: "  → Security+ · Network+ · Encryption ✓" },
  { type: "perm", text: "  → JIRA · Microsoft Purview · Docker · Linux ✓" },
  { type: "perm", text: "  → RBAC · ABAC · Least Privilege ✓" },
  { type: "perm", text: "  → Claude API ✓" },
];

const ANOMALIES: Line[] = [
  { type: "label", text: "ANOMALIES DETECTED:" },
  { type: "warn", text: "  ⚠ Coffee dependency ········ severity: CRITICAL" },
  { type: "warn", text: "  ⚠ Work-life balance ········ STATUS: 404 not found" },
  { type: "fail", text: "  ✗ Imposter Syndrome ········ QUARANTINED ✓" },
];

const FOOTER: Line[] = [
  { type: "divider", text: "──────────────────────────────────────────" },
  { type: "status", text: "● review complete · no action required · 1.8s" },
];

// Flattened sequence with per-line delay
const SEQUENCE = [
  ...INIT_LINES.map((l) => ({ ...l, delay: 250 })),
  { type: "progress", text: "", delay: 0 }, // progress bar handled separately
  { type: "blank", text: "", delay: 200 },
  ...REPORT_HEADER.map((l) => ({ ...l, delay: 100 })),
  { type: "blank", text: "", delay: 150 },
  ...PERMISSIONS.map((l, i) => ({ ...l, delay: i === 0 ? 200 : 80 })),
  { type: "blank", text: "", delay: 200 },
  ...ANOMALIES.map((l, i) => ({ ...l, delay: i === 0 ? 200 : 350 })),
  { type: "blank", text: "", delay: 150 },
  ...FOOTER.map((l) => ({ ...l, delay: 200 })),
];

function LineContent({ type, text }: { type: string; text: string }) {
  switch (type) {
    case "check":
      return (
        <p>
          <span className="text-green-400">{text.slice(0, 3)}</span>
          <span className="text-muted">{text.slice(3)}</span>
        </p>
      );
    case "divider":
      return <p className="text-muted">{text}</p>;
    case "field":
      return <p className="text-muted">{text}</p>;
    case "field-pass":
      return (
        <p>
          <span className="text-muted">{text.replace(" ✓", "")}</span>
          <span className="text-green-400"> ✓</span>
        </p>
      );
    case "label":
      return <p className="text-white">{text}</p>;
    case "perm":
      return (
        <p>
          <span className="text-purple">{text.replace(" ✓", "")}</span>
          <span className="text-green-400"> ✓</span>
        </p>
      );
    case "warn": {
      const parts = text.split("········");
      return (
        <p>
          <span className="text-yellow-400">{parts[0].trim().slice(0, 1)}</span>
          <span className="text-muted">{parts[0].trim().slice(1)} ········ </span>
          <span className="text-yellow-400">{parts[1]?.trim()}</span>
        </p>
      );
    }
    case "fail": {
      const parts = text.split("········");
      return (
        <p>
          <span className="text-red-400">{parts[0].trim().slice(0, 1)}</span>
          <span className="text-muted">{parts[0].trim().slice(1)} ········ </span>
          <span className="text-green-400">{parts[1]?.trim()}</span>
        </p>
      );
    }
    case "status":
      return (
        <p className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0" />
          <span className="text-muted">
            review complete · no action required ·{" "}
            <span className="text-white">1.8s</span>
          </span>
        </p>
      );
    case "blank":
      return <p className="h-1" />;
    default:
      return <p className="text-muted">{text}</p>;
  }
}

export default function SkillsTerminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const generation = useRef(0);
  const tmrs = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [typedCmd, setTypedCmd] = useState("");
  const [phase, setPhase] = useState<"idle" | "typing" | "output" | "done">("idle");
  const [visibleLines, setVisibleLines] = useState<typeof SEQUENCE>([]);
  const [progress, setProgress] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);

  const clear = useCallback(() => {
    tmrs.current.forEach(clearTimeout);
    tmrs.current = [];
  }, []);

  const wait = useCallback(
    (ms: number, gen: number) =>
      new Promise<boolean>((resolve) => {
        tmrs.current.push(setTimeout(() => resolve(generation.current === gen), ms));
      }),
    [],
  );

  const animate = useCallback(async () => {
    const gen = ++generation.current;
    clear();
    setTypedCmd("");
    setPhase("idle");
    setVisibleLines([]);
    setProgress(0);
    setShowPrompt(false);

    if (!(await wait(600, gen))) return;

    // Type command
    setPhase("typing");
    if (!(await wait(300, gen))) return;

    for (let i = 1; i <= CMD.length; i++) {
      setTypedCmd(CMD.slice(0, i));
      if (!(await wait(50, gen))) return;
    }
    if (!(await wait(400, gen))) return;

    // Submit
    setPhase("output");
    if (!(await wait(300, gen))) return;

    // Output lines
    for (const line of SEQUENCE) {
      if (line.type === "progress") {
        // Animate progress bar
        for (let i = 1; i <= 10; i++) {
          setProgress(i);
          if (!(await wait(80, gen))) return;
        }
        if (!(await wait(200, gen))) return;
        continue;
      }

      setVisibleLines((prev) => [...prev, line]);
      if (!(await wait(line.delay, gen))) return;
    }

    // Final prompt
    if (!(await wait(300, gen))) return;
    setShowPrompt(true);
    setPhase("done");
  }, [clear, wait]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          generation.current++;
          clear();
          setPhase("idle");
          setTypedCmd("");
          setVisibleLines([]);
          setProgress(0);
          setShowPrompt(false);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clear();
    };
  }, [animate, clear]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [visibleLines, progress, showPrompt, typedCmd]);

  const bar = "\u25A0".repeat(progress) + "\u00A0".repeat(10 - progress);

  return (
    <div
      ref={containerRef}
      className="rounded-[10px] overflow-hidden flex flex-col max-w-3xl mx-auto"
      style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)" }}
    >
      {/* macOS title bar */}
      <div className="flex items-center h-9 px-5" style={{ background: "#2d2d2d" }}>
        <div className="flex items-center gap-[7px]">
          <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#FFBD2E" }} />
          <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <span className="flex-1 text-center text-muted/60 text-sm font-mono -ml-[60px]">
          access-review.sh — zsh
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={bodyRef}
        className="px-4 py-4 font-mono text-sm flex flex-col gap-0.5 overflow-y-auto"
        style={{ background: "#1a1a1a", minHeight: "360px" }}
      >
        {/* Typing phase */}
        {phase === "typing" && (
          <p>
            <span className="text-green-400">{PROMPT}</span>
            <span className="text-muted">{CWD}</span>
            <span className="text-white">{typedCmd}</span>
            <span className="cursor-blink" />
          </p>
        )}

        {/* After submit */}
        {(phase === "output" || phase === "done") && (
          <p>
            <span className="text-green-400">{PROMPT}</span>
            <span className="text-muted">{CWD}</span>
            <span className="text-white">{CMD}</span>
          </p>
        )}

        {(phase === "output" || phase === "done") && <p className="h-1" />}

        {/* Output lines */}
        {visibleLines.map((line, i) => (
          <LineContent key={i} type={line.type} text={line.text} />
        ))}

        {/* Progress bar (shown during/after fill) */}
        {(phase === "output" || phase === "done") && progress > 0 && visibleLines.length <= INIT_LINES.length && (
          <p className="mt-1">
            <span className="text-teal">[{bar}]</span>
            <span className="text-muted"> {progress * 10}%</span>
          </p>
        )}

        {/* Final prompt */}
        {showPrompt && (
          <>
            <p className="h-1" />
            <p>
              <span className="text-green-400">{PROMPT}</span>
              <span className="text-muted">{CWD}</span>
              <span className="cursor-blink" />
            </p>
          </>
        )}
      </div>
    </div>
  );
}
