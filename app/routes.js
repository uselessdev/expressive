/**
 * Routes
 */
'use strict'

const auth = require('./modules/Auth')
const login = require('./modules/Login')
const user = require('./modules/User')

module.exports = app => {
  app.use('/login', login)
  app.use('/users', auth, user)

  app.get('/', (request, response) => {
    response.render('../views/welcome')
  })
}
