/**
 * Books Controller
 */
let books = [
  {
    id: 1,
    title: 'The Game of Thrones - A Song of Ice and Fire - Book 1',
    author: 'George R. R. Martin',
    value: 16.9
  },
  {
    id: 2,
    title: 'A Clash of Kings - A Song of Ice and Fire - Book 2',
    author: 'George R. R. Martin',
    value: 17.2
  },
  {
    id: 3,
    title: 'A Storm of Swords - A Song of Ice and Fire - Book 3',
    author: 'George R. R. Martin',
    value: 20.2
  },
  {
    id: 4,
    title: 'A Feast for Crowns - A Song of Ice and Fire - Book 4',
    author: 'George R. R. Martin',
    value: 23.8
  },
  {
    id: 5,
    title: 'A Dance with Dragons - A Song of Ice and Fire - Book 5',
    author: 'George R. R. Martin',
    value: 24
  }
]

const index = (request, response) => {
  return response.json({
    data: books
  })
}

const show = (request, response) => {
  const { id } = request.params
  const book = books.find(book => book.id === parseInt(id))

  return response.json({
    data: book
  })
}

const store = (request, response) => {
  const book = request.body

  books.push({
    id: books.length + 1,
    ...book
  })

  return response.json(books)
}

const update = (request, response) => {
  const { id } = request.params
  const book = books.find(b => b.id === parseInt(id))

  // mutation
  Object.assign(book, request.body)

  return response.json(books)
}

const destroy = (request, response) => {
  const { id } = request.params
  books = books.filter(book => book.id !== parseInt(id))
  return response.json(books)
}

module.exports = {
  index,
  show,
  store,
  update,
  destroy
}
