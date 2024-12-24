<script setup lang="ts">
import {styleAttr, button} from './style'

const props = defineProps<{
  type?: 'submit' | 'button'
  disabled?: boolean
  margin?: string
  fluid?: boolean
  class?: string
}>()

const emits = defineEmits<{
  (e: 'click', val: MouseEvent): void
}>()

const handleClick = (e: MouseEvent) => emits('click', e)
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    :style="styleAttr(margin, fluid)"
    :class="[button(), props.class]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>
