var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  OPENAPI_URL: '"http://localhost:8000/api/?format=openapi"'
})
