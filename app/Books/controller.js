/**
 * Books Controller
 */
const Books = require('./repository')
const Controller = require('../Controller')(Books)

module.exports = {
  index: Controller.index,
  show: Controller.show,
  store: Controller.store,
  update: Controller.update,
  destroy: Controller.remove
}
