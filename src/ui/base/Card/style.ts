import {media, style} from '../../../styles'

export const wrapper = style({
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
