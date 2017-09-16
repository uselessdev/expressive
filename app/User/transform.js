/**
 * User transform
 */
const transform = meta => data => ({
  data: data ? data.toJSON() : {},
  meta: {
    ...meta,
    resources: (data && data.id) ? `/users/${data.id}` : null
  }
})

const responseOk = response => object =>
  response.json(object)

module.exports = {
  transform,
  responseOk
}
