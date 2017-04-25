/**
 * User Routes
 */
'use strict'

const users = require('./controller')
const router = require('express').Router()

router.get('/', users.index)
// router.get('/create', user.create)

module.exports = router
