export const textTruncate = (value, length) => {
  if (!value) return value

  const dots = value.length > length ? '...' : ''
  return value.substring(0, length) + dots
}
