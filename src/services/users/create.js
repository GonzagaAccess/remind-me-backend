export default async (fastify) => {
  fastify.post('/', async (request, reply) => {
    return { created: true }
  })
}
