import create from './create.js'

export default async (fastify) => {
  fastify.register(create)
}
