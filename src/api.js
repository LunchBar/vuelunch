import Swagger from 'swagger-client'

let clientPromise = new Swagger({
  url: process.env.OPENAPI_URL,
  usePromise: true
})

export default clientPromise

