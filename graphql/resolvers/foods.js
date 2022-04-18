const { foods, branches_and_foods } = require("../../models/model")

module.exports = {
    Query: {
        getFood: async(_, { id }) => await foods.findByPk(id).then(data => data),
        getAllFoods: async _ => await foods.findAll().then(data => data),
    },
    Mutation: {
        createFood: async(_, { name, branch, price, description, img }) => {
            const food = await foods.create({ name, price, description, img })
            await branches_and_foods.create({ foodId: food.id, restaurantBranchId: branch })
            return food
        },
        deleteFood: async(_, { id }) => await foods.destroy({ where: { id } }).then(data => Boolean(data)),
        redactFood: async(_, data) => await foods.update(data, { where: { id: data.id } }).then(data => Boolean(data))
    },
    Foods: {
        description: global => global.description || '',
        img: global => global.img || 'https://media.istockphoto.com/photos/table-top-view-of-spicy-food-picture-id1316145932?b=1&k=20&m=1316145932&s=170667a&w=0&h=feyrNSTglzksHoEDSsnrG47UoY_XX4PtayUPpSMunQI='
    }
}