/**
 * Home Routes
 */
const Router = require('express').Router()

Router.get('/', (request, response) => {
  response.json({
    data: {
      message: 'Hello World!'
    }
  })
})

module.exports = Router
