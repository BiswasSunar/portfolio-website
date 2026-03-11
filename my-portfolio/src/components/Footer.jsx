import COLORS from "../data/colors";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 52px",
        borderTop: `1px solid ${COLORS.stem}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      {/* Left — copyright */}
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.1em",
          color: COLORS.muted,
        }}
      >
        © 2026{" "}
        <span style={{ color: COLORS.sunflower }}>
          Bishwash Bishwakarma Paudel
        </span>{" "}
        — All rights reserved.
      </div>

      {/* Centre — social links */}
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        {[
          { label: "LinkedIn", href: "https://linkedin.com/in/biswaaass" },
          { label: "GitHub", href: "https://github.com/BiswasSunar" },
          { label: "Instagram", href: "https://instagram.com/b.iswas_" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: COLORS.muted,
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.color = COLORS.sunflower)}
            onMouseLeave={(e) => (e.target.style.color = COLORS.muted)}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right — back to top */}
      <a
        href="#"
        data-hover
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.58rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: COLORS.muted,
          textDecoration: "none",
          transition: "color 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.color = COLORS.sunflower)}
        onMouseLeave={(e) => (e.target.style.color = COLORS.muted)}
      >
        Back to Top ↑
      </a>
    </footer>
  );
}
