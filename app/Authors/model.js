const { Bookshelf } = require('../../bootstrap/database')

const Author = Bookshelf.Model.extend({
  tableName: 'authors',
  books () {
    return this.hasMany(require('../Books/model'))
  }
})

module.exports = Bookshelf.model('Author', Author)
