<script setup lang="ts">
import {Button, ButtonLink} from '../ui/base/Button'
import {Card} from '../ui/base/Card'
</script>

<template>
  <Card>
    <Button>Создать default</Button>
    <Button margin="20px 0">Создать margin</Button>
    <Button fluid>Создать fluid</Button>
    <ButtonLink to="/tables" margin="20px 0">navigate table</ButtonLink>
    <ButtonLink to="https://google.com">redirect google.com</ButtonLink>
  </Card>
</template>
