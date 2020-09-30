const { UserMeta } = require('./user'),
    connection = require('../database/index')

const User = connection.define('users', UserMeta.attributes, UserMeta.options)


module.exports = { User }