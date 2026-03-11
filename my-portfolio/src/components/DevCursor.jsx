import { useState, useEffect, useRef } from "react";
import COLORS from "../data/colors";

export default function DevCursor() {
  const colors = COLORS;
  const [pos, setPos]       = useState({ x: -200, y: -200 });
  const [ring, setRing]     = useState({ x: -200, y: -200 });
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [trail, setTrail]   = useState([]);
  const [angle, setAngle]   = useState(0);

  const ringRef  = useRef({ x: -200, y: -200 });
  const rafRef   = useRef();
  const trailRef = useRef([]);
  const angleRef = useRef(0);
  const posRef   = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
      const dot = { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() };
      trailRef.current = [dot, ...trailRef.current].slice(0, 6);
      setTrail([...trailRef.current]);
    };
    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    const animate = () => {
      // lag ring
      ringRef.current.x += (posRef.current.x - ringRef.current.x) * 0.12;
      ringRef.current.y += (posRef.current.y - ringRef.current.y) * 0.12;
      setRing({ ...ringRef.current });
      // spin angle
      angleRef.current += hovered ? 6 : 3;
      setAngle(angleRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    rafRef.current = requestAnimationFrame(animate);

    const addHover = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };
    addHover();
    const obs = new MutationObserver(addHover);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
      obs.disconnect();
    };
  }, [hovered]);

  const size = hovered ? 38 : 28;

  return (
    <>
      {/* Fading trail dots */}
      {trail.map((dot, i) => (
        <div key={dot.id} style={{
          position: "fixed",
          left: dot.x, top: dot.y,
          width: Math.max(2, 5 - i),
          height: Math.max(2, 5 - i),
          borderRadius: "50%",
          background: colors.sunflower,
          opacity: (1 - i / 7) * 0.35,
          transform: "translate(-50%,-50%)",
          pointerEvents: "none",
          zIndex: 9994,
        }} />
      ))}

      {/* Lagging outer ring */}
      <div style={{
        position: "fixed",
        left: ring.x, top: ring.y,
        width: size + 16,
        height: size + 16,
        border: `1px solid ${colors.sunflower}55`,
        borderRadius: "50%",
        transform: "translate(-50%,-50%)",
        pointerEvents: "none",
        zIndex: 9996,
        transition: "width 0.3s, height 0.3s",
      }} />

      {/* Spinning loader icon */}
      <div style={{
        position: "fixed",
        left: pos.x, top: pos.y,
        width: size, height: size,
        transform: `translate(-50%,-50%)`,
        pointerEvents: "none",
        zIndex: 9999,
      }}>
        <svg
          width={size} height={size}
          viewBox="0 0 40 40"
          style={{ transform: `rotate(${angle}deg)`, display: "block" }}
        >
          {/* Full circle background track */}
          <circle
            cx="20" cy="20" r="16"
            fill="none"
            stroke={colors.sunflower + "22"}
            strokeWidth="3"
          />
          {/* Arc — the spinning part */}
          <circle
            cx="20" cy="20" r="16"
            fill="none"
            stroke={colors.sunflower}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={clicking ? "80 20" : hovered ? "60 40" : "25 75"}
            style={{ transition: "stroke-dasharray 0.3s" }}
          />
          {/* Center dot */}
          <circle
            cx="20" cy="20" r="3"
            fill={colors.sunflower}
            opacity={clicking ? 1 : 0.7}
          />
        </svg>
      </div>
    </>
  );
}
