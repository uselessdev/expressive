/**
 * Auth routes
 */
const Router = require('express').Router()
const controller = require('./controller')

const {
  github,
  facebook
} = require('./strategies')

Router.get('/', (request, response) => {
  response.json({})
})

github(Router, controller)
facebook(Router, controller)

Router.get('/error', controller.fail)

module.exports = Router
