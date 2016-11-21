/**
 * Application
 */
'use strict'

const app = require('./bootstrap/app')
const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log('Server running on http://localhost:%s', port)
})
