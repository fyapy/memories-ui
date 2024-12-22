import {describe, expect, test} from 'vitest'
import {markTouched} from './utils'

describe('forms/utils', () => {
  test('markTouched should work', () => {
    const thoucheds = markTouched({login: '', password: ''})

    expect(thoucheds).toEqual({login: true, password: true})
  })

  test('markTouched should work with array of primitivs', () => {
    const thoucheds = markTouched({
      login: '',
      list: ['1', '2', {name: ''}],
    })

    expect(thoucheds).toEqual({
      login: true,
      list: [true, true, {name: true}],
    })
  })
})
