const { add } = require('../src/index')

describe('default test', () => {
  it('should add numbers', () => {
    expect(add(1, 2)).toBe(3)
  })

  it('should add numbers incorrectly', () => {
    expect(add(2, 2)).not.toBe(5)
  })
})
