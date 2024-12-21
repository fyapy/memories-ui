import {mainClass, EMPTY} from './constants'
import {ParserState} from './parser'

const classes = new Set<string>()
const offset = 8

export function hash(styles: string) {
  let className = EMPTY
  let startIndex = 0

  while (className === EMPTY) {
    const hash = styles === EMPTY
      ? Math.random().toString(36).substring(7)
      : btoa(styles).replaceAll('=', EMPTY).substring(startIndex, startIndex + offset)

    if (classes.has(hash)) {
      startIndex += offset
    } else {
      className = hash
      classes.add(className)
    }
  }

  return className
}

export function stringify(state: ParserState) {
  let className = EMPTY
  let styles = EMPTY

  state.parsed.forEach(([css, selector], index) => {
    if (index === 0) {
      className = hash(css)

      if (css === EMPTY) return

      return styles += `.${className}{${css}}`
    }

    styles += `.${selector.replace(mainClass, className)}{${css}}`
  })

  for (const mediaQuery in state.media) {
    let mediaStyles = EMPTY

    state.media[mediaQuery].forEach(([css, selector]) => {
      mediaStyles += `.${selector.replace(mainClass, className)}{${css}}`
    })

    styles += `${mediaQuery}{${mediaStyles}}`
  }

  return [className, styles]
}
