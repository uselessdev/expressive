const {
  DB_HOST,
  DB_USER,
  DB_DBNAME,
  DB_PASSWORD
} = process.env

module.exports = {
  host: DB_HOST,
  user: DB_USER,
  database: DB_DBNAME,
  password: DB_PASSWORD
}
