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
const MySQLStore = require('express-mysql-session')(session)

/**
 * Load Settings
 */
const config = require('config/app')
const sess = require('config/session')
const database = require('config/database')

/**
 * Express instance.
 *
 * @type {Function}
 */
const app = express()

// Settings some variables vars
app.locals.app = {
  name: config.name
}

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
//   key: sess.name,
//   secret: sess.secret,
//   resave: false,
//   saveUninitialized: true,
//   store: new MySQLStore(database.connection)
// }))

/**
 * Define public folders
 */
app.use(express.static(config.public))

/**
 * View engine
 */
app.set('views', config.views.folders)
app.set('view engine', config.views.engine)

/**
 * Autoload some modules for initial start.
 */
consign({
  locale: config.locale
})
  .include('bootstrap/database.js')
  .then('app/routes.js')
  .into(app)

module.exports = app
