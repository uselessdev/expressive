/**
 * Books Controller
 */
const Books = require('./repository')
const { Controller } = require('@anarklab/expressive-controller')
const BookControoler = Controller(Books)

module.exports = {
  index: BookControoler.index,
  show: BookControoler.show,
  store: BookControoler.store,
  update: BookControoler.save,
  destroy: BookControoler.remove
}
