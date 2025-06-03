import { faker } from '@faker-js/faker';
import { createMyGoal } from '../../modules/folders.js';

describe('Test goals on clickup', () => {
  it('Should send Get request and return 200', () => {
    cy.sentRequest('team/90151123244/goal', 'GET').then((response) => {
      expect(response.status).to.eq(200);
    });
  });

  it('Should send POST request with invalid team id and return 400', () => {
    cy.sentRequest('team/901inv/goal', 'POST', {
      name: faker.company.name(),
    }).then((response) => {
      expect(response.status).to.eq(400);
    });
  });

  it('Should create a goal and save its ID and return 200', () => {
createMyGoal()
  .then((response) => {
      cy.wrap(response.body.goal.id).as('goalId');
    });

    cy.get('@goalId').then((Id) => {
      cy.sentRequest('goal/' + Id, 'GET').then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    cy.get('@goalId').then((Id) => {
      cy.sentRequest('goal/' + Id, 'PUT', { name: faker.company.name() }).then(
        (response) => {
          expect(response.status).to.eq(200);
        },
      );
    });
    cy.get('@goalId').then((Id) => {
      cy.sentRequest('goal/' + Id, 'DELETE').then((response) => {
        expect(response.status).to.eq(200);
      });
    });

  });
});
