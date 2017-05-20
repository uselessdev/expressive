/**
 * Schama
 */
const bcrypt = require('bcrypt')
const moment = require('moment')
const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamps')

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  }
})

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  bcrypt
    .hash(this.password, 10)
    .then(hash => {
      this.password = hash
      next()
    })
    .catch(err => next(err))
})

userSchema.methods.created = function () {
  return moment(this.created_at).format('LLL')
}

userSchema.methods.isValidPassword = function (password) {
  return bcrypt.compare(password, this.password)
}

userSchema.plugin(timestamps)

module.exports = mongoose.model('User', userSchema)
