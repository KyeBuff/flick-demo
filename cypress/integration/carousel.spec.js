import {localhost} from '../config/statics';
import {baseURL as apiURL} from '../../src/axios/axios';

describe('Carousel component', () => {
	it('Renders media on the component render', () => {
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

	context('Carousel slide', () => {
		const title = "Ozark";
		const apps = ["Netflix"]

		it('Renders succesfully when no image is present', () => {
			cy.server();
			cy.route('GET', `${apiURL}media`, {
				data: [{
					"title": title, 
					"synopsis": "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.", 
					"img_url": null, 
					"isFilm": false, 
					"genres": ["Series", "\u00a0American Programmes", "\u00a0US TV Dramas", "\u00a0Drama Programmes", "\u00a0Crime TV Dramas"], 
					"apps": apps
				}],
			});
			cy.visit(localhost);
			cy.get('.slick-slide .title')
				.should('be.visible')
				.and('contain', title)

			cy.get('.slick-slide img')
				.should('not.be.visible')
		})

	})
})