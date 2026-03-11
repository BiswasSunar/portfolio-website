import { useState, useEffect, useRef } from "react";
import COLORS from "../data/colors";

export default function Contact() {
  const ref = useRef();
  const [vis, setVis] = useState(false);
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

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

  const handleSubmit = () => {
    if (!form.name.trim() || !form.message.trim()) return;
    setSent(true);
    setForm({ name: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    background: "#1A1200",
    border: `1px solid ${COLORS.muted}55`,
    borderRadius: "4px",
    color: COLORS.cream,
    fontFamily: "'Barlow', sans-serif",
    fontSize: "0.95rem",
    fontWeight: 300,
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "120px 52px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ghost BG text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(100px, 18vw, 280px)",
          color: "transparent",
          WebkitTextStroke: `1px ${COLORS.sunflower}05`,
          pointerEvents: "none",
          whiteSpace: "nowrap",
          userSelect: "none",
        }}
      >
        namaste
      </div>

      {/* Section label */}
      <div
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: COLORS.sunflower,
          marginBottom: 16,
          opacity: vis ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        {/* <span style={{ opacity: 0.5 }}>// </span>Let's Connect */}
      </div>

      <h2
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(48px, 7vw, 96px)",
          lineHeight: 0.9,
          color: COLORS.cream,
          marginBottom: 64,
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(20px)",
          transition: "all 0.8s ease 0.1s",
        }}
      >
        Let's <span style={{ color: COLORS.sunflower }}>Collaborate.</span>
      </h2>

      {/* Two-column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "start",
          opacity: vis ? 1 : 0,
          transform: vis ? "none" : "translateY(40px)",
          transition: "all 0.9s ease 0.2s",
        }}
      >
        {/* ── LEFT — info ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.85,
              color: `${COLORS.cream}77`,
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              maxWidth: 400,
            }}
          >
            Got an idea, a project in mind, or just want to say hi? Fill out the
            form and I'll get back to you as soon as possible. Let's build
            something great together.
          </p>

          {/* Email */}
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: COLORS.sunflower,
                opacity: 0.6,
                marginBottom: 8,
              }}
            >
              Email
            </div>
            <a
              href="mailto:sunarbiswas10@gmail.com"
              data-hover
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                color: COLORS.cream,
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.sunflower)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.cream)}
            >
              sunarbiswas10@gmail.com {/* ← replace */}
            </a>
          </div>

          {/* Phone — no link */}
          <div>
            <div
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: COLORS.sunflower,
                opacity: 0.6,
                marginBottom: 8,
              }}
            >
              Phone
            </div>
            <span
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                fontWeight: 400,
                color: COLORS.cream,
              }}
            >
              +977-9847625845 {/* ← replace */}
            </span>
          </div>

          {/* Social links */}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[
              {
                label: "LinkedIn",
                href: "https://linkedin.com/in/biswaaass",
              },
              { label: "GitHub", href: "https://github.com/BiswasSunar" },
              {
                label: "Instagram",
                href: "https://instagram.com/b.iswas_",
              },
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
                  letterSpacing: "0.15em",
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
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── RIGHT — form ── */}
        <div
          style={{
            background: "#120E00",
            border: `1px solid ${COLORS.muted}33`,
            borderRadius: "8px",
            padding: "44px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Name */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: `${COLORS.sunflower}88`,
              }}
            >
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              onFocus={(e) => {
                e.target.style.borderColor = COLORS.sunflower;
                e.target.style.boxShadow = `0 0 0 2px ${COLORS.sunflower}22`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = `${COLORS.muted}55`;
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Message */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <label
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.58rem",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: `${COLORS.sunflower}88`,
              }}
            >
              Your Message
            </label>
            <textarea
              rows={6}
              placeholder="Tell me about your project..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => {
                e.target.style.borderColor = COLORS.sunflower;
                e.target.style.boxShadow = `0 0 0 2px ${COLORS.sunflower}22`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = `${COLORS.muted}55`;
                e.target.style.boxShadow = "none";
              }}
            />
          </div>

          {/* Submit */}
          <button
            data-hover
            onClick={handleSubmit}
            style={{
              padding: "15px 36px",
              background: sent ? `${COLORS.sunflower}22` : COLORS.sunflower,
              color: sent ? COLORS.sunflower : COLORS.bark,
              border: `1px solid ${COLORS.sunflower}`,
              borderRadius: "4px",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              cursor: "none",
              transition: "all 0.3s",
              alignSelf: "flex-start",
            }}
            onMouseEnter={(e) => {
              if (!sent) {
                e.currentTarget.style.transform = "translate(-2px,-2px)";
                e.currentTarget.style.boxShadow = `4px 4px 0 ${COLORS.cream}`;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {sent ? "✓ Message Sent!" : "Send Message →"}
          </button>
        </div>
      </div>
    </section>
  );
}
