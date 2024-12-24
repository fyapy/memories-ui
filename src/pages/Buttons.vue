<script setup lang="ts">
import {ButtonLink, Button, Card} from '../ui/base'
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
