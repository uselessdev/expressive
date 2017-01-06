/**
 * Express
 *
 * Express settings
 */
'use strict'

require('dotenv').config

const morgan = require('morgan')
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const session = require('express-session')
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

// Session settings
// @TODO: Add session connection with mongo
app.use(session({
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUniitialized: true
}))

// Setting view folder and view engine
app.set('views', './app/modules')
app.set('view engine', 'pug')

consign({
  locale: 'pt-br'
})
.include('bootstrap/database.js')
.then('app/routes.js')
.into(app)

module.exports = app
