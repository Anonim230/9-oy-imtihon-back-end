const { restaurants, branches, restaurants_and_branches } = require('../models/model')
module.exports = {
    get: async(req, res) => {
        res.json((await restaurants.findAll({ include: branches })).sort((a, b) => a.id - b.id))
    },
    post: async(req, res) => {
        let error = false
        const { name, branch, address } = req.body
        const restaurant = await restaurants.create({ name, address }).catch(err => error = res.status(400).json(err) || err)
        if (!error) branch && await restaurants_and_branches.create({ restaurantBranchId: branch, restaurantId: restaurant.id }).catch(err => error = res.status(400).json(err) || err)
        if (!error) res.json(restaurant)
    },
    delete: async(req, res) => await restaurants.destroy({ where: { id: req.body.id } }).then(() => res.json({ msg: 'OK' }))
}