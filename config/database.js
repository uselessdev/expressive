/**
 * Database config
 */
'use strict'

require('dotenv').config()

module.exports = {
  mongo: {
    uri: process.env.MONGODB_URI
  }
}
