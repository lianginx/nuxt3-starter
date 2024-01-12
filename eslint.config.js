import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  vue: true,
  unocss: true,
  formatters: {
    markdown: true,
    css: true,
  },
})
