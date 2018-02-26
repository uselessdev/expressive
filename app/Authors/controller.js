const { Controller } = require('@anarklab/expressive-controller')
const Authors = require('./repository')
const AuthorController = Controller(Authors)

const index = AuthorController.index
const show = AuthorController.show

module.exports = {
  index,
  show
}
