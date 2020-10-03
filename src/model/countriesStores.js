const Sequelize = require('sequelize')
const sequelize = require('../database')

const CountriesStores = sequelize.define('Countries_Stores', {
    country_id: {
        type: Sequelize.INTEGER,
    },
    store_id: {
        type: Sequelize.INTEGER,
    },
    active: {
        type: Sequelize.BOOLEAN
    }
}, {
    freezeTableName: true,
})

module.exports = { CountriesStores }
