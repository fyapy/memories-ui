import {style} from '../../../css'

export interface InputProps {
  modelValue?: string
  name?: string
  type?: 'password' | 'number' | 'email' | 'date'
  autoComplete?: HTMLInputElement['autocomplete']
  label?: string
  textarea?: boolean
  placeholder?: string
  error?: string
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

    backgroundColor: 'rgba(255, 255, 255, .1)',
    borderRadius: '10px',
    lineHeight: '1',
    outline: 'none',
    border: 'none',
    color: '#FFF',

    '&:placeholder': {
      color: '#757575',
      fontWeight: '500',
    },
  }),
}
