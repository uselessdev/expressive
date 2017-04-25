/**
 * Authenticated
 */
'use strict'

require('dotenv').config()

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('config/auth').users.model

/**
 * Generate and return a token for autheticated user.
 *
 * @param  {Object} user
 * @return {String}
 */
function _generateToken (user) {
  return jwt.sign(user, process.env.APP_SECRET, {
    expiresIn: 60 * 60 * 24
  })
}

/**
 * Compare passwords for user input password and hash
 * password.
 *
 * @param  {String} password
 * @param  {String} hash
 * @return {Promise}
 */
function _comparePassword (password, hash) {
  return bcrypt.compare(password, hash)
    .then(match => match)
    .catch(error => console.error(error))
}

/**
 * Return token from request if it exists.
 *
 * @param  {Object Requesr} request
 * @return {String[, Boolean]}
 */
function _getTokenFromRequest (request) {
  return request.session.token || request.body.token || request.query.token || request.headers['x-access-token']
}

/**
 * Handle response with user authenticated failed.
 *
 * @param  {[Object Response} response
 * @param  {String} message
 */
function handleFailAuthenticate (response, message) {
  message = message || 'Authenticated failed!'

  return response.format({
    json: () => response.status(401).json({message: message}),
    html: () => response.status(401).redirect('/login')
  })
}

/**
 * Authenticate user.
 *
 * @param  {Object} credentials
 * @return {Promise}
 */
function authenticate (credentials) {
  const {username, password} = credentials

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

          return _generateToken({_id: user._id})
        })
        .catch(error => error)
    })
    .catch(error => error)
}

/**
 * Verify if token user is valid.
 *
 * @param  {Object Request} request
 * @param  {Object Response} response
 * @param  {Function} next
 */
function verify (request, response, next) {
  let token = _getTokenFromRequest(request)

  if (!token) {
    return handleFailAuthenticate(response, 'No token provided!')
  }

  jwt.verify(token, process.end.APP_SECRET, (error, decoded) => {
    if (error) {
      return handleFailAuthenticate(response)
    }
    next()
  })
}

module.exports = {authenticate, verify, handleFailAuthenticate}
