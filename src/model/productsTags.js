const Sequelize = require('sequelize')
const sequelize = require('../database')

const Products = sequelize.define('Products', {
  name: {
    type: Sequelize.STRING,
  },
  external_id: {
    type: Sequelize.STRING,
  },
  store_id: {
    type: Sequelize.INTEGER,
  },
  url: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.FLOAT,
  },
  image_url: {
    type: Sequelize.STRING
  },
  active: {
    type: Sequelize.BOOLEAN
  }
}, {
  freezeTableName: true,
})

module.exports = { Products }