/**
 * User request
 */
const {
  responseWithInternalServerError,
  responseWithUnprocessableEntity
} = require('app/Responses')

function validate (request, response, next) {
  request.checkBody('name', 'Field name is required').notEmpty()
  request.checkBody('email', 'Field e-mail must be a valid e-mail address').isEmail()

  request.getValidationResult()
    .then(handleErrors(response, next))
    .catch(responseWithInternalServerError(response))
}

const handleErrors = (response, next) => errors =>
  !errors.isEmpty()
    ? responseWithUnprocessableEntity(response)(errors)
    : next()

module.exports = validate
