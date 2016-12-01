/**
 * Controller
 */
'use strict'

function index (request, response) {
  response.send('oi')
}

module.exports = {index}

// function sample (request, response) {
//   var user = new User({
//     name: 'Jhon Doe',
//     username: 'usernamed',
//     password: '123456789'
//   })

//   user.save(err => {
//     if (err) {
//       throw new Error(err)
//     }

//     console.log('User has been saved!')
//     response.json({
//       success: true
//     })
//   })
// }

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
