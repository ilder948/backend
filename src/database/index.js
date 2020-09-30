const { config } = require('../config/index')
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(`postgres://${config.pgUser}:${config.pgPassword}@${config.pgHost}:${config.pgPort}/${config.pgDatabase}`)

module.exports = sequelize





