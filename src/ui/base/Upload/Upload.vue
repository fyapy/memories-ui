<script setup lang="ts">
import {computed} from 'vue'
import type {UploadProps} from './style'
import {fixed} from '../../../utils/number'
import {commonCss} from '../../../styles'
import {css} from './style'
import {Tag} from '../Tag'

const {
  modelValue,
  multiple = false,
  placeholder = 'Загрузить файл',
} = defineProps<UploadProps>()

const emit = defineEmits<{
  (e: 'update:modelValue', files: UploadProps['modelValue']): void
}>()

function handleChange(e: Event) {
  const files = (e.currentTarget as HTMLInputElement).files

  emit('update:modelValue', multiple
    ? files
    : (files?.length
      ? files[0]
      : null))
}

const fileToItem = (file: File) => ({
  mb: fixed(file.size / (1024 * 1024)),
  name: file.name,
  type: file.type,
})

const files = computed(() => {
  if (modelValue instanceof FileList) {
    return Array.from(modelValue).map(fileToItem)
  }
  if (modelValue instanceof File) {
    return [fileToItem(modelValue)]
  }

  return []
})
</script>

<template>
  <div :class="css.wrapper()">
    <div v-if="label" :class="commonCss.label()">
      {{ label }}
    </div>

    <div :class="css.buttonWrapper()">
      <label :class="css.button()" :data-disabled="disabled">
        <span>{{ placeholder }}</span>
        <input type="file" hidden :multiple="multiple" :disabled="disabled" @change="handleChange">
      </label>
    </div>

    <div v-if="files.length" :class="css.tags()">
      <Tag v-for="file in files" :key="file.name">
        {{ file.name }} - {{ file.mb }} MB
      </Tag>
    </div>

    <div v-if="error" :class="commonCss.error()">
      {{ error }}
    </div>
  </div>
</template>
