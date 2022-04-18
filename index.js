// const init = require('./models/model')
// init()
const { createServer } = require('http');
const express = require('express');
const cors = require('cors');
const app = express()
const { restaurants, branches, sequelize } = require('./models/model')
const { ApolloServer } = require("apollo-server-express");
sequelize.sync().then(() => console.log('Connected to DB')).catch(e => console.log(e))
const router = require('./routes')
const graph = require('./graphql')
    // console.log(graph);
app.use(express.json())
app.use(cors())
app.use(router)
    // app.use((req, res, next) => console.log(req.body, req.params) || next())
const PORT = process.env.PORT || 9000

const server = new ApolloServer({ modules: graph, introspection: true, playground: true })
const httpServer = createServer(app);
server.applyMiddleware({ app });
// branches.findAll({ where: { id: 0 } }).then(data => console.log(data))
httpServer.listen({ port: PORT }, () => console.log('Listening on ' + PORT))
const init_database = async() => {
    // await restaurants.findAll().then(data => console.log(data))
    const kfc = restaurants.create({
        name: 'KFC'
    })
    const evos = restaurants.create({
        name: 'Evos'
    })
    const evos_ch = branches.create({
        name: 'Evos Chilonzor',
        address: 'Chilonzor'
    })
    const evos_sh = branches.create({
        name: 'Evos Shayxontohur',
        address: 'Shayxontohur'
    })
    console.log(Object.keys(evos, evos_sh));
    // await sequelize.sync()
}
app.get('/test_page', (req, res) => {
        console.log(req.query)
    })
    // init_database()