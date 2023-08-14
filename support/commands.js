Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.get('#login').click();
});


Cypress.Commands.add('logout', () => {
    cy.get('#logout').click();
});