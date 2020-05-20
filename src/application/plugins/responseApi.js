import fp from 'fastify-plugin'
import generateResponse from '../../infra/generatorResponse.js'

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope
const plugin = fp(function (fastify, opts, next) {
  fastify.decorateReply('success', function (data = [], response = {}) {
    // Setting defaults
    response.error = response.error || false
    response.message = response.message || 'Success'

    this.type('application/json')
    this.send(generateResponse(data, response))
  })
  fastify.decorateReply('error', function (response = {}) {
    // Setting defaults
    response.statusCode = response.statusCode || 400
    response.error = response.error || true
    response.message = response.message || 'Error'

    this.code(response.statusCode)
    this.type('application/json')
    this.send(generateResponse([], response))
  })
  next()
})

export default plugin
