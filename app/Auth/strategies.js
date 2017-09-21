/**
 * Authstrategies
 */
const passport = require('passport')
const GithubStrategy = require('passport-github').Strategy
const FacebookStrategy = require('passport-facebook').Strategy

const {
  users,
  strategies
} = require('config/auth')

const transformProfile = profile => {
  const [{ value }] = profile.emails

  return {
    email: value,
    name: profile.displayName || profile.name.givenName + ' ' + profile.name.familyName
  }
}

const handleProfile = (token, refreshToken, profile, done) => {
  const { email, name } = transformProfile(profile)
  const { model } = users

  model.findOne({email})
    .then(user => user ? user.toJSON() : null)
    .then(user => {
      if (user) {
        return done(null, user)
      }

      return model.create(name, email)
        .then(user => done(null, user))
        .catch(error => console.log('error on create:', error))
    })
    .catch(error => console.log(error))
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
