<script setup lang="ts">
import {wrapper} from './style'
</script>

<template>
  <div :class="wrapper()">
    <slot />
  </div>
</template>
