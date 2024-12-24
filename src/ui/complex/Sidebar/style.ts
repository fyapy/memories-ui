import {style} from '../../../css'

export const css = {
  wrapper: style({
    margin: '36px 0',
    width: '190px',

    display: 'flex',
    flexDirection: 'column',
    rowGap: '4px',
  }),
  link: style({
    height: '46px',
    padding: '0 20px',

    display: 'flex',
    alignItems: 'center',

    fontSize: '17px',
    fontWeight: '500',
    cursor: 'pointer',
    color: '#C9CCCF',
    borderRadius: '10px',

    '> div': {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  }),
}
