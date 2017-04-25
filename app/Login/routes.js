/**
 * Routes
 */
'use strict'

const request = require('./request')
const login = require('./controller')
const router = require('express').Router()

router.get('/login', login.index)
router.post('/login', request, login.signin)

router.get('/logout', login.signout)

module.exports = router
