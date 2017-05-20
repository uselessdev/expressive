/**
 * Request Layer
 */
// const Validr = require('validr')

// function validate (request, response, next) {
//   const validr = new Validr(request.body)

//   validr
//     .validate('username', 'username is required!')
//     .isLength(1)

//   validr
//     .validate('password', 'password is required and must contains at least 6 characters!')
//     .isLength(6)

//   let errors = validr.validationErrors()

//   if (errors) {
//     return response.json(errors)
//   }

//   next()
// }

// module.exports = validate
