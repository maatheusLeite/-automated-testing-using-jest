// spec para testes unitários, já que ele referencia as especificações para o que estamos testando
// "O que a função deveria fazer"

// it funciona como o test, porem, complementa a nomenclatura 'it should do something'

// describe serve para agrupar os testes

const { isValidDecimal } = require('./utils')

describe('utils.js', () => {
    it('should return true if number is an integer', () => {
        expect(isValidDecimal(42)).toBe(true)
    })

    it('should return true if the number has one decimal place', () => {
        expect(isValidDecimal(6.2)).toBe(true)
    })

    it('should return true if the number has two decimal places', () => {
        expect(isValidDecimal(3.14)).toBe(true)
    })

    it('should return false for numbers with more than two decimal places', () => {
        expect(isValidDecimal(1.414)).toBe(false)
        expect(isValidDecimal(57.457962)).toBe(false)
    })
})