"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",          href: "#about"          },
  { label: "Experience",     href: "#experience"     },
  { label: "Skills",         href: "#skills"         },
  { label: "Projects",       href: "#projects"       },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact",        href: "#contact"        },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-purple/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-mono text-xl font-bold tracking-widest select-none"
        >
          <span className="text-teal">{`{`}</span>
          <span className="text-white">CJPARKER102.DEV</span>
          <span className="text-teal">{`}`}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-muted text-sm hover:text-purple transition-colors duration-200"
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
