import { useState, useEffect, useRef } from "react";
import COLORS from "../data/colors";
import { SERVICES } from "../data/data";

function ServiceRow({ service }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      data-hover
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: `36px ${hov ? "20px" : "0px"}`,
        borderBottom: `1px solid ${COLORS.bark}12`,
        transition: "padding 0.35s",
        cursor: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 30 }}>
        <div
          style={{
            width: 52,
            height: 52,
            border: `1px solid ${COLORS.bark}22`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: hov ? COLORS.bark : "transparent",
            color: hov ? COLORS.sunflower : COLORS.bark,
            transition: "background 0.3s, color 0.3s",
            flexShrink: 0,
          }}
        >
          {service.icon}
        </div>

        <div
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(28px, 4vw, 52px)",
            letterSpacing: "0.02em",
            color: COLORS.bark,
            lineHeight: 1,
          }}
        >
          {service.name}
        </div>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {service.tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.54rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "5px 12px",
              border: `1px solid ${COLORS.bark}22`,
              color: `${COLORS.bark}77`,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.58rem",
          color: `${COLORS.bark}33`,
          marginLeft: 20,
          flexShrink: 0,
        }}
      >
        {service.num}
      </div>
    </div>
  );
}

export default function Services() {
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
      id="services"
      ref={ref}
      style={{
        background: COLORS.cream,
        color: COLORS.bark,
        padding: "120px 52px",
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: 52,
          paddingBottom: 22,
          borderBottom: `1px solid ${COLORS.bark}18`,
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
              color: COLORS.muted,
              opacity: 0.6,
              marginBottom: 10,
            }}
          >
            {/* // What I Do */}
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(46px, 6vw, 78px)",
              lineHeight: 0.9,
              color: COLORS.bark,
              margin: 0,
            }}
          >
            My Skills
          </h2>
        </div>
      </div>

      {/* Service rows */}
      <div
        style={{
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(40px)",
          transition: "all 0.9s ease 0.2s",
        }}
      >
        {SERVICES.map((s, i) => (
          <ServiceRow key={i} service={s} />
        ))}
      </div>
    </section>
  );
}
