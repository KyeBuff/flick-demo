describe('Carousel component', () => {
	it.only('Renders media on the component render', () => {
		cy.seedMediaAndVisit();
		cy.get('.media-carousel .slick-slide')
			.should('have.length', 30)
	})
})