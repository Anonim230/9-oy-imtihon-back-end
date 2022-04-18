const jwt = require('jsonwebtoken');
const tokens_data = require('../data/token.json')
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');

const secret_word = "Very very secret word"
module.exports = {
    get: (req, res) => {
        const { token, password, nick_name } = req.query
        const user = token ? tokens_data.find(v => `NiCk=${v.nick_name}&&PaSs=${(jwt.verify(v.password, secret_word))}` === jwt.verify(token, secret_word)) : tokens_data.find(v => (`${v.nick_name}` === `${nick_name}`) && (`${v.password}` === `${jwt.sign(password, secret_word)}`))
        res.json(user ? {nick_name: user.nick_name, token:`NiCk=${user.nick_name}&&PaSs=${(jwt.sign(user.password, secret_word))}`,privilegue: user.privilegue } : {nick_name:'',token:''})
    },
    post: (req, res) => {
        // console.log(req.body);
        const { first_name, last_name, password, nick_name } = req.body
        const user = {
            first_name,
            last_name,
            password: jwt.sign(password, secret_word),
            nick_name
        }
        user.priviligue = 'user'
        let file = JSON.parse(readFileSync(join(__dirname, '../data/token.json')))
        user.id = +file.reduce((prev, curr) => curr.id > prev.id ? curr : prev, {id:0}).id + 1
        file.push(user)
        writeFileSync(join(__dirname, '../data/token.json'), JSON.stringify(file, null, 2))
        const token = jwt.sign(`NiCk=${nick_name}&&PaSs=${password}`, secret_word)
        res.json({ token, privilegue: user.privilegue })
    }
}

// writeFileSync(join(__dirname, '../data/token.json'), JSON.stringify([{
//     first_name: 'Anvarjon',
//     last_name: 'Solijonov',
//     password: 'eyJhbGciOiJIUzI1NiJ9.MTIzNA.TE83RTczEF295XMs2vU5MzvaPrtTYG05WzFl7529wMI',
//     nick_name: 'AdrianS4957Y'
// }], null, 2))