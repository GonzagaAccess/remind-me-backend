export default async (fastify) => {
  const userService = fastify.userService
  fastify.get('/', async (request, reply) => {
    const users = await userService.getAllUsers()
    return reply.success(users)
  })
}
