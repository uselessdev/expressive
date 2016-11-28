/**
 * Database
 */

const mongoose = require('mongoose')
const mongo = require('../config/database').mongo

function connection () {
  mongoose.connect(mongo.uri)
}

module.exports = connection
