/**
 * User Controller
 */
const User = require('./model')

function index (request, response) {
  User.fetchAll()
    .then(users => response.status(200).json({users: users.toJSON()}))
    .catch(error => response.status(500).send(error))
}

function store (request, response) {
  new User(request.body).save()
    .then(responseUser(response, 201))
    .catch(error => response.status(500).send(error))
}

function save (request, response) {
  const { id } = request.params

  getUserById(id)
    .then(updateUser(request.body))
    .then(responseUser(response, 200))
    .catch(error => response.status(500).send(error))
}

function destroy (request, response) {
  const { id } = request.params

  getUserById(id)
    .then(deleteUser)
    .then(() => response.status(200).json({data: {}, next: '/users'}))
    .catch(error => response.status(500).send(error))
}

const getUserById = id =>
  new User({id}).fetch()

const updateUser = update => model =>
  model.set(update).save()

const deleteUser = user =>
  user.destroy()

const responseUser = (response, status) => user =>
  response.status(status).json({
    data: user.toJSON(),
    meta: {
      next: '/users',
      resource: `users/${user.id}`
    }
  })

module.exports = {
  index,
  store,
  save,
  destroy
}
