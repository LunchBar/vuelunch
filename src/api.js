import Swagger from 'swagger-client'

let clientPromise = new Swagger({
  url: process.env.OPENAPI_URL,
  usePromise: true
})

export let simpleApi = function (clientCallback, targetCallback) {
  return clientPromise
    .then(client => clientCallback(client))
    .then(response => {
      let data = JSON.parse(response.data)
      if (data && 'results' in data) {
        data = data.results
      }
      return data
    })
    .then(data => {
      if (targetCallback) {
        return targetCallback(data)
      }
    })
}

export default clientPromise

