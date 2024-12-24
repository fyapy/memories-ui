import {style} from '../../../styles'

export const button = style({
  padding: '0 10px',
  height: '21px',

  display: 'inline-flex',
  alignItems: 'center',

  fontWeight: '500',
  fontSize: '13px',
  color: '#c9cccf',
  cursor: 'pointer',
  backgroundColor: '#333',
  borderRadius: '8px',

  transition: 'all .3s ease',

  '&:hover': {
    backgroundColor: '#2c2c2c',
  },
})
