import {AnyObject} from 'utils/object'

const primitives = ['boolean', 'string', 'number']

export function markTouched(obj: AnyObject) {
  const keys = Object.keys(obj)

  return keys.reduce((acc, key) => {
    const val = obj[key]

    if (Array.isArray(val)) {
      acc[key] = val.map(val => {
        if (primitives.includes(typeof val)) {
          return true
        }

        return markTouched(val)
      })
    } else {
      acc[key] = true
    }

    return acc
  }, <AnyObject>{})
}
