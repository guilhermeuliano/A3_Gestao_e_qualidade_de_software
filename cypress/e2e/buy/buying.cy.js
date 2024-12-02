describe('Finalizando uma compra válida', () => {
  it('Conectando com o usuário existente, adicionando um item ao carrinho e finalizando a compra', () => {
    cy.visit('https://www.demoblaze.com/');

    //Entrando com usuário e senha já criados no teste de cadastro
    cy.get('#login2').click();
    cy.get('#loginusername').type('teste0112');
    cy.get('#loginpassword').type('senha0112');
    cy.get(
      '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
    ).click();

    //Navegando para a página inicial para fazer a compra
    cy.get('.active > .nav-link').click();
    cy.get(
      ':nth-child(3) > .card > .card-block > .card-title > .hrefch'
    ).click();
    cy.get('.col-sm-12 > .btn').click();
    cy.get('#cartur').click();

    //Verificando se o produto é o Nexus 6
    cy.get('.success > :nth-child(2)').should('contain', 'Nexus 6');

    //Finalizando a compra
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

    //Validando a compra com o alerta de compra bem sucedida
    cy.get('.sweet-alert > h2').should(
      'contain',
      'Thank you for your purchase!'
    );
    cy.get('.confirm').click();
  });
});
