import {style} from 'styles'

export const css = {
  empty: style({
    height: '120px',
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
    textAlign: 'center',
    fontSize: '20px',
  }),
  table: style({
    width: '100%',
    borderSpacing: 0,
  }),
  th: style({
    padding: '0 10px 8px',

    color: '#969696',
    fontSize: 14,
    fontWeight: 500,
    textAlign: 'left',

    '&[data-right="true"]': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
  td: style({
    position: 'relative',
    zIndex: 1,

    padding: 0,

    whiteSpace: 'pre-line',

    '> *': {
      margin: '0 0 10px',
      padding: '0 10px',
      minHeight: 38,

      display: 'flex',
      alignItems: 'center',

      '&:before': {
        content: '',
        position: 'absolute',
        inset: 0,
        bottom: 10,
        zIndex: -1,

        backgroundColor: 'rgba(255, 255, 255, .1)',
      },
    },

    '&:first-of-type > *:before': {
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    '&:last-of-type > *:before': {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },

    '[data-right="true"]': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
}
