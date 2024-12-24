<script setup lang="ts">
import {onBeforeUnmount, useTemplateRef, onMounted, ref} from 'vue'
import type {SelectProps} from './style'
import {defaultOptionToString, css} from './style'
import {commonCss} from '../../../styles'

const {
  class: cn,
  modelValue,
  optionToString = defaultOptionToString,
} = defineProps<SelectProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: SelectProps['modelValue']): void
}>()

const isOpen = ref(false)
const menuRef = useTemplateRef('menu')

function handleChange(option: SelectProps['modelValue']) {
  emit('update:modelValue', option)
  isOpen.value = false
}

function handleMissClick(e: MouseEvent) {
  if (!menuRef.value) return
  if (menuRef.value.contains(e.target as HTMLElement)) return

  isOpen.value = false
}

onMounted(() => document.addEventListener('click', handleMissClick))
onBeforeUnmount(() => document.removeEventListener('click', handleMissClick))
</script>

<template>
  <div :class="[css.wrapper(), cn]">
    <div v-if="label" :class="commonCss.label()">
      {{ label }}
    </div>

    <div :class="[css.input(), disabled && css.disabledInput()]" @click.stop="isOpen = !isOpen">
      <span>{{ optionToString(modelValue) }}</span>

      <div :data-open="isOpen" :class="css.inputIcon()">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" width="24" height="24" viewBox="0 0 24 24">
          <path d="M12 16c-.28 0-.52-.1-.72-.29l-6-6.01c-.47-.47-.47-.94.01-1.41.47-.48.94-.48 1.41-.01l5.3 5.31 5.28-5.3c.47-.4.93-.38 1.36.06.44.43.46.89.06 1.35l-6 6.01c-.2.19-.43.28-.7.29Z" />
        </svg>
      </div>
    </div>

    <div ref="menu" :class="css.menu()">
      <template v-if="isOpen">
        <div
          v-for="option in options"
          :key="option.value"
          :class="css.option()"
          @click="handleChange(option)"
        >
          <span>{{ optionToString(option) }}</span>
        </div>
      </template>
    </div>

    <div v-if="error" :class="commonCss.error()">
      {{ error }}
    </div>
  </div>
</template>
