const path = require('path')

require('dotenv').config()
require('app-module-path').addPath(path.resolve(__dirname, '../'))

require('./e2e/home.spec')
require('./e2e/users.spec')
