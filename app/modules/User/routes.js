/**
 * User Routes
 */
'use strict'

const user = require('./controller')
const router = require('express').Router()

router.get('/', user.index)
router.get('/create', user.create)

module.exports = router
