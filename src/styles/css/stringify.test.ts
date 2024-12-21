import {describe, expect, test} from 'vitest'
import {stringify} from './stringify'

describe('style/css/stringify', () => {
  test('parsed css object should be stringifyed', () => {
    const cssom = {
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
    }

    expect(stringify(cssom)).toEqual([
      'cG9zaXRp',
      [
        '.cG9zaXRp{position:relative;z-index:1;}',
        '.cG9zaXRp > *{margin:0 0 10px;padding:0 10px;}',
        '.cG9zaXRp > *:before{content:\'\';position:absolute;inset:0;}',
        `@media screen and (max-width: 619px){${[
          '.cG9zaXRp > *:before{z-index:1;}',
          '.cG9zaXRp{z-index:0;}',
          '.cG9zaXRp:after{content:\'\';}',
        ].join('')}}`,
      ].join(''),
    ])
  })
})
