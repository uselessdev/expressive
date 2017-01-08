/**
 * Routes
 */
'use strict'

const login = require('./controller')
const router = require('express').Router()

router.get('/login', login.index)
router.post('/login', login.signin)

router.get('/logout', login.signout)

module.exports = router
