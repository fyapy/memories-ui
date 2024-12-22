import type {ReadonlySignal} from '@preact/signals'
import {JSX, Ref} from 'preact'
import {commonCss} from 'styles'
import {clsx} from 'utils/dom'
import {css} from './style'

export interface InputProps {
  ref?: Ref<HTMLInputElement>
  name?: string
  type?: 'password' | 'number' | 'email' | 'date'
  autoComplete?: HTMLInputElement['autocomplete']
  label?: string
  textarea?: boolean
  placeholder?: string
  error?: ReadonlySignal<string> | string
  value?: ReadonlySignal<string> | string
  class?: string
  onChange?: JSX.GenericEventHandler<HTMLInputElement>
  onBlur?(): void
}

export const Input = ({
  ref,
  label,
  error,
  onChange,
  class: cn,
  textarea = false,
  ...rest
}: InputProps) => {
  const Comp = textarea === true ? 'textarea' : 'input'

  return (
    <div class={clsx(css.wrapper(), cn)}>
      {label && <div class={css.label()}>{label}</div>}

      <Comp
        ref={ref as any}
        onChange={onChange as any}
        class={css.input()}
        {...rest}
      />

      {error && <div class={commonCss.error()}>{error}</div>}
    </div>
  )
}
