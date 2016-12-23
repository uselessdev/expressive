/**
 * Controller
 */
'use strict'

const User = require('./model')
const faker = require('faker')

function index (request, response) {
  /**
   * This is only an example.
   * You can access `/users/create` to create an random user
   */
  User.find()
    .then(users => {
      if (!users) {
        return response.send('no users')
      }

      response.format({
        html: () => response.render('User/index', {users: users}),
        json: () => response.json(users)
      })
    })
    .catch(err => response.status(500).json(err))
}

/**
 * Create.
 *
 * This method create an random user.
 */
function create (request, response) {
  let user = new User({
    name: faker.name.firstName(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: faker.lorem.word()
  })

  user
    .save()
    .then(user => response.redirect('/users'))
    .catch(err => response.status(500).json(err))
}

module.exports = {index, create}
