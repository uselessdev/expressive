/**
 * Controller
 */
const Transform = require('./Transform')
const {
  responseWithOk,
  responseWithCreated,
  responseWithDeleted
} = require('./Responses')

const index = Repository => (request, response) => (
  Repository.find()
    .then(Transform())
    .then(responseWithOk(response))
)

const show = Repository => (request, response) => (
  Repository.findOne(request.params.id)
    .then(Transform())
    .then(responseWithOk(response))
)

const store = Repository => (request, response) => (
  Repository.create(request.body)
    .then(Transform())
    .then(responseWithCreated(response))
)

const update = Repository => (request, response) => (
  Repository.update(request.body)
    .then(Transform())
    .then(responseWithOk(response))
)

const remove = Repository => (request, response) => (
  Repository.remove(request.params.id)
    .then(Transform())
    .then(responseWithDeleted)
)

module.exports = Repository => ({
  index: index(Repository),
  show: show(Repository),
  store: store(Repository),
  update: update(Repository),
  remove: remove(Repository)
})
