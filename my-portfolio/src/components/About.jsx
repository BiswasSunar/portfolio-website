import { useState, useEffect, useRef } from "react";
import COLORS from "../data/colors";

const skillItems = [
  "HTML / CSS / JS",
  "Canva",
  "Figma / Photoshop",
  "Custom Themes",
  "Brand & Logo Design",
  "WooCommerce",
  "Google Workspace",
];

export default function About() {
  const ref = useRef();
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.15 },
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "140px 52px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
        maxWidth: 1400,
        margin: "0 auto",
      }}
    >
      {/* Left — text */}
      <div
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.9s ease",
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: COLORS.sunflower,
            marginBottom: 22,
          }}
        >
          {/* <span style={{ opacity: 0.5 }}>// </span>About Me */}
        </div>

        <h2
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(46px, 6vw, 84px)",
            lineHeight: 0.9,
            marginBottom: 30,
            color: COLORS.cream,
          }}
        >
          About
          <span style={{ color: COLORS.sunflower }}> Me</span>
        </h2>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.85,
            color: `${COLORS.cream}88`,
            marginBottom: 18,
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
          }}
        >
          I'm a full-stack creative — part developer, part designer —
          specializing in Web Development, Graphic Design, and WordPress. I
          build fast, beautiful websites and craft visuals that make brands
          stand out.
        </p>

        <p
          style={{
            fontSize: "1rem",
            lineHeight: 1.85,
            color: `${COLORS.cream}66`,
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
          }}
        >
          From pixel-perfect UI to custom WordPress themes and compelling brand
          graphics, every project is built with precision and purpose.
        </p>

        {/* Skills grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
            marginTop: 36,
          }}
        >
          {skillItems.map((s) => (
            <div
              key={s}
              data-hover
              style={{
                padding: "15px 18px",
                background: COLORS.stem,
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: COLORS.mid,
                borderLeft: "2px solid transparent",
                transition: "border-color 0.2s, color 0.2s, background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = COLORS.sunflower;
                e.currentTarget.style.color = COLORS.sunflower;
                e.currentTarget.style.background = "#1e1800";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = "transparent";
                e.currentTarget.style.color = COLORS.mid;
                e.currentTarget.style.background = COLORS.stem;
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Right — visual card */}
      <div
        style={{
          position: "relative",
          height: 520,
          opacity: vis ? 1 : 0,
          transform: vis ? "translateY(0)" : "translateY(40px)",
          transition: "all 0.9s ease 0.2s",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: COLORS.stem,
            border: `1px solid ${COLORS.muted}44`,
            display: "flex",
            alignItems: "flex-end",
            padding: 32,
            overflow: "hidden",
          }}
        >
          {/* Sunflower ring bg decoration */}
          <div
            style={{
              position: "absolute",
              top: -80,
              right: -80,
              opacity: 0.06,
            }}
          >
            <svg width="360" height="360" viewBox="0 0 200 200">
              {[...Array(12)].map((_, i) => (
                <ellipse
                  key={i}
                  cx="100"
                  cy="40"
                  rx="14"
                  ry="40"
                  fill={COLORS.sunflower}
                  transform={`rotate(${i * 30} 100 100)`}
                />
              ))}
              <circle cx="100" cy="100" r="30" fill={COLORS.bark} />
            </svg>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Bebas Neue', cursive",
                fontSize: "2.4rem",
                color: COLORS.cream,
                lineHeight: 1,
              }}
            >
              Bishwash Bishwakarma Paudel
            </div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.2em",
                color: COLORS.sunflower,
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              Developer · Designer · Traveller
            </div>
          </div>
        </div>

        {/* Yellow years badge */}
        <div
          style={{
            position: "absolute",
            width: 155,
            height: 155,
            top: -22,
            right: -22,
            background: COLORS.sunflower,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "2.6rem",
              color: COLORS.bark,
              lineHeight: 1,
            }}
          >
            2+
          </div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.48rem",
              letterSpacing: "0.1em",
              fontWeight: 700,
              color: COLORS.bark,
              marginTop: 4,
            }}
          >
            YEARS EXP.
          </div>
        </div>
      </div>
    </section>
  );
}
