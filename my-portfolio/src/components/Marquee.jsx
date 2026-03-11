import COLORS from "../data/colors";
import { SKILLS } from "../data/data";

export default function Marquee() {
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: `1px solid ${COLORS.muted}`,
        borderBottom: `1px solid ${COLORS.muted}`,
        padding: "11px 0",
        background: COLORS.stem,
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 22s linear infinite",
        }}
      >
        {SKILLS.map((s, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.72rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              padding: "0 36px",
              color: i % 3 === 0 ? COLORS.sunflower : COLORS.mid,
            }}
          >
            {i % 2 === 0 ? "✦" : "◆"} {s}
          </span>
        ))}
      </div>
    </div>
  );
}
