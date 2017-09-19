/**
 * Auth routes
 */
const Router = require('express').Router()

const controller = require('./controller')
const { facebook } = require('./strategies')

Router.get('/', (request, response) => {
  response.json({})
})

facebook(Router, controller)

Router.get('/error', controller.fail)

module.exports = Router
