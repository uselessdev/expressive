const bcrypt = require('bcrypt')

const user = {
  name: 'Jhon Doe',
  email: 'admin@admin.com',
  username: 'admin',
  password: '123456'
}

exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(() =>
      bcrypt.hash(user.password, 10)
        .then((hash) => {
          user.password = hash
          return knex('users').insert([user])
        })
    )
}
