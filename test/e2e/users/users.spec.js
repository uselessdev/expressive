/* eslint-disable no-unused-expressions */
const chai = require('chai')
const http = require('chai-http')
const { expect } = chai

chai.use(http)

const { knex } = require('bootstrap/database')
const app = require('bootstrap/app')

const user = {
  name: 'Anne Marie',
  email: 'anne.marie@email.com',
  password: 'batatas'
}

const setupDatabase = async () => {
  await knex.migrate.rollback()
  await knex.migrate.latest()
  await knex.seed.run()
}

let response
const request = chai.request(app)

describe('User resource', () => {
  beforeEach(setupDatabase)

  describe('GET /users', () => {
    before(() => (response = request.get('/users')))

    it('expect status to be 200', () =>
      response.then(response => expect(response).to.have.status(200))
    )

    it('expect content to be json', () =>
      response.then(response => expect(response).to.be.json)
    )

    it('expect users contain a name equals Jhon Doe', () =>
      response.then(({body}) => {
        expect(body).to.have.nested.property('data')
        expect(body.data[0]).to.deep.include({name: 'Jhon Doe'})
      })
    )
  })

  describe('POST /users', () => {
    before(() => (response = request.post('/users').send(user)))

    it('expect status to be 201', () =>
      response.then(response => expect(response).to.have.status(201))
    )

    it('expect content to be json', () =>
      response.then(response => expect(response).to.be.json)
    )

    it('expect user to be created and exists', () =>
      response.then(({body}) => {
        expect(body.data).to.deep.include({name: user.name})
      })
    )
  })

  describe('PATCH /users', () => {
    before(() => (response = request.patch('/users/1').send({name: 'Peter Parker'})))

    it('expect status to be 200', () =>
      response.then(response => expect(response).to.have.status(200))
    )

    it('expect content to be json', () =>
      response.then(response => expect(response).to.be.json)
    )

    it('expect name to user name to be Peter Parker', () =>
      response.then(({body}) => {
        expect(body.data).to.deep.include({name: 'Peter Parker'})
      })
    )
  })

  describe('DELETE /users', () => {
    before(() => (response = request.delete('/users/1')))

    it('expect status to be 200', () =>
      response.then(response => expect(response).to.have.status(200))
    )

    it('expect content to be json', () =>
      response.then(response => expect(response).to.be.json)
    )

    it('expect to user with id 1 don\'t exists', () => {
      request
        .get('/users')
        .then(response => console.log(response.body))
    })
  })
})
