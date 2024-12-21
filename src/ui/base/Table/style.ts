// import {css as style} from '@stitches/core'
import {style} from 'styles/css'

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
    borderSpacing: '0',

    'tbody tr:last-of-type td > *': {
      marginBottom: '0',

      '&:before': {
        bottom: '0',
      },
    },
  }),
  th: style({
    padding: '0 10px 8px',

    color: '#969696',
    fontSize: '14px',
    fontWeight: '500',
    textAlign: 'left',

    '&[data-right="true"]': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
  td: style({
    position: 'relative',
    zIndex: '1',

    padding: '0',

    whiteSpace: 'pre-line',

    '> *': {
      margin: '0 0 10px',
      padding: '0 10px',
      minHeight: '38px',

      display: 'flex',
      alignItems: 'center',

      '&:before': {
        content: '',
        position: 'absolute',
        inset: '0',
        bottom: '10px',
        zIndex: '-1',

        backgroundColor: 'rgba(255, 255, 255, .1)',
      },
    },

    '&:first-of-type > *:before': {
      borderTopLeftRadius: '10px',
      borderBottomLeftRadius: '10px',
    },
    '&:last-of-type > *:before': {
      borderTopRightRadius: '10px',
      borderBottomRightRadius: '10px',
    },

    '[data-right="true"]': {
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
}