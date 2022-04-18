const { gql } = require("apollo-server-express");

module.exports = gql `
    type Branch{
        id: ID!
        name: String!
        address: String
        Foods: [ Food! ]
    }
    extend type Query{
        getBranch(id: ID!): Branch!
        getAllBranches(id: ID): [ Branch ]!
    }
    extend type Mutation{
        createBranch(id: ID! name: String! address: String restaurant: ID!): Branch!
        deleteBranch(id: ID!): Boolean!
        redactBranch(id: ID! name: String address: String): Boolean!
    }
`