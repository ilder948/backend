const { Router } = require('express')
const router = Router()

const { getUser, createUser } = require('../components/user.controller')
const { Login } = require('../components/auth.controller')


router.get('/users', getUser)
router.post('/users', createUser)
router.post('/login', require('../components/auth.controller'))

module.exports = router