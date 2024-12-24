<script setup lang="ts">
import {Card} from '../ui/base/Card'
import {Input} from '../ui/base/Input'
</script>

<template>
  <Card>
    <Input placeholder="Введите номер" />
    <Input label="Имя" placeholder="Введите имя" error="Ошибка валидации" />
    <Input label="Описание" placeholder="Введите описание" textarea />
  </Card>
</template>
