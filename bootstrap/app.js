/**
 * Bootstrap application.
 * All Express settings, as middleware, security, helmet are set here.
 */
const csurf = require('csurf')
const helmet = require('helmet')
const morgan = require('morgan')
const express = require('express')
const consign = require('consign')
const passport = require('passport')
const bodyParser = require('body-parser')
const session = require('express-session')
const validate = require('express-validator')
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

app.use(validate())

/**
 * Session settings.
 */
app.use(session({
  key: sess.name,
  secret: sess.secret,
  resave: false,
  saveUninitialized: true,
  store: new MySQLStore(database.connection)
}))

/**
 * Authentication settings
 */
app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => done(null, user))
passport.deserializeUser((user, done) => done(null, user))

/**
 * Define public folders
 */
app.use(express.static(config.public))

/**
 * Allow csrf protection
 */
app.use(csurf())

app.use((request, response, next) => {
  response.locals._csrf = request.csrfToken()
  next()
})

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
  .then('app/Routes.js')
  .into(app)

module.exports = app
