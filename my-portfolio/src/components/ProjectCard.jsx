import { useState } from "react";
import COLORS from "../data/colors";

export default function ProjectCard({ project }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      data-hover
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        gridColumn: project.featured ? "span 2" : "span 1",
        background: COLORS.stem,
        overflow: "hidden",
        cursor: "none",
        transition: "transform 0.2s",
        transform: hov ? "scale(1.005)" : "scale(1)",
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: "100%",
          aspectRatio: project.featured ? "16/9" : "4/3",
          background: "#0a0800",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(ellipse at center, ${COLORS.muted}22 0%, transparent 70%)`,
          }}
        />

        {project.geo}

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `${COLORS.soil}dd`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: hov ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        >
          <div
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "1.15rem",
              letterSpacing: "0.25em",
              color: hov ? COLORS.bark : COLORS.sunflower,
              border: `1px solid ${COLORS.sunflower}`,
              padding: "13px 36px",
              background: hov ? COLORS.sunflower : "transparent",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            View Project
          </div>
        </div>
      </div>

      {/* Info bar */}
      <div
        style={{
          padding: "22px 26px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderTop: `1px solid ${COLORS.muted}22`,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.55rem",
              letterSpacing: "0.2em",
              color: COLORS.sunflower,
              opacity: 0.65,
              marginBottom: 6,
            }}
          >
            {project.id} / 04
          </div>
          <div
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              color: COLORS.cream,
              marginBottom: 4,
            }}
          >
            {project.name}
          </div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.56rem",
              letterSpacing: "0.1em",
              color: COLORS.mid,
              textTransform: "uppercase",
            }}
          >
            {project.type}
          </div>
        </div>
        <div
          style={{
            color: hov ? COLORS.sunflower : COLORS.mid,
            fontSize: "1.2rem",
            transition: "color 0.2s, transform 0.2s",
            transform: hov ? "translate(3px,-3px)" : "none",
          }}
        >
          ↗
        </div>
      </div>
    </div>
  );
}
