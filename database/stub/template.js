exports.up = function (knex, Promise) {
  return knex.schema.createTable('table_name', function (table) {
    table.increments()
    table.timestamps()
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('table_name')
}
