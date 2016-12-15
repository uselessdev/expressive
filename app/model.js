/**
 * Model
 */
'use strict'

const connection = require('../bootstrap/database')

module.exports = app => {
  return connection
}
