/**
 * Books Routes
 */
const Books = require('./controller')
const Request = require('./request')
const Router = require('express').Router()

Router.get('/', Books.index)
Router.get('/:id', Books.show)
Router.post('/', Request, Books.store)
Router.patch('/:id', Books.update)
Router.delete('/:id', Books.destroy)

module.exports = Router
