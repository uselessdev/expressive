/**
 * Authenticated
 */
'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secret = require('config/session').secret

const User = require('config/auth').users.model

function authenticate (credentials) {
  return User.findOne({'username': username})
    .select('+password')
    .then(user => {
      if (!user) {
        return false
      }

      return _comparePassword(password, user.password)
        .then(isPasswordValid => {
          if (!isPasswordValid) {
            return false
          }

          return _makeToken({_id: user._id})
        })
        .catch(error => error)
    })
    .catch(error => error)
}

function guard (request, response, next) {
  const token = _getRequestToken(request)

  if (!token) {
    return handleFailAuthenticate(response, 'No token provided!')
  }

  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      return handleFailAuthenticate(response)
    }

    response.setHeader('x-access-token', token)
    next()
  })
}

function handleFailAuthenticate (response, message) {
  message = message || 'Authentication was failed!'

  response.format({
    json: () => response.status(401).json({message}),
    // @TODO: Create constants redirect_fail_auth
    html: () => response.status(401).redirect('/login')
  })
}

async function _comparePassword (password, hash) {
  return password === hash
  // return bcrypt.compare(password, hash)
  //   .then(match => match)
  //   .catch(error => error)
}

function _makeToken (payload) {
  return jwt.sign(payload, secret, {
    expiresIn: 60 * 60 * 24
  })
}

function _getRequestToken (request) {
  return request.session.token || request.body.token || request.query.token || request.headers['x-access-token']
}

module.exports = {
  guard,
  authenticate,
  handleFailAuthenticate
}
