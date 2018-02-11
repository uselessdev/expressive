/**
 * Index test example
 */
const request = require('supertest')
const app = require('../bootstrap/app.js')

describe('Unit tests', () => {
  it('should pass', () => {
    expect(2 + 2).toBe(4)
  })

  it('should fail', () => {
    expect(2 + 5).not.toBe(4)
  })
})

describe('Integration tests', () => {
  it('should status to be 200', () =>
    request(app).get('/').expect(200, {
      data: {
        message: 'Hello World!'
      }
    })
  )
})
