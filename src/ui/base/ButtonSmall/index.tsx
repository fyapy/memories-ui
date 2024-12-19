import {ComponentChildren} from 'preact'
import {clsx} from 'utils/dom'
import {button} from './style'

export interface ButtonSmallProps {
  margin?: string
  class?: string
  onClick?(e: MouseEvent): void
  children: ComponentChildren
}

export const ButtonSmall = ({class: cn, children, onClick, margin}: ButtonSmallProps) => {
  return (
    <div
      class={clsx(cn, button())}
      style={typeof margin === 'string' ? `margin:${margin};` : undefined}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
