import { useState, useEffect } from "react";
import COLORS from "../data/colors";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState("");
  const full = "Web Dev · Graphic Design ";

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, i));
      i++;
      if (i > full.length) clearInterval(t);
    }, 38);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 52px 80px",
        position: "relative",
        overflow: "hidden",
        background: `radial-gradient(ellipse at 20% 80%, ${COLORS.muted}33 0%, transparent 60%), ${COLORS.soil}`,
      }}
    >
      {/* Ghost BG text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: -10,
          transform: "translateY(-50%)",
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(140px, 22vw, 340px)",
          color: "transparent",
          WebkitTextStroke: `1px ${COLORS.sunflower}07`,
          lineHeight: 0.85,
          pointerEvents: "none",
          whiteSpace: "nowrap",
          userSelect: "none",
          opacity: visible ? 1 : 0,
          transition: "opacity 1.2s ease 0.2s",
        }}
      >
        BISSWAAASSS
      </div>

      {/* ── LEFT CONTENT ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          zIndex: 2,
        }}
      >
        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: COLORS.sunflower,
            marginBottom: 22,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.4s",
          }}
        >
          {/* <span style={{ opacity: 0.5 }}>// </span>Available for projects — 2025 */}
        </div>

        <h1
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(64px, 10vw, 150px)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            color: COLORS.cream,
            margin: 0,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(40px)",
            transition: "all 0.9s ease 0.6s",
          }}
        >
          Bishwash
          <br />
          <span style={{ color: COLORS.sunflower }}>Bishwakarma Paudel</span>
        </h1>

        <div
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.85rem",
            color: COLORS.sunflower,
            marginTop: 28,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.6s ease 1s",
            letterSpacing: "0.05em",
          }}
        >
          <span style={{ opacity: 0.4 }}>&gt; </span>
          {typed}
          <span
            style={{
              animation: "blink 1s step-end infinite",
              borderRight: `2px solid ${COLORS.sunflower}`,
              marginLeft: 2,
            }}
          />
        </div>

        <div
          style={{
            marginTop: 36,
            display: "flex",
            gap: 40,
            alignItems: "flex-end",
            flexWrap: "wrap",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(30px)",
            transition: "all 0.8s ease 0.9s",
          }}
        >
          <p
            style={{
              maxWidth: 380,
              fontSize: "1rem",
              lineHeight: 1.8,
              color: `${COLORS.cream}88`,
              margin: 0,
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
            }}
          >
            Web developer & graphic designer specialist — building bold digital
            experiences that make brands impossible to ignore.
          </p>
          <a
            href="#work"
            data-hover
            style={{
              display: "inline-block",
              padding: "16px 40px",
              background: COLORS.sunflower,
              color: COLORS.bark,
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              textDecoration: "none",
              flexShrink: 0,
              borderRadius: "2px",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translate(-3px,-3px)";
              e.target.style.boxShadow = `6px 6px 0 ${COLORS.cream}`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translate(0,0)";
              e.target.style.boxShadow = "none";
            }}
          >
            View My Work
          </a>
        </div>
      </div>

      {/* ── RIGHT — PHOTO ── */}
      <div
        style={{
          position: "relative",
          width: 380,
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(40px)",
          transition: "all 1s ease 0.8s",
        }}
      >
        {/* Photo frame */}
        <div
          style={{
            position: "relative",
            width: 260,
            height: 320,
            borderRadius: "20px",
            overflow: "hidden",
            border: `3px solid ${COLORS.sunflower}`,
            boxShadow: `0 0 30px ${COLORS.sunflower}44, 0 0 80px ${COLORS.sunflower}22`,
            background: COLORS.stem,
          }}
        >
          {/*
            ── HOW TO ADD YOUR PHOTO ──────────────────────────
            1. Drop your photo (e.g. photo.jpg) into the public/ folder
            2. Replace the placeholder <div> below with:
               <img src="/photo.jpg" alt="Your Name"
                 style={{ width:"100%", height:"100%", objectFit:"cover" }} />
            ───────────────────────────────────────────────────
          */}
          {/* <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke={COLORS.sunflower}
              strokeWidth="1"
              opacity="0.4"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.56rem",
                letterSpacing: "0.15em",
                color: COLORS.sunflower,
                opacity: 0.45,
                textTransform: "uppercase",
                textAlign: "center",
                padding: "0 20px",
              }}
            >
              Your photo here
            </span>
          </div> */}
          <img
            src="/img2.jpeg"
            alt="Bishwash Bishwakarma Paudel"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div></div>
        </div>

        {/* Badge */}
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 0,
            background: COLORS.sunflower,
            padding: "10px 18px",
            borderRadius: "2px",
            zIndex: 3,
          }}
        >
          <div
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "1.6rem",
              color: COLORS.bark,
              lineHeight: 1,
            }}
          >
            2+
          </div>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.44rem",
              letterSpacing: "0.1em",
              color: COLORS.bark,
              fontWeight: 700,
            }}
          >
            YRS EXP.
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          right: 52,
          bottom: 60,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          opacity: visible ? 0.5 : 0,
          transition: "opacity 1s ease 1.5s",
        }}
      >
        <span
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: COLORS.mid,
            writingMode: "vertical-rl",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 60,
            background: `linear-gradient(to bottom, ${COLORS.sunflower}, transparent)`,
            animation: "lineGrow 2s ease infinite",
          }}
        />
      </div>
    </section>
  );
}
