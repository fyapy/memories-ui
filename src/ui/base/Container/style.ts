import {style} from '@/styles'

export const variables = {
  width: 1200,
}

export const wrapper = style({
  width: '100%',
  maxWidth: `${variables.width}px`,
  minHeight: '100vh',
  padding: '0 10px',
  margin: '0 auto',
  
  display: 'flex',
})
  