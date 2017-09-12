const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai
const app = require('bootstrap/app')
const { knex } = require('bootstrap/database')

chai.use(chaiHttp)

let response
const request = chai.request(app)

const setupDatabase = async () => {
  await knex.migrate.rollback()
  await knex.migrate.latest()
  await knex.seed.run()
}

const user = {
  name: 'Anne Doe',
  email: 'anne.doe@email.com',
  password: 'ohmypassword'
}

describe('Users resources', () => {
  before(setupDatabase)

  describe('GET /users', () => {
    before(() => (
      response = request.get('/users')
    ))

    it('expect get users to have status 200', () =>
      response
        .then(response => expect(response).to.have.status(200))
    )

    it('expect content to be json', () =>
      response
        .then(response => expect(response).to.be.json)
    )

    it('expect users to have one user ana name has Jhon Doe', () =>
      response
        .then(({body}) => expect(body.data[0]).to.deep.include({name: 'Jhon Doe'}))
    )
  })

  describe('POST /users', () => {
    before(() => (
      response = request.post('/users').send(user)
    ))

    it('expect post user and get status 201', () =>
      response
        .then(response => expect(response).to.have.status(201))
    )

    it('expect content to be json', () =>
      response
        .then(response => expect(response).to.be.json)
    )

    it('expect user to be created', () =>
      response
        .then(({body}) => expect(body.data).to.deep.include({name: user.name}))
    )
  })

  describe('PATCH /users', () => {
    before(() => (
      response = request.patch('/users/1').send({name: 'Anakin Skywalker'})
    ))

    it('expect to have status 200', () =>
      response
        .then(response => expect(response).to.have.status(200))
    )

    it('expect content to be json', () =>
      response
        .then(response => expect(response).to.be.json)
    )

    it('expect name to be Anakin Skywalker', () =>
      response
        .then(({body}) => expect(body.data).to.deep.include({name: 'Anakin Skywalker'}))
    )
  })

  describe('DELETE /users', () => {
    before(() => (
      response = request.delete('/users/1')
    ))

    it('expect status to be 204', () =>
      response
        .then(response => expect(response).to.have.status(204))
    )

    it('expect no content', () =>
      response
        .then(({body}) => expect(body).to.be.an('object').that.is.empty)
    )

    it('expect user don\'t exists', () =>
      request
        .get('/users/1')
        .then(({body}) => expect(body.data).to.be.an('object').that.is.empty)
    )
  })
})
