/**
 * Routes
 */
'use strict'

const user = require('./modules/User')

module.exports = app => {
  app.use('/users', user)

  app.get('/', (request, response) => {
    response.render('../views/welcome')
  })
}
