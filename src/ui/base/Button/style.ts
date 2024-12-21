import {style} from 'styles/css'
import {center} from 'styles'

export const DEFAULT_HEIGHT = 38
export const DEFAULT_WIDTH = 300

export const buttonColor = {
  text: '#FFF',
  primary: '#FF8C02',
  hover: 'rgba(255, 140, 2, .5)',
  disabled: 'rgba(255, 255, 255, .1)',
  boxShadow: 'rgba(255, 117, 73, .4)',
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
  boxShadow: `0px 1px 10px 0px ${buttonColor.boxShadow}`,

  transition: 'all .3s ease',

  '&:not(:disabled):hover': {
    backgroundColor: buttonColor.hover,
  },
  '&:disabled': {
    boxShadow: 'none',
    color: buttonColor.disabled,
    cursor: 'default',
  },

  '> svg': {
    position: 'absolute',
    inset: '0',

    pointerEvents: 'none',
  },
})
