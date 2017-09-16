/**
 * User model
 */
// const bcrypt = require('bcrypt')
const moment = require('moment')
const { Bookshelf } = require('bootstrap/database')

const User = Bookshelf.Model.extend({
  tableName: 'users',
  softDelete: true,
  virtuals: {
    created () {
      return moment(this.created_at).format('LLL')
    }
  }
})

module.exports = Bookshelf.model('User', User)
