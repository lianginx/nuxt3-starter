export default defineNuxtConfig({
  typescript: { shim: false },
  devtools: { enabled: true },
  css: [
    '@unocss/reset/tailwind-compat.css',
  ],
  runtimeConfig: {
    secret: '',
  },
  modules: [
    '@unocss/nuxt',
    'unplugin-icons/nuxt',
    '@vueuse/nuxt',
  ],
})
