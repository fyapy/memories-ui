<script setup lang="ts">
import type {Column} from '../ui/base'
import {ButtonSmall, Pagination, Table, Card} from '../ui/base'

const namesData = [
  {id: 1, name: 'Jorge'},
  {id: 2, name: 'Nina'},
  {id: 3, name: 'Mark'},
]
const namesColumns: Column[] = [
  {column: 'id', label: 'Id (width: 120)', maxWidth: 120},
  {column: 'name', label: 'Имя'},
  {column: 'actions', label: 'Действия', right: true},
]
</script>

<template>
  <Card>
    <Table :data="namesData" :columns="namesColumns">
      <template #column(actions)="{id}">
        <ButtonSmall @click="() => console.log('delete', id)">
          Удалить
        </ButtonSmall>
      </template>
    </Table>
    <Pagination
      :current-page="1"
      link="/tables"
      :pagin="{hasNext: true, total: 11, limit: 10}"
    />
  </Card>
</template>
