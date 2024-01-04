// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    preset: "azure-functions"
  },

  runtimeConfig: {
    public: {
      beUrl: process.env.BE
    }
  },

  modules: ["@unocss/nuxt"]
})