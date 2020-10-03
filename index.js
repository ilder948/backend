// Node modules
const express = require('express')
const app = express()
const morgan = require('morgan')
const { config } = require('./src/config/index')
const sequelize = require('./src/database/index')
const passport = require('passport')
const cors = require('cors')

// use the strategy
app.use(passport.initialize());
app.use(passport.session());
app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

//App routes use 
app.use(require('./src/routes/index'),);

//App endpoint
app.listen(config.port, () => {
  console.log(`Server Run In ${config.host}:${config.port}`)
  sequelize.authenticate().then(() => {
    console.log(`DB conect`)
  }).catch(error => {
    console.log(`Error DB ${error}`)
  })
})
