const { Router } = require('express');
const branches = require('../controllers/branches');
const foods = require('../controllers/foods');
const login = require('../controllers/login');
const restaurants = require('../controllers/restaurants');

const router = Router()
const imports = { branches, restaurants, foods, login }
for (let i of Object.keys(imports)) {
    for (let j of Object.keys(imports[i]))
        if (j === 'delete') router.delete(`/${i}`, imports[i][j])
        else j === 'get' ? router.get(`/${i}`, imports[i][j]) : router.post(`/${i}`, imports[i][j])
}

module.exports = router