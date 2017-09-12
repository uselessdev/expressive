/**
 * Users router
 */
const Router = require('express').Router()
const users = require('./controller')

Router.get('/', users.index)
Router.post('/', users.store)
Router.get('/:id', users.show)
Router.patch('/:id', users.save)
Router.delete('/:id', users.destroy)

module.exports = Router
