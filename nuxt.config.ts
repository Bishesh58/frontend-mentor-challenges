// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: [300, 400, 600, 700, 900],
          Poppins: [300, 400, 600, 700, 900],
          Epilogue: [300, 400, 600, 700, 900],
          Outfit: [300, 400, 600, 700, 900],
          Inter: [300, 400, 600, 700, 900],
          "Josefin+Sans": true,
          "Barlow+Semi+Condensed": [400, 600, 700],
          Lato: [100, 300, 400, 700],
          Raleway: {
            wght: [100, 400, 600, 700],
            ital: [100],
          },
          Mohave: true,
          Rubik: [300, 400, 600, 700, 900],
        },
      },
    ],
    "@vueuse/nuxt",
    "nuxt-icon",
  ],
});
