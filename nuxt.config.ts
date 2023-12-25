export default defineNuxtConfig({
  typescript: { shim: false },
  devtools: { enabled: true },
  css: ['@unocss/reset/tailwind-compat.css'],
  modules: ['@unocss/nuxt'],
})
