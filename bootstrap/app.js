/**
 * Express
 *
 * Express settings
 */
'use strict'

const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

const app = express()

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}))

// Setting view folder and view engine
app.set('views', './app/modules')
app.set('view engine', 'pug')

// Setting static files
app.use(express.static('public'))

consign({cwd: 'app'})
  .then('routes.js')
  .into(app)

module.exports = app
