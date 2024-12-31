import {center, style} from '../../../styles'

export const DEFAULT_HEIGHT = 38
export const DEFAULT_WIDTH = 300

export const buttonColor = {
  text: '#FFF',
  primary: '#FF8C02',
  hover: 'rgba(255, 140, 2, .5)',
}

export function styleAttr(margin?: string, fluid?: boolean) {
  let style = ''

  if (fluid === true) style += 'max-width:initial;'
  if (typeof margin === 'string') style += `margin:${margin};`

  return style
}

export const button = style({
  position: 'relative',

  width: '100%',
  maxWidth: `${DEFAULT_WIDTH}px`,
  minHeight: `${DEFAULT_HEIGHT}px`,
  padding: '8px 20px',

  ...center,

  fontSize: '14px',
  fontWeight: '500',
  cursor: 'pointer',
  color: buttonColor.text,
  borderRadius: '10px',
  border: `1px solid ${buttonColor.primary}`,

  transition: 'all .3s ease',

  '&:not(:disabled):hover': {
    backgroundColor: buttonColor.hover,
  },
  '&:disabled': {
    cursor: 'default',
    opacity: '.3',
  },

  '> svg': {
    position: 'absolute',
    inset: '0',

    pointerEvents: 'none',
  },
})
