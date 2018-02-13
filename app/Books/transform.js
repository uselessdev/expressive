/**
 * Book Transforms
 */
const Transform = require('../Transform')

module.exports = meta => data => Transform(data, {
  ...meta,
  resources: (data && data.id) ? `/books/${data.id}` : null
})
