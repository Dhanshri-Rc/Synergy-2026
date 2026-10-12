export default function Logo({ size = 40 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <defs>
        <linearGradient id="g-blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2DA8E0" />
          <stop offset="100%" stopColor="#1450E0" />
        </linearGradient>
        <linearGradient id="g-purple" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6C5CE7" />
          <stop offset="100%" stopColor="#3B2FD4" />
        </linearGradient>
        <linearGradient id="g-gold" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#F5AE13" />
          <stop offset="100%" stopColor="#F8C84B" />
        </linearGradient>
      </defs>

      {/* Left hemisphere - blue */}
      <path
        d="M32 6C20 6 12 14 10 24c-1 5 0 9 2 12-2 2-3 5-2 8 1 4 4 6 7 7 1 3 3 5 6 6 2 1 5 1 7 0V8c-1-1-2-2-3-2z"
        fill="url(#g-blue)"
        opacity="0.9"
      />
      {/* Left lower - gold */}
      <path
        d="M19 44c-3-1-6-3-7-7-1-3 0-6 2-8-2-3-3-7-2-12 0 0-3 4-3 12 0 8 4 14 9 17 2 1 4 1 6 1v-2c-2 0-4-1-5-1z"
        fill="url(#g-gold)"
      />
      {/* Right hemisphere - purple */}
      <path
        d="M32 6c12 0 20 8 22 18 1 5 0 9-2 12 2 2 3 5 2 8-1 4-4 6-7 7-1 3-3 5-6 6-2 1-5 1-7 0V8c1-1 2-2 3-2z"
        fill="url(#g-purple)"
        opacity="0.9"
      />

      {/* Circuit dots left */}
      <circle cx="16" cy="20" r="1.6" fill="#BFE6FF" />
      <circle cx="13" cy="27" r="1.6" fill="#BFE6FF" />
      <circle cx="18" cy="32" r="1.6" fill="#BFE6FF" />
      <circle cx="14" cy="38" r="1.6" fill="#FFE3A8" />
      <circle cx="20" cy="42" r="1.6" fill="#FFE3A8" />

      {/* Circuit dots right */}
      <circle cx="48" cy="20" r="1.6" fill="#D9D2FF" />
      <circle cx="51" cy="27" r="1.6" fill="#D9D2FF" />
      <circle cx="46" cy="32" r="1.6" fill="#D9D2FF" />
      <circle cx="50" cy="38" r="1.6" fill="#D9D2FF" />
      <circle cx="44" cy="43" r="1.6" fill="#D9D2FF" />

      {/* Center divider */}
      <rect x="31" y="8" width="2" height="48" rx="1" fill="#0A1638" opacity="0.5" />

      {/* Connector arrow (gold) */}
      <path d="M2 33h12" stroke="#F5AE13" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 30l4 3-4 3" fill="#F5AE13" />
    </svg>
  );
}
