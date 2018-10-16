import {baseURL as apiURL} from '../../src/axios/axios';
import {localhost} from '../config/statics';

Cypress.Commands.add('seedMediaAndVisit', (seedData='fixture:media') => {
	cy.server();
	cy.route('GET', `${apiURL}media`, seedData);
	cy.visit(localhost);	
});