"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const PROMPT = "christopher@cjparker102";
const CWD = " ~ % ";
const CMD = "./run-access-review.sh --target=christopher";
const FINAL_CWD = " ~/projects % ";

export default function Terminal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const generation = useRef(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const [typedCmd, setTypedCmd] = useState("");
  const [step, setStep] = useState(-1);
  const [progress, setProgress] = useState(0);

  const clearTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  const animate = useCallback(async () => {
    const gen = ++generation.current;
    clearTimers();
    setTypedCmd("");
    setStep(-1);
    setProgress(0);

    const wait = (ms: number) =>
      new Promise<boolean>((resolve) => {
        timers.current.push(setTimeout(() => resolve(generation.current === gen), ms));
      });

    // Phase 0: Pause then show empty prompt
    if (!(await wait(600))) return;
    setStep(0);
    if (!(await wait(400))) return;

    // Phase 1: Type command char by char
    for (let i = 1; i <= CMD.length; i++) {
      setTypedCmd(CMD.slice(0, i));
      if (!(await wait(50))) return;
    }
    if (!(await wait(400))) return;

    // Phase 2: Submit command
    setStep(1);
    if (!(await wait(300))) return;

    // Phase 3: Init checks
    setStep(2);
    if (!(await wait(250))) return;
    setStep(3);
    if (!(await wait(250))) return;
    setStep(4);
    if (!(await wait(300))) return;

    // Phase 4: Progress bar fills
    for (let i = 1; i <= 10; i++) {
      setProgress(i);
      if (!(await wait(80))) return;
    }
    setStep(5);
    if (!(await wait(300))) return;

    // Phase 5: Scan results
    setStep(6);
    if (!(await wait(250))) return;
    setStep(7);
    if (!(await wait(350))) return;
    setStep(8);
    if (!(await wait(350))) return;
    setStep(9);
    if (!(await wait(350))) return;
    setStep(10);
    if (!(await wait(150))) return;
    setStep(11);
    if (!(await wait(150))) return;
    setStep(12);
    if (!(await wait(150))) return;

    // Phase 6: Report + status
    setStep(13);
    if (!(await wait(250))) return;
    setStep(14);
    if (!(await wait(400))) return;

    // Phase 7: Final prompt
    setStep(15);
  }, [clearTimers]);

  // IntersectionObserver — replay every time section scrolls in
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          generation.current++;
          clearTimers();
          setStep(-1);
          setTypedCmd("");
          setProgress(0);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      clearTimers();
    };
  }, [animate, clearTimers]);

  // Auto-scroll body to bottom
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [step, progress, typedCmd]);

  const bar = "\u25A0".repeat(progress) + "\u00A0".repeat(10 - progress);

  return (
    <div
      ref={containerRef}
      className="rounded-[10px] overflow-hidden h-full flex flex-col"
      style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)" }}
    >
      {/* ── macOS title bar ─────────────────────────── */}
      <div className="flex items-center h-9 px-5" style={{ background: "#2d2d2d" }}>
        <div className="flex items-center gap-[7px]">
          <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#FFBD2E" }} />
          <span className="w-3.5 h-3.5 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <span className="flex-1 text-center text-muted/60 text-sm font-mono -ml-[60px]">
          okta-access-reviewer — zsh
        </span>
      </div>

      {/* ── Terminal body ────────────────────────────── */}
      <div
        ref={bodyRef}
        className="flex-1 px-4 py-4 font-mono text-sm flex flex-col gap-1 overflow-y-auto"
        style={{ background: "#1a1a1a", minHeight: "320px" }}
      >
        {/* Prompt — always visible */}
        <p>
          <span className="text-green-400">{PROMPT}</span>
          <span className="text-muted">{CWD}</span>
          {step < 1 && (
            <>
              <span className="text-white">{typedCmd}</span>
              <span className="cursor-blink" />
            </>
          )}
          {step >= 1 && (
            <span className="text-white">{CMD}</span>
          )}
        </p>

        {step >= 1 && <p className="h-1" />}

        {/* Init checks */}
        {step >= 2 && (
          <p>
            <span className="text-green-400">[✓]</span>{" "}
            <span className="text-muted">Connecting to Okta API...</span>
          </p>
        )}
        {step >= 3 && (
          <p>
            <span className="text-green-400">[✓]</span>{" "}
            <span className="text-muted">Fetching users...</span>{" "}
            <span className="text-white">247 found</span>
          </p>
        )}
        {step >= 4 && (
          <p>
            <span className="text-green-400">[✓]</span>{" "}
            <span className="text-muted">Analyzing access patterns...</span>
          </p>
        )}

        {/* Progress bar */}
        {step >= 4 && progress > 0 && (
          <p className="mt-1">
            <span className="text-teal">[{bar}]</span>
            <span className="text-muted"> {progress * 10}%</span>
          </p>
        )}

        {step >= 6 && <p className="h-1" />}

        {/* Scan results */}
        {step >= 6 && (
          <p className="text-muted">
            ── <span className="text-white">SCAN RESULTS</span> ──────────────────
          </p>
        )}
        {step >= 7 && (
          <p>
            <span className="text-yellow-400">⚠</span>{"  "}
            <span className="text-muted">12 inactive users (90+ days)</span>
          </p>
        )}
        {step >= 8 && (
          <p>
            <span className="text-yellow-400">⚠</span>{"  "}
            <span className="text-muted">3 over-provisioned accounts</span>
          </p>
        )}
        {step >= 9 && (
          <p>
            <span className="text-yellow-400">⚠</span>{"  "}
            <span className="text-muted">1 suspicious admin escalation</span>
          </p>
        )}
        {step >= 10 && (
          <p>
            <span className="text-green-400">✓</span>{"  "}
            <span className="text-muted">
              MFA enforcement: <span className="text-green-400">enabled</span>
            </span>
          </p>
        )}
        {step >= 11 && (
          <p>
            <span className="text-green-400">✓</span>{"  "}
            <span className="text-muted">
              Zero Trust policies: <span className="text-green-400">compliant</span>
            </span>
          </p>
        )}
        {step >= 12 && <p className="text-muted">──────────────────────────────────</p>}

        {step >= 13 && <p className="h-1" />}

        {/* Report */}
        {step >= 13 && (
          <p>
            <span className="text-purple">[!]</span>{" "}
            <span className="text-muted">Report saved →</span>{" "}
            <span className="text-white">access-review.md</span>
          </p>
        )}
        {step >= 14 && (
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse-dot flex-shrink-0" />
            <span className="text-muted">
              scan complete · <span className="text-white">2.3s</span>
            </span>
          </p>
        )}

        {step >= 15 && <p className="h-1" />}

        {/* Final prompt */}
        {step >= 15 && (
          <p>
            <span className="text-green-400">{PROMPT}</span>
            <span className="text-muted">{FINAL_CWD}</span>
            <span className="cursor-blink" />
          </p>
        )}
      </div>
    </div>
  );
}
