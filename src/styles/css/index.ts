
import {stringify} from './stringify'
import {EMPTY} from './constants'
import {CSSObject} from './types'
import {parser} from './parser'

function insertStyle(innerCSS: string) {
  const style = document.createElement('style')
  style.innerHTML = innerCSS
  document.head.appendChild(style)
}

export function style(css: CSSObject) {
  let className = EMPTY

  return () => {
    if (className !== EMPTY) {
      return className
    }

    const [name, styles] = stringify(parser(css))
    className = name

    insertStyle(styles)

    return className
  }
}

export type {CSSObject} from './types'
