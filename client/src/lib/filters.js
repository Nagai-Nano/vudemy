export const formatTime = (value, type) => {
  if (type !== 'Video' || !value) return ''

  const date = new Date(null)
  date.setSeconds(value)
  return date.toISOString().substr(11, 8)
}
