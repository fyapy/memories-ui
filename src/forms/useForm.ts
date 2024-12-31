import {onMounted, provide, inject, toRaw, ref} from 'vue'
import type {SubmissionHandler, FormOptions} from './types'
import type {AnyObject} from '../utils/object'
import {FormContextKey} from './types'
import {setIn} from '../utils/object'
import {markTouched} from './utils'

export function useForm<TValues extends AnyObject>({initialValues, validate}: FormOptions<TValues>) {
  const values = ref(initialValues)
  const errors = ref<AnyObject>({})
  const toucheds = ref<AnyObject>({})
  const isSubmitting = ref(false)

  function setSubmitting(value: boolean) {
    isSubmitting.value = value
  }
  function setFieldError(name: string, message: string) {
    setIn(errors.value, name, message)
  }

  async function validateForm() {
    if (typeof validate === 'undefined') {
      return true
    }

    const newErrors = {}
    await validate(values.value, newErrors)
    errors.value = newErrors

    return Object.keys(newErrors).length === 0
  }

  function reset(nextValues: TValues) {
    values.value = nextValues
  }

  const handleSubmit = (fn: SubmissionHandler<TValues>) => {
    toucheds.value = {...toucheds.value, ...markTouched(values.value)}

    isSubmitting.value = true
    validateForm()
      .then(valid => valid && fn(toRaw(values.value), {setFieldError, reset}))
      .catch(() => {})
      .finally(() => isSubmitting.value = false)
  }

  onMounted(validateForm)

  const context = {
    values,
    errors,
    toucheds,
    isSubmitting,
    reset,
    handleSubmit,
    setFieldError,
    setSubmitting,
    validate: validateForm,
  }

  provide(FormContextKey, context)

  return context
}

export type FormContext = ReturnType<typeof useForm<any>>

export const injectForm = () => inject<FormContext>(FormContextKey)!
