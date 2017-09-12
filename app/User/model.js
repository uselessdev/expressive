/**
 * User model
 */
const bcrypt = require('bcrypt')
const moment = require('moment')
const { Bookshelf } = require('bootstrap/database')

const User = Bookshelf.Model.extend({
  tableName: 'users',
  softDelete: true,
  hidden: ['password'],
  virtuals: {
    created () {
      return moment(this.created_at).format('LLL')
    }
  },
  initialize () {
    this.on('creating', this.hash, this)
  },
  hash (model, attrs, options) {
    return new Promise((resolve, reject) =>
      bcrypt
        .hash(model.attributes.password, 10)
        .then(hash => {
          model.set('password', hash)
          resolve(hash)
        })
        .catch(reject)
    )
  }
})

module.exports = Bookshelf.model('User', User)
