const user = {
  name: 'Jhon Doe',
  email: 'admin@admin.com'
}

exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(() => knex('users').insert([user]))
}
