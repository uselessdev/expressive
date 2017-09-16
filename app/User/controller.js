/**
 * User controller
 */
const users = require('./repository')
const { transform, responseOk } = require('./transform')

function index (request, response) {
  users.get()
    .then(transform())
    .then(responseOk(response))
    .catch(error => response.status(500).send(error))
}

function show (request, response) {
  const { id } = request.params

  users.byId(id)
    .then(transform())
    .then(responseOk(response))
    .catch(error => response.status(500).send(error))
}

function store (request, response) {
  const { name, email } = request.body

  users.create(name, email)
    .then(user => response.status(201).json({
      data: user.toJSON(),
      meta: {
        next: '/users',
        resources: `/users/${user.id}`
      }
    }))
    .catch(error => response.status(500).send(error))
}

function save (request, response) {
  const { id } = request.params

  users.update(id, request.body)
    .then(user => response.status(200).json({
      data: user.toJSON(),
      meta: {
        next: '/users',
        resources: `/users/${user.id}`
      }
    }))
    .catch(error => response.status(500).send(error))
}

function destroy (request, response) {
  const { id } = request.params

  users.remove(id)
    .then(() => response.status(204).json({data: {}}))
    .catch(error => response.status(500).send(error))
}

module.exports = { index, show, store, save, destroy }
