/**
 * User controller
 */
const users = require('./repository')
const transform = require('./transform')
const {
  responseWithOk,
  responseWithCreated,
  responseWithDeleted,
  responseWithInternalServerError
} = require('app/Responses')

function index (request, response) {
  users.get()
    .then(transform())
    .then(responseWithOk(response))
    .catch(responseWithInternalServerError(response))
}

function show (request, response) {
  const { id } = request.params

  users.byId(id)
    .then(transform())
    .then(responseWithOk(response))
    .catch(responseWithInternalServerError(response))
}

function store (request, response) {
  const { name, email } = request.body

  users.create(name, email)
    .then(transform())
    .then(responseWithCreated(response))
    .catch(responseWithInternalServerError(response))
}

function update (request, response) {
  const { id } = request.params

  users.update(id, request.body)
    .then(transform())
    .then(responseWithOk(response))
    .catch(responseWithInternalServerError(response))
}

function destroy (request, response) {
  const { id } = request.params

  users.remove(id)
    .then(responseWithDeleted(response))
    .catch(responseWithInternalServerError(response))
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
}
