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
  {
    title: 'PostgreSQL',
    description: '世界上最先进的开源关系数据库',
    image: 'https://www.postgresql.org/media/img/about/press/elephant.png',
    link: {
      name: 'PostgreSQL 新手入门',
      href: 'https://www.ruanyifeng.com/blog/2013/12/getting_started_with_postgresql.html',
    },
  },
  {
    title: 'Prisma',
    description: '开源 ORM 框架，支持包括 PostgreSQL、MySQL、SQLite 和 MongoDB 等多种数据库',
    image: 'data:image/png;base64,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',
    link: {
      name: '了解更多信息',
      href: 'https://www.prisma.io/',
    },
  },
  {
    title: '身份认证模块',
    description: '使用 Prisma + PostgreSQL 开发，包含 User 数据表、服务端 API、登录/注册组件',
    image: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxZW0iIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMjQgMjQiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZD0iTTIwIDEzLjA5VjdjMC0yLjIxLTMuNTgtNC04LTRTNCA0Ljc5IDQgN3YxMGMwIDIuMjEgMy41OSA0IDggNGMuNDYgMCAuOSAwIDEuMzMtLjA2QTUuOTQgNS45NCAwIDAgMSAxMyAxOXYtLjA1Yy0uMzIuMDUtLjY1LjA1LTEgLjA1Yy0zLjg3IDAtNi0xLjUtNi0ydi0yLjIzYzEuNjEuNzggMy43MiAxLjIzIDYgMS4yM2MuNjUgMCAxLjI3LS4wNCAxLjg4LS4xMUE1Ljk4NiA1Ljk4NiAwIDAgMSAxOSAxM2MuMzQgMCAuNjcuMDQgMSAuMDltLTItLjY0Yy0xLjMuOTUtMy41OCAxLjU1LTYgMS41NXMtNC43LS42LTYtMS41NVY5LjY0YzEuNDcuODMgMy42MSAxLjM2IDYgMS4zNnM0LjUzLS41MyA2LTEuMzZ6TTEyIDlDOC4xMyA5IDYgNy41IDYgN3MyLjEzLTIgNi0yczYgMS41IDYgMnMtMi4xMyAyLTYgMm0xMCA5djJoLTR2MmwtMy0zbDMtM3YyeiIvPjwvc3ZnPg==',
    link: {
      name: '查看使用文档',
      href: 'https://github.com/lianginx/nuxt3-starter/tree/authentication',
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
