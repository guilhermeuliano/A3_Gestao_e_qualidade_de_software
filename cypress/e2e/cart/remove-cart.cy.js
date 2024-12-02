describe(' Remover produto do carrinho', () => {
 it(' ', () => {
 cy.visit('https://www.demoblaze.com/');
 cy.get(':nth-child(5) > .card > .card-block > .card-title > .hrefch').click();
 cy.get('.col-sm-12 > .btn').click();
 cy.get('#cartur').click();
 cy.get('.success > :nth-child(2)').should('contain', 'Iphone 6 32gb');
 cy.get('.success > :nth-child(4) > a').click();
 });
});
