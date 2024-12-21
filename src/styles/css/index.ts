
import {camelCaseRule} from './rules'
import {CSSObject} from './types'

function hashString(str: string) {
  let hash = 0, chr, i

  if (str.length === 0) {
    return hash
  }

  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + chr
    hash |= 0
  }

  return hash.toString().replace('-', '')
}

const styleEl = document.createElement('style')
document.head.appendChild(styleEl)
const styleSheet = styleEl.sheet!

const UNDEFINED = 'undefined'
const OBJECT = 'object'

function cssObjectToString(css: CSSObject) {
  let main = ''

  for (const rule in css) {
    const value = css[rule]

    if (typeof value !== OBJECT) {
      const normalizedRule = camelCaseRule[rule]

      main += `${typeof normalizedRule === UNDEFINED ? rule : normalizedRule}:${value};`
    }
  }

  return main
}

export function style(css: CSSObject) {
  const rules = {
    main: '',
    nested: {} as Record<string, string>,
    media: {} as Record<string, string>,
  }

  let main = rules.main
  const nestedCss = rules.nested
  const media = rules.media

  for (const rule in css) {
    const value = css[rule]

    if (typeof value !== OBJECT) {
      const normalizedRule = camelCaseRule[rule]

      main += `${typeof normalizedRule === UNDEFINED ? rule : normalizedRule}:${value};`
    } else if (rule[0] === '&') {
      nestedCss[`main${rule.replace('&', '')}`] = cssObjectToString(value as CSSObject)
    } else if (rule[0] === '@') {
      media[rule] = cssObjectToString(value as CSSObject)
    } else {
      nestedCss[`main ${rule}`] = cssObjectToString(value as CSSObject)
    }
  }

  const className = `css-${hashString(main)}`

  // main
  const finalRule = `.${className} {${main}}`

  styleSheet.insertRule(finalRule, styleSheet.cssRules.length)

  // media
  for (const rule in media) {
    const finalRule = `${rule} {.${className} {${media[rule]}}}`

    styleSheet.insertRule(finalRule, styleSheet.cssRules.length)
  }

  // nested
  for (const nested in nestedCss) {
    const nestedClass = nested.replace('main', `.${className}`)

    styleSheet.insertRule(`${nestedClass} {${nestedCss[nested]}}`, styleSheet.cssRules.length)
  }

  return () => className
}
