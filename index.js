/**
 * Application
 */
'use strict'

const app = require('./bootstrap/app')
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Server running on http://localhost:%s', port)
})
