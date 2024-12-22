import {useComputed} from '@preact/signals'
import {useFormContext} from 'forms'
import {getIn, setIn} from 'utils/object'

type FieldOptions = {markTouchOnChange?: boolean}
const defaultOptions: FieldOptions = {markTouchOnChange: false}

export function useField<TValue = string>(name: string, options = defaultOptions) {
  const form = useFormContext()

  function handleBlur() {
    setIn(form.toucheds.value, name, true)
  }
  function setValue(newValue: TValue) {
    setIn(form.values.value, name, newValue)

    if (options.markTouchOnChange) {
      handleBlur()
    }
  }

  const value = useComputed(() => getIn(form.values.value, name))
  const touched = useComputed(() => getIn(form.toucheds.value, name, false))
  const error = useComputed(() => touched.value ? getIn(form.errors.value, name) : undefined)

  const input = {
    onChange(e: Event) {
      setValue((e.currentTarget as HTMLInputElement).value as TValue)
    },
    value,
  }

  return {error, value, touched, input, setValue, handleBlur}
}
