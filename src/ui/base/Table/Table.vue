<script setup lang="ts" generic="T extends AnyObject = AnyObject">
import {useRouter} from 'vue-router'
import {computed} from 'vue'
import type {Column} from '../types'
import {type AnyObject, getIn} from '../../../utils/object'
import {css} from './style'

defineSlots<Record<string, (item: T) => void>>()

const props = defineProps<{
  link?(item: T): string
  columns: Column[]
  data: T[]
}>()

const router = useRouter()

const linkClass = computed(() => typeof props.link === 'undefined' ? undefined : css.link())
</script>

<template>
  <div v-if="data.length === 0" :class="css.empty()">
    Тут пусто :(
  </div>
  <div v-else>
    <table :class="css.table()">
      <thead>
        <tr>
          <th
            v-for="column in columns"
            :key="column.label"
            :data-right="column.right"
            :class="css.th()"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="item.id || index">
          <td
            v-for="column in columns"
            :key="column.label"
            :class="css.td()"
            :style="typeof column.maxWidth === 'number' ? `width: ${column.maxWidth}px` : undefined"
          >
            <div
              :class="linkClass"
              :data-right="column.right"
              @click="typeof link === 'undefined' ? undefined : router.push(link(item))"
            >
              <slot :name="`column(${column.column})`" v-bind="item">
                {{ getIn(item, column.column) }}
              </slot>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
