/**
 * Application
 */
'use strict'

require('dotenv').config()

const app = require('./bootstrap/app')
const port = process.env.PORT

app.listen(port, () => {
  console.log('Server running on http://localhost:%s', port)
})
