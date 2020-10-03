const Sequelize = require('sequelize')
const sequelize = require('../database')

const Countries = sequelize.define('Countries', {
    code_alpha2: {
        type: Sequelize.STRING,
    },
    name: {
        type: Sequelize.STRING,
    },
    active: {
        type: Sequelize.BOOLEAN
    }
}, {
    freezeTableName: true,
})

module.exports = { Countries }
