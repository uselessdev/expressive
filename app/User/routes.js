/**
 * User Routes
 */
'use strict'

const users = require('./controller')
const Router = require('express').Router()

Router.get('/', users.index)
Router.post('/', users.store)
Router.put('/:id', users.save)
Router.patch('/:id', users.save)
Router.delete('/:id', users.destroy)

module.exports = Router
