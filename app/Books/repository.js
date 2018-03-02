/**
 * Books Repository
 */
const Book = require('./model')

const relations = {
  withRelated: [
    'author'
  ]
}

const find = query => Book.where({...query}).fetchAll(relations)
const findOne = id => Book.where({ id }).fetch(relations)
const create = book => new Book(book).save()

const save = user => data => user.set(data).save()
const update = (id, data) => findOne({id}).then(save(data))

const destroy = user => user.destroy({ hardDelete: true })
const remove = id => findOne({id}).then(destroy)

module.exports = {
  find,
  findOne,
  create,
  update,
  remove
}
