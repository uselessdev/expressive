/**
 * Routes
 */
const Home = require('./Home')
const User = require('./User')
const Auth = require('./Auth')

module.exports = app => {
  app.use('/', Home)
  app.use('/auth', Auth)
  app.use('/users', User)

  /**
   * Realizar logout
   */
  app.get('/logout', (request, response) => {
    request.logout()
    response.redirect('/')
  })
}

const guard = (request, response, next) => request.isAuthenticated() ? next() : response.redirect('/auth')
