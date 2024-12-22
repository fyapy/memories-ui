/* eslint-disable react-refresh/only-export-components */
import {ComponentChildren, createContext} from 'preact'
import {useContext, useEffect} from 'preact/hooks'
import {useSignal} from '@preact/signals'
import {type AnyObject, setIn} from 'utils/object'
import {SubmissionHandler, FormOptions} from './types'

export function useForm<TValues extends AnyObject>({initialValues, validate}: FormOptions<TValues>) {
  const values = useSignal(initialValues)
  const errors = useSignal<AnyObject>({})
  const toucheds = useSignal<AnyObject>({})
  const isSubmitting = useSignal(false)

  async function validateForm() {
    if (typeof validate === 'undefined') {
      return true
    }

    const newErrors = {}
    await validate(values.value, newErrors)
    errors.value = newErrors

    return Object.keys(newErrors).length === 0
  }

  function setFieldError(name: string, message: string) {
    setIn(errors.value, name, message)
  }

  function reset(nextValues: TValues) {
    values.value = nextValues
  }

  const handleSubmit = (fn: SubmissionHandler<TValues>) => (e: unknown) => {
    if (e instanceof Event) {
      e.preventDefault()
      e.stopPropagation()
    }

    const newToucheds = Object.keys(values.value).reduce((acc, key) => {
      acc[key] = true
      return acc
    }, {} as AnyObject)
    toucheds.value = {...toucheds.value, ...newToucheds}

    isSubmitting.value = true
    validateForm()
      .then(valid => valid && fn(values.value, {setFieldError, reset}))
      .catch(() => {})
      .finally(() => isSubmitting.value = false)
  }

  useEffect(() => {
    validateForm()
  }, [])

  return {
    values,
    errors,
    toucheds,
    isSubmitting,
    reset,
    handleSubmit,
    setFieldError,
    validate: validateForm,
  }
}

export type FormContext = ReturnType<typeof useForm<any>>

const FormContext = createContext({} as FormContext)

export const useFormContext = () => useContext(FormContext)

interface FormProps extends FormContext {
  onSubmit: SubmissionHandler<AnyObject>
  children?: ComponentChildren
  class?: string
}

export const Form = ({children, class: cn, onSubmit, ...value}: FormProps) => (
  <FormContext.Provider value={value}>
    <form class={cn} onSubmit={value.handleSubmit(onSubmit)}>
      {children}
    </form>
  </FormContext.Provider>
)

export {useField} from './useField'
