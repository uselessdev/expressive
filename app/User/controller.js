/**
 * User Controller
 */
const User = require('./model')

class Users {
  index (request, response) {

    User.findAll().then(users => {
      if (!users.length) {
        return response.send('no users registered!')
      }

      response.format({
        html: () => response.render('User/index', users),
        json: () => response.json({
          data: {
            users
          }
        })
      })
    })
  }
}

module.exports = new Users
