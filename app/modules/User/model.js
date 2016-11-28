/**
 * Schama
 */
'use strict'

const moment = require('moment')
const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamps')

moment.locale('pt-br')

const userSchema = new mongoose.Schema({
  name: String,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.methods.created = function () {
  return moment(this.created_at).format('LLL')
}

// Define timestamps plugins
userSchema.plugin(timestamps)

module.exports = mongoose.model('User', userSchema)
