const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../database/index')

class User extends Model { }

User.init({
  firstname: {
    type: DataTypes.STRING,
  },
  lastname: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
  },
  country: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.NUMBER
  }
})

module.exports = { User }
