// CHANGE ID TO UUID
export default async (fastify) => {
  const userService = fastify.userService
  const schema = {
    body: {
      type: 'object',
      properties: {
        receiver_id: { type: 'string' },
        message: { type: 'string' },
        title: { type: 'string' }
      },
      required: ['receiver_id', 'message', 'title']
    }
  }

  fastify.post('/remember', { schema }, async (request, reply) => {
    const user = await userService.createUser(request.user, request.body)
    return reply.success(user)
  })
}
