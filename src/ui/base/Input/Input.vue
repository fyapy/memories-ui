<script setup lang="ts">
import type {InputProps} from './style'
import {commonCss} from '../../../styles'
import {css} from './style'

const props = defineProps<InputProps>()

defineEmits<{
  (e: 'change', val: Event): void
  (e: 'blur', val: FocusEvent): void
}>()
</script>

<template>
  <div :class="[css.wrapper(), (props as any).class]">
    <div :class="css.label()">
      {{ label }}
    </div>

    <component
      :is="textarea ? 'textarea' : 'input'"
      :class="css.input()"
      :name="name"
      :type="type"
      :autocomplete="autoComplete"
      :placeholder="placeholder"
      :value="value"
      @change="(e: Event) => $emit('change', e)"
      @blur="(e: FocusEvent) => $emit('blur', e)"
    />

    <div v-if="error" :class="commonCss.error()">
      {{ error }}
    </div>
  </div>
</template>
