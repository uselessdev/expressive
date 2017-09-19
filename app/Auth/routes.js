/**
 * Auth routes
 */
const passport = require('passport')
const Router = require('express').Router()

const { strategies } = require('config/env')

Router.get('/', (request, response) => {
  const routes = strategies.map(strategy => `auth/${strategy}`)
  response.json(routes)
})

// const controller = require('./controller')
// const strategies = require('./strategies')

// const { strategy } = require('config/env')

// passport.use(strategies[strategy])

// Router.get('/', passport.authenticate(strategy))
// Router.get('/error', controller.fail)

// Router.get(
//   '/callback',
//   passport.authenticate(strategy, {failuteRedirect: '/auth/error'}),
//   controller.success
// )

module.exports = Router
