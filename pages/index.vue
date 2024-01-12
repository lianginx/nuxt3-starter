<script setup lang="ts">
import IconNuxt from '~icons/mdi/nuxt'
import type { CardProps } from '@/components/Card.vue'

const { x, y } = useMouse()
const { data: name } = useRequest<string>('/api/say', { query: { name: 'Nuxt' } })

const list: CardProps['value'][] = [
  {
    title: '基础预设',
    description: '自定义 useFetch 封装，简易打印 API 请求日志，vscode 推荐配置等',
    image: 'https://nuxt.com/icon.png',
    link: {
      name: '查看中文文档（第三方）',
      href: 'https://nuxt.com.cn/',
    },
  },
  {
    title: 'UnoCSS',
    description: '即时按需原子 CSS 引擎',
    image: 'https://unocss.dev/logo.svg',
    link: {
      name: '查看使用文档',
      href: 'https://unocss.dev/',
    },
  },
  {
    title: 'unplugin-icons',
    description: '随时按需访问成千上万的图标组件',
    image: 'https://api.iconify.design/mdi:auto-fix.svg',
    link: {
      name: '浏览全部图标',
      href: 'https://icones.js.org/',
    },
  },
  {
    title: 'ESLint',
    description: '静态代码分析的开源工具，维护一致的代码风格和提高代码质量',
    image: 'https://avatars.githubusercontent.com/u/6019716',
    link: {
      name: '了解 @antfu/eslint-config 配置',
      href: 'https://github.com/antfu/eslint-config/',
    },
  },
  {
    title: 'VueUse',
    description: '基于 Vue 组合式 API 的实用工具集',
    image: 'https://vueuse.org/favicon.svg',
    link: {
      name: '查看使用文档',
      href: 'https://vueuse.org/',
    },
  },
  {
    title: 'NPM 加速',
    description: '使用阿里 npmmirror 镜像站，加速国内访问',
    image: 'https://www.npmmirror.com/cnpm.png',
    link: {
      name: '了解 npmmirror 镜像站',
      href: 'https://www.npmmirror.com/',
    },
  },
]
</script>

<template>
  <div class="mx-auto h-screen" flex="~ col items-center justify-center">
    <div class="mb-10 space-y-sm" flex="~ col items-center">
      <div class="font-bold" flex="~ items-center" text="4xl green-6">
        <IconNuxt class="mr-1" /><span>Wellcome to {{ name }}</span>
      </div>
      <div class="text-gray-5">
        零配置 Nuxt 3 项目启动模板，集成 UnoCSS、ESLint、VueUse 等实用库
      </div>
    </div>
    <div grid="~ cols-3 gap-6" w="11/12">
      <Card v-for="item in list" :key="item.title" :value="item">
        <template v-if="item.title === 'VueUse'" #suffix>
          <br>
          <span>鼠标坐标：</span>
          <code>{{ x }}</code>
          <span>,</span>
          <code>{{ y }}</code>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
code {
  @apply font-mono bg-white px-1.5 rounded;
}
</style>
