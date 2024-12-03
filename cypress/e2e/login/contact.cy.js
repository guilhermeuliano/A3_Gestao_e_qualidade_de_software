describe('Enviando mensagem de contato', () => {
  it('Enviando mensagem de contato', () => {
   cy.visit('https://www.demoblaze.com/');
   cy.get(':nth-child(2) > .nav-link').click();
   cy.get('#recipient-email').type('eduardopaza@gmail.com');
   cy.get('#recipient-name').type('Eduardo Paza');
   cy.get('#message-text').type('Teste de e-mail de contato');
   cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  });
});
