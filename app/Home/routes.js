/**
 * Home Router
 */
const Router = require('express').Router()
const HomeController = require('./controller')

Router.get('/', HomeController.index)

module.exports = Router
