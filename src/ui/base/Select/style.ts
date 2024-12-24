import {alignCenter, flexColumn, style} from '../../../styles'

export const css = {
  wrapper: style({
    position: 'relative',

    marginBottom: '16px',
  }),
  input: style({
    position: 'relative',

    height: '38px',
    padding: '0 0 0 10px',

    ...alignCenter,

    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    userSelect: 'none',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',

    '&:focus-visible': {
      outline: 'none',
    },
  }),
  inputIcon: style({
    '&[data-open="true"]': {
      transform: 'translateY(-50%) rotate(180deg)',
    },

    '> svg': {
      position: 'absolute',
      right: '8px',
      top: '50%',

      transform: 'translateY(-50%)',
      transition: 'transform .3s ease',
    },
  }),
  disabledInput: style({
    pointerEvents: 'none',
    opacity: '.1',
  }),
  menu: style({
    position: 'absolute',
    right: '0',
    left: '0',
    top: 'calc(100% + 4px)',
    zIndex: '10',

    ...flexColumn,

    borderRadius: '10px',
    backgroundColor: '#2C2C2C',
    boxShadow: '0px 3px 6px 0px rgba(0, 0, 0, 0.25)',
  }),
  option: style({
    position: 'relative',

    height: '38px',
    padding: '0 10px',

    ...alignCenter,

    cursor: 'pointer',
    border: '1px solid transparent',
    transition: 'border .3s ease',

    '&:first-of-type': {
      borderTopLeftRadius: '10px',
      borderTopRightRadius: '10px',
    },
    '&:last-of-type': {
      borderBottomLeftRadius: '10px',
      borderBottomRightRadius: '10px',
    },

    // '&[data-disabled="true"]': {
    //   pointerEvents: 'none',
    //   backgroundColor: '#1C1C1C',
    //   opacity: '.3',
    // },
    '&:hover': {
      borderColor: '#FF8C02',
    },
  }),
  // disabledText: style({
  //   position: 'absolute',
  //   right: '10px',
  //   top: '50%',

  //   fontSize: '11px',

  //   transform: 'translateY(-50%)',
  // }),
}
