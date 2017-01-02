/**
 * Auth Routes
 */

const auth = require('./controller')
const router = require('express').Router()

router.post('/', auth.login)
router.get('/', auth.authenticated)

module.exports = router
