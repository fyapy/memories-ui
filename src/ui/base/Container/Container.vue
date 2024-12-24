<script setup lang="ts">
import {wrapper} from './style'

const props = defineProps<{class?: string}>()
</script>

<template>
  <div :class="[props.class, wrapper()]">
    <slot />
  </div>
</template>
