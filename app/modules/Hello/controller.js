/**
 * HelloController
 */
'use strict'

function index (request, response) {
  response.render('Hello/index', {greeting: 'Hey there!'})
}

module.exports = {index}
