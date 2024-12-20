import {style} from 'styles'

export const css = {
  wrapper: style({
    marginBottom: '16px',

    display: 'flex',
    flexDirection: 'column',
    flex: '1',
  }),
  label: style({
    margin: '0 0 9px 9px',

    fontSize: '14px',
    fontWeight: '500',
    color: '#969696',
  }),
  input: style({
    height: '38px',
    padding: '0 10px',

    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, .1)',
    border: 'none',
    outline: 'none',
    color: '#FFF',

    '&::placeholder': {
      fontWeight: '500',
    },
  }),
}
