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

  // This is a valid login example
  // User.findOne({username: 'uselessdev'})
  //   .select('+password')
  //   .then(users => {
  //     if (!users) {
  //       return response.send('no users')
  //     }

  //     users
  //       .comparePassword('batata')
  //       .then(match => console.log(match))
  //       .catch(err => console.log(err))

  //     response.json(users)
  //   })

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
  // let user = new User({
  //   name: faker.name.firstName(),
  //   email: faker.internet.email(),
  //   username: faker.internet.userName(),
  //   password: faker.lorem.word()
  // })

  let user = new User({
    name: 'Wallace Batista',
    email: 'wallacebatistaoliveira@gmail.com',
    username: 'uselessdev',
    password: 'batata'
  })

  user
    .save()
    .then(user => response.redirect('/users'))
    .catch(err => response.status(500).json(err))
}

module.exports = {index, create}
