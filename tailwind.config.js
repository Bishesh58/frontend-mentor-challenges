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
        Lato: ["Lato"],
        Inter: ["Inter"],
        Raleway: ["Raleway"],
        Mohave: ["Mohave"],
        Rubik: ["Rubik"],
        Barlow: ["Barlow+Semi+Condensed"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
  darkMode: "class",
};
