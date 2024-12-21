import {describe, expect, test} from 'vitest'
import {stringify} from './stringify'

describe('style/css/parser', () => {
  test('css object should be parsed', () => {
    const cssom = [
      ['position:relative;zIndex:1;', '`'],
      ['margin:0 0 10px;padding:0 10px;', '` > *'],
      ['content:;position:absolute;inset:0;', '` > *:before'],
      ['zIndex:1;', '@media screen and (max-width: 619px)', '` > *:before'],
      ['zIndex:0;', '@media screen and (max-width: 619px)', '`'],
    ]

    expect(stringify(cssom)).toEqual([
      'cG9zaXRp',
      [
        '.cG9zaXRp {position:relative;zIndex:1;}',
        '.cG9zaXRp > * {margin:0 0 10px;padding:0 10px;}',
        '.cG9zaXRp > *:before {content:;position:absolute;inset:0;}',
        '@media screen and (max-width: 619px) {.cG9zaXRp > *:before {zIndex:1;}}',
        '@media screen and (max-width: 619px) {.cG9zaXRp {zIndex:0;}}',
      ].join(''),
    ])
  })
})
