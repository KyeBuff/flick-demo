import {localhost} from '../config/statics';
import {baseURL as apiURL} from '../../src/axios/axios';

describe('Titles', () => {
	const title = "Ozark";
	const apps = ["Netflix"];

	context("Title with all data", () => {

		const title = "Ozark";
		const apps = ["Netflix"]
		
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


	});

});

	
