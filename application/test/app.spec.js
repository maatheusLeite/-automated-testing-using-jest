const App = require('../src/App')

// Testes de integração são salvos em uma pasta externa, já que eles testam a aplicação 
// desde sua parte interna até sua parte externa, verificando a integração entre as diferentes 
// classes, interfaces e arquivos de codigo e suas dependencias e operações conjuntas.

describe('App integration', () => {
    let app

    beforeEach(() => {
        app = new App('Matheus')
    })

    it('should add a new wallet to a user', () => {
        const app = new App('Matheus')

        app.addWallet('Minha carteira')

        expect(app.user.wallets.length).toBe(1)
        expect(app.user.wallets[0].getBalance()).toBe(0)
    })

    it('should be able to buy', () => {
        app.addWallet('Minha carteira')
        const pizza = {
            label: 'Pizza',
            value: 38,
            walletName: 'Minha carteira'
        }

        app.buy(pizza)

        expect(app.user.money).toBe(-38)
        expect(app.user.wallets[0].getBalance()).toBe(-38)
        expect(app.user.wallets[0].transactions.length).toBe(1)
        expect(app.user.wallets[0].transactions[0].label).toBe('Pizza')
        expect(app.user.wallets[0].transactions[0].getValue()).toBe(-38)
    })

    it('should be able to receive money', () => {
        app.addWallet('Minha carteira')
        const donation = {
            label: 'Dinheiro da pizza',
            value: 19,
            walletName: 'Minha carteira'
        }

        app.receive(donation)

        expect(app.user.money).toBe(19)
        expect(app.user.wallets[0].getBalance()).toBe(19)
        expect(app.user.wallets[0].transactions.length).toBe(1)
        expect(app.user.wallets[0].transactions[0].label).toBe('Dinheiro da pizza')
        expect(app.user.wallets[0].transactions[0].getValue()).toBe(19)
    })
})