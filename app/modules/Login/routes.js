/**
 * Routes
 */
'use strict'

const login = require('./controller')
const router = require('express').Router()

router.get('/', login.index)
router.post('/', login.signin)

module.exports = router
