/**
 * Responses
 */
const responseWithOk = response => object => (
  response.json(object)
)

const responseWithCreated = response => object => (
  response.status(201).json(object)
)

const responseWithDeleted = response => object => (
  response.status(204).json(object)
)

module.exports = {
  responseWithOk,
  responseWithCreated,
  responseWithDeleted
}
