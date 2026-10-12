/**
 * Lucide-react v1+ dropped trademarked brand icons (LinkedIn, Twitter/X,
 * Facebook, YouTube). These lightweight inline SVG equivalents keep the
 * same `size` prop API as lucide icons so they drop in as direct
 * replacements anywhere those were used.
 */

export function Linkedin({ size = 16, className = "", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

export function Twitter({ size = 16, className = "", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M18.9 2.5h3.3l-7.2 8.2 8.5 11.3h-6.7l-5.2-6.9-6 6.9H2.3l7.7-8.8L1.9 2.5h6.8l4.7 6.3 5.5-6.3zm-1.2 17.6h1.8L7.4 4.3H5.5l12.2 15.8z" />
    </svg>
  );
}

export function Facebook({ size = 16, className = "", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.16 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.78 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}

export function Youtube({ size = 16, className = "", ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M23.5 7.2s-.23-1.64-.94-2.36c-.9-.95-1.9-.95-2.36-1.01C16.9 3.5 12 3.5 12 3.5h-.01s-4.89 0-8.2.33c-.46.06-1.46.06-2.36 1.01C.72 5.56.5 7.2.5 7.2S.27 9.12.27 11.04v1.79c0 1.92.23 3.84.23 3.84s.22 1.64.93 2.36c.9.95 2.07.92 2.6 1.02 1.88.18 8 .24 8 .24s4.9-.01 8.2-.34c.46-.06 1.46-.06 2.36-1.01.71-.72.94-2.36.94-2.36s.23-1.92.23-3.84v-1.79c0-1.92-.23-3.84-.23-3.84zM9.6 14.96V8.8l6.2 3.08-6.2 3.08z" />
    </svg>
  );
}
