/**
 * Home Controller
 */
function index (request, response) {
  return response.render('views/welcome')
}

module.exports = {
  index
}
