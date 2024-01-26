// spec para testes unitários, já que ele referencia as especificações para o que estamos testando
// "O que a função deveria fazer"

const Transaction = require("./Transaction")

// it funciona como o test, porem, complementa a nomenclatura 'it should do something'

// describe serve para agrupar os testes

describe('Transaction class', () => {
    it('should not be able to create a transaction with a non string label', () => {
        const createTransaction = () => new Transaction(1, 42)

        expect(createTransaction).toThrow('label must be of type string')
    })

    it('should not be able to create a transaction with a non number value', () => {
        const createTransaction = () => new Transaction('some transaction', '42')

        expect(createTransaction).toThrow('value must be of type number')
    })

    it('should not be able to create a transaction with more then two decimal places', () => {
        expect(() => new Transaction('some transaction', 1.123)).toThrow()
        expect(() => new Transaction('some transaction', 1.12)).not.toThrow()
    })

    it('should save the value as an integer', () => {
        const transaction = new Transaction('some transaction', 1.12)

        expect(transaction.value).toBe(112)
    })

    it('shoud be able to get the value as a float', () => {
        const transaction = new Transaction('some transaction', 1.12)

        expect(transaction.getValue()).toBe(1.12)
    })
})