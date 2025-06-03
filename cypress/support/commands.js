Cypress.Commands.add('sentRequest', (endpoint, method, body = null) => {
  cy.request({
    url: endpoint,
    method: method,
    headers: {
      'Authorization': 'pk_188625071_T0KOYGV8K94I9BNPZKLLWJLXQXSSMQ6V',
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false,
    body: body
  });
});
