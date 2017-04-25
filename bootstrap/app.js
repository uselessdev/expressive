/**
 * Bootstrap application
 *
 * All Express settings, as middleware, security, helmet are set here.
 */
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

/**
 * Load Settings
 */
const config = require('config/app')
const sess = require('config/session')
const mongo = require('config/database').mongo

/**
 * Express instance.
 *
 * @type {Function}
 */
const app = express()

/**
 * Here we define some middlewares
 */

/**
 * Security
 */
app.use(helmet())

/**
 * Logs
 */
app.use(morgan('dev'))

/**
 * Accept request from formdata submit, and json posts.
 */
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

/**
 * Session settings.
 */
// app.use(session({
//   name: sess.name,
//   secret: sess.secret,
//   resave: false,
//   saveUninitialized: true,
//   session: new MongoStore({
//     url: mongo.uri
//   })
// }))

/**
 * Define public folders
 */
app.use(express.static('public'))

/**
 * View engine
 */
app.set('views', ['app', 'resources'])
app.set('view engine', 'pug')

/**
 * Autoload some modules for initial start.
 */
consign({
  locale: config.locale
})
.include('app/routes.js')
.into(app)

module.exports = app
