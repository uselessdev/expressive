/**
 * Routes
 */
module.exports = app => {
  app.get('/', (request, response) => {
    response.json({
      data: {
        message: 'Hello World!'
      }
    })
  })
}
