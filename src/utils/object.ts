// const isNotNestedPath = (path: string) => /^\[.+\]$/i.test(path)
// const cleanupNonNestedPath = (path: string) => isNotNestedPath(path)
//   ? path.replace(/\[|\]/gi, '')
//   : path

// export const isObject = (obj: Record<string, any>) =>
//   obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj)
// const isContainerValue = (value: any) => isObject(value) || Array.isArray(value)

// export const getIn = <T = any>(
//   object: Record<string, T>,
//   path: string,
//   fallback: T
// ) => {
//   if (!object) {
//     return fallback
//   }

//   if (isNotNestedPath(path)) {
//     return object[cleanupNonNestedPath(path)]
//   }

//   const resolvedValue = (path || '')
//     .split(/\.|\[(\d+)\]/)
//     .filter(Boolean)
//     .reduce((acc: Record<string, any>, propKey: string) => {
//       if (isContainerValue(acc) && propKey in acc) {
//         return acc[propKey]
//       }

//       return fallback
//     }, object)

//   return resolvedValue as T
// }

// export const setIn = (obj:  Record<string, any>, path: string, value: any) => {
//   const a = path.split('.')
//   let o = obj
//   while (a.length - 1) {
//     const n = a.shift()!
//     if (!(n in o)) o[n] = {}
//     o = o[n!]
//   }
//   o[a[0]] = value
// }

// export type AnyObject = Record<string, any>

// export const isUndefined = (value: any): value is undefined => typeof value === 'undefined'
