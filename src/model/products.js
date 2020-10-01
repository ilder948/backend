const Sequelize = require('sequelize')
const sequelize = require('../database')

const Products = sequelize.define('Digitalife', {

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
