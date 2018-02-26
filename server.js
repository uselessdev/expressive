/**
 * Entrypoint Application
 */
require('dotenv').config()

const { port } = require('./config/app')
const app = require('./bootstrap/app.js')

app.listen(port, () => console.log(`listening on ${port}`))
