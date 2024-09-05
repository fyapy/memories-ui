import {style} from 'styles'

export const css = {
  wrapper: style({
    margin: '36px 0',
    width: '190px',

    display: 'flex',
    flexDirection: 'column',
    rowGap: 4,
  }),
  link: style({
    height: '46px',
    padding: '0 20px',

    display: 'flex',
    alignItems: 'center',

    fontSize: 17,
    fontWeight: 500,
    cursor: 'pointer',
    color: '#C9CCCF',
    borderRadius: 10,

    '> div': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  }),
}
