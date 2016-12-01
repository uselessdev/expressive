/**
 * User Routes
 */
'use strict'

const user = require('./controller')
const router = require('express').Router()

// Middleware
router.use(user.tokenValidate)

router.get('/', user.index)

/**
 * This route will create an user and password:
 * {
 *   name: 'Jhon Doe',
 *   username: 'usernamed',
 *   password: '123456789'
 * }
 */
router.get('/setup', user.sample)
router.post('/auth', user.auth)

module.exports = router
