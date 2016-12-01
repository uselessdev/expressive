/**
 * Auth Routes
 */

const auth = require('./controller')
const router = require('express').Router()

router.use('/', auth.index)

module.exports = router
