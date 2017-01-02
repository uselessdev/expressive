/**
 * Auth Routes
 */

const auth = require('./controller')
const login = require('./loginController')

const router = require('express').Router()

router.get('/login', login.index)

// router.post('/', auth.login)

// Middleware for validate token
// router.use('/', auth.authenticated)

module.exports = router
