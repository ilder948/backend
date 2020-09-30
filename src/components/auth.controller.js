const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const passport = require('passport')
const { config } = require('../config/index')

/* POST login. */
router.post('/login', (req, res, next) => {
  console.log(config)
  passport.authenticate({ session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user: user
      })
    }
    req.login(user, { session: false }, (err) => {

      if (err) {
        res.send(err)
      }
      const token = jwt.sign(user, config.jwtToken)
      return res.json({ user, token })
    })
  })(req, res, next)
})

module.exports = router