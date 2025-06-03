import {faker} from "@faker-js/faker";

export const createMyGoal = () => {
    return     cy.sentRequest('team/90151123244/goal', 'POST', {
        name: faker.company.name(),
    })
}