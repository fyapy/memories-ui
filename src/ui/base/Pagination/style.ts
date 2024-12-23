import {style} from 'styles'

export const css = {
  wrapper: style({
    margin: '12px 0 -12px',

    display: 'flex',
    justifyContent: 'center',
    columnGap: '4px',
  }),
  btn: style({
    height: '38px',
    width: '38px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    fontSize: '14px',
    fontWeight: '500',
    borderRadius: '10px',
    cursor: 'pointer',
    border: '1px solid rgba(255, 255, 255, .1)',

    transition: 'all .3s ease',

    '&:hover, &[data-active="true"]': {
      borderColor: '#FF8C02',
      boxShadow: 'rgba(255, 117, 73, 0.4) 0px 1px 10px 0px',
    },
  }),
}
