import {mainClass, IS_MEDIA} from './constants'

const classes = new Set<string>()
const offset = 8

export function hash(styles: string) {
  let className = ''
  let startIndex = 0

  while (className === '') {
    const hashed = btoa(styles).replaceAll('=', '').substring(startIndex, startIndex + offset)

    if (classes.has(hashed)) {
      startIndex += offset
    } else {
      className = hashed
      classes.add(className)
    }
  }

  return className
}

export function stringify(parsed: string[][]) {
  let className = ''
  let styles = ''

  parsed.forEach(([css, selector, selector2], index) => {
    if (index === 0) {
      className = hash(css)

      return styles += `.${className} {${css}}`
    }

    if (selector[0] === IS_MEDIA) {
      return styles += `${selector} {.${selector2.replace(mainClass, className)} {${css}}}`
    }

    styles += `.${selector.replace(mainClass, className)} {${css}}`
  })

  return [className, styles]
}
