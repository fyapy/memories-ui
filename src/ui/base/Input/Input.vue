<script setup lang="ts">
import type {InputProps} from './style'
import {commonCss} from '../../../styles'
import {css} from './style'

const props = defineProps<InputProps>()

defineEmits<{
  (e: 'blur', val: FocusEvent): void
  (e: 'update:modelValue', val: InputProps['modelValue']): void
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
      :value="modelValue"
      :placeholder="placeholder"
      :autocomplete="autoComplete"
      @blur="(e: FocusEvent) => $emit('blur', e)"
      @change="(e: Event) => $emit('update:modelValue', (e.currentTarget as HTMLInputElement).value)"
    />

    <div v-if="error" :class="commonCss.error()">
      {{ error }}
    </div>
  </div>
</template>
