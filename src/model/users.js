const Sequelize = require('sequelize')
const sequelize = require('../database')

const Users = sequelize.define('Users', {
  first_name: {
    type: Sequelize.STRING,
  },
  last_name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    isEmail: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: '',
    allowNull: false
  },
//  country_id: {
//    type: Sequelize.STRING
//  },
//  age: {
//    type: Sequelize.NUMBER
//  }
}, {
  freezeTableName: true,
})

module.exports = { Users }

