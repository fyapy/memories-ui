// import {useLayoutEffect, useCallback, useEffect, useState, useRef, useId} from 'preact/hooks'
// import {ComponentChildren, RefObject} from 'preact'
// import {clsx} from 'utils/dom'
// import {DEFAULT_HEIGHT, DEFAULT_WIDTH, buttonColor, button} from './style'

// function gradient(width: number, height: number, id: string, disabled?: boolean) {
//   const stepColor = disabled ? buttonColor.disabled : buttonColor.primary

//   return (
//     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox={`0 0 ${width} ${height}`}>
//       <linearGradient id={id} x1="50%" x2="50%" y1="0" y2="100%">
//         <stop stop-color={stepColor} stop-opacity=".3"/>
//         <stop offset="1" stop-color={stepColor} />
//       </linearGradient>
//       <rect width={width - 1} height={height - 1} x=".5" y=".5" stroke={`url(#${id})`} rx="10" />
//     </svg>
//   )
// }

// function style(margin?: string, fluid?: boolean) {
//   let style = ''

//   if (fluid === true) style += 'max-width:initial;'
//   if (typeof margin === 'string') style += `margin:${margin};`

//   return style
// }

// function useButton(elRef: RefObject<HTMLElement>, children: ComponentChildren) {
//   const [height, setHeight] = useState(DEFAULT_HEIGHT)
//   const [width, setWidth] = useState(DEFAULT_WIDTH)

//   const id = useId()

//   const calcSize = useCallback(() => {
//     const el = elRef.current
//     if (el) {
//       setHeight(el.clientHeight)
//       setWidth(el.clientWidth)
//     }
//   }, [])

//   useLayoutEffect(calcSize, [children])
//   useEffect(() => {
//     window.addEventListener('resize', calcSize)
//     return () => window.removeEventListener('resize', calcSize)
//   }, [])

//   return [width, height, id] as const
// }

// export interface ButtonProps {
//   margin?: string
//   type?: 'submit' | 'button'
//   disabled?: boolean
//   fluid?: boolean
//   className?: string
//   onClick?(e: MouseEvent): void
//   children: ComponentChildren
// }

// export const Button = ({type = 'submit', className, disabled, children, onClick, margin, fluid}: ButtonProps) => {
//   const elRef = useRef<HTMLButtonElement>(null)
//   const [width, height, id] = useButton(elRef, children)

//   return (
//     <button
//       type={type}
//       ref={elRef}
//       disabled={disabled}
//       style={style(margin, fluid)}
//       className={clsx(className, button())}
//       onClick={onClick}
//     >
//       {gradient(width, height, id, disabled)}
//       {children}
//     </button>
//   )
// }

// Button.color = buttonColor


// export interface ButtonLinkProps extends ButtonProps {
//   target?: string
//   navigate?(path: string): void
//   to: string
// }

// export const ButtonLink = ({target, to, navigate, className, disabled, children, onClick, margin, fluid}: ButtonLinkProps) => {
//   const elRef = useRef<HTMLAnchorElement>(null)
//   const [width, height, id] = useButton(elRef, children)

//   return (
//     <a
//       href={to}
//       ref={elRef}
//       target={target}
//       style={style(margin, fluid)}
//       className={clsx(className, button())}
//       onClick={e => {
//         if (typeof navigate !== 'undefined') {
//           e.preventDefault()
//           navigate(to)
//         }

//         onClick?.(e)
//       }}
//     >
//       {gradient(width, height, id, disabled)}
//       {children}
//     </a>
//   )
// }

// ButtonLink.color = buttonColor
