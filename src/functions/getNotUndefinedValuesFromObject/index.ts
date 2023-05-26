export function getNotUndefinedValuesFromObject<T>(objectWithData: object): T {
  return Object.entries(objectWithData).reduce(
    (prev, [key, value]) => (value ? { ...prev, [key]: value } : prev),
    {}
  ) as T;
}
