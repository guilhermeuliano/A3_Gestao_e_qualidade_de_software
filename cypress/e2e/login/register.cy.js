describe('teste de cadastro', () => {
  it('realizar o cadastro de usuario', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('#signin2').click();
    cy.get('#sign-username').type('teste0112'); // criando a conta para o teste
    cy.get('#sign-password').type('senha0112');
    cy.get(
      '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    ).click();
    // não tem como verificar se o cadastro foi realizado com sucesso, pois o Cypress não vê alerts do JavaScript, porém está funcionando ao criar outra conta e login com a mesma
  });
});
