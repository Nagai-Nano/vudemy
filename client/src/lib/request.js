export default async url => {
  const response = await fetch(`/api${url}`)
  const json = await response.json()

  return json
}
