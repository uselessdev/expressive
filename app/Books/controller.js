/**
 * Books Controller
 */
const Books = require('./repository')
const BooksTransform = require('./transform')
const {
  responseWithOk,
  responseWithCreated,
  responseWithDeleted
} = require('../Responses')

const index = (request, response) => {
  Books.find()
    .then(BooksTransform())
    .then(responseWithOk(response))
}

const show = (request, response) => {
  Books.findOne(parseInt(request.params.id))
    .then(BooksTransform())
    .then(responseWithOk(response))
}

const store = (request, response) => {
  Books.create(request.body)
    .then(BooksTransform())
    .then(responseWithCreated(response))
}

const update = (request, response) => {
  Books.update(parseInt(request.params.id))
    .then(BooksTransform())
    .then(responseWithOk(response))
}

const destroy = (request, response) => {
  Books.remove(request.params.id)
    .then(BooksTransform())
    .then(responseWithDeleted(response))
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
}
