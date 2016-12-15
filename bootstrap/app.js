/**
 * Express
 *
 * Express settings
 */
'use strict'

const morgan = require('morgan')
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

const app = express()

// Middleware
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

// Setting static files
app.use(express.static('public'))
app.use(methodOverride())

// Morgan
app.use(morgan('dev'))

// Setting view folder and view engine
app.set('views', './app/modules')
app.set('view engine', 'pug')

// Setting the secret
app.set('secret', require('../config/app').key)

consign({
  cwd: 'app',
  locale: 'pt-br'
})
.include('routes.js')
.include('model.js')
.into(app)

module.exports = app
