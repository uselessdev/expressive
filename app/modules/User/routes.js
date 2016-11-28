/**
 * User Routes
 */
'use strict'

const user = require('./controller')
const router = require('express').Router()

router.get('/', user.index)

module.exports = router
