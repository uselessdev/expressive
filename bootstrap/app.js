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
const MongoStore = require('connect-mongo')(session)
const methodOverride = require('method-override')
const csrf = require('csurf')
const helmet = require('helmet')
const cookieParser = require('cookie-parser')

const app = express()

// Middleware
app.use(helmet())

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())
app.use(cookieParser())

// CSRF Protection
app.use(csrf({
  cookie: true
}))

/**
 * To get CSRF Token in a view just use _csrf variable.
 */
app.use(function (request, response, next) {
  response.locals._csrf = request.csrfToken()
  next()
})

// Setting static files
app.use(express.static('public'))
app.use(methodOverride())

// Morgan
app.use(morgan('dev'))

// Session settings
app.use(session({
  name: process.env.SESSION_NAME,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  session: new MongoStore({
    url: process.env.MONGODB_URI
  })
}))

// Setting view folder and view engine
app.set('views', './app/modules')
app.set('view engine', 'pug')

consign({
  locale: process.env.APP_LOCALE
})
.include('bootstrap/database.js')
.then('app/routes.js')
.into(app)

module.exports = app
