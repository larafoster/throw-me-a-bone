const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    savedDogs: [Dog]
  }

  type Dog {
    dogId: ID!
    name: String
    breed: String
    image: String
    age: String
    spaynuet: String
  }

  type Query {
    me: User
    dogs: [Dog]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
