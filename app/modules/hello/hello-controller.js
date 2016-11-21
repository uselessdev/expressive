/**
 * HelloController
 */
'use strict'

function index (request, response) {
  response.render('hello/hello-index', {greeting: 'Hey there!'})
}

module.exports = {index}
