
import {css} from '@stitches/core'
import type {CSSObject} from './types'
// import {stringify} from './stringify'
// import {EMPTY} from './constants'
// import {parser} from './parser'

// function insertStyle(innerCSS: string) {
//   const style = document.createElement('style')
//   style.innerHTML = innerCSS
//   document.head.appendChild(style)
// }

// export function style(css: CSSObject) {
//   let className = EMPTY

//   return () => {
//     if (className !== EMPTY) {
//       return className
//     }

//     const [name, styles] = stringify(parser(css))
//     className = name

//     insertStyle(styles)

//     return className
//   }
// }
export function style(obj: CSSObject) {
  const cn = css(obj)
  return () => cn.toString()
}

export type {CSSObject} from './types'
