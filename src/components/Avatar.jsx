// Deterministic local "initials avatar" — no external network calls.
// Replaces third-party avatar APIs (which may be blocked by network/CSP
// policies) with a self-contained SVG generated from the person's name.

const GRADIENTS = [
  ["#1450E0", "#3B2FD4"],
  ["#2DA8E0", "#1450E0"],
  ["#6C5CE7", "#3B2FD4"],
  ["#0E3AAE", "#2DA8E0"],
  ["#F5AE13", "#E2980A"],
  ["#22C55E", "#0E3AAE"],
];

function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function getInitials(name) {
  const parts = name.replace(/^(Prof\.|Dr\.|Mr\.|Ms\.|Mrs\.)\s*/i, "").trim().split(" ");
  const filtered = parts.filter(Boolean);
  if (filtered.length === 0) return "?";
  if (filtered.length === 1) return filtered[0].slice(0, 2).toUpperCase();
  return (filtered[0][0] + filtered[filtered.length - 1][0]).toUpperCase();
}

export default function Avatar({ name = "User", size = 64, className = "", ring = false }) {
  const initials = getInitials(name);
  const [from, to] = GRADIENTS[hashString(name) % GRADIENTS.length];
  const gradId = `grad-${hashString(name)}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      className={`rounded-full shrink-0 ${ring ? "ring-2 ring-white/20" : ""} ${className}`}
      role="img"
      aria-label={name}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill={`url(#${gradId})`} />
      <text
        x="32"
        y="32"
        textAnchor="middle"
        dominantBaseline="central"
        fill="#ffffff"
        fontSize="22"
        fontWeight="700"
        fontFamily="Poppins, ui-sans-serif, system-ui, sans-serif"
      >
        {initials}
      </text>
    </svg>
  );
}
