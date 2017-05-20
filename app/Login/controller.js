/**
 * Auth Controller
 */
const Auth = require('./auth')

function index (request, response) {
  response.render('Login/index')
}

function signin (request, response) {
  let session = request.session

  Auth.authenticate(request.body).then(token => {
    if (!token) {
      Auth.handleFailAuthenticate(response)
    }

    response.format({
      json: () => response.json({token}),
      html: () => {
        session.token = token
        response.redirect('/users')
      }
    })
  })
  .catch(error => {
    throw Error(error)
  })
}

function signout (request, response) {
  /**
   * @TODO: Create const to define redirect after logout
   */
  request.session.destory(() => response.redirect('/'))
}

module.exports = {
  index,
  signin,
  signout
}
