const { Router } = require('express')
const router = Router()
const { getUser, createUser } = require('../components/user.controller')
const { getProductsDb } = require('../components/search')
const passport = require('passport');
const Login = require('../components/auth.controller')

router.post('/login', Login)
router.get('/users', passport.authenticate('jwt', { session: false }), getUser)
router.post('/users', passport.authenticate('jwt', { session: false }), createUser)
router.get('/search', passport.authenticate('jwt', { session: false }), getProductsDb)


module.exports = router;


