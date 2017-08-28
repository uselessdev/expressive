/**
 * Knexfile
 */
require('dotenv/config')
const settings = require('./config/database')

module.exports = {
  development: settings,
  staging: settings,
  production: settings,
  test: settings
}
