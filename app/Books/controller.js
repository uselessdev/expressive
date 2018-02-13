/**
 * Books Controller
 */
const Books = require('./repository')
const BooksTransform = require('./transform')

const index = (request, response) => {
  Books.find()
    .then(BooksTransform())
    .then(books => response.json(books))
}

const show = (request, response) => {
  Books.findOne(request.params.id)
    .then(book => response.json({data: book}))
}

const store = (request, response) => {
  Books.create(request.body)
    .then(books => response.json({data: books}))
}

const update = (request, response) => {
  Books.update(request.params.id)
    .then(books => response.json(books))
}

const destroy = (request, response) => {
  Books.remove(request.params.id)
    .then(books => response.json(books))
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
}
