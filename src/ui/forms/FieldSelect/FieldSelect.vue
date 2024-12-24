<script setup lang="ts">
import type {SelectOption, SelectProps} from '../../base'
import {useField} from '../../../forms'
import {Select} from '../../base'

interface FieldSelectProps extends Omit<SelectProps, 'modelValue'> {
  name: string
}

const props = defineProps<FieldSelectProps>()

const {error, value} = useField<SelectOption>((props as FieldSelectProps).name)
</script>

<template>
  <Select v-bind="props" v-model="value" :error="error" />
</template>
