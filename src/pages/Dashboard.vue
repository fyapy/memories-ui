<script setup lang="ts">
import Container from '../ui/base/Container/Container.vue'
import {style} from '../styles/css'
import Sidebar from '../ui/complex/Sidebar/Sidebar.vue';

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
      <slot></slot>
    </div>
  </Container>
</template>
