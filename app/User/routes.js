/**
 * Users router
 */
const Router = require('express').Router()
const users = require('./controller')

Router.get('/', users.index)

module.exports = Router
