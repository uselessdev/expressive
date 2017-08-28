/**
 * Database bootstrap
 */
const Bookshelf = require('bookshelf')
const paranoia = require('bookshelf-paranoia')
const settings = require('config/database')

const knex = require('knex')(settings)
const Bs = Bookshelf(knex)

/**
 * Plugin registry allow refery models passing
 * a string it's help to avoid circular dependencies.
 */
Bs.plugin('registry')

/**
 * Virtuals allow to create virtual properties on model
 * to compute new values.
 */
Bs.plugin('virtuals')

/**
 * Specify hidden/visible attributes
 */
Bs.plugin('visibility')

/**
 * Add fetchPage method to handle with pagination
 * instead fetch and fetchAll
 */
Bs.plugin('pagination')

/**
 * Add SoftDeletes to tables
 */
Bs.plugin(paranoia)

/**
 * Here we exports knex just to use
 * them programatically
 */
module.exports = {
  knex,
  Bookshelf: Bs
}
