/**
 * Database
 */
const mongoose = require('mongoose')
const mongo = require('config/database').mongo

mongoose.Promise = global.Promise

module.exports = mongoose.connect(mongo.uri)
