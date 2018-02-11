/**
 * Books tests
 */
const supertest = require('supertest')
const app = require('../bootstrap/app')
let request

describe('Books', () => {
  beforeEach(() => {
    request = supertest(app)
  })

  it('should return a list of books', () =>
    request
      .get('/books')
      .expect(200)
  )

  it('shoul return one book', () =>
    request
      .get('/books/1')
      .expect(200)
  )
})
