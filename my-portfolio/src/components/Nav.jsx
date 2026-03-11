import { useState, useEffect } from "react";
import COLORS from "../data/colors";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        padding: "22px 52px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 100,
        background: scrolled ? `${COLORS.soil}ee` : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        transition: "background 0.4s, backdrop-filter 0.4s",
        borderBottom: scrolled ? `1px solid ${COLORS.muted}33` : "none",
      }}
    >
      {/* ── Left — Resume download ── */}
      <a
        href="/resume.pdf"
        download
        data-hover
        title="Download Resume"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 18px",
          border: "1.5px solid #FFC200",
          borderRadius: "4px",
          color: "#FFC200",
          textDecoration: "none",
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          transition: "background 0.2s, box-shadow 0.2s, transform 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#FFC20018";
          e.currentTarget.style.boxShadow = "0 0 14px #FFC20055";
          e.currentTarget.style.transform = "translate(-2px,-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.boxShadow = "none";
          e.currentTarget.style.transform = "none";
        }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        Resume
      </a>

      {/* ── Centre nav links ── */}
      <ul
        style={{
          display: "flex",
          gap: 42,
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {[
          { label: "About Me", href: "#about" },
          { label: "Projects", href: "#work" },
          { label: "Skills", href: "#services" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.68rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: COLORS.cream,
                textDecoration: "none",
                opacity: 1,
                transition: "color 0.2s, text-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = COLORS.sunflower;
                e.target.style.textShadow = `0 0 12px ${COLORS.sunflower}88`;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = COLORS.cream;
                e.target.style.textShadow = "none";
              }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* ── Right social icons ── */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        {[
          {
            label: "LinkedIn",
            href: "https://linkedin.com/in/biswaaass",
            icon: (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            ),
          },
          {
            label: "GitHub",
            href: "https://github.com/BiswasSunar",
            icon: (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            ),
          },
          {
            label: "Instagram",
            href: "https://instagram.com/b.iswas_",
            icon: (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="0.5"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            ),
          },
        ].map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={label}
            data-hover
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: `1px solid ${COLORS.muted}`,
              color: `${COLORS.cream}77`,
              textDecoration: "none",
              transition:
                "color 0.2s, border-color 0.2s, background 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = COLORS.sunflower;
              e.currentTarget.style.borderColor = COLORS.sunflower;
              e.currentTarget.style.background = `${COLORS.sunflower}18`;
              e.currentTarget.style.boxShadow = `0 0 10px ${COLORS.sunflower}44`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = `${COLORS.cream}77`;
              e.currentTarget.style.borderColor = COLORS.muted;
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </nav>
  );
}
