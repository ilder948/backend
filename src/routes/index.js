const {Router} = require('express')
const passport = require('passport')

const router = Router()

const { getUser, createUser } = require('../components/user.controller')

router.get('/users', getUser)
router.post('/users', createUser)
router.post('/login', passport.authenticate('local') )

module.exports = router