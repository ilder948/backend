const { Router } = require('express')
const router = Router()
const { getUser, createUser } = require('../components/user.controller')
const { getProductsDb } = require('../components/search')
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { config } = require('../config/index')

router.get('/users', getUser)
router.post('/users', createUser)
router.get('/search', getProductsDb)


module.exports = router;


