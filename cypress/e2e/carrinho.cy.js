describe('Adicionar produtos no carrinho', () =>{
    beforeEach(() => {
        cy.visit('/');
        cy.get('#user-name').type('standard_user');  
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();  
    })

    it('Adicionar um produto no carrinho', ()=>{
        cy.get('.inventory_item').first().within(() =>{
            cy.get('button').click();
        })

        cy.get('.shopping_cart_badge').should('contain', '1');

        cy.get('.inventory_item').eq(2).within(() =>{
            cy.get('button').click();
        })
        cy.get('.inventory_item').eq(3).within(() =>{
            cy.get('button').click();
        })

        cy.get('.shopping_cart_badge').should('contain', '3');
    })

 
})