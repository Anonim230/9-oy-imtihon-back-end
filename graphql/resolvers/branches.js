const { branches, foods, restaurants_and_branches } = require("../../models/model")
module.exports = {
    Query: {
        getBranch: async(_, { id }) => await branches.findByPk(id).then(data => data),
        getAllBranches: async _ => await branches.findAll().then(data => data)
    },
    Mutation: {
        createBranch: async(_, { id, name, address, restaurant }) => {
            const branch = await branches.create({ id, name, address })
            restaurants_and_branches.create({ restaurantBranchId: branch.id, restaurantId: restaurant })
            return branch
        },
        deleteBranch: async(_, { id }) => await branches.destroy({ where: { id } }).then(data => Boolean(data)),
        redactBranch: async(_, data) => await branches.update(data, { where: { id: data.id } }).then(data => Boolean(data))
    },
    Branch: {
        Foods: async global => await branches.findAll({ where: { id: global.id }, include: foods }).then(data => data[0].dataValues.foods)
    }
};