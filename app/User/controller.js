/**
 * User Controller
 */
const User = require('./model')

function index (request, response) {
  User.find()
  .then(users => {
    if (!users.length) {
      return response.json({message: 'No users registered!'})
    }

    return response.render('User/index', {users})
  })
  .catch(err => console.error(err))
}

module.exports = {
  index
}
