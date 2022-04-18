const { gql } = require("apollo-server-express");

module.exports = gql `
    type Restaurant{
        id: ID!
        name: String!
        branches: [ Branch ]
    }
    extend type Query{
        getRestaurant(id: ID!): Restaurant!
        getAllRestaurants(id: ID): [ Restaurant ]!
    }
    extend type Mutation{
        createRestaurant(id: ID! name: String!): Restaurant
        deleteRestaurant(id: ID!): Boolean!
        redactRestaurant(id: ID! name: String): Boolean!
    }
`