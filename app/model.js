/**
 * Model
 *
 * Return an instance of connection as function
 */
'use strict'

const connection = require('../bootstrap/database')

module.exports = app => {
  return connection
}
