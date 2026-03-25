"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "About",          href: "#about"          },
  { label: "Experience",     href: "#experience"     },
  { label: "Skills",         href: "#skills"         },
  { label: "Projects",       href: "#projects"       },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact"        },
];

export default function Navbar() {
  const [menuOpen,  setMenuOpen]  = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-purple/20"
      style={{
        background: "rgba(8, 12, 16, 0.85)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="group font-mono text-xl font-bold tracking-widest select-none transition-all duration-200 hover:scale-105 hover:tracking-[0.12em] inline-block"
        >
          <span className="text-teal group-hover:text-purple transition-colors duration-200">{`{`}</span>
          <span className="text-white">CJPARKER102.DEV</span>
          <span className="text-teal group-hover:text-purple transition-colors duration-200">{`}`}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="nav-link text-muted text-sm uppercase tracking-wider"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-purple text-2xl leading-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "×" : "≡"}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-b border-purple/20">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm text-muted hover:text-purple transition-colors flex items-center gap-2"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="text-teal">$</span> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
