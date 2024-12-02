describe(' Adicionar produto no carrinho', () => {
 it(' ', () => {
 cy.visit('https://www.demoblaze.com/');
 cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click();
 cy.get('.col-sm-12 > .btn').click();
 cy.get('#cartur').click();
 cy.get('.success > :nth-child(2)').should('contain', 'Samsung galaxy s6');
 });
});
