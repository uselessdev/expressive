/**
 * User transform
 */
const transform = require('app/Transform')

const userTransform = meta => data =>
  transform(data, {
    ...meta,
    resources: (data && data.id) ? `/users/${data.id}` : null
  })

module.exports = userTransform
