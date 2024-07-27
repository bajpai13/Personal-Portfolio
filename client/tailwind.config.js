/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#020617",
        secondary: "#2dd4bf",
        tertiary: "#a855f7",
      },
    },
    screens: {
      lg: { max: "1923px" },

      sm: { max: "939px" },
    },
  },
  plugins: [],
};
