const { restaurants, branches, restaurants_and_branches, foods } = require('../models/model')
module.exports = {
    get: async(req, res) => {
        res.json((await branches.findAll({ include: [restaurants, foods] })).sort((a, b) => a.id - b.id))
    },
    post: async(req, res) => {
        let error = false
        const { name, restaurant, address } = req.body
        const branch = await branches.create({ name, address }).catch(err => error = res.status(400).json(err) || err)
        if (!error) await restaurants_and_branches.create({ restaurantBranchId: branch.id, restaurantId: restaurant }).catch(err => error = res.status(400).json(err) || err)
        if (!error) res.json(branch)
    },
    delete: async(req, res) => await branches.destroy({ where: { id: req.body.id } }).then(() => res.json({ msg: 'OK' }))
}