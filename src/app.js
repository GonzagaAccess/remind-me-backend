import helmet from 'fastify-helmet'
import swagger from 'fastify-swagger'

import knex from './application/plugins/knex.js'
import configDatabase from './application/config/database.js'
import configSwagger from './application/config/swagger.js'
import responseApi from './application/plugins/responseApi.js'
import users from './web/users/index.js'
import root from './web/root.js'

export default function (fastify, _opts, next) {
  fastify.register(helmet, {})
  fastify.register(swagger, configSwagger)

  fastify.register(knex, configDatabase)
  // Load plugins
  fastify.register(responseApi)

  // Load routes
  fastify.register(root)
  fastify.register(users, { prefix: '/users' })

  // Make sure to call next when done
  next()
}
