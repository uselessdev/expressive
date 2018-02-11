/**
 * Routes
 */
const Home = require('./Home')
const Books = require('./Books')

module.exports = app => {
  app.use('/', Home)
  app.use('/books', Books)
}
