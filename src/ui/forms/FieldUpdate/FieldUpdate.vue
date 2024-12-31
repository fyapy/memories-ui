<script setup lang="ts">
import {type UploadProps, Upload} from '../../base'
import {useField} from '../../../forms'

interface FieldUploadProps extends Omit<UploadProps, 'modelValue'> {
  name: string
}

const props = defineProps<FieldUploadProps>()

const {error, value} = useField<UploadProps['modelValue']>(props.name)
</script>

<template>
  <Upload v-bind="props" v-model="value" :error="error" />
</template>
