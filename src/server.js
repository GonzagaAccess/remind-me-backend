import dotenv from 'dotenv'
import Fastify from 'fastify'
import appModule from './app.js'
dotenv.config()

// Instantiate Fastify with some config
const app = Fastify({
  logger: {
    level: process.env.NODE_ENV !== 'production' ? 'info' : 'warn'
  },
  pluginTimeout: 10000
})

// Register your application as a normal plugin.
app.register(appModule)

// Start listening.
app.listen(process.env.PORT || 3000, '0.0.0.0', (err) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})
