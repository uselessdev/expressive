/**
 * Auth Controller
 */
'use strict'

const bcrypt = require('bcrypt')
const Auth = require('./Auth')

function _handleFailAuthenticate (response, message) {
  message = message || 'Authenticated failed!'

  return response.format({
    // @TODO: Create option to redirect if fail
    html: () => response.status(401).redirect('/login'),
    json: () => response.status(401).json({message: message})
  })
}

function index (request, response) {
  response.render('Login/index')
}

function signin (request, response) {
  Auth.authenticate(request.body)
    .then(token => {
      if (!token) {
        return _handleFailAuthenticate(response)
      }

      return response.format({
        json: () => response.json({'token': token}),
        html: () => {
          // @TODO: Save token on localStorage or sessionStorage
          return response.redirect(`/users?token=${token}`)
        }
      })
    })
    .catch(error => console.log(error))
}

module.exports = {index, signin}
