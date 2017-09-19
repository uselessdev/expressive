/**
 * Authstrategies
 */
const passport = require('passport')
const { strategies } = require('config/auth')
const FacebookStrategy = require('passport-facebook')

const handleProfile = (token, refreshToken, profile, done) =>
  done(null, profile)

const facebook = (Router, controller) => {
  passport.use(new FacebookStrategy(strategies.facebook, handleProfile))

  Router.get('/facebook', passport.authenticate('facebook', {scope: ['email']}))
  Router.get('/facebook/callback', passport.authenticate('facebook', {failureUrl: '/auth/error'}), controller.success)

  return Router
}

module.exports = {
  facebook
}
