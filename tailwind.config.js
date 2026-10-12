/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#000C24",
          900: "#000E28",
          800: "#0A1638",
          700: "#0F1F4A",
          600: "#152a5e",
        },
        gold: {
          400: "#F8C84B",
          500: "#F5AE13",
          600: "#E2980A",
        },
        brand: {
          blue: "#1450E0",
          blueDark: "#0E3AAE",
          indigo: "#3B2FD4",
          sky: "#2DA8E0",
        },
        surface: {
          light: "#F5F8FE",
          card: "#FFFFFF",
          muted: "#EEF2FB",
        },
      },
      fontFamily: {
        display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 18px rgba(15, 31, 74, 0.08)",
        cardHover: "0 14px 32px rgba(15, 31, 74, 0.16)",
        glow: "0 0 0 4px rgba(245, 174, 19, 0.18)",
        glowBlue: "0 0 0 4px rgba(20, 80, 224, 0.15)",
      },
      backgroundImage: {
        "navy-radial":
          "radial-gradient(circle at 70% 30%, rgba(20,80,224,0.35), transparent 55%)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        underline: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
      },
    },
  },
  plugins: [],
};
