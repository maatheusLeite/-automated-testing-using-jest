const { sum, modulus, sayHelloTo, duplicateObject, addProduct } = require('./function')

// npx jest --init cria um arquivo de configuração para o jest

// toBe verifica se é a mesma instancia do objeto
// toEqual verifica se o objeto é igual em valores
// toContain verifica se um array contem a(s) determinada(s) propriedade(s)

test('should sum two numbers', () => {
    const result = sum(45, 23)

    expect(result).toBe(68)
})

test('should return the absolute value of a number', () => {
    expect(modulus(-10)).toBe(10)
    expect(modulus(10)).toBe(10)
})

test('should say hello to someone', () => {
    expect(sayHelloTo('Matheus')).toBe('Hello, Matheus!')
})

test('should be able to duplicate an object', () => {
    const animal = { species: 'Cat', color: 'Black' }

    const clone = duplicateObject(animal)

    expect(clone).toEqual(animal)
})

test('should be able to add a product to a cart', () => {
    const cart = []

    addProduct('notebook', cart)
    addProduct('blue pen', cart)
    addProduct('black pen', cart)

    expect(cart).toContain('notebook')
    expect(cart).toContain('blue pen')
    expect(cart).toContain('black pen')
})