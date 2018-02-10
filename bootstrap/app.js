/**
 * Start Application
 */
const express = require('express')
const app = express()

app.get('/', (request, response) => {
  response.json({
    data: 'Hello World!'
  })
})

module.exports = app
