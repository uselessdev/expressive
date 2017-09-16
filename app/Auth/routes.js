/**
 * Auth routes
 */

const passport = require('passport')
const Router = require('express').Router()
const { Strategy } = require('passport-github')

const auth = require('config/auth')
const controller = require('./controller')

const strategy = process.env.AUTH_STRATEGY

passport.use(new Strategy(
  auth.strategy,
  (accessToken, refreshToken, profile, done) => done(null, {accessToken, profile})
))

Router.get('/', passport.authenticate(strategy))

Router.get('/error', controller.fail)
Router.get('/callback', passport.authenticate('github', {failuteRedirect: '/auth/error'}), controller.success)

module.exports = Router
