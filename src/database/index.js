const { Pool } = require('pg')
const {config} = require('../config/index')


  const pool = new Pool({
    user: config.pgUser,
    host: config.pgHost,
    database: config.pgDatabase,
    password: config.pgPassword,
    port: config.pgPort,
  })

  module.exports = pool





