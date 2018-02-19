/**
 * Home Routes
 */
const Router = require('express').Router()
const Home = require('./controller')

Router.get('/', Home.index)

module.exports = Router
