/**
 * Express
 *
 * Express settings
 */
'use strict'

const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

// Connection with MongoDB
require('./database')()

const app = express()

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

// Setting static files
app.use(express.static('public'))
app.use(methodOverride())

// Setting view folder and view engine
app.set('views', './app/modules')
app.set('view engine', 'pug')

consign({cwd: 'app'})
  .include('routes.js')
  .into(app)

module.exports = app
