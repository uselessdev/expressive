/**
 * Index test example
 */

describe('Scenario', () => {
  it('should pass', () => {
    expect(2 + 2).toBe(4)
  })

  it('should fail', () => {
    expect(2 + 5).not.toBe(4)
  })
})
