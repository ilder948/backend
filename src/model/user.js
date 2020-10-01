const Sequelize = require('sequelize')
const sequelize = require('../database')

const Users = sequelize.define('users', {
  firstname: {
    type: Sequelize.STRING,
  },
  lastname: {
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
  country: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.NUMBER
  }
}, {
  freezeTableName: true,
})

module.exports = { Users }

