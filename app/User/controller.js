/**
 * User Controller
 */
const User = require('./model')

function index (request, response) {
  User.fetchAll()
    .then(users => response.render('User/index', {users: users.toJSON()}))
    .catch(error => response.send(error))
}

module.exports = {
  index
}
