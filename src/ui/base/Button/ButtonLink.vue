<script setup lang="ts">
import {useRouter} from 'vue-router'
import {styleAttr, button} from './style'

const props = defineProps<{
  type?: 'submit' | 'button'
  margin?: string
  fluid?: boolean
  class?: string
  target?: '_blank'
  to: string
}>()

const router = useRouter()

const emit = defineEmits<{
  (e: 'click', val: MouseEvent): void
}>()

function handleClick(e: MouseEvent) {
  if (!/^http/i.test(props.to)) {
    e.preventDefault()
    router.push(props.to)
  }

  emit('click', e)
}
</script>

<template>
  <a
    :href="to"
    :target="target"
    :style="styleAttr(margin, fluid)"
    :class="[button(), props.class]"
    @click="handleClick"
  >
    <slot />
  </a>
</template>
