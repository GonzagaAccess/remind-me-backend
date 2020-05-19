import helmet from 'fastify-helmet'
import swagger from 'fastify-swagger'
import configSwagger from './config/swagger.js'
import postgres from 'fastify-postgres'
import configPostgres from './config/postgres.js'
import responseApi from './plugins/responseApi.js'
import root from './services/root.js'
import users from './services/users/index.js'

export default function (fastify, _opts, next) {
  fastify.register(helmet, {})
  fastify.register(swagger, configSwagger)

  fastify.register(postgres, configPostgres)
  // Load plugins
  fastify.register(responseApi)

  // Load routes
  fastify.register(root)
  fastify.register(users, { prefix: '/users' })

  // Make sure to call next when done
  next()
}
