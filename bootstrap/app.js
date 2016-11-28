/**
 * Express
 *
 * Express settings
 */
'use strict'

const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

// Connection with MongoDB
require('./database')()

const app = express()

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}))

// Setting static files
app.use(express.static('public'))

// Setting view folder and view engine
app.set('views', './app/modules')
app.set('view engine', 'pug')

consign({cwd: 'app'})
  .include('routes.js')
  .into(app)

module.exports = app
