/**
 * Start Application
 */
const helmet = require('helmet')
const consign = require('consign')
const express = require('express')
const bodyParser = require('body-parser')
const validate = require('express-validator')

const schema = require('../app/Schema')
const expressGraphQL = require('express-graphql')

const { locale } = require('../config/app')

const app = express()

app.use(helmet())
app.use(validate())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}))

consign({ locale })
  .include('bootstrap/database.js')
  .then('app/Routes.js')
  .into(app)

module.exports = app
