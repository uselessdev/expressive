/**
 * Router
 */
'use strict'

const user = require('./modules/User')

module.exports = app => {
  app.use('/user', user)

  app.get('/', (request, response) => {
    response.render('../views/welcome')
  })
}
