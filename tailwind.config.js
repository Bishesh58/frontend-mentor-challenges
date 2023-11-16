/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto"],
        Poppins: ["Poppins"],
        Epilogue: ["Epilogue"],
        Outfit: ["Outfit"],
        Karla: ["Karla"],
        Lato: ["Lato"],
        Inter: ["Inter"],
        Raleway: ["Raleway"],
        Mohave: ["Mohave"],
        Rubik: ["Rubik"],
        Barlow: ["Barlow+Semi+Condensed"],
        Display: ["DM+Serif+Display"],
        Overpass: ["Overpass"],
        Ubuntu: ["Ubuntu"],
        Commissioner: ["Commissioner"],
        CrimsonText: ["Crimson Text"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  darkMode: "class",
};
