const { Router } = require('express')
const router = Router()

const { getUser, createUser } = require('../components/user.controller')
const { Login } = require('../components/auth.controller')
const { getProductsDb } = require('../components/search')


router.get('/users', getUser)
router.post('/users', createUser)
router.get('/search', getProductsDb)
router.post('/login', require('../components/auth.controller'))

module.exports = router