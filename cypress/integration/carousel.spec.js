import {localhost} from '../config/statics';
import {baseURL as apiURL} from '../../src/axios/axios';

describe('Carousel component', () => {
	it.only('Renders media on the component render', () => {
		cy.seedMediaAndVisit();
		cy.get('.media-carousel .slick-slide')
			.should('have.length', 21)
	})
	it('Displays an error on failure', () => {
		cy.server();
		cy.route({
			url: `${apiURL}media`,
			method: 'GET',
			status: 500,
			response: {}
		});
		cy.visit(localhost);

		cy.get('.media-carousel .slick-slide')
			.should('not.exist')

		cy.get('.error')
			.should('be.visible')
			.and('contain', 'Unable to retrieve titles, please try again.');
	})
})