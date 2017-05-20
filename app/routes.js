/**
 * Routes
 */
const Users = require('./User')
const Login = require('./Login')

module.exports = app => {
  app.use('/', Login)
  app.use('/users', Users)

  app.get('/', (request, response) => {
    response.render('views/welcome')
  })
}
