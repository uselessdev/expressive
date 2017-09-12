/**
 * Home Controller
 */
function index (request, response) {
  return response.render('views/welcome', {
    data: {
      message: 'Hello World!'
    },
    error: false
  })
}

module.exports = {
  index
}
