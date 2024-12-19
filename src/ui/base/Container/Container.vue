<script setup lang="ts">
import {wrapper} from './style'

const props = defineProps<{class?: string}>()
</script>

<template>
  <div :class="[wrapper().toString(), props.class]">
    <slot></slot>
  </div>
</template>
