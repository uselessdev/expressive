/**
 * Router Hello
 */
'use strict'

var hello = require('../modules/Hello')

module.exports = app => {
  app.get('/', hello.index)
}
