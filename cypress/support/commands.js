import {baseURL as apiURL} from '../../src/axios/axios';

const localhost = 'http://localhost:3000';

Cypress.Commands.add('seedMediaAndVisit', (seedData='fixture:media') => {
	cy.server();
	cy.route('GET', apiURL, seedData);
	cy.visit(localhost);	
});