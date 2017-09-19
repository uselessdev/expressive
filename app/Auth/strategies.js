/**
 * Authstrategies
 */
const passport = require('passport')
const { strategies } = require('config/auth')
const GithubStrategy = require('passport-github').Strategy
const FacebookStrategy = require('passport-facebook').Strategy

/**
 * @TODO: Verify if user exists on database
 * @TODO: If exists return this user
 * @TODO: If not exists register user and return
 */
const handleProfile = (token, refreshToken, profile, done) => {
  console.log(profile)
  return done(null, profile)
}

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
