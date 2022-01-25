export function setDefaultValue<T, U>(
  object: T,
  key: string,
  defaultValue: U
): U
export function setDefaultValue<T, K extends keyof T>(
  object: T,
  key: K,
  defaultValue: T[K]
): T[K] {
  if (object[key] == null) {
    object[key] = defaultValue
  }

  return object[key]
}
