/**
 * Home Controller
 */
const booksRepository = require('../Books/repository')
const authorsRepository = require('../Authors/repository')

const index = async (request, response) => {
  const authors = await authorsRepository.find()
  const books = await booksRepository.find()

  return response.json({
    data: {
      books,
      authors
    }
  })
}

module.exports = {
  index
}
