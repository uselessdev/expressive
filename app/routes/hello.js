/**
 * Router Hello
 */
'use strict'

var hello = require('../modules/hello')

module.exports = app => {
  app.get('/', hello.index)
}
