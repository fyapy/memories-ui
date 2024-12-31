<script setup lang="ts">
import type {SubmissionHandler} from './types'
import {injectForm} from './useForm'

const props = defineProps<{
  submit: SubmissionHandler<any>
  class?: string
}>()

const form = injectForm()
</script>

<template>
  <form :class="props.class" @submit.prevent.stop="form.handleSubmit(props.submit)">
    <slot />
  </form>
</template>
