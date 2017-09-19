/**
 * Global Reponses
 */
const responseWithOk = response => object =>
  response.json(object)

const responseWithCreated = response => object =>
  response.status(201).json(object)

const responseWithDeleted = response =>
  response.status(204).json({})

const responseWithInternalServerError = response => error =>
  response.status(500).send(error)

const responseWithUnathourizedError = response => error =>
  response.status(401).send(error)

module.exports = {
  responseWithOk,
  responseWithCreated,
  responseWithDeleted,
  responseWithInternalServerError
}
