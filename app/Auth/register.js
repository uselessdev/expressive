/**
 * Auth register flow
 */
const { users } = require('config/auth')

const fullName = profile =>
  profile.displayName || `${profile.name.givenName} ${profile.name.familyName}`

const transformProfile = profile => {
  const [{ value }] = profile.emails

  return {
    email: value,
    name: fullName(profile)
  }
}

const handleProfile = (token, refreshToken, profile, done) => {
  const { email, name } = transformProfile(profile)
  const { model } = users

  model.findOne({email})
    .then(user => user ? user.toJSON() : null)
    .then(user => user ? done(null, user) : null)
    .then(() => model.create(name, email))
    .then(user => done(null, user))
    .catch(error => error)
}

module.exports = handleProfile
