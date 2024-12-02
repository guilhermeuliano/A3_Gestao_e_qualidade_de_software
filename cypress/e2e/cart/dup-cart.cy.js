describe('Dois produtos no carrinho', () => {
  it('Dois produtos no carrinho', () => {
   cy.visit('https://www.demoblaze.com/');
   cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
   cy.get('.col-sm-12 > .btn').click();
   cy.get('#cartur').click();
   cy.get('.success > :nth-child(2)').should('contain', 'Samsung galaxy s6');
   cy.get('.active > .nav-link').click();
   cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
   cy.get('.col-sm-12 > .btn').click();
   cy.get('#cartur').click();
   cy.get('#tbodyid > :nth-child(2) > :nth-child(2)').should('contain','Samsung galaxy s6');
  });
});
