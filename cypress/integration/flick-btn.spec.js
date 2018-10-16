import {localhost} from '../config/statics';
import {baseURL as apiURL} from '../../src/axios/axios';

describe('Flick button component', () => {
	beforeEach(() => {
		cy.server();
	})
	it('Renders all media on click', () => {
		cy.visit(localhost);	

		cy.get('.flick-btn')
			.click()
			.should('have.class', 'flicked');

		cy.get('.media-carousel .slick-slide')
			.should('not.have.length', 0)

	})
})