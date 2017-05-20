/**
 * Routes
 */
const Router = require('express').Router()
const login = require('./controller')

Router.get('/login', login.index)
Router.post('/login', login.signin)

Router.get('/logout', login.signout)

module.exports = Router
