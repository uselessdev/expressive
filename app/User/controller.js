/**
 * User Controller
 */
const User = require('./model')

function index (request, response) {
  User.fetchAll()
    .then(users => response.status(200).json({users: users.toJSON()}))
    .catch(error => response.status(500).send(error))
}

module.exports = {
  index
}
