import create from './create.js'
import { UserService } from '../../domain/user/userService.js'

export default async (fastify) => {
  registerDependencies(fastify)
  fastify.register(create)
}

function registerDependencies (fastify) {
  const userService = new UserService({})
  fastify.decorate('userService', userService)
}
