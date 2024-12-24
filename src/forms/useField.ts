import type {Ref} from 'vue'
import {computed, watch} from 'vue'
import {getIn, setIn} from '../utils/object'
import {injectForm} from './useForm'

type FieldOptions = {markTouchOnChange?: boolean}
const defaultOptions: FieldOptions = {markTouchOnChange: false}

export function useField<TValue = string>(name: string, options = defaultOptions) {
  const form = injectForm()

  function handleBlur() {
    setIn(form.toucheds.value, name, true)
  }
  function setValue(newValue: TValue) {
    setIn(form.values.value, name, newValue)

    if (options.markTouchOnChange) {
      handleBlur()
    }
  }

  const touched = computed(() => getIn(form.toucheds.value, name, false))
  const error = computed(() => touched.value ? getIn(form.errors.value, name) : undefined)
  const value = computed<TValue>({
    get() {
      console.log('')
      return getIn(form.values.value, name) as TValue
    },
    set(newVal) {
      setValue(newVal)
    },
  }) as Ref<TValue>

  watch(value, form.validate)

  return {
    error,
    value,
    touched,
    setValue,
    handleBlur,
  }
}
