"use client";

import { useEffect, useState } from "react";

// Roles to cycle through in the typewriter
const ROLES = [
  "IAM Engineer",
  "Okta Certified Professional",
  "Security Specialist",
  "Identity Automation",
];

const TYPE_SPEED   = 80;  // ms per character when typing
const DELETE_SPEED = 40;  // ms per character when deleting
const PAUSE_MS     = 2200; // pause before deleting

export default function Hero() {
  const [roleIdx,     setRoleIdx]     = useState(0);
  const [displayed,   setDisplayed]   = useState("");
  const [isDeleting,  setIsDeleting]  = useState(false);

  useEffect(() => {
    const current = ROLES[roleIdx];
    let id: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      id = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        TYPE_SPEED
      );
    } else if (!isDeleting && displayed.length === current.length) {
      id = setTimeout(() => setIsDeleting(true), PAUSE_MS);
    } else if (isDeleting && displayed.length > 0) {
      id = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        DELETE_SPEED
      );
    } else {
      // Finished deleting — advance to next role
      setIsDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(id);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center grid-bg overflow-hidden"
    >
      {/* Blue glow — behind the name block */}
      <div
        className="pointer-events-none absolute top-[15%] -left-24 w-[750px] h-[750px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(74,158,191,0.15) 0%, transparent 60%)",
        }}
      />
      {/* Gold glow — bottom-right, whisper subtle */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,168,62,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20 w-full">
        {/* Greeting */}
        <p
          className="text-2xl font-mono mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="text-muted">$ </span>
          <span className="text-teal">Hello, I&apos;m</span>
        </p>

        {/* Name — stacked */}
        <h1
          className="font-black tracking-tighter leading-[0.82] mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="block text-white text-[clamp(4rem,13vw,9rem)]">
            CHRISTOPHER
          </span>
          <span className="block text-purple text-[clamp(4rem,13vw,9rem)]">
            PARKER
          </span>
        </h1>

        {/* Typewriter role */}
        <div
          className="flex items-center gap-1.5 text-2xl sm:text-3xl lg:text-4xl font-light font-mono mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.45s" }}
        >
          <span className="text-teal">[</span>
          <span className="text-purple">
            {displayed}
          </span>
          <span
            className="text-purple"
            style={{ animation: "blink 1s step-end infinite" }}
          >
            _
          </span>
          <span className="text-teal">]</span>
        </div>

        {/* Tagline */}
        <p
          className="text-muted font-mono text-base max-w-xl leading-relaxed mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.65s" }}
        >
          <span className="text-teal">$ </span>
          Building AI-powered identity and access management tools at the
          intersection of security and automation.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-wrap gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.85s" }}
        >
          <a href="#projects" className="btn-primary">
            [ View My Work ]
          </a>
          <a href="#contact" className="btn-outline-teal">
            [ Get In Touch ]
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-fade-in-up"
        style={{ animationDelay: "1.2s" }}
      >
        <span className="text-muted text-xs font-mono tracking-widest">scroll down</span>
        <span
          className="text-purple text-lg leading-none"
          style={{ animation: "bounce-scroll 1.6s ease-in-out infinite" }}
        >
          ↓
        </span>
      </div>
    </section>
  );
}
