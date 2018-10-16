import {localhost} from '../config/statics';
import {baseURL as apiURL} from '../../src/axios/axios';

describe('Titles', () => {
	const title = "Ozark";
	const apps = ["Netflix"];

	context("Title with all data", () => {

		beforeEach(() => {
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
		});

		it('Renders the title', () => {
			cy.get('.slick-slide .title')
				.should('be.visible')
				.and('contain', title)
		});

		it('Renders the titles apps', () => {
			cy.get('.slick-slide .apps-list')
				.should('be.visible')
				.find('li')
				.first()
				.should('have.class', 'netflix-icon')
		});

	});


	context("Title with missing data", () => {

		it.only('Does not render apps list without apps', () => {
			cy.server();
			cy.route('GET', `${apiURL}media`, {
				data: [{
					"title": title, 
					"synopsis": "A financial adviser drags his family from Chicago to the Missouri Ozarks, where he must launder $500 million in five years to appease a drug boss.", 
					"img_url": null, 
					"isFilm": false, 
					"genres": ["Series", "\u00a0American Programmes", "\u00a0US TV Dramas", "\u00a0Drama Programmes", "\u00a0Crime TV Dramas"], 
					"apps": []
				}],
			});
			cy.visit(localhost);
			cy.get('.slide')
				.first()
				.find('.apps')
				.should('not.be.visible')
		});

	});


});

	
