/**
 * Auth Controller
 */
'use strict'

const bcrypt = require('bcrypt')
const Auth = require('./Auth')

function index (request, response) {
  if (request.session.token) {
    return response.redirect('/users')
  }

  response.render('Login/index')
}

function signin (request, response) {
  let session = request.session

  Auth.authenticate(request.body)
    .then(token => {
      if (!token) {
        return Auth.handleFailAuthenticate(response)
      }

      return response.format({
        json: () => response.json({'token': token}),
        html: () => {
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
