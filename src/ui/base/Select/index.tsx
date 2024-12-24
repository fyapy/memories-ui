// import {useState} from 'preact/hooks'
// import {commonCss} from '../../../styles'
// import {css} from './style'

// export interface SelectOption<T = any> {
//   label: string
//   value: T
// }

// // const defaultOptionToString = (value: SelectProps['value']) => value?.label

// const arrowDownIcon = (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="#FFF" width="24" height="24" viewBox="0 0 24 24">
//     <path d="M12 16c-.28 0-.52-.1-.72-.29l-6-6.01c-.47-.47-.47-.94.01-1.41.47-.48.94-.48 1.41-.01l5.3 5.31 5.28-5.3c.47-.4.93-.38 1.36.06.44.43.46.89.06 1.35l-6 6.01c-.2.19-.43.28-.7.29Z"/>
//   </svg>
// )

// export interface SelectProps {
//   label: string
//   value: SelectOption | null
//   options: SelectOption[]
//   onChange?(value: SelectOption): void
//   error?: string
//   // disabledText?: string
//   optionToString?(item: SelectOption | null): string
//   disabled?: string
//   className?: string
// }

// export const Select = ({
//   label,
//   error,
//   // value,
//   // options,
//   // onChange,
//   disabled,
//   className,
//   // disabledText,
//   // optionToString = defaultOptionToString,
// }: SelectProps) => {
//   const [isOpen, setOpen] = useState(false)


//   // const select = useSelect({
//   //   items: options,
//   //   selectedItem: value,
//   //   onSelectedItemChange: ({selectedItem: newSelectedItem}) => onChange(newSelectedItem),
//   // })

//   return (
//     <div className={clsx(css.wrapper(), className)}>
//       {/*  {...select.getLabelProps()} */}
//       <div className={commonCss.label()}>{label}</div>

//       {/*  {...select.getToggleButtonProps()} */}
//       <div className={clsx(css.input(), disabled && css.disabledInput())} onClick={() => setOpen(!isOpen)}>
//         <span>
//           123
//           {/* {disabled || optionToString(select.selectedItem)} */}
//         </span>

//         {arrowDownIcon}
//         {/* <Icon name="arrow-down" size={24} fill="#FFF" data-open={select.isOpen} /> */}
//       </div>

//       {/*  {...select.getMenuProps()} */}
//       <div className={css.menu()}>
//         {/* {select.isOpen && options.map((option, index) => (
//           <div
//             key={option.value}
//             className={css.option()}
//             // data-disabled={option.disabled}
//             {...select.getItemProps({item: option, index})}
//           >
//             <span>{optionToString(option)}</span> */}

//         {/* {option.disabled && <span className={css.disabledText()}>{disabledText}</span>} */}
//         {/* </div>
//         ))} */}
//       </div>

//       {error && <div className={commonCss.error()}>{error}</div>}
//     </div>
//   )
// }
