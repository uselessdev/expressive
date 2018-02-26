const Router = require('express').Router()
const controller = require('./controller')

Router.get('/', controller.index)
Router.get('/:id', controller.show)

module.exports = Router
