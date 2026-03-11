import { useState } from "react";
import COLORS from "../data/colors";

export default function ResumeButton() {
  const colors = COLORS;
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="/public/resume.pdf"
      download
      data-hover
      title="Download Resume"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "fixed",
        bottom: 36,
        left: 36,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: hovered ? 10 : 0,
        background: hovered ? colors.sunflower : `${colors.sunflower}22`,
        border: `1.5px solid ${colors.sunflower}`,
        borderRadius: "40px",
        padding: hovered ? "12px 20px 12px 14px" : "12px 14px",
        textDecoration: "none",
        overflow: "hidden",
        transition: "all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
        boxShadow: hovered
          ? `0 0 24px ${colors.sunflower}88, 0 8px 32px ${colors.sunflower}44`
          : `0 0 10px ${colors.sunflower}33`,
        backdropFilter: "blur(8px)",
      }}
    >
      {/* Download arrow icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={hovered ? colors.bark : colors.sunflower}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0, transition: "stroke 0.3s" }}
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>

      {/* Label — only visible on hover */}
      <span
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.62rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: colors.bark,
          whiteSpace: "nowrap",
          maxWidth: hovered ? "120px" : "0px",
          opacity: hovered ? 1 : 0,
          overflow: "hidden",
          transition: "max-width 0.35s ease, opacity 0.25s ease",
        }}
      >
        Resume
      </span>
    </a>
  );
}
