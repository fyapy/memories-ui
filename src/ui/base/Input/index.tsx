import {JSX} from 'preact/jsx-runtime'
import {Ref} from 'preact'
import {commonCss} from 'styles'
import {clsx} from 'utils/dom'
import {css} from './style'

export interface InputProps {
  ref?: Ref<HTMLInputElement>
  name?: string
  type?: 'password' | 'number' | 'email' | 'date'
  autoComplete?: HTMLInputElement['autocomplete']
  label?: string
  placeholder?: string
  error?: string
  value?: string
  class?: string
  onChange?: JSX.GenericEventHandler<HTMLInputElement>
  onBlur?(): void
}

export const Input = ({label, error, class: cn, ...rest}: InputProps) => (
  <div class={clsx(css.wrapper(), cn)}>
    {label && <div class={css.label()}>{label}</div>}

    <input class={css.input()} {...rest} />

    {error && <div class={commonCss.error()}>{error}</div>}
  </div>
)
