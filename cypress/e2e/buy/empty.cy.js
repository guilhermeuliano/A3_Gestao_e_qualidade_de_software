describe('Finalizando uma compra inválida', () => {
  it('Fazer uma compra sem usuário conectado e sem produtos no carrinho', () => {
    cy.visit('https://www.demoblaze.com/');

    //Indo para o carrinho finalizar uma conta sem usuário conectado e sem itens
    cy.get('#cartur').click();
    cy.get('.col-lg-1 > .btn').click();
    cy.get('#name').type('João Paulo');
    cy.get('#country').type('Brasil');
    cy.get('#city').type('Blumenau');
    cy.get('#card').type('1212');
    cy.get('#month').type('12');
    cy.get('#year').type('2030');
    cy.get(
      '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    ).click();

    //Verificando se a compra foi finalizada com sucesso
    cy.get('.sweet-alert > h2').should(
      'contain',
      'Thank you for your purchase!'
    );
    cy.get('.confirm').click();
  });
});
