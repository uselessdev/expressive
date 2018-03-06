const Author = require('./model')

const relations = {
  withRelated: [
    'books'
  ]
}

const find = query => Author.where({...query}).fetchAll(relations)
const findOne = id => Author.where({ id }).fetch(relations)

module.exports = {
  find,
  findOne
}
