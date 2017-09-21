/**
 * User repository
 */
const User = require('./model')

const find = query =>
  User.where({...query}).fetchAll()

const findOne = query =>
  User.where(query).fetch()

const create = (name, email) =>
  new User({name, email}).save()

const update = (id, update) =>
  findOne({id}).then(user => user.set(update).save())

const remove = id =>
  findOne({id}).then(user => user.destroy({hardDelete: true}))

module.exports = {
  find,
  findOne,
  create,
  remove,
  update
}
