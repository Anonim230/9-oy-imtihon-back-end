const { foods, branches, branches_and_foods } = require('../models/model')
module.exports = {
    get: async(req, res) => {
        res.json((await foods.findAll({ include: branches })).sort((a, b) => a.id - b.id))
    },
    post: async(req, res) => {
        let error = false
        const { name, branch, price, img, description } = req.body
        const food = await foods.create({ name, price: price && price.parseInt(), img, description }).catch(err => error = res.status(400).json(err) || err)
        if (!error) await branches_and_foods.create({ foodId: food.id, restaurantBranchId: branch }).catch(err => error = res.status(400).json(err) || err)
        console.log(food, branches_and_foods);
        if (!error) res.json(food)
    },
    delete: async(req, res) => await foods.destroy({ where: { id: req.body.id } }).then(() => res.json({ msg: 'OK' }))
}