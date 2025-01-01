import {useRoute} from 'vue-router'
import {computed} from 'vue'

export function useParams<T extends Record<string, any>>() {
  const route = useRoute()

  return computed(() => route.params as T)
}
