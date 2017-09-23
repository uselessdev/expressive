/**
 * Auth strategies
 */
const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy
const FacebookStrategy = require('passport-facebook').Strategy

const handleProfile = require('./register')
const { strategies } = require('config/auth')

const handleRoutesStrategies = (strategy, Router, controller) => {
  Router.get(`/${strategy}`, passport.authenticate(strategy))
  Router.get(`/${strategy}/callback`, passport.authenticate(strategy, {failureUrl: '/auth/error'}), controller.success)
}

passport.use(new GithubStrategy(strategies.github, handleProfile))
passport.use(new FacebookStrategy(strategies.facebook, handleProfile))

const facebook = (Router, controller) =>
  handleRoutesStrategies('facebook', Router, controller)

const github = (Router, controller) =>
  handleRoutesStrategies('github', Router, controller)

module.exports = {
  github,
  facebook
}
