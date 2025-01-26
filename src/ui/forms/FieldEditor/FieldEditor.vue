<script setup lang="ts">
import {onBeforeUnmount, useTemplateRef, onMounted, watch, toRaw} from 'vue'
import Underline from '@editorjs/underline'
import Paragraph from '@editorjs/paragraph'
import EditorJS from '@editorjs/editorjs'
import ImageTool from '@editorjs/image'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import List from '@editorjs/list'
import {jsonParse} from '../../../utils/normalize'
import {type ImageConfig, css} from './style'
import {commonCss} from '../../../styles'
import {useField} from '../../../forms'

const props = defineProps<{
  name: string
  label?: string
  placeholder?: string
  imageConfig?: ImageConfig
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
    tools: {
      header: {class: Header as any, config: {defaultLevel: 3}},
      list: {
        class: List as any,
        inlineToolbar: true,
        config: {defaultStyle: 'unordered'},
      },
      quote: Quote,
      underline: Underline,
      paragraph: {class: Paragraph as any, inlineToolbar: true},
      image: {
        class: ImageTool,
        config: props.imageConfig || {},
      },
    },
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
