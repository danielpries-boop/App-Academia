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
            "primary": "#3b82f6",
            "primary-dark": "#2563eb",
            "background-light": "#f0f4f8",
            "background-dark": "#0f172a",
            "surface-dark": "#1e293b",
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
