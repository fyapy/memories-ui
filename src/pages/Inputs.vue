<script setup lang="ts">
import {ref} from 'vue'
import {type SelectOption, Select, Input, Card} from '../ui/base'

const options: SelectOption[] = [
  {label: 'Email', value: 'e'},
  {label: 'SSO', value: 'e'},
]

const option = ref(options[0])
</script>

<template>
  <Card>
    <Input placeholder="Введите номер" />
    <Select v-model="option" :options="options" />
    <Input label="Имя" placeholder="Введите имя" error="Ошибка валидации" />
    <Input label="Описание" placeholder="Введите описание" textarea />
  </Card>
</template>
