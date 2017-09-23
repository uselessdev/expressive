/**
 * Auth Controllers
 */
const { responseWithUnathourizedError } = require('app/Responses')

function success (request, response) {
  response.redirect('/users')
}

const fail = (request, response) =>
  responseWithUnathourizedError(response)('Authentication was failed!')

module.exports = {
  fail,
  success
}
