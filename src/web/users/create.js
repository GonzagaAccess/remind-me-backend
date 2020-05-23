export default async (fastify) => {
  const userService = fastify.userService
  const schema = {
    body: {
      type: 'object',
      properties: {
        name: { type: 'string', minLength: 5 },
        email: { type: 'string' },
        password: { type: 'string', minLength: 5 }
      },
      required: ['name', 'email', 'password']
    }
  }

  fastify.post('/', { schema }, async (request, reply) => {
    const user = await userService.createUser(request.body)
    return reply.success(user)
  })
}
