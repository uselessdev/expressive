/**
 * Controller
 */
'use strict'

const User = require('./model')

function index (request, response) {
  /**
   * This is only an example.
   * You need to create an user in your database.
   */
  User.findOne({}, (err, user) => {
    if (err) {
      return response.sendStatus(500).send(err)
    }

    response.format({
      html: () => response.render('User/index', {user: user}),
      json: () => response.json(user)
    })
  })
}

module.exports = {index}
