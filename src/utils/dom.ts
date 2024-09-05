export function clsx(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export const prevent = <E extends {preventDefault(): void}>(fn: (event: E) => any) => (event: E) => {
  event.preventDefault()

  fn(event)
}
