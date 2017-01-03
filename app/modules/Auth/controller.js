/**
 * Auth Controller
 */
'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../../../config/auth').users.model

/**
 * Generate token.
 *
 * @param  {Object} user
 * @return String Token
 */
function _generateToken (user) {
  return jwt.sign(user, 'secret', {
    expiresIn: 60 * 60 * 24
  })
}

function _handleFailAuth (response, message) {
  message = message || {message: 'Authenticated failed!'}

  return response.format({
    // @TODO: Add option to redirect if fail
    html: () => response.status(401).redirect('/login'),
    json: () => response.status(401).json(message)
  })
}

/**
 * Get token from request
 */
function _getTokenRequest (request) {
  return request.body.token || request.query.token || request.headers['X-access-token']
}

function login (request, response) {
  /**
   * @TODO: Validate this plis.
   */
  let {username, password} = request.body

  User.findOne({'username': username})
    .select('+password')
    .then(user => {
      if (!user) {
        return response.status(401).json({message: 'Authenticated failed!'})
      }

      return bcrypt.compare(password, user.password)
        .then(match => {
          if (!match) {
            return response.status(401).json({message: 'Authenticated failed!'})
          }

          return response.format({
            json: () => response.json({token: _generateToken(user)})
          })
        })
        .catch(error => response.status(500).json(error))
    })
    .catch(error => response.status(500).json(error))
}

/**
 * Validate JWT and continue or fail.
 */
function verify (request, response, next) {
  let token = _getTokenRequest(request)

  if (!token) {
    return _handleFailAuth(response, {message: 'No token provided!'})
  }

  jwt.verify(token, 'secret', (error, decoded) => {
    if (error) {
      return _handleFailAuth(response)
    }

    request.decoded = decoded
    next()
  })
}

module.exports = {login, verify}
