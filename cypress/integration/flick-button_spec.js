describe('Flick Button Component', function() {
	it('Renders the button', function() {
	  	cy.visit('/');
    	cy.get('.flick-button').should('exist');
  	});
})

