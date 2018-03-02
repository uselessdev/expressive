const { Responses } = require('@anarklab/expressive-controller')

const validate = (request, response, next) => {
  request.checkBody('title', 'Field name is required').notEmpty()
  request.checkBody('value', 'Field value is required').notEmpty()
  request.checkBody('author', 'Field author is required').notEmpty()

  request.getValidationResult()
    .then(handleErrors(response, next))
    .catch(Responses.responseWithInternalServerError(response))
}

const handleErrors = (response, next) => errors => {
  if (errors.isEmpty()) {
    return next()
  }

  return Responses.responseWithUnprocessableEntity(response)(errors)
}

module.exports = validate
