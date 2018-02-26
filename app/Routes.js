/**
 * Routes
 */
const Home = require('./Home')
const Books = require('./Books')
const Authors = require('./Authors')

module.exports = app => {
  app.use('/', Home)
  app.use('/books', Books)
  app.use('/authors', Authors)
}
