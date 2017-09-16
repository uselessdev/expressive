/**
 * Global Transforms
 */
const transform = (data, meta) => ({
  data: data ? data.toJSON() : {},
  meta: {
    ...meta
  }
})

module.exports = transform
