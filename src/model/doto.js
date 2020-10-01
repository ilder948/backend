const Sequelize = require('sequelize')
const sequelize = require('../database')

const Doto = sequelize.define('Doto', {

    url: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.FLOAT,
    },
    name: {
        type: Sequelize.STRING,
    },
    img: {
        type: Sequelize.STRING
    }
}, {
    freezeTableName: true,
})

module.exports = { Doto }
