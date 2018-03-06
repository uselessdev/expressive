const settings = require('../config/database')
const { Bookshelf } = require('@anarklab/expressive-orm')(
  'mysql',
  settings
)

module.exports = {
  Bookshelf
}
