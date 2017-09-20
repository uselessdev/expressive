/**
 * Users router
 */
const Router = require('express').Router()
const users = require('./controller')
const request = require('./request')

Router.get('/', users.index)
Router.post('/', request, users.store)
Router.get('/:id', users.show)
Router.patch('/:id', users.update)
Router.delete('/:id', users.destroy)

module.exports = Router
