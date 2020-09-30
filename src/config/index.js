require('dotenv').config()

const config = {
  port: process.env.PORT,
  host: process.env.HOST,
  pgHost: process.env.PGHOST,
  pgUser: process.env.PGUSER,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT,
  jwtToken: process.env.TOKEN_KEY,

  //rapi Api
  keyRapidApi: process.env.KEY_RAPIDAPI

}

module.exports = { config }