/**
 * Home Controller
 */
const booksRepository = require('../Books/repository')
const authorsRepository = require('../Authors/repository')

const index = async (request, response) => {
  const books = await booksRepository.find()
  const authors = await authorsRepository.find()

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
