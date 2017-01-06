/**
 * Routes
 */
'use strict'

const user = require('./modules/User')
const login = require('./modules/Login')

module.exports = app => {
  app.use('/users', user)
  app.use('/login', login)

  app.get('/', (request, response) => {
    response.render('../views/welcome')
  })
}
