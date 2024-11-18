describe('Finalizar a compra no checkout', () =>{
    before(() => {
        cy.visit('/');
        cy.get('#user-name').type('standard_user');  
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();  

        cy.get('.inventory_item').first().within(() =>{
            cy.get('button').click();
        })
    })
    it('Finalizar a compra com sucesso', () => {
        cy.get('.shopping_cart_link').click();
        cy.get('[data-test="checkout"]').click();
        cy.get('#first-name').type('Diego');
        cy.get('#last-name').type('Pinheiro da Silva');
        cy.get('#postal-code').type('93525160');
        cy.get('#continue').click();
        cy.get('.summary_info').should('be.visible'); // Verifica se o elemento está visível
        cy.get('.summary_info_label').should('contain', 'Payment Information:'); 
        cy.get('.summary_total_label').should('contain', 'Total:');
        cy.get('#finish').click();
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
    })
})