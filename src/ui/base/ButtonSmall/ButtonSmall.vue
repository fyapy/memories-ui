<script setup lang="ts">
import { button } from './style';

const props = defineProps<{
  margin?: string
  class?: string
}>()

const emit = defineEmits<{
  (e: 'click', val: MouseEvent): void
}>()
</script>

<template>
  <div
    :class="[button(), props.class]"
    :style="typeof margin === 'string' ? `margin:${margin}` : undefined"
    @click="e => emit('click', e)"
  >
    <slot></slot>
  </div>
</template>
