// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Inter: [400, 500, 700],
      Montserrat: [400, 500, 700],
      Questrial: [400, 500, 700],
      Poppins: [400, 500, 700],
    },
  },
});
