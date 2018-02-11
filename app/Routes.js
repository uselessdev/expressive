/**
 * Routes
 */
const Home = require('./Home')

module.exports = app => {
  app.use('/', Home)
}
