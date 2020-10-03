const Sequelize = require('sequelize')
const sequelize = require('../database')

const latestSearch = sequelize.define('Users_Products', {
    user_id: {
        type: Sequelize.INTEGER
    },
    query: {
        type: Sequelize.STRING,
    },
}, {
    freezeTableName: true,
})

module.exports = { latestSearch }
