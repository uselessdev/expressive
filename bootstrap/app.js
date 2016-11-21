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

app.set('views', './app/modules')
app.set('view engine', 'pug')

consign({cwd: 'app'})
  .include('routes')
  .into(app)

module.exports = app
