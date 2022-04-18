/* const branches_and_foods = sequelize.define('branches_and_foods',{
    food_id: {
        primaryKey: true,
        type: DataTypes.STRING,
        references: {
            model: foods,
            key: 'id'
        }
    },
    branchId: {
        primaryKey: true,
        type: DataTypes.STRING,
        references: {
            model: branches,
            key: 'id'
        }
    }
}, {
    freezeTableName: true
})*/

// async function after() {
//     await init().then(data => module.exports = data)
// }
// const init = (async() => {
//     const connection_string = 'postgres://postgres:AnvarjonMMVI@localhost:5432/exam'

//     const sequelize = await new Sequelize(connection_string, { logging: false })
//         // const sequelize = await new Sequelize(connection_string)

//     const restaurants = sequelize.define('restaurants', {
//         name: {
//             type: DataTypes.STRING,
//             unique: true,
//             allowNull: false
//         },
//         id: {
//             primaryKey: true,
//             type: DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4()
//         }
//     })
//     await restaurants.sync({
//         force: true
//     })
//     const branches = sequelize.define('restaurant_branch', {
//         name: {
//             type: DataTypes.STRING,
//             unique: true,
//             allowNull: false
//         },
//         id: {
//             primaryKey: true,
//             type: DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4()
//         },
//         address: {
//             type: DataTypes.STRING,
//             allowNull: true
//         }
//     })
//     await branches.sync({ force: true })
//     const foods = sequelize.define('foods', {
//         name: {
//             type: DataTypes.STRING,
//             unique: true,
//             allowNull: false
//         },
//         price: {
//             type: DataTypes.DECIMAL(10, 2),
//             allowNull: false,
//             defaultValue: 20000.00
//         },
//         id: {
//             primaryKey: true,
//             type: DataTypes.UUID,
//             defaultValue: DataTypes.UUIDV4()
//         },
//     })
//     await foods.sync({ force: true })
//     const branches_and_foods = sequelize.define('branches_and_foods', {})
//     await branches_and_foods.sync({ force: true })
//     branches.belongsTo(restaurants)
//     foods.belongsToMany(branches, { through: branches_and_foods })
//     return {
//         foods,
//         branches,
//         restaurants,
//         sequelize
//     }
// })
// after()
// module.exports = after