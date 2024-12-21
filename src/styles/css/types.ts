
export type OrString = string & {}

export interface CSSProperties {
  position?: 'absolute' | 'relative'
  inset?: string
  zIndex?: string

  padding?: string
  paddingTop?: string
  paddingRight?: string
  paddingBottom?: string
  paddingLeft?: string
  margin?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
  height?: string
  minHeight?: string
  maxHeight?: string
  width?: string
  minWidth?: string
  maxWidth?: string

  flex?: string
  display?: 'inline-block' | 'inline-flex' | 'block' | 'flex' | 'none' | 'grid'
  gridTemplateColumns?: string
  alignItems?: 'flex-start' | 'flex-end' | 'center'
  justifyContent?: 'space-between' | 'flex-start' | 'flex-end' | 'center'
  flexDirection?: 'column' | 'row'
  columnGap?: string
  rowGap?: string

  textOverflow?: 'ellipsis'
  whiteSpace?: 'pre-line' | 'nowrap'
  textAlign?: 'center' | 'right' | 'left'
  lineHeight?: string
  fontWeight?: OrString | '100' | '200' | '300' | '400' | '500' | '600' | '700'
  fontSize?: string
  opacity?: string
  color?: string
  cursor?: 'default' | 'pointer'
  background?: string
  backgroundColor?: string
  boxShadow?: OrString | 'none'
  overflow?: 'hidden' | 'scroll' | 'auto'
  overflowY?: 'hidden' | 'scroll' | 'auto'
  scrollBehavior?: 'smooth'
  pointerEvents?: 'none'
  resize?: 'none'

  outline?: OrString | 'none'
  borderColor?: string
  border?: OrString | 'none'
  borderSpacing?: string
  borderRadius?: string
  borderTopLeftRadius?: string
  borderTopRightRadius?: string
  borderBottomLeftRadius?: string
  borderBottomRightRadius?: string

  transition?: string
  transform?: string
}

export type ElementState =
  | '&:not(:last-of-type)'
  | '&:-webkit-scrollbar'
  | '&:first-of-type'
  | '&:last-of-type'
  | '&:placeholder'
  | '&:disabled'
  | '&:before'
  | '&:hover'
  | '&:focus'
  | '&:after'

export type CSSElementState = {
  [K in ElementState]?: CSSObject
}


export interface CSSOthersObject {
  [propertiesName: string]: undefined | CSSObject | string
}

export interface CSSObject extends CSSOthersObject, CSSElementState, CSSProperties {}
