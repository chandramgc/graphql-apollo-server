const { ApolloServer, gql } = require('apollo-server');
const SessionAPI = require('./datasources/sessions.js');
const SpeakerAPI = require('./datasources/speakers.js');

const typeDefs = require('./schema.js');

const resolvers = require('./resolvers.js');

const dataSources = () => ({
  sessionAPI: new SessionAPI(),
  speakerAPI: new SpeakerAPI(),
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`graphQL running at ${url}`);
});
