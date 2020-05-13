export default async (fastify, opts) => {
  fastify.post('/', async (request, reply) => {
    return { created: true }
  })
}
