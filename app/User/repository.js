/**
 * User repository
 */
const User = require('./model')

const get = () =>
  User.fetchAll()

const byId = id =>
  new User({id}).fetch()

const create = (name, email) =>
  new User({name, email}).save()

const update = (id, update) =>
  byId(id).then(user => user.set(update).save())

const remove = id =>
  byId(id).then(user => user.destroy({hardDelete: true}))

module.exports = {
  get,
  byId,
  create,
  remove,
  update
}
