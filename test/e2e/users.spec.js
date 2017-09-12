const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai
const app = require('bootstrap/app')
const { knex } = require('bootstrap/database')

chai.use(chaiHttp)

const request = chai.request(app)

const setupDatabase = async () => {
  await knex.migrate.rollback()
  await knex.migrate.latest()
  await knex.seed.run()
}

describe('Users resources', () => {
  beforeEach(setupDatabase)

  describe('GET /users', () => {
    it('expect get users to have status 200', () =>
      request.get('/users').then(response => expect(response).to.have.status(200))
    )

    it('expect content to be json', () =>
      request.get('/users').then(response => expect(response).to.be.json)
    )

    it('expect users to have one user ana name has Jhon Doe', () =>
      request.get('/users').then(({body}) => expect(body.data[0]).to.deep.include({name: 'Jhon Doe'}))
    )
  })
})
