import {style} from '../../../styles/css'

export interface InputProps {
  name?: string
  type?: 'password' | 'number' | 'email' | 'date'
  autoComplete?: HTMLInputElement['autocomplete']
  label?: string
  textarea?: boolean
  placeholder?: string
  error?: string
  value?: string
  class?: string
}

export const css = {
  wrapper: style({
    marginBottom: '16px',

    display: 'flex',
    flexDirection: 'column',
    flex: '1',

    textarea: {
      minHeight: '72px',

      resize: 'none',
    },
  }),
  label: style({
    margin: '0 0 9px 9px',

    fontSize: '14px',
    fontWeight: '500',
    color: '#969696',
  }),
  input: style({
    padding: '10px 10px',
    lineHeight: '1',

    backgroundColor: 'rgba(255, 255, 255, .1)',
    borderRadius: '10px',
    outline: 'none',
    border: 'none',
    color: '#FFF',

    '&::placeholder': {
      fontWeight: '500',
    },
  }),
}
