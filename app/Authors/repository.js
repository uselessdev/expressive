const authors = [
  {
    id: 1,
    name: 'George R. R. Martin'
  }
]

const find = () => Promise.resolve(authors)
const findOne = id => Promise.resolve(authors.find(author => author.id === parseInt(id)))

module.exports = {
  find,
  findOne
}
