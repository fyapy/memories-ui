export function fixed(num: number | string, digits = 2) {
  const [strNum, strDigits] = num.toString().split('.')

  if (typeof strDigits === 'undefined') {
    if (digits === 0) {
      return Number(strNum)
    }

    const newDigits = Array(digits).map(() => '0').join('')

    return Number(`${strNum}.${newDigits}`)
  }
  if (strDigits.length >= digits) {
    const newDigits = strDigits.substring(0, digits)

    return Number(`${strNum}.${newDigits}`)
  }

  const newDigitsEnd = Array(digits - strDigits.length).map(() => '0').join('')
  const newDigits = strDigits + newDigitsEnd

  return Number(`${strNum}.${newDigits}`)
}
