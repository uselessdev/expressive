/**
 * Routes
 */
const Users = require('./User')

module.exports = app => {
  app.use('/users', Users)

  app.get('/', (request, response) => {
    response.render('views/welcome')
  })
}
