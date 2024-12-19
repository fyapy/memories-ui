import {ComponentChildren} from 'preact'
import {style} from 'styles'

interface ContainerProps {
  class?: string
  children: ComponentChildren
}

const variables = {
  width: 1200,
}

const wrapper = style({
  width: '100%',
  maxWidth: `${variables.width}px`,
  minHeight: '100vh',
  padding: '0 10px',
  margin: '0 auto',

  display: 'flex',
})

export const Container = ({class: cn, children}: ContainerProps) => {
  const classes = typeof cn === 'string' ? `${cn} ${wrapper()}` : wrapper()

  return <div class={classes}>{children}</div>
}

Container.variables = variables
