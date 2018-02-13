/**
 * Transform
 */
const Transform = meta => data => ({
  ...meta,
  data: data || {}
})

module.exports = Transform
