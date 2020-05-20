export default async (fastify) => {
  const userService = fastify.userService

  fastify.post('/', (request, reply) => {
    userService.createUser(request.body)
    reply.success()
  })
}
