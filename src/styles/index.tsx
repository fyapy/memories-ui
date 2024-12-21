import {style} from './css'
// import {css as style} from '@stitches/core'

export {style}

export const flexColumn = {
  display: 'flex',
  flexDirection: 'column',
} as const

export const alignCenter = {
  display: 'flex',
  alignItems: 'center',
} as const

export const alignEnd = {
  display: 'flex',
  alignItems: 'flex-end',
} as const

export const justifyCenter = {
  display: 'flex',
  justifyContent: 'center',
} as const

export const center = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const

export const flexEnd = {
  display: 'flex',
  justifyContent: 'flex-end',
} as const

export const screenXsMobile = 620
export const screenMobile = 820
export const screenTablet = 950
export const screenLaptop = 1270
export const screenDesktop = 1680

export function makeMedia(maxWidth: number, minWidth?: number) {
  const cssMinWidth = typeof minWidth !== 'undefined' ? ` and (min-width: ${minWidth}px)` : ''
  const cssMaxWidth = ` and (max-width: ${maxWidth - 1}px)`

  return `@media screen${cssMaxWidth}${cssMinWidth}`
}

export const media = {
  xsMobile: makeMedia(screenXsMobile),
  mobile: makeMedia(screenMobile),
  tablet: makeMedia(screenTablet),
  laptop: makeMedia(screenLaptop),
  computer: makeMedia(screenDesktop),
}

export const color = {
  text: '#969696',
  danger: '#f14336',
}

export const commonStyles = {
  label: {
    margin: '0 0 9px 9px',

    fontSize: '14px',
    fontWeight: '500',
    color: color.text,
  },
  error: {
    margin: '9px 0 0 9px',

    fontSize: '12px',
    fontWeight: '500',
    color: color.danger,
  },
}

export const commonCss = {
  label: style(commonStyles.label),
  error: style(commonStyles.error),
}
