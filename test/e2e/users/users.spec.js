const chai = require('chai')
const http = require('chai-http')
const { expect } = chai

chai.use(http)

const { knex } = require('bootstrap/database')
const app = require('bootstrap/app')

const __user__ = {
  name: 'Jhon Doe',
  email: 'jhon.doe@email.com',
  password: 'batatas'
}

describe('Users', () => {
  beforeEach(function (done) {
    (async function () {
      await knex.migrate.rollback()
      await knex.migrate.latest()
      await knex.seed.run()

      done()
    })()
  })

  it('/GET users', done => {
    chai.request(app)
      .get('/users')
      .end((error, response) => {
        expect(error).to.be.null
        expect(response).to.be.json
        expect(response).to.have.status(200)

        done()
      })
  })

  it('/POST users', done => {
    chai
      .request(app)
      .post('/users')
      .send(__user__)
      .end((error, response) => {
        expect(error).to.be.null
        expect(response).to.be.json
        expect(response).to.have.status(201)

        done()
      })
  })

  it('/PATCH users', done => {
    chai
      .request(app)
      .patch('/users/1')
      .send({name: 'Wallace Batista'})
      .end((error, response) => {
        expect(error).to.be.null
        expect(response).to.be.json
        expect(response).to.have.status(200)
        expect(response.body.data).to.deep.include({name: 'Wallace Batista'})

        done()
      })
  })

  it('/DELETE users', done => {
    chai
      .request(app)
      .delete('/users/1')
      .end((error, response) => {
        expect(error).to.be.null
        expect(response).to.be.json
        expect(response).to.have.status(200)

        done()
      })
  })
})
