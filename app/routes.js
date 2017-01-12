/**
 * Routes
 */
'use strict'

const user = require('./modules/User')
const login = require('./modules/Login')

const auth = require('./modules/Login/auth').verify

module.exports = app => {
  app.use('/', login)
  app.use('/users', auth, user)

  app.get('/', (request, response) => {
    response.render('../views/welcome')
  })
}
