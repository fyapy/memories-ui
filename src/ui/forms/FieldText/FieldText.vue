<script setup lang="ts">
import type {InputProps} from '../../base'
import {useField} from '../../../forms'
import {Input} from '../../base'

interface FieldTextProps extends Omit<InputProps, 'modelValue'> {
  name: string
}

const props = defineProps<FieldTextProps>()

const {error, value} = useField((props as FieldTextProps).name)
</script>

<template>
  <Input v-bind="props" v-model="value" :error="error" />
</template>
