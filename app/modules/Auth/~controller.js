/**
 * Controller
 */
'use strict'

function login (request, response) {
  response.send('oi')
}

// function auth (request, response) {
//   response.send('authorization')
// }

// function validate () {
//   response.send('this can validate token and autorize')
// }

module.exports = {login}

// function auth (request, response) {
//   User.findOne({username: request.body.username}, function (err, user) {
//     if (err) {
//       throw new Error(err)
//     }

//     if (!user) {
//       return response.status(401).json({
//         success: false,
//         message: 'Authentication failed! User not found!'
//       })
//     }

//     if (user.password !== request.body.password) {
//       return response.json({
//         success: false,
//         message: 'Authentication failed! wrong password!'
//       })
//     }

//     let token = jwt.sign(user, 'batata', {
//       expiresIn: 60*60*24
//     })

//     response.json({
//       success: true,
//       message: 'User has been authenticated',
//       token: token
//     })
//   })
// }

// function tokenValidate (request, response, next) {
//   const token = request.body.token || request.query.token || request.headers['x-access-token']

//   if (!token) {
//     return response.status(403).json({
//       success: false,
//       message: 'No token provide'
//     })
//   }

//   jwt.verify(token, 'batata', (err, decoded) => {
//     if (err) {
//       return response.status(401).json({
//         success: false,
//         message: 'Invalid token.'
//       })
//     }

//     request.decoded = decoded
//     next()
//   })
// }
