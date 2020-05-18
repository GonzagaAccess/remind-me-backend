import helmet from 'fastify-helmet'
import swagger from 'fastify-swagger'
import configSwagger from './config/swagger.js'
import responseApi from './plugins/responseApi.js'
import root from './services/root.js'
import users from './services/users/index.js'

export default function (fastify, _opts, next) {
  fastify.register(helmet, {})
  fastify.register(swagger, configSwagger)

  // Load plugins
  fastify.register(responseApi)

  // Load routes
  fastify.register(root)
  fastify.register(users, { prefix: '/users' })

  // Make sure to call next when done
  next()
}
