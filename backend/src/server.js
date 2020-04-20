// hQq6sJJ1iX79lZCQ mongobb pass
// mongodb+srv://ibk:hQq6sJJ1iX79lZCQ@cluster0-xhlh6.mongodb.net/test?retryWrites=true&w=majority mongodb pass
const { GraphQLServer } = require ('graphql-yoga');

const { prisma } = require('../allyprint/generated/prisma-client');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const resolvers = {
  Query,
  Mutation,
}



const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
    }
  },
})

// server.express.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

server.start(() => console.log(`Server is running on http://localhost:4000`))