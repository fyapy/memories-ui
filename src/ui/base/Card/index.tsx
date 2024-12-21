import {ComponentChildren} from 'preact'
import {style} from 'styles/css'
import {clsx} from 'utils/dom'
import {media} from 'styles'

interface Props {
  class?: string
  maxWidth?: number
  children?: ComponentChildren
}

const wrapper = style({
  minWidth: '444px',
  padding: '32px',

  borderRadius: '10px',
  whiteSpace: 'pre-line',
  backgroundColor: '#141414',
  boxShadow: '0px 6px 6px 0px rgba(0, 0, 0, 0.25)',

  [media.xsMobile]: {
    minWidth: 'initial',
    width: '100%',
    padding: '0',

    backgroundColor: 'initial',
    boxShadow: 'initial',
  },
})

export const Card = ({class: cn, maxWidth, children}: Props) => (
  <div
    class={clsx(wrapper(), cn)}
    style={typeof maxWidth === 'number' ? `max-width:${maxWidth}px;` : undefined}
  >
    {children}
  </div>
)
