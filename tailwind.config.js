/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f285a",
        secondary: "#ff5722",
        tertiary: "#4ec34a",
      },
    },
    screens: {
      lg: { max: "2023px" },

      sm: { max: "1023px" },
    },
  },
  plugins: [],
};
