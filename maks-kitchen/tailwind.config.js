/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0C",
        char: "#131317",
        royal: { DEFAULT: "#132C54", deep: "#0C1B38", 900: "#0A1730" },
        gold: { DEFAULT: "#C9A24B", light: "#E8CD86", deep: "#A9812E" },
        ember: "#D9622C",
        cream: "#F4EDDE",
        sand: "#B4AB99",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "serif"],
        deco: ['"Cinzel"', "serif"],
        body: ['"Jost"', "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      boxShadow: {
        gold: "0 0 40px -8px rgba(201,162,75,0.45)",
        card: "0 30px 60px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        floatSlow: {
          "0%,100%": { transform: "translateY(0) rotate(-2deg)" },
          "50%": { transform: "translateY(-22px) rotate(2deg)" },
        },
      },
      animation: {
        shimmer: "shimmer 3.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
