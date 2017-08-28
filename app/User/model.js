/**
 * Schama
 */
const bcrypt = require('bcrypt')
const moment = require('moment')
const { Bookshelf } = require('bootstrap/database')

/**
 * @ATTENTION: When using toJSON use the following:
 * user.toJSON({virtuals: true})
 * this allow you to get {created: }
 */

const User = Bookshelf.Model.extend({
  tableName: 'users',
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
      bcrypt.hash(model.attributes.password, 10)
        .then(hash => {
          model.set('password', hash)
          resolve(hash)
        })
        .catch(reject)
    )
  }
})

module.exports = Bookshelf.model('User', User)
