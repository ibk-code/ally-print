// hQq6sJJ1iX79lZCQ mongobb pass
// mongodb+srv://ibk:hQq6sJJ1iX79lZCQ@cluster0-xhlh6.mongodb.net/test?retryWrites=true&w=majority mongodb pass
const { GraphQLServer } = require ('graphql-yoga');
require('dotenv').config();

const { Prisma } = require('../prisma/generated/prisma-client');

const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const userRoutes = require('./routes/route')

const app = require('express');
const bodyParser = require('body-parser');

const resolvers = {
  Query,
  Mutation,
}

const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466',
  secret: process.env.PRISMA_SECRET || '',
});


const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma : db,
    }
  },
})



server.express.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

server.express.use(bodyParser.json());

server.express.use('/api/ally_v1', userRoutes);

// server.express.use(function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

server.start(() => console.log(`Server is running on http://localhost:4000`))