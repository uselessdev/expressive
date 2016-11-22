/**
 * Router
 */
'use strict'

const hello = require('./modules/Hello')

module.exports = app => {
  app.use('/hello', hello)

  app.get('/', (request, response) => {
    response.render('./views/welcome')
  })
}
