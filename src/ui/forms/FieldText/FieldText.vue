<script setup lang="ts">
import type {InputProps} from '../../base'
import {useField} from '../../../forms'
import {Input} from '../../base'

interface FieldTextProps extends InputProps {
  name: string
}

const props = defineProps<FieldTextProps>()

const {error, value, setValue} = useField((props as FieldTextProps).name)
</script>

<template>
  <Input
    v-bind="props"
    :error="error"
    :value="value"
    @change="e => setValue((e.currentTarget as HTMLInputElement).value)"
  />
</template>
