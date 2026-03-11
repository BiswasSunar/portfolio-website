import { useState, useEffect, useRef } from "react";
import COLORS from "../data/colors";
import { PROJECTS } from "../data/data";
import ProjectCard from "./ProjectCard";

export default function Work() {
  const ref = useRef();
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.1 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section id="work" ref={ref} style={{ padding: "100px 52px 140px" }}>
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 52,
          paddingBottom: 22,
          borderBottom: `1px solid ${COLORS.muted}44`,
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(30px)",
          transition: "all 0.8s ease",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.65rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: COLORS.sunflower,
              marginBottom: 10,
            }}
          >
            {/* <span style={{ opacity: 0.5 }}>//</span> Selected Work */}
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(46px, 6vw, 78px)",
              lineHeight: 0.9,
              color: COLORS.cream,
              margin: 0,
            }}
          >
            Projects.
          </h2>
        </div>

        <a
          href="#"
          data-hover
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: COLORS.mid,
            textDecoration: "none",
            borderBottom: `1px solid ${COLORS.muted}`,
            paddingBottom: 3,
            transition: "color 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            e.target.style.color = COLORS.sunflower;
            e.target.style.borderBottomColor = COLORS.sunflower;
          }}
          onMouseLeave={(e) => {
            e.target.style.color = COLORS.mid;
            e.target.style.borderBottomColor = COLORS.muted;
          }}
        >
          View All →
        </a>
      </div>

      {/* Projects grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2,
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(40px)",
          transition: "all 0.9s ease 0.2s",
        }}
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
