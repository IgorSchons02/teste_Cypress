describe('Ordenação de produtos e detalhes dos produtos', () =>{
    beforeEach(() => {
        cy.visit('/');
        cy.get('#user-name').type('standard_user');  
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();  
    })

    it('Ordenar os produtos por preço (menor ao maior)', () =>{
        cy.get('.product_sort_container').select('lohi') // Seleciona o elemento do combobox
        cy.get('.inventory_item_price').then(($prices) => {
            const prices = [...$prices].map(price => parseFloat(price.innerText.replace('$', '')))
            const sortedPrices = [...prices].sort((a, b) => a - b)
            expect(prices).to.deep.equal(sortedPrices)
        })
    })
})