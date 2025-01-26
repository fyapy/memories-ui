<script setup lang="ts">
import {onBeforeUnmount, useTemplateRef, onMounted, watch, toRaw} from 'vue'
import EditorJS from '@editorjs/editorjs'
import {jsonParse} from '../../../utils/normalize'
import {getEditorTools, css} from './style'
import {commonCss} from '../../../styles'
import {useField} from '../../../forms'

const props = defineProps<{
  name: string
  label?: string
  placeholder?: string
}>()

const editorRef = useTemplateRef('editorRef')

const {error, value, form} = useField(props.name)

let editor: EditorJS

function initEditor() {
  editor = new EditorJS({
    holder: editorRef.value!,
    data: {
      blocks: jsonParse(toRaw(value.value)),
    },
    minHeight: 50,
    placeholder: props.placeholder,
    hideToolbar: false,
    tools: getEditorTools(),
    onChange(editor) {
      form.setSubmitting(true)

      editor.saver.save().then(data => {
        value.value = JSON.stringify(data.blocks)
        form.setSubmitting(false)
      })
    },
  })
}

onMounted(initEditor)
watch(() => props.name, initEditor)

onBeforeUnmount(() => {
  editor?.destroy?.()
})
</script>

<template>
  <div :class="css.wrapper()">
    <div v-if="label" :class="css.label()">{{ label }}</div>

    <div>
      <div ref="editorRef" />
    </div>

    <div v-if="error" :class="commonCss.error()">{{ error }}</div>
  </div>
</template>
