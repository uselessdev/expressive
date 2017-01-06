/**
 * Auth Controller
 */
'use strict'

const bcrypt = require('bcrypt')
const Auth = require('./Auth')

// @TODO: Use Auth handle to make this
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
  let session = request.session

  Auth.authenticate(request.body)
    .then(token => {
      if (!token) {
        return _handleFailAuthenticate(response)
      }

      return response.format({
        json: () => response.json({'token': token}),
        html: () => {
          // @TODO: Place this in another file??
          session.token = token
          return response.redirect('/users')
        }
      })
    })
    .catch(error => console.log(error))
}

function signout (request, response) {
  request.session.destroy(() => {
    response.redirect('/')
  })
}

module.exports = {index, signin, signout}
