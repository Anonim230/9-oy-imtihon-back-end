const { gql } = require("apollo-server-express");

module.exports = gql `
    type Food{
        id: ID!
        name: String!
        price: Int!
        description: String
        img: String
    }
    extend type Query{
        getFood(id: ID!): Food!
        getAllFoods(id: ID): [ Food ]!
    }
    extend type Mutation{
        createFood(name: String! price: Int branch: ID! img: String description: String): Food
        deleteFood(id: ID!): Boolean!
        redactFood(id: ID! name: String img: String price: Int description: String): Boolean!
    }
`