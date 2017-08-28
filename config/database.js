/**
 * Database settings
 */
const connection = process.env.DB_CONNECTION || 'sqlite'

const migrations = {
  directory: './database/migrations',
  tableName: 'migrations',
  stub: './database/stub/template.js'
}

const seeds = {
  directory: './database/seeds'
}

const database = {
  sqlite: {
    client: 'sqlite3',
    connection: ':memory:',
    useNullAsDefault: true
  },

  mysql: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USERNAME || 'homestead',
      password: process.env.DB_PASSWORD || 'secret',
      database: process.env.DB_DATABASE || 'homestead',
      charset: 'utf8'
    }
  }
}

module.exports = Object.assign(database[connection], {migrations, seeds})
