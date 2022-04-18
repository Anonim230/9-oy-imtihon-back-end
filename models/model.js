const { Sequelize, DataTypes } = require("sequelize");

const connection_string = 'postgres://wkdhadgv:dsjAwVdYcZsWysThm5R7uTGDkxYa-aGn@arjuna.db.elephantsql.com/wkdhadgv' //'postgres://postgres:AnvarjonMMVI@localhost:5432/exam'

const sequelize = new Sequelize(connection_string, { logging: false })
    // const sequelize = new Sequelize(connection_string)

const restaurants = sequelize.define('restaurants', {
    name: {
        type: DataTypes.STRING
    }
})
const branches = sequelize.define('restaurant_branch', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true
    }
})
const foods = sequelize.define('foods', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 20000.00
    },
    description: DataTypes.TEXT,
    img: DataTypes.STRING(128)
})
const branches_and_foods = sequelize.define('branches_and_foods', {})
const restaurants_and_branches = sequelize.define('restaurants_and_branches', {})
branches.belongsToMany(restaurants, { through: restaurants_and_branches })
restaurants.belongsToMany(branches, { through: restaurants_and_branches })
branches.belongsToMany(foods, { through: branches_and_foods })
foods.belongsToMany(branches, { through: branches_and_foods })
    // sequelize.sync({ alter: true })
module.exports = {
    foods,
    branches,
    restaurants,
    sequelize,
    restaurants_and_branches,
    branches_and_foods
}

// module.exports = after