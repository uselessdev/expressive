/**
 * Hello Router
 */
'use strict'

const hello = require('./controller')
const router = require('express').Router()

router.get('/', hello.index)

module.exports = router
