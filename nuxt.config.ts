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
          Outfit: [300, 400, 600, 700, 900],
          Inter: [400, 700],
          "Josefin+Sans": true,
          Lato: [100, 300, 400, 700],
          Raleway: {
            wght: [100, 400, 600, 700],
            ital: [100],
          },
          Mohave: true,
        },
      },
    ],
    "nuxt-icon",
  ],
});
