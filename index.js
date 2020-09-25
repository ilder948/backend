const express = require('express')
const app = express()
const morgan = require('morgan')
const session = require('express-session')
const flash = require('express-flash')
const passport = require('passport')
const { config } = require('./src/config/index')

const initializePassport = require('./src/lib/passportConfig')
initializePassport(passport)

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())


app.use(require('./src/routes/index'));


app.listen(config.port, () => {
  console.log(`Server Run In ${config.host}:${config.port}`)
})


