import helmet from 'fastify-helmet'
import postgres from 'fastify-postgres'
import swagger from 'fastify-swagger'
import configPostgres from './application/config/postgres.js'
import configSwagger from './application/config/swagger.js'
import responseApi from './application/plugins/responseApi.js'
import users from './web/users/index.js'
import root from './web/root.js'

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
