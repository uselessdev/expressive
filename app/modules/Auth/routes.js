/**
 * Auth Routes
 */
'use strict'

const auth = require('./controller')
const router = require('express').Router()

router.post('/', auth.login)
router.use('/', auth.verify)

module.exports = router
