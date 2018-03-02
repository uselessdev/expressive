/**
 * Book Model
 */
const { Bookshelf } = require('../../bootstrap/database')

const Book = Bookshelf.Model.extend({
  tableName: 'books',
  author () {
    return this.belongsTo(require('../Authors/model'))
  }
})

module.exports = Bookshelf.model('Book', Book)
