const { sum } = require('./function')

test('sum', () => {
    const result = sum(45, 23)

    expect(result).toBe(68)
})