<script setup lang="ts">
import {names} from './constants'

const {name = 'asd'} = defineProps<{
  name?: string
}>()

console.log('names', names)
</script>

<template>
  <div>123 {{ name }}</div>
</template>
