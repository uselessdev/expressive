process.env.PORT = 3333
process.env.NODE_ENV = 'test'
process.env.DB_CONNECTION = 'sqlite'

const chai = require('chai')
const http = require('chai-http')
const { expect } = chai

const { knex } = require('bootstrap/database')
const app = require('bootstrap/app')

chai.use(http)

describe('Users', () => {
  beforeEach(function (done) {
    (async function () {
      await knex.migrate.rollback()
      await knex.migrate.latest()
      await knex.seed.run()

      done()
    })()
  })

  it('/GET expect status 200 and an object with all users', done => {
    chai.request(app)
      .get('/users')
      .end((error, response) => {
        expect(error).to.be.null
        expect(response.status).to.be.equal(200)
        expect(response.body).to.be.an('object')

        done()
      })
  })
})
