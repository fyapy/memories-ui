import {describe, expect, test} from 'vitest'
import {parser} from './parser'
import {media} from '../index'

describe('style/css/parser', () => {
  test('css object should be parsed', () => {
    const cssom = parser({
      position: 'relative',
      zIndex: '1',

      '> *': {
        margin: '0 0 10px',
        padding: '0 10px',

        '&:before': {
          content: '',
          position: 'absolute',
          inset: '0',

          [media.xsMobile]: {
            zIndex: '1',
          },
        },
      },

      [media.xsMobile]: {
        zIndex: '0',

        '&:after': {
          content: '',
        },
      },
    })

    expect(cssom).toEqual({
      media: {
        '@media screen and (max-width: 619px)': [
          ['z-index:1;', '` > *:before'],
          ['z-index:0;', '`'],
          ['content:\'\';', '`:after'],
        ],
      },
      parsed: [
        ['position:relative;z-index:1;', '`'],
        ['margin:0 0 10px;padding:0 10px;', '` > *'],
        ['content:\'\';position:absolute;inset:0;', '` > *:before'],
      ],
    })
  })
})
