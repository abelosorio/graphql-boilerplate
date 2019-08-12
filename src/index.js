import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { createServer } from 'http'

import schema from './schema'

require('dotenv').config()

const port = process.env.PORT || 3001

const app = express()

const server = new ApolloServer({
  ...schema,
  instrospection: true,
  playground: true,
  tracing: true
})

server.applyMiddleware({ app })

const httpServer = createServer(app)

server.installSubscriptionHandlers(httpServer)

httpServer.listen({ port }, () => {
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`)
  console.log(
    `Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`
  )
})
