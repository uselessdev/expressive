/**
 * User Routes
 */
'use strict'

const users = require('./controller')
const Router = require('express').Router()

Router.get('/', users.index)

module.exports = Router
