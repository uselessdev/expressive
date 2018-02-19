/**
 * Home Controller
 */
const books = require('../Books/repository')

const index = (request, response) => {
  books.find()
    .then(books => response.json({
      data: {
        books
      }
    }))
}

module.exports = {
  index
}
