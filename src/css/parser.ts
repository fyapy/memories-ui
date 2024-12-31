import type {CSSObject} from './types'
import {EMPTY_STRING, UNDEFINED, mainClass, IS_NESTED, IS_MEDIA, OBJECT, EMPTY, COMMA} from './constants'
import {camelCaseRule} from './rules'

export interface ParserState {
  parsed: string[][]
  media: Record<string, string[][]>
}

export function parser(css: CSSObject, names = [mainClass], media: ParserState['media'] = {}) {
  const state: ParserState = {
    parsed: [[EMPTY, ...names]],
    media,
  }

  for (const rule in css) {
    const value = css[rule]

    if (typeof value !== OBJECT) {
      const normalizedRule = camelCaseRule[rule]

      state.parsed[0][0] += `${typeof normalizedRule === UNDEFINED ? rule : normalizedRule}:${value || EMPTY_STRING};`
    } else {
      if (rule[0] === IS_NESTED) {
        if (rule.includes(COMMA)) {
          const rules = rule.split(COMMA).map(s => s.trim())

          rules.forEach(rule => {
            const mergeState = parser(value as CSSObject, [names.join(EMPTY) + rule.replace(IS_NESTED, EMPTY)], state.media)
            state.parsed.push(...mergeState.parsed)
          })
        } else {
          const mergeState = parser(value as CSSObject, [names.join(EMPTY) + rule.replace(IS_NESTED, EMPTY)], state.media)
          state.parsed.push(...mergeState.parsed)
        }
      } else if (rule[0] === IS_MEDIA) {
        if (typeof state.media[rule] === UNDEFINED) {
          state.media[rule] = parser(value as CSSObject, names, state.media).parsed
        } else {
          state.media[rule].push(...parser(value as CSSObject, names, state.media).parsed)
        }
      } else {
        const mergeState = parser(value as CSSObject, [`${names.join(EMPTY)} ${rule}`], state.media)
        state.parsed.push(...mergeState.parsed)
      }
    }
  }

  return state
}
