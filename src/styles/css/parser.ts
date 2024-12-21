import {emptyValue, UNDEFINED, mainClass, IS_NESTED, IS_MEDIA, OBJECT} from './constants'
import {camelCaseRule} from './rules'
import {CSSObject} from './types'

export function parser(css: CSSObject, names = [mainClass]) {
  const main = [
    ['', ...names],
  ]

  for (const rule in css) {
    const value = css[rule]

    if (typeof value !== OBJECT) {
      const normalizedRule = camelCaseRule[rule]

      main[0][0] += `${typeof normalizedRule === UNDEFINED ? rule : normalizedRule}:${value === '' ? emptyValue : value};`
    } else {
      if (rule[0] === IS_NESTED) {
        if (rule.includes(',')) {
          const rules = rule.split(',').map(s => s.trim())

          rules.forEach(rule => {
            main.push(...parser(value as CSSObject, [names.join('') + rule.replace(IS_NESTED, '')]))
          })
        } else {
          main.push(...parser(value as CSSObject, [names.join('') + rule.replace(IS_NESTED, '')]))
        }
      } else if (rule[0] === IS_MEDIA) {
        main.push(...parser(value as CSSObject, [rule, names.join('')]))
      } else {
        main.push(...parser(value as CSSObject, [`${names.join('')} ${rule}`]))
      }
    }
  }

  return main
}
