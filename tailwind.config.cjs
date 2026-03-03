/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
        colors: {
            "primary": "#38bdf8", // Sky blue for contrast
            "primary-dark": "#0284c7",
            "background-light": "#f0f4f8",
            "background-dark": "#0a192f", // Deep navy blue
            "surface-dark": "#112240", // Navy blue surface
            "card-dark": "#233554", // Lighter navy card
        },
        fontFamily: {
            "display": ["Manrope", "sans-serif"]
        },
        borderRadius: {
          "DEFAULT": "0.25rem",
          "lg": "0.5rem",
          "xl": "0.75rem",
          "2xl": "1rem",
          "full": "9999px"
        },
    },
  },
  plugins: [],
}
