<script setup lang="ts">
import {css} from './style'

const {name = 'default name'} = defineProps<{name: string}>()
</script>

<template>
  <div :class="css.wrapper()">
    <div>TestVue: {{ name }}</div>
  </div>
</template>
