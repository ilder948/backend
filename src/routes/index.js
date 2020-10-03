// App routes modules
const { Router } = require('express')
const router = Router()
const { getUser, createUser } = require('../components/user.controller')
const { getProductsDb } = require('../components/search')
const passport = require('passport');
const { Login, Register } = require('../components/auth.controller')

//App routes
router.post('/login', Login)
router.post('/register', Register)
router.get('/users', passport.authenticate('jwt', { session: false }), getUser)
router.post('/users', passport.authenticate('jwt', { session: false }), createUser)
router.get('/search', getProductsDb)

module.exports = router;
