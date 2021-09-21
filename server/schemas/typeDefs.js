const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    savedDogs: [Dog]
  }

  type Dog {
    id: ID!
    name: String
    breed: String
    description: String
    gender: String
    image: String
    age: String
    spaynuet: String
  }

type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float

  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    user: User
    dogs: [Dog]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

