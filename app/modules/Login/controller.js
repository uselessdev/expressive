/**
 * Auth Controller
 */
'use strict'

const bcrypt = require('bcrypt')
const User = require('../User/model')

function index (request, response) {
  response.render('Login/index')
}

function signin (request, response, next) {
  let userAuth = auth(request.body)

  userAuth.then(res => console.log(res))

  response.send(userAuth)
}

function auth (credentials) {
  const {username, password} = credentials

  return User.findOne({'username': username})
    .select('+password')
    .then(user => {
      if (!user) {
        return false
      }

      return comparePassword(password, user.password)
    })
    .catch(error => console.log('error', error))
}

function comparePassword (password, compareTo) {
  return bcrypt.compare(password, compareTo)
    .then(match => match)
    .catch(error => false)
}

module.exports = {index, signin}
