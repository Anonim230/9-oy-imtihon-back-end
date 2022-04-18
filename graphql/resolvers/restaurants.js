const { restaurants, branches } = require("../../models/model")

module.exports = {
    Query: {
        getRestaurant: async(_, { id }) => await restaurants.findByPk(id).then(data => console.log(data) || data),
        getAllRestaurants: async _ => await restaurants.findAll().then(data => data)
    },
    Mutation: {
        createRestaurant: async(_, { id, name }) => await restaurants.create({ id, name }),
        deleteRestaurant: async(_, { id }) => await restaurants.destroy({ where: { id } }).then(data => Boolean(data)),
        redactRestaurant: async(_, data) => await restaurants.update(data, { where: { id: data.id } }).then(data => Boolean(data))
    },
    Restaurant: {
        branches: async() => await restaurants.findAll({ where: { id: 1 }, include: branches }).then(data => data[0].dataValues.restaurant_branches)
    }
}