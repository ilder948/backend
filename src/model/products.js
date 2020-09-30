const Sequelize = require('sequelize')
const sequelize = require('../database')

const Products = sequelize.define('Digitalife', {
  id: {
    type: Sequelize.NUMBER,
    primaryKey: true
  },
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

module.exports = { Products }
