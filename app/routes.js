/**
 * Routes
 */
'use strict'

const user = require('./modules/User')
const login = require('./modules/Login')

const Auth = require('./modules/Login/Auth').verify

module.exports = app => {
  app.use('/', login)
  app.use('/users', Auth, user)

  app.get('/', (request, response) => {
    response.render('../views/welcome')
  })
}
