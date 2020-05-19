export default async (fastify) => {
  fastify.post('/', (request, reply) => {
    fastify.pg.query('SELECT * FROM users', (err, result) => {
      if (err) console.error(err)
      reply.send(result)
    })
  })
}
