import router from '@/router'

export default async url => {
  return fetch(`/api${url}`)
    .then(response => {
      if (!response.ok) {
        throw response.status
      }

      return response.json()
    })
    .catch(status => {
      router.replace({ name: 'error', params: { status } })
    })
}
