export const textTruncate = (value, length) => {
  if (!value) return value

  const dots = value.length > length ? '...' : ''
  return value.substring(0, length) + dots
}

export const formatTime = (value, type) => {
  if (type !== 'Video' || !value) return ''

  const date = new Date(null)
  date.setSeconds(value)
  return date.toISOString().substr(11, 8)
}
