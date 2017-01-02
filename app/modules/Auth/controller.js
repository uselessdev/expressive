/**
 * Auth Controller
 */
'use strict'

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../../../config/auth').users.model

/**
 * Generate token
 * @param  {Object} user
 * @return String Token
 */
function _token (user) {
  return jwt.sign(user, 'secret', {
    expiresIn: 60 * 60 * 24
  })
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
        return response.status(403).json({message: 'Authenticated failed!'})
      }

      return bcrypt.compare(password, user.password)
        .then(match => {
          if (!match) {
            return response.status(403).json({message: 'Authenticated failed!'})
          }

          return response.format({
            json: () => response.json({token: _token(user)})
          })
        })
        .catch(error => response.status(500).json(error))
    })
    .catch(error => console.error('errorr', error))
}

function authenticated (request, response) {
  response.send('valid')
}

module.exports = {login, authenticated}
