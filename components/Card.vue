<script lang="ts" setup>
import IconArrowRight from '~icons/mdi/arrow-right'

export interface CardProps {
  value: {
    title: string
    description: string
    image?: string
    link?: {
      name: string
      href: string
    }
  }
}
defineProps<CardProps>()
</script>

<template>
  <div
    class="group rounded-xl bg-gray-1 p-8 text-sm space-y-xl"
    flex="~ col justify-between"
    border="~ transparent hover:green-6"
  >
    <div class="space-y-xs">
      <img v-if="value.image" class="w-8 rounded-md" :src="value.image" :alt="value.title">
      <div class="text-base text-gray-8 font-bold">
        {{ value.title }}
      </div>
      <div class="text-gray-5">
        <slot name="prefix" />
        {{ value.description }}
        <slot name="suffix" />
      </div>
    </div>
    <a
      v-if="value.link" class="flex items-center space-x-1" text-green="7 group-hover:6"
      :href="value.link.href" target="_blank"
    >
      <span>{{ value.link.name }}</span>
      <IconArrowRight />
    </a>
  </div>
</template>

<style scoped>

</style>
