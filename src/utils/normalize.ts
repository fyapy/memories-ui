export function jsonParse(json: any, defaultValue: any = []) {
  if (typeof json === 'string') {
    try {
      return JSON.parse(json)
    } catch {
      return defaultValue
    }
  }

  return json
}
