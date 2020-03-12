import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
