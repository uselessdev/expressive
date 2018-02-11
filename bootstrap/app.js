/**
 * Start Application
 */
const consign = require('consign')
const express = require('express')
const app = express()

consign({locale: 'pt-br'})
  .include('app/Routes.js')
  .into(app)

module.exports = app
