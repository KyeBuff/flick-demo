import {localhost} from '../config/statics';
import {baseURL as apiURL} from '../../src/axios/axios';

describe('Titles', () => {

	context("Title - all data" , () => {
		beforeEach(() => {
			cy.server();
			cy.route('GET', `${apiURL}media`, {
				data: [{"title": "Spy Kids: Mission Critical", "synopsis": "In this animated spinoff series, Juni and Carmen Cortez must battle the evil organization S.W.A.M.P. -- without the help of their super-spy parents.", "img_url": "https://occ-0-426-300.1.nflxso.net/dnm/api/v5/rendition/852d533dd2fd12f722c03d68cc41826dd8867956/AAAAAdD1MdbWQGcBnE35q8lH2WeofuZ4Y3PlNgzAe4JAcohyRuSo4tb1Gllb3UnOywRBnFcKVF0wRaSK-FADIWymZIf3OdWkfMvO1m1n79qGnX4DQnrGJldsFccxXTJxrCwcx5eZckuf6gpq2ml79Sy4FqG7aP3I_8LBAohFAgQfqctNzKrKqLqp8UYTbMbnO8kjcTv_ZRAoN5yHJFSJfAw-Yp-mNFudSJCbJP5HdYNhglJrKLaECmzNClv4jBgeUS-bdg.png", "isFilm": false, "genres": ["Series", "\u00a0Kids\u2019 Programmes", "\u00a0TV Cartoons"], "apps": ["Netflix"]},],
			});
			cy.visit(localhost);
		});

		it('Renders the title', () => {
			cy.get('.slick-slide .title')
				.should('be.visible')
				.and('contain', "Spy Kids: Mission Critical")
		});

		it('Renders the image', () => {
			cy.visit(localhost);

			cy.get('.slick-slide img')
				.should('be.visible')
		})
	})
	

	context("Title - missing data" , () => {

		it('Renders succesfully when no image is present', () => {
			const title = "Ozark";
			const apps = ["Netflix"];
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

	
