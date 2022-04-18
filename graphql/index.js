const restaurants_res = require("./resolvers/restaurants")
const branches_res = require("./resolvers/branches")
const foods_res = require("./resolvers/foods")
const restaurants_defs = require("./typedefs/restaurants")
const branches_defs = require("./typedefs/branches")
const foods_defs = require("./typedefs/foods")

module.exports = [{
    typeDefs: restaurants_defs,
    resolvers: restaurants_res
}, {
    typeDefs: branches_defs,
    resolvers: branches_res
}, {
    typeDefs: foods_defs,
    resolvers: foods_res
}]