// ── Skills (used in Marquee) ──────────────────────────────────
export const SKILLS = [
  "Web Development",
  "Graphic Design",
  "Canva",
  "Brand Identity",
  "Responsive Design",
  "UI/UX",
  "Google Workspace",
  "Web Development",
  "Adobe Photoshop",
  "Adobe Premier Pro",
  "Web Development",
  "Graphic Design",
  "Canva",
  "Brand Identity",
  "Responsive Design",
  "UI/UX",
  "Google Workspace",
  "Web Development",
  "Adobe Photoshop",
  "Adobe Premier Pro",
];

// ── Projects ──────────────────────────────────────────────────
export const PROJECTS = [
  {
    id: "01",
    name: "Nōwa Brand Identity",
    type: "Graphic Design · Branding · Logo",
    featured: true,
    geo: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        style={{ width: "55%", height: "55%", opacity: 0.55 }}
      >
        <rect
          x="20"
          y="20"
          width="160"
          height="160"
          stroke="#FFC200"
          strokeWidth="0.6"
        />
        <rect
          x="40"
          y="40"
          width="120"
          height="120"
          stroke="#FFC200"
          strokeWidth="0.6"
          transform="rotate(15 100 100)"
        />
        <rect
          x="60"
          y="60"
          width="80"
          height="80"
          stroke="#FFC200"
          strokeWidth="0.6"
          transform="rotate(30 100 100)"
        />
        <circle cx="100" cy="100" r="50" stroke="#FFC200" strokeWidth="0.6" />
        <circle cx="100" cy="100" r="20" fill="#FFC200" fillOpacity="0.18" />
      </svg>
    ),
  },
  {
    id: "02",
    name: "Apex Dashboard",
    type: "Web Development · UI/UX",
    featured: false,
    geo: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        style={{ width: "55%", height: "55%", opacity: 0.55 }}
      >
        <polygon
          points="100,10 190,190 10,190"
          stroke="#FFC200"
          strokeWidth="0.6"
        />
        <polygon
          points="100,40 165,170 35,170"
          stroke="#FFC200"
          strokeWidth="0.6"
        />
        <polygon
          points="100,70 140,150 60,150"
          stroke="#FFC200"
          strokeWidth="0.6"
        />
        <circle cx="100" cy="120" r="15" stroke="#FFC200" strokeWidth="0.6" />
      </svg>
    ),
  },
  {
    id: "03",
    name: "Venn Campaign",
    type: "Graphic Design · Print · Branding",
    featured: false,
    geo: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        style={{ width: "55%", height: "55%", opacity: 0.55 }}
      >
        <circle cx="60" cy="60" r="40" stroke="#FFC200" strokeWidth="0.6" />
        <circle cx="140" cy="60" r="40" stroke="#FFC200" strokeWidth="0.6" />
        <circle cx="100" cy="140" r="40" stroke="#FFC200" strokeWidth="0.6" />
        <circle cx="100" cy="93" r="18" stroke="#FFC200" strokeWidth="0.6" />
      </svg>
    ),
  },
  {
    id: "04",
    name: "Meridian Web Experience",
    type: "WordPress · Custom Theme · WooCommerce",
    featured: true,
    geo: (
      <svg
        viewBox="0 0 200 200"
        fill="none"
        style={{ width: "55%", height: "55%", opacity: 0.55 }}
      >
        <line
          x1="0"
          y1="0"
          x2="200"
          y2="200"
          stroke="#FFC200"
          strokeWidth="0.5"
        />
        <line
          x1="200"
          y1="0"
          x2="0"
          y2="200"
          stroke="#FFC200"
          strokeWidth="0.5"
        />
        <line
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          stroke="#FFC200"
          strokeWidth="0.5"
        />
        <line
          x1="0"
          y1="100"
          x2="200"
          y2="100"
          stroke="#FFC200"
          strokeWidth="0.5"
        />
        <circle cx="100" cy="100" r="70" stroke="#FFC200" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="40" stroke="#FFC200" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="10" fill="#FFC200" fillOpacity="0.4" />
      </svg>
    ),
  },
];

// ── Services ──────────────────────────────────────────────────
export const SERVICES = [
  {
    num: "01",
    name: "Web Development",
    tags: ["HTML/CSS/JS", "React", "Responsive"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        width="22"
        height="22"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    num: "02",
    name: "Graphic Design",
    tags: ["Canva", "Photoshop", "Figma"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        width="22"
        height="22"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
  {
    num: "03",
    name: "WordPress",
    tags: ["WooCommerce", "Elementor", "Speed Opt."],
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        width="22"
        height="22"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 3v18" />
      </svg>
    ),
  },
];
