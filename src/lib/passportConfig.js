const LocalStrategy = require('passport-local').Strategy
const { pool } = require('../database/index')
const bcrypt = require('bcrypt')

function initialize(passport){

  const autenticateUser = (email, password, done) => {
    pool.query(`SELECT email, password FROM users WHERE email = $1`, [email], (err, results) => {
      if (err) {
        throw err
      }
      console.log(results.row)

      if (results.rows.length > 0) {
        const user = results.rows[0]

        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            throw err
          }

          if (isMatch) {
            return done(null, user)
          } else {
            return done(null, false, {message: 'Incorrect password'})
          }
        })
      } else {
        return done(null, false, {message: 'Email no registered'})
      }
    })
  }


  passport.use(new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    autenticateUser
  ))

  passport.serializeUser((user, done) => done(null, user.id))

  passport.deserializeUser((id, done) => {
    pool.query(`SELECT * from users WHERE id = $1`, [id], (err, results) => {
      if(err) {
        throw err
      }
      return done(null, results.rows[0])
    })
  })
}

module.exports = initialize