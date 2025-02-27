import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { resolvers } from './resolvers/resolvers.js';
import db from './datasources/db.js'
import { AuthenticatedUser, getUser } from './modules/auth.js';
import { PrismaClient } from '@prisma/client';

interface MyContext {
  dataSources: {
    db: PrismaClient;
  };
  user: AuthenticatedUser;
}

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers
});
 
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async ({req}) => {
    const {cache} = server
    const authorization = (req.headers.authorization)?.split('Bearer ')?.[1]
    const user = authorization ? getUser(authorization) : null
    return {
      dataSources: {
        db,
      },
      user
    }
  }
});
 
console.log(`🚀  Server ready at: ${url}`);