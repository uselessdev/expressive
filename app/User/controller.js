/**
 * User controller
 */
const User = require('./model')

function index (request, response) {
  User
    .fetchAll()
    .then(users => response.json({data: users.toJSON()}))
    .catch(error => response.status(500).send(error))
}

function show (request, response) {
  const { id } = request.params

  const responseObject = {
    data: {},
    meta: {
      next: '/users'
    }
  }

  getUserById(id)
    .then(user => {
      if (!user) {
        return response.json(responseObject)
      }

      return response.json({
        data: user.toJSON(),
        meta: {
          next: '/users',
          resources: `/users/${user.id}`
        }
      })
    })
    .catch(error => {
      console.log(error)
      response.status(500).send(error)
    })
}

function store (request, response) {
  const { name, email, password } = request.body

  new User({name, email, password})
    .save()
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

  getUserById(id)
    .then(updateUser(request.body))
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

  getUserById(id)
    .then(user => user.destroy({hardDelete: true}))
    .then(() => response.status(204).json({data: {}}))
    .catch(error => response.status(500).send(error))
}

const getUserById = id =>
  new User({id}).fetch()

const updateUser = update => model =>
  model.set(update).save()

module.exports = { index, show, store, save, destroy }
