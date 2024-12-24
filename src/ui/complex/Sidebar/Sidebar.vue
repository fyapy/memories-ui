<script setup lang="ts">
import {useRoute} from 'vue-router'
import {css} from './style'

const {links} = defineProps<{
  links: Array<{
    to?: string
    onClick?(): void
    text: string
  }>
}>()

const route = useRoute()
</script>

<template>
  <div :class="css.wrapper()">
    <template v-for="{text, onClick, to} in links" :key="to">
      <router-link
        v-if="typeof to === 'string'"
        :style="route.path === to ? 'background-color: #232324' : undefined"
        :class="css.link()"
        :to="to"
      >
        {{ text }}
      </router-link>
      <div
        v-else
        :class="css.link()"
        @click="onClick"
      >
        {{ text }}
      </div>
    </template>
  </div>
</template>
