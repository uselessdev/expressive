/**
 * Routes
 */
const Home = require('./Home')
const User = require('./User')

module.exports = app => {
  app.use('/', Home)
  app.use('/users', User)
}
