exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments()

    table.string('name')
    table.string('email')
    table.timestamps()
    table.timestamp('deleted_at').nullable()

    table.unique(['email'])
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
