<script setup lang="ts">
import {Sidebar} from '../ui/complex'
import {Container} from '../ui/base'
import {style} from '../styles/css'

const article = style({
  padding: '36px 0 36px 36px',

  flex: '1',
  display: 'flex',
  flexDirection: 'column',
})

const links = [
  {to: '/', text: 'Кнопки'},
  {to: '/forms', text: 'Формы'},
  {to: '/inputs', text: 'Инпуты'},
  {to: '/tables', text: 'Таблицы'},
  {onClick: () => console.log('logout'), text: 'Выйти'},
]
</script>

<template>
  <Container>
    <Sidebar :links="links" />

    <div :class="article()">
      <slot />
    </div>
  </Container>
</template>
