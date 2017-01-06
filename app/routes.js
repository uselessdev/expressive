/**
 * Routes
 */
'use strict'

const user = require('./modules/User')
const login = require('./modules/Login')

// @TODO: Abstrair isso
const Auth = require('./modules/Login/Auth').verify

module.exports = app => {
  app.use('/login', login)
  app.use('/users', Auth, user)

  app.get('/', (request, response) => {
    response.render('../views/welcome')
  })
}
