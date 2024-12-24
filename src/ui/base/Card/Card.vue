<script setup lang="ts">
import {wrapper} from './style'

const props = defineProps<{
  maxWidth?: number
  class?: string
}>()
</script>

<template>
  <div
    :class="[wrapper(), props.class]"
    :style="typeof props.maxWidth === 'number' ? `max-width:${props.maxWidth}px;` : undefined"
  >
    <slot />
  </div>
</template>
