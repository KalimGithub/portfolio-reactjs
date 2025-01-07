/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // primary: "#1f285a",
        primary: "#29292f", // bg color
        secondary: "#ff5722", // banner text color
        // secondary: "#870eeb",
        tertiary: "#4ec34a", // tertiary color
        // tertiary: "#ff05ff",
      },
    },
    screens: {
      lg: { max: "2023px" },

      sm: { max: "1023px" },
    },
  },
  plugins: [],
};
