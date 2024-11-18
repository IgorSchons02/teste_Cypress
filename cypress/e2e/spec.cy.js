describe('Acesso ao sistema de teste', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com'); // Visit acessa o endereço do sistema
  });
  it('Validar a tela de login', () => {
    cy.title().should('eq', 'Swag Labs'); // Verifica se o título da página é igual a Swag Labs
  });
  it('Preencher o formulário de login corretamente', () => {
    cy.get('#user-name').type('standard_user'); // Get para coletar o elemento, type para passar os valores
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click(); //Click para clicar no botão
    cy.get('.app_logo').should('contain', 'Swag Labs');

  });
})