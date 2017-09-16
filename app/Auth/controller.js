/**
 * Auth Controllers
 */
function success (request, response) {
  response.redirect('/users')
}

function fail (request, response) {
  response.status(401).json({error: 'Authentication was failed!'})
}

module.exports = {
  success,
  fail
}
