<script setup lang="ts">
import {useRouter} from 'vue-router'
import {computed} from 'vue'
import type {PaginationState} from '../types'
import {css} from './style'

const {pagin, currentPage, link} = defineProps<{
  link: ((page: number) => void) | string
  currentPage: number
  pagin: PaginationState
}>()

const router = useRouter()

const pageCount = computed(() => Math.ceil(pagin.total / pagin.limit))
const prevPage = computed(() => currentPage - 1)
const nextPage = computed(() => currentPage + 1)
const nextAfterOnePage = computed(() => currentPage + 2)

const visible = computed(() => !(Number.isNaN(pageCount) || [1, 0].includes(pageCount.value)))

function handleRedirect(page: number) {
  if (typeof link === 'function') return link(page)

  const searchParams = new URLSearchParams(router.currentRoute.value.query as Record<string, string>)

  searchParams.delete('page')
  if (page !== 1) searchParams.append('page', `${page}`)

  router.push(`${link}${searchParams && `?${searchParams}`}`)
}
</script>

<template>
  <div v-if="visible" :class="css.wrapper()">
    <div
      v-if="currentPage - 2 > 0"
      :class="css.btn()"
      :data-active="currentPage === 1"
      @click="handleRedirect(1)"
    >
      {{ '<' }}
    </div>

    <div
      v-if="prevPage - 1 > 0"
      :class="css.btn()"
      :data-active="currentPage === prevPage - 1"
      @click="handleRedirect(prevPage - 1)"
    >
      {{ prevPage - 1 }}
    </div>

    <div
      v-if="prevPage > 0"
      :class="css.btn()"
      :data-active="currentPage === prevPage"
      @click="handleRedirect(prevPage)"
    >
      {{ prevPage }}
    </div>

    <div
      :class="css.btn()"
      :data-active="true"
      @click="handleRedirect(currentPage)"
    >
      {{ currentPage }}
    </div>

    <div
      v-if="nextPage <= pageCount"
      :class="css.btn()"
      :data-active="currentPage === nextPage"
      @click="handleRedirect(nextPage)"
    >
      {{ nextPage }}
    </div>

    <div
      v-if="nextAfterOnePage <= pageCount"
      :class="css.btn()"
      :data-active="currentPage === nextAfterOnePage"
      @click="handleRedirect(nextAfterOnePage)"
    >
      {{ nextAfterOnePage }}
    </div>

    <div
      v-if="currentPage + 2 < pageCount"
      :class="css.btn()"
      :data-active="currentPage === pageCount"
      @click="handleRedirect(pageCount)"
    >
      >
    </div>
  </div>
</template>
