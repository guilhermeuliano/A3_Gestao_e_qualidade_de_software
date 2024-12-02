describe('fazer login do usuario', () => {
  it('fazer login', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('#login2').click();
    cy.get('#loginusername').type('teste0112'); // mesmo usuario do registro
    cy.get('#loginpassword').type('senha0112');
    cy.get(
      '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    ).click();
    cy.get('#nameofuser').should('contain', 'Welcome teste0112');
    cy.get('#logout2').click();
  });
});
