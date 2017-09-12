const chai = require('chai')
const chaiHttp = require('chai-http')

const { expect } = chai
const app = require('bootstrap/app')

chai.use(chaiHttp)

let response
const request = chai.request(app)

describe('Home', () => {
  before(() => (response = request.get('/')))

  it('expect response to have status 200', () =>
    response
      .then(response => expect(response).to.have.status(200))
  )

  it('expect text to contains message Hello World!', () =>
    response
      .then(({text}) => expect(text).to.include('Hello World!'))
  )
})
