/**
 * Application main files.
 */
require('dotenv').config()
require('app-module-path/register')

const app = require('bootstrap/app')
const port = require('config/app').port

app.listen(port, () => {
  console.log('Server running on http://localhost:%s', port)
})
