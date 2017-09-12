/**
 * User controller
 */
const User = require('./model')

function index (request, response) {
  User
    .fetchAll()
    .then(users => response.json({
      data: users.toJSON(),
      error: false,
      meta: {
        next: '/users'
      }
    }))
    .catch(error => response.status(500).send(error))
}

module.exports = { index }
